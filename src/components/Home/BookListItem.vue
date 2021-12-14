<template>
	<div>
		<router-link :to="bookLink">
			<div class="book-list-item-wrapper flex px-3.75 py-4.5">
				<div class="image-wrapper w-22.5 h-32 shadow-book-list-item-image">
					<div class="image" :style="{ backgroundImage: bgImage }"></div>
				</div>
				<div class="content ml-3 flex-1 flex flex-col">
					<div class="content-top flex-1 flex">
						<div class="content-left flex-1 flex flex-col">
							<h3 class="book-name my-bk-list-item-title">{{ book.title }}</h3>
							<div class="book-author text-xs text-sold-out mt-1">
								{{ book.rawAuthor }}
							</div>
							<div class="douban-rating text-xs text-dbr mt-1.25">
								豆瓣评分 {{ book.doubanRating }}
							</div>
						</div>
						<div class="content-right ml-3 flex-shrink-0">
							<div
								class="
									avatar-wrapper
									relative
									box-border
									w-11.25
									h-11.25
									pl-3.75
								"
							>
								<div
									class="
										avatar
										box-border
										w-7.5
										h-7.5
										border border-menu
										bg-menu
										rounded-99
										overflow-hidden
									"
								>
									<img
										src="https://img.duozhuayu.com/da600914264d11ecbbd5b6b4ccd51b20.jpeg"
										alt=""
										class="w-full"
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="content-bottom mt-1.25 leading-category">
						<div class="price-wrapper flex items-center">
							<div class="price text-lg">
								¥{{ bookPrice }}
								<span class="price-suffix text-hsh ml-0.75 font-light">起</span>
							</div>
							<span
								class="
									discount
									ml-1.25
									px-1.5
									text-xs text-label
									border border-label
									rounded
								"
								>3.7折</span
							>
							<div
								class="bookmark ml-0.75"
								@click.stop.prevent="addToBookShelf(bookId)"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									class="w-7.5"
									:fill="isInMyBookShelf ? 'red' : '#f2f2f2'"
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
import { computed, ref } from "@vue/reactivity";
export default {
	props: ["book"],
	setup(props) {
		const isInMyBookShelf = ref(false);
		const bookId = computed(() => props.book.id);
		const bgImage = computed(() => {
			return "url(" + props.book.image + ")";
		});

		const bookLink = computed(() => {
			return "/books/" + props.book.id;
		});

		const bookPrice = computed(() => {
			return (props.book.originalPrice / 100).toFixed(2);
		});

		const addToBookShelf = (id) => {
			console.log("add to book shelf: ", id);
			// send mutation then set isInMyBookShelf.value
			isInMyBookShelf.value = !isInMyBookShelf.value;
		};

		return {
			bookId,
			bgImage,
			bookLink,
			bookPrice,
			isInMyBookShelf,
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
