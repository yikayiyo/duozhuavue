<template>
	<div class="comment-wrapper p-0.8em text-is-active">
		<form @submit.prevent="addComment()">
			<router-link class="flex flex-col items-center" :to="'/books/' + bookId">
				<h1 class="book-title mb-5 text-xl">给「 {{ book.title }} 」评分</h1>
				<div class="book-image-wrapper w-27.5 h-39 bg-menu">
					<div class="image w-full h-full" :style="imgStyle"></div>
				</div>
			</router-link>
			<div class="comment-rating flex flex-col items-center mt-7.5 mb-6.25">
				<p class="text-load text-shiwu mb-2.5" v-if="rating === 0">
					* 根据书的内容来打分哦 *
				</p>
				<p class="text-load text-shiwu mb-2.5" v-else-if="rating === 2">
					不要看 😡
				</p>
				<p class="text-load text-shiwu mb-2.5" v-else-if="rating === 4">
					不太好看 😑
				</p>
				<p class="text-load text-shiwu mb-2.5" v-else-if="rating === 6">
					还可以 🙂
				</p>
				<p class="text-load text-shiwu mb-2.5" v-else-if="rating === 8">
					好看！👍
				</p>
				<p class="text-load text-shiwu mb-2.5" v-else>非常好看！❤️</p>
				<div class="rating flex">
					<span
						class="mx-1.25"
						v-for="idx in 5"
						:key="idx"
						@click="changeRating(idx)"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="34"
							height="32"
							viewBox="0 0 13 12"
							:color="idx * 2 <= rating ? '#497749' : '#f2f2f2'"
						>
							<path
								fill="currentColor"
								fill-rule="evenodd"
								d="M6.15740527,10.6826336 L3.04530674,11.9566366 C2.65794378,12.1148978 2.23570873,11.8185976 2.27246579,11.4141522 L2.56463737,8.16012531 C2.58537213,7.93152574 2.50903052,7.7038054 2.35257736,7.53059727 L0.136785824,5.06348041 C-0.13842095,4.75662945 0.0227446608,4.27744959 0.431784867,4.18600976 L3.72484127,3.44833654 C3.95669356,3.39646203 4.15650121,3.2566646 4.27996727,3.05971728 L6.02262934,0.261131044 C6.2394018,-0.0870436812 6.76154068,-0.0870436812 6.97831314,0.261131044 L8.72097522,3.05971728 C8.84349879,3.2566646 9.04330644,3.39646203 9.27515873,3.44833654 L12.5682151,4.18600976 C12.9772553,4.27744959 13.138421,4.75662945 12.8632142,5.06348041 L10.6474226,7.53059727 C10.491912,7.7038054 10.4155704,7.93152574 10.4363051,8.16012531 L10.7284767,11.4141522 C10.7642913,11.8185976 10.3420562,12.1148978 9.95469326,11.9566366 L6.84259473,10.6826336 C6.6239373,10.5929522 6.3760627,10.5929522 6.15740527,10.6826336 Z"
							></path>
						</svg>
					</span>
				</div>
			</div>
			<section class="w-full border-0.5 border-search-input mb-3.75">
				<textarea
					name="reason"
					placeholder="一些阅读感受"
					class="w-full h-30 p-2.25 text-sm outline-none"
					v-model="content"
				>
				</textarea>
			</section>
			<div class="some-info mb-7.5 text-hsh text-sold-out text-center">
				<span>* 如果买到的书品相不符或疑似盗版，请联系客服处理。 *</span>
			</div>
			<div class="fixed bottom-0 left-0 right-0 z-10 max-w-dzy mx-auto">
				<div class="submit-section w-full pt-2.5 px-5 pb-5">
					<button
						class="
							text-shiwu
							w-full
							font-medium
							text-white
							bg-load
							py-2.25
							px-9
							rounded-full
							shadow
							border
						"
						v-if="addCommentLoading"
					>
						<Loading />
					</button>
					<button
						class="
							text-shiwu
							w-full
							font-medium
							text-white
							bg-load
							py-2.25
							px-9
							rounded-full
							shadow
							border
						"
						v-else
						type="submit"
					>
						确定
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import { useMutation, useQuery, useResult } from "@vue/apollo-composable";
import { useRoute, useRouter } from "vue-router";
import { ADD_COMMENT_MUTATION, GET_BOOK } from "../graphql/schema";
import { ref, computed } from "vue";
import useLoggedInUserId from "../hooks/useLoggedInUserId";
import Loading from "../components/Loading/Loading.vue";
export default {
	name: "NewComment",
	components: {
		Loading,
	},
	setup() {
		const rating = ref(0);
		const content = ref("");
		const router = useRouter();

		// get book image
		const route = useRoute();
		const { bookId } = route.query;
		const { result: bookResult } = useQuery(GET_BOOK, () => ({
			bookId,
		}));
		const book = useResult(bookResult, {}, (data) => data.book);
		const imgStyle = computed(() => {
			return {
				backgroundImage: `url(${book.value.image})`,
				boxShadow: `rgb(0 0 0 / 0.2) 0px 0px 8px 0px`,
				backgroundPosition: `center center`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			};
		});

		const changeRating = (idx) => {
			rating.value = idx * 2;
		};
		// get current user
		const userId = useLoggedInUserId();
		console.log("userId: ", userId);
		const {
			mutate: addComment,
			loading: addCommentLoading,
			onDone,
		} = useMutation(ADD_COMMENT_MUTATION, () => ({
			variables: {
				bookId,
				userId,
				content: content.value,
				created: new Date().toISOString(),
				rating: rating.value,
			},
		}));

		onDone(() => {
			console.log("add comment successfully!");
			// router.go(-1);
			// todo: when go back, book page should scroll to specific section
			router.replace("/books/" + bookId + "?target=book-comment-wrapper");
			rating.value = 0;
			content.value = "";
		});

		return {
			book,
			rating,
			content,
			bookId,
			imgStyle,
			changeRating,
			addComment,
			addCommentLoading,
		};
	},
};
</script>

<style></style>
