<template>
	<div>
		<router-link :to="bookLink">
			<div class="book-list-item-wrapper flex px-3.75 py-4.5">
				<div
					class="image-wrapper w-22.5 h-32 shadow-book-list-item-image bg-menu dark:bg-darkbg dark:border-darkborder"
				>
					<div class="image" :style="{ backgroundImage: bgImage }"></div>
				</div>
				<div class="content ml-3 mr-3 flex-1 flex flex-col">
					<div class="content-top flex-1 flex">
						<div class="content-left flex-1 flex flex-col">
							<h3 class="book-name my-bk-list-item-title">{{ book.title }}</h3>
							<div class="book-author text-xs text-sold-out mt-1">{{ book.rawAuthor }}</div>
							<div class="douban-rating text-xs text-dbr mt-1.25">豆瓣评分 {{ book.doubanRating }}</div>
						</div>
					</div>
					<div class="content-bottom mt-1.25 leading-category">
						<div class="price-wrapper flex items-center">
							<div class="price text-lg">
								¥{{ bookPrice }}
								<span class="price-suffix text-hsh ml-0.75 font-light">起</span>
							</div>
							<span
								class="discount ml-1.25 px-1.5 text-xs text-label border border-label rounded"
							>{{ bookDiscount }}</span>
							<div v-if="isLoggedIn" class="bookmark ml-0.75" @click.stop.prevent="addToBookShelf()">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									class="w-7.5"
									:fill="isBookInBookshelf ? 'red' : '#f2f2f2'"
								>
									<path
										d="M18.36,13.29,12.71,19a1,1,0,0,1-1.42,0L5.64,13.29a5,5,0,0,1,0-7.07A5,5,0,0,1,12,5.63a5,5,0,0,1,6.36,7.66Z"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
import { computed } from "vue";
import { useMutation, useQuery, useResult } from "@vue/apollo-composable";
import {
	GET_IS_BOOK_IN_BOOKSHELF,
	TOGGLE_BOOKSHELF_MUTATION,
} from "../../graphql/schema";
import useLoggedInUserId from "../../hooks/useLoggedInUserId";
import { useToast } from "vue-toastification";
export default {
	props: ["book", "isLoggedIn"],
	setup(props) {
		const bookId = computed(() => props.book.id);
		const userId = useLoggedInUserId();
		const toast = useToast();

		const bgImage = computed(() => {
			return "url(" + props.book.image + ")";
		});

		const bookLink = computed(() => {
			return "/books/" + props.book.id;
		});

		const bookPrice = computed(() => {
			return (props.book.price / 100).toFixed(2);
		});

		const bookDiscount = computed(() => {
			return (props.book.price / props.book.originalPrice * 10).toFixed(1) + "折起";
		})

		const { result } = useQuery(GET_IS_BOOK_IN_BOOKSHELF, () => ({
			bookId: bookId.value,
			userId,
		}));
		const isBookInBookshelf = useResult(result, false);

		const { mutate: toggleBookshelf, onDone: onToggle } = useMutation(
			TOGGLE_BOOKSHELF_MUTATION,
			() => ({
				variables: {
					bookId: bookId.value,
					userId,
				},
				update: (cache, { data: { toggleBookshelf } }) => {
					const oldData = cache.readQuery({
						query: GET_IS_BOOK_IN_BOOKSHELF,
						variables: {
							bookId: bookId.value,
							userId,
						},
					});
					if (toggleBookshelf.success === true) {
						cache.writeQuery({
							query: GET_IS_BOOK_IN_BOOKSHELF,
							variables: {
								bookId: bookId.value,
								userId,
							},
							data: {
								isBookInBookshelf: !oldData.isBookInBookshelf,
							},
						});
					}
					// to update bookshelf cache data
					const userCacheId = cache.identify({
						id: userId,
						__typename: "User",
					});
					// modify user.bookshelf
					// cache.modify({
					// 	id: userCacheId,
					// 	fields: {
					// 		bookShelf() {
					// 			return toggleBookshelf.user.bookShelf;
					// 		},
					// 	},
					// });
				},
			})
		);

		onToggle(({ data: { toggleBookshelf } }) => {
			if (toggleBookshelf.success === true) {
				toast.success(toggleBookshelf.message);
			} else {
				isBookInBookshelf.value = !isBookInBookshelf.value;
				toast.info(toggleBookshelf.message);
			}
		});

		const addToBookShelf = () => {
			// console.log("add to book shelf: ", bookId.value);
			// 乐观更新
			// isBookInBookshelf.value = !isBookInBookshelf.value;
			// send mutation
			toggleBookshelf();
		};

		return {
			bookId,
			bgImage,
			bookLink,
			bookPrice,
			bookDiscount,
			isBookInBookshelf,
			addToBookShelf,
		};
	},
};
</script>

<style scoped>
.image {
	width: 100%;
	height: 100%;
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
}

.avatar-wrapper::before {
	display: block;
	content: "";
	position: absolute;
	left: -11px;
	top: 18px;
	width: 60px;
	height: 15px;
	border-top: 1px solid rgb(242, 242, 242);
	background: rgb(255, 255, 255);
	transform: rotate(45deg);
}
</style>
