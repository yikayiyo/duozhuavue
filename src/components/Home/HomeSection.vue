<template>
	<div class="home-section-wrapper">
		<div class="oc-wrapper">
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

			<div v-if="loading" class="flex w-full justify-center">
				<svg
					class="animate-spin h-5 w-5 text-white"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						class="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="black"
						stroke-width="2"
					></circle>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
			</div>
			<div class="text-label" v-else-if="error">{{ error }}</div>
			<div
				v-else
				class="oc-list-wrapper mx-3.75 flex overflow-x-auto pb-8.75 -mb-8.75"
			>
				<oc-list-item
					v-for="collection of result.collections"
					:collection="collection"
					:key="collection.id"
				></oc-list-item>
				<a href="">
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
						<span class="text-shiwu"> {{ result.collections.length }}个 </span>
					</div>
				</a>
			</div>
		</div>

		<div class="feed-content-wrapper mt-2.5 bg-menu">
			<div class="feed-section relative mb-4 bg-white">
				<div class="title p-3.75 bg-white sticky top-ct">
					<h2 class="text-xl font-medium leading-hsh">猜你喜欢</h2>
				</div>
				<div class="book-list-wrapper -mt-3.75">
					<book-list-item></book-list-item>
					<book-list-item></book-list-item>
					<book-list-item></book-list-item>
					<book-list-item></book-list-item>
				</div>
			</div>
			<div class="feed-section relative mb-4 bg-white">
				<div class="title p-3.75 bg-white sticky top-ct">
					<h2 class="text-xl font-medium leading-hsh">前端开发</h2>
				</div>
				<div class="book-list-wrapper -mt-3.75">
					<book-list-item></book-list-item>
					<book-list-item></book-list-item>
					<book-list-item></book-list-item>
					<book-list-item></book-list-item>
				</div>
			</div>
			<div class="feed-section relative mb-4 bg-white">
				<div class="title p-3.75 bg-white sticky top-ct">
					<h2 class="text-xl font-medium leading-hsh">UI</h2>
				</div>
				<div class="book-list-wrapper -mt-3.75">
					<book-list-item></book-list-item>
					<book-list-item></book-list-item>
					<book-list-item></book-list-item>
					<book-list-item></book-list-item>
				</div>
			</div>
			<div class="feed-section relative mb-4 bg-white">
				<div class="title p-3.75 bg-white sticky top-ct">
					<h2 class="text-xl font-medium leading-hsh">心理学</h2>
				</div>
				<div class="book-list-wrapper -mt-3.75">
					<book-list-item></book-list-item>
					<book-list-item></book-list-item>
					<book-list-item></book-list-item>
					<book-list-item></book-list-item>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import OcListItem from "./OcListItem.vue";
import BookListItem from "./BookListItem.vue";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import { watch } from "@vue/runtime-core";

export default {
	name: "HomeSection",
	setup() {
		const GET_COLLECTIONS = gql`
			query getCollections {
				collections {
					id
					name
					items {
						title
					}
					contributors {
						name
					}
					proposer {
						name
						avatar
					}
					image
					maskColor
				}
			}
		`;
		const { result, loading, error } = useQuery(GET_COLLECTIONS);
		watch(result, (value) => console.log(value));
		return {
			result,
			loading,
			error,
		};
	},
	components: {
		OcListItem,
		BookListItem,
	},
};
</script>

<style></style>
