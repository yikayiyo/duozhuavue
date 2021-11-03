<template>
	<div class="home-section-wrapper">
		<router-link to="/open-collections" class="home-section-header-wrapper">
			<div class="home-section-header flex items-center p-3.75">
				<div class="home-section-header-title flex-grow">
					<h2 class="text-xl font-medium leading-hsh">书单</h2>
				</div>
				<div
					class="
						home-section-header-details
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
		<div class="oc-list-wrapper mx-3.75 flex overflow-x-auto pb-8.75 -mb-8.75">
			<!-- <oc-list-item></oc-list-item> -->
			<oc-list-item :collection="collections[0]"></oc-list-item>
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

export default {
	data() {
		return {
			collections: [],
		};
	},
	components: {
		OcListItem,
		BookListItem,
	},
	apollo: {
		collections: gql`
			query Query {
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
		`,
	},
};
</script>

<style></style>
