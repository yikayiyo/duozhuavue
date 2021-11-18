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
			<div
				class="oc-list-wrapper mx-3.75 flex overflow-x-auto pb-8.75 -mb-8.75"
			>
				<div v-if="loading">Loading...</div>
				<div class="text-label" v-else-if="error">{{ error }}</div>
				<div v-else>
					<oc-list-item
						v-for="collection of result.collections"
						:collection="collection"
						:key="collection.id"
					></oc-list-item>
				</div>
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
