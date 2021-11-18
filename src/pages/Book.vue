<template>
	<div class="container-wrapper text-is-active relative">
		<div class="book-wrapper pb-12.75">
			<div class="book-header relative px-3.75 pt-7.5 pb-7 overflow-hidden">
				<div
					class="image-wrapper absolute -inset-50 z-10"
					:style="imageWrapperStyle"
				></div>
				<div class="image w-37.5 h-auto my-0 mx-auto relative z-20">
					<img
						class="max-w-full max-h-full"
						:src="book.image"
						:alt="book.title + '封面'"
						:style="imageStyle"
					/>
				</div>
			</div>
			<div class="book-main pt-4.5 mx-3.75">
				<div class="book-info leading-category pb-3.75">
					<h1 class="text-xl font-medium text-is-active">{{ book.title }}</h1>
					<div class="p-wrapper mt-3.5 text-hsh leading-1.69">
						<p class="original-price flex">
							<span class="tag">原价</span>
							<span class="ml-3">¥{{ price }}</span>
						</p>
						<p class="author flex">
							<span class="tag">作者</span>
							<span class="ml-3 text-load">
								<router-link :to="'/search/book/' + book.rawAuthor">
									{{ book.rawAuthor }}
								</router-link>
							</span>
						</p>
						<p class="publisher flex">
							<span class="tag">出版社</span>
							<span class="ml-3">{{ book.publisher }}</span>
						</p>
						<p class="publish-date flex">
							<span class="tag">出版</span>
							<span class="ml-3">{{ book.publishDate }}</span>
						</p>
						<p class="binding flex">
							<span class="tag">装帧</span>
							<span class="ml-3">{{ book.binding }}</span>
						</p>
					</div>
				</div>
				<douban-rating :rating="book.doubanRating" :isbn="book.isbn13" />
				<duozhuayu-services />
				<div class="book-detail-wrapper mt-3.75 pt-2.5 pb-3.75">
					<h2 class="text-lg font-medium leading-1.56 mb-2">简介和目录</h2>
					<div class="book-detail mb-7.5">
						<div
							class="
								content
								text-shiwu
								leading-1.8
								break-words
								whitespace-pre-wrap
							"
							:class="collapsed ? 'collapsed' : ''"
						>
							<div class="book-summary mb-1.6em" v-html="book.summary"></div>
							<div
								class="book-author-intro mb-1.6em"
								v-html="book.authorIntro"
							></div>
							<div class="book-catalog" v-html="book.catalog"></div>
						</div>
						<div
							class="
								read-more
								flex
								text-hsh text-load
								mt-3
								py-1.25
								px-1em
								items-center
								justify-center
							"
						>
							<button @click="toggleCollapsed">
								{{ this.collapsed ? "查看更多" : "收起" }}
							</button>
							<svg
								v-if="collapsed"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								xmlns="http://www.w3.org/2000/svg"
								class="w-hicon"
							>
								<polyline points="6 9 12 15 18 9"></polyline>
							</svg>
							<svg
								v-if="!collapsed"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								xmlns="http://www.w3.org/2000/svg"
								class="w-hicon"
							>
								<polyline points="18 15 12 9 6 15"></polyline>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
		<cart-footer></cart-footer>
	</div>
</template>

<script>
import gql from "graphql-tag";
import DoubanRating from "../components/MainSection/DoubanRating.vue";
import DuozhuayuServices from "../components/MainSection/DuozhuayuServices.vue";
import CartFooter from "../components/CartFooter.vue";
import { useRoute } from "vue-router";
import { useQuery, useResult } from "@vue/apollo-composable";
import { ref, computed } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
export default {
	name: "Book",
	setup() {
		//状态
		const collapsed = ref(false);
		//获取book信息
		const route = useRoute();
		const GET_BOOK = gql`
			query getABook($bookId: ID!) {
				book(id: $bookId) {
					title
					isbn13
					rawAuthor
					publisher
					publishDate
					binding
					doubanRating
					authorIntro
					originalPrice
					summary
					catalog
					image
				}
			}
		`;
		const { result, loading, error } = useQuery(GET_BOOK, {
			bookId: route.params.bookId,
		});
		const book = useResult(result, {}, (data) => data.book);
		// 计算属性
		const imageWrapperStyle = computed(() => {
			return {
				background: `center center / cover rgb(214, 186, 140)`,
				filter: "blur(25px)",
				backgroundImage: `url(${book.value.image})`,
			};
		});
		const imageStyle = computed(() => ({
			boxShadow: `rgb(0,0,0,20%) 0px 1px 10px`,
		}));
		const price = computed(() => {
			return (book.value.originalPrice / 100).toFixed(2);
		});
		const bookSummary = computed(() => {
			let res = [];
			if (book.value.summary) {
				res = book.value.summary.split("\n");
			}
			return res;
		});

		return {
			collapsed,
			book,
			loading,
			error,
			imageWrapperStyle,
			imageStyle,
			price,
			bookSummary,
		};
	},
	components: {
		DoubanRating,
		DuozhuayuServices,
		CartFooter,
	},

	methods: {
		toggleCollapsed() {
			this.collapsed = !this.collapsed;
		},
	},
	computed: {},
};
</script>

<style scoped>
.tag {
	display: flex;
	justify-content: space-between;
	width: 45px;
	color: rgb(170, 170, 170);
}
.tag::after {
	content: ":";
}

.collapsed {
	max-height: 7.2em;
	overflow: hidden;
}
</style>
