<template>
	<div class="home-section-wrapper">
		<loading v-if="collectionLoading" />
		<div class="text-label" v-else-if="collectionError">
			{{ collectionError }}
		</div>
		<div class="oc-wrapper" v-else>
			<router-link to="/open-collections" class="oc-header-wrapper">
				<div class="oc-header flex items-center p-3.75">
					<div class="oc-header-title flex-grow">
						<h2 class="text-xl font-medium leading-hsh">书单</h2>
					</div>
					<div
						class="
							oc-header-details
							flex
							items-center
							flex-shrink-0
							text-hsh text-sold-out
						"
					>
						全部书单
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							xmlns="http://www.w3.org/2000/svg"
							class="w-hicon"
							style="margin-right: -4px"
						>
							<polyline points="9 18 15 12 9 6"></polyline>
						</svg>
					</div>
				</div>
			</router-link>
			<div
				class="oc-list-wrapper mx-3.75 flex overflow-x-auto pb-8.75 -mb-8.75"
			>
				<oc-list-item
					v-for="collection of collections"
					:collection="collection"
					:key="collection.id"
				></oc-list-item>
				<router-link to="/open-collections">
					<div
						class="
							flex flex-col
							justify-center
							items-center
							w-oc-item
							h-oc-item
							rounded-oc-item
							text-is-active
							bg-red-400
						"
					>
						<span class="text-lg font-medium flex items-center">
							看全部书单
							<svg
								class="inline"
								width="7"
								viewBox="0 0 13 24"
								xmlns="http://www.w3.org/2000/svg"
								style="margin-left: 7px"
							>
								<g
									fill="currentColor"
									transform="translate(-707.000000, -346.000000)"
								>
									<path
										d="M720.039467,358 C720.054396,357.701471 719.947859,357.398 719.719857,357.169998 L719.719857,357.169998 L708.870845,346.320986 L708.870845,346.320986 C708.442863,345.893005 707.748968,345.893005 707.320986,346.320986 C706.893005,346.748968 706.893005,347.442863 707.320986,347.870845 L717.450141,358 L707.320986,368.129155 C706.893005,368.557137 706.893005,369.251032 707.320986,369.679014 C707.748968,370.106995 708.442863,370.106995 708.870845,369.679014 L719.719857,358.830002 L719.719857,358.830002 C719.947859,358.602 720.054396,358.298529 720.039467,358 Z"
									></path>
								</g>
							</svg>
						</span>
						<span class="text-shiwu"> {{ collections.length }}个 </span>
					</div>
				</router-link>
			</div>
		</div>
		<loading v-if="networkStatus === 1" class="loading" />
		<div class="text-label" v-else-if="categoryFeedError">
			{{ categoryFeedError }}
		</div>
		<div class="feed-content-wrapper mt-2.5 bg-menu" v-else>
			<feed
				v-for="category of categories"
				:key="category.id"
				:category="category"
				:loadMoreBooks="loadMoreBooks"
			/>
			<div
				class="
					load-more-category
					feed-footer
					pb-15
					text-footer text-center
					border-t-0.5 border-menu
				"
				v-if="hasNextPage && networkStatus === 7"
				@click="loadMoreCategories"
			>
				加载更多分类
			</div>
			<div
				class="
					load-more-category
					feed-footer
					pb-15
					text-footer text-center
					border-t-0.5 border-menu
				"
				v-else-if="hasNextPage && networkStatus === 3"
			>
				<loading />
			</div>
			<div
				class="
					load-more-category
					feed-footer
					pb-15
					text-footer text-center
					border-t-0.5 border-menu
				"
				v-else
			>
				都在这里了-0-
			</div>
		</div>
	</div>
</template>

<script>
import OcListItem from "./OcListItem.vue";
import Feed from "./Feed.vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import Loading from "../Loading/Loading.vue";
import {
	GET_BOOKS_FROM_CATEGORY,
	GET_CATEGORY_FEED,
	GET_COLLECTIONS,
} from "../../graphql/schema";
import { computed, ref } from "@vue/reactivity";

export default {
	name: "HomeSection",
	setup() {
		const {
			result: collectionsResult,
			loading: collectionLoading,
			error: collectionError,
		} = useQuery(GET_COLLECTIONS);
		const collections = useResult(collectionsResult, []);

		const after = ref("");
		const first = ref(1);
		const {
			result: categoryFeedResult,
			loading: categoryFeedLoading,
			error: categoryFeedError,
			fetchMore,
			networkStatus,
		} = useQuery(
			GET_CATEGORY_FEED,
			() => ({
				after: after.value,
				first: first.value,
				itemsAfter: "",
				itemsFirst: 3,
			}),
			{
				notifyOnNetworkStatusChange: true,
			}
		);

		const categoryFeed = useResult(
			categoryFeedResult,
			{
				edges: [],
				pageInfo: {},
			},
			(data) => data.categoryFeed
		);

		const cursor = computed(() => categoryFeed.value.pageInfo.endCursor);
		const hasNextPage = computed(() => categoryFeed.value.pageInfo.hasNextPage);
		// const categoryEdges = computed(() => categoryFeed.value.edges);
		const categories = computed(() => {
			return categoryFeed.value.edges.map((edge) => edge.node);
		});

		const loadMoreBooks = (categoryId, itemCursor) => {
			fetchMore({
				query: GET_BOOKS_FROM_CATEGORY,
				variables: {
					categoryId,
					after: itemCursor,
				},
			});
		};

		const loadMoreCategories = function () {
			fetchMore({
				variables: {
					after: cursor.value,
				},
			});
		};

		return {
			after,
			first,
			collections,
			collectionLoading,
			collectionError,
			hasNextPage,
			categories,
			categoryFeedLoading,
			categoryFeedError,
			loadMoreBooks,
			loadMoreCategories,
			networkStatus,
		};
	},
	components: {
		OcListItem,
		Feed,
		Loading,
	},
};
</script>

<style scoped>
.loading svg {
	background-color: #dfa;
	color: red;
	fill: currentColor;
}
</style>
