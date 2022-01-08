<template>
	<loading v-if="loading" />
	<p v-else-if="error">{{ error }}</p>
	<div v-else class="container-wrapper text-is-active relative">
		<div class="book-wrapper pb-12.75">
			<div
				class="
					book-header
					relative
					px-3.75
					pt-7.5
					pb-7
					overflow-hidden
					flex flex-col
					items-center
				"
			>
				<div
					class="image-wrapper absolute -inset-50 z-10"
					:style="imageWrapperStyle"
				></div>
				<div class="image w-37.5 h-auto relative z-20">
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
								{{ collapsed ? "查看更多" : "收起" }}
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
					<div class="book-comment-wrapper">
						<div class="comments-header flex justify-between">
							<h2 class="text-lg font-medium leading-1.56">
								{{
									book.comments.length === 0 ? "暂无评论" : commentsHeaderMsg
								}}
							</h2>
							<div
								class="new-comment flex items-center text-load"
								v-if="myComment.length === 0"
								@click="newComment"
							>
								<svg
									class="new-comment-icon"
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="15"
									viewBox="0 0 15 14"
								>
									<path
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M20.1574053,24.6826336 L17.0453067,25.9566366 C16.6579438,26.1148978 16.2357087,25.8185976 16.2724658,25.4141522 L16.5646374,22.1601253 C16.5853721,21.9315257 16.5090305,21.7038054 16.3525774,21.5305973 L14.1367858,19.0634804 C13.861579,18.7566294 14.0227447,18.2774496 14.4317849,18.1860098 L17.7248413,17.4483365 C17.9566936,17.396462 18.1565012,17.2566646 18.2799673,17.0597173 L20.0226293,14.261131 C20.2394018,13.9129563 20.7615407,13.9129563 20.9783131,14.261131 L22.7209752,17.0597173 C22.8434988,17.2566646 23.0433064,17.396462 23.2751587,17.4483365 L26.5682151,18.1860098 C26.9772553,18.2774496 27.138421,18.7566294 26.8632142,19.0634804 L24.6474226,21.5305973 C24.491912,21.7038054 24.4155704,21.9315257 24.4363051,22.1601253 L24.7284767,25.4141522 C24.7642913,25.8185976 24.3420562,26.1148978 23.9546933,25.9566366 L20.8425947,24.6826336 C20.6239373,24.5929522 20.3760627,24.5929522 20.1574053,24.6826336 Z"
										transform="translate(-13 -13)"
									></path>
								</svg>
								<div class="new-comment-text ml-1.25 text-shiwu">给书评分</div>
							</div>
							<div
								v-else
								class="
									update-comment
									flex
									items-center
									text-load
									rounded-99
									border-0.5 border-rating
									box-border
								"
								@click="updateComment(myComment[0].id)"
							>
								<span
									class="
										avatar-wrapper
										inline-block
										w-7.5
										h-7.5
										rounded-99
										border-1 border-rating
										bg-menu
										overflow-hidden
										-m-1
									"
								>
									<img
										:src="myComment[0].commenter.avatar"
										alt="comment avatar"
									/>
								</span>
								<DuozhuavueRating :rating="myComment[0].rating" />
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="rgb(170, 170, 170)"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									xmlns="http://www.w3.org/2000/svg"
									class="w-hicon -ml-3"
								>
									<polyline points="9 18 15 12 9 6"></polyline>
								</svg>
							</div>
						</div>
						<div class="comments-body" v-show="book.comments.length > 0">
							<div
								class="comment flex py-4.5 border-b-0.5"
								v-for="comment of book.comments"
								:key="comment.id"
							>
								<div class="comment-left">
									<router-link :to="'/users/' + comment.commenter.id">
										<span
											class="
												avatar-wrapper
												inline-block
												w-7.5
												h-7.5
												rounded-99
												border-1 border-menu
												bg-menu
												overflow-hidden
											"
										>
											<img
												:src="comment.commenter.avatar"
												alt="comment avatar"
											/>
										</span>
									</router-link>
								</div>
								<div class="comment-right flex-1 ml-3 text-shiwu">
									<div class="name-with-rating flex mb-1.75 items-center">
										<a href="">
											<p class="font-medium">
												{{ comment.commenter.name }}
											</p>
										</a>
										<div class="rating ml-2.25">
											<DuozhuavueRating :rating="comment.rating" />
										</div>
									</div>
									<div class="comment-content">
										<div>
											{{ comment.content }}
										</div>
										<div class="text-right text-xs text-sold-out">
											{{ commentDateFormatter(comment.createdAt) }}
										</div>
									</div>
									<footer class="contrib-footer">
										<div class="interact-actions flex">
											<div class="comment-item" style="margin-right: 40px">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="18"
													height="18"
													viewBox="0 0 18 17"
												>
													<g
														fill="none"
														fill-rule="evenodd"
														stroke="#AAA"
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="1.2"
														transform="translate(1 1)"
													>
														<path
															d="M12.169348,0 L3.83065199,0 C1.71493085,0 0,1.79029667 0,3.9989971 L0,9.14005968 C0,11.3369741 1.69686706,13.1154847 3.79678239,13.135521 L4.46740051,14.4319833 C4.79706463,15.0684285 5.62009596,15.1945389 6.11120519,14.6853828 L7.60259667,13.1390568 L12.169348,13.1390568 C14.2850692,13.1390568 16,11.3487601 16,9.14005968 L16,3.9989971 C16,1.79029667 14.2850692,0 12.169348,0 Z"
														></path>
														<path
															d="M4.47615044 4.65C9.4446895 4.65 11.928959 4.65 11.928959 4.65M5.59750752 8.65L9.51801392 8.65"
														></path>
													</g>
												</svg>
											</div>
											<div class="action-item">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="18"
													height="18"
													viewBox="0 0 19 18"
												>
													<g
														fill="none"
														fill-rule="evenodd"
														stroke="#AAA"
														stroke-width="1.2"
														transform="translate(1 1)"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															d="M2.74290235,5.6549 L1.32674307,5.9209 C0.564288721,6.0539 2.27373675e-13,6.8189 2.27373675e-13,7.7199 L2.27373675e-13,11.9069 C2.27373675e-13,13.4389 0.575163664,14.7399 2.35502937,14.7399 L3.1924,14.7529"
														></path>
														<path
															stroke-linecap="square"
															d="M3.5568,12.0065 L3.5568,5.5265 C3.5568,5.0625 3.66704045,4.6065 3.87715685,4.1995 L5.02667263,1.4615 C5.30368708,0.8025 6.22518415,0.2695 6.762253,0.7125 C7.33983756,1.1885 7.68751897,1.9135 7.71107462,2.6895 L7.71672798,2.9035 C7.74876366,3.9715 8.57321145,4.8195 9.58045109,4.8195 L15.0557266,4.8195 C16.6047462,4.8195 17.320838,6.4245 16.8638584,7.9955 L15.6361379,12.4075 C14.9680996,14.2355 13.3097818,15.4405 11.4630187,15.4405 L6.79240423,15.4405 C5.00500143,15.4405 3.5568,13.9025 3.5568,12.0065 Z"
														></path>
													</g>
												</svg>
												<span class="label" v-if="comment.voters.length > 0">
													{{ comment.voters.length }}</span
												>
											</div>
										</div>
									</footer>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<cart-footer></cart-footer>
	</div>
</template>

<script>
import DoubanRating from "../components/MainSection/DoubanRating.vue";
import DuozhuayuServices from "../components/MainSection/DuozhuayuServices.vue";
import CartFooter from "../components/CartFooter.vue";
import Loading from "../components/Loading/Loading.vue";
import { useRoute, useRouter } from "vue-router";
import { useQuery, useResult } from "@vue/apollo-composable";
import { ref, computed } from "@vue/reactivity";
import { GET_BOOK } from "../graphql/schema";
import DuozhuavueRating from "../components/MainSection/DuozhuavueRating.vue";
import useLoggedInUserId from "../hooks/useLoggedInUserId";

export default {
	name: "Book",
	setup() {
		//状态
		const collapsed = ref(true);
		//获取book信息
		const route = useRoute();
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
		const commentsHeaderMsg = computed(() => {
			return book.value.comments.length + ` 条鱼友评论`;
		});
		const commentDateFormatter = function (datetime) {
			return new Date(datetime).toLocaleString();
		};

		// 添加评论或更新评论
		const currentUserId = useLoggedInUserId();
		const comments = useResult(result, [], (data) => data.book.comments);
		// return [] if the current user did not have any comment, else return [comment]
		const myComment = computed(() => {
			return comments.value.filter(
				(comment) => comment.commenter.id === currentUserId
			);
		});
		const router = useRouter();
		const newComment = () => {
			if (currentUserId === "") {
				router.push({
					path: "/login",
				});
			} else {
				router.push({
					name: "newComment",
					query: {
						bookId: route.params.bookId,
						source: "book",
					},
				});
			}
		};

		const updateComment = (commentId) => {
			router.push({
				name: "comment",
				query: {
					bookId: route.params.bookId,
					source: "book",
					commentId,
				},
			});
		};

		return {
			collapsed,
			book,
			loading,
			error,
			imageWrapperStyle,
			imageStyle,
			price,
			commentsHeaderMsg,
			commentDateFormatter,
			currentUserId,
			myComment,
			newComment,
			updateComment,
		};
	},
	components: {
		DoubanRating,
		DuozhuayuServices,
		CartFooter,
		Loading,
		DuozhuavueRating,
	},

	methods: {
		toggleCollapsed() {
			this.collapsed = !this.collapsed;
		},
	},
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

.image-wrapper::before {
	content: "";
	display: block;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
}

.comment:last-of-type {
	margin-bottom: 64px;
}
</style>
