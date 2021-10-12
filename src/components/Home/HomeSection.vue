<template>
	<div class="home-section-wrapper">
		<a href="/open-collections?from=home" class="home-section-header-wrapper">
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
		</a>
		<div class="oc-list-wrapper mx-3.75 flex overflow-x-auto pb-8.75 -mb-8.75">
			<oc-list-item></oc-list-item>
			<oc-list-item></oc-list-item>
			<oc-list-item></oc-list-item>
			<oc-list-item></oc-list-item>
			<oc-list-item></oc-list-item>
		</div>
		<div class="feed-content-wrapper mx-3.75">
			<div class="feed-section">
				<div class="title">
					<h2>猜你喜欢</h2>
				</div>
				<div class="book-list-wrapper">
					<book-list-item></book-list-item>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import OcListItem from "./OcListItem.vue";
import BookListItem from "./BookListItem.vue";
export default {
	components: {
		OcListItem,
		BookListItem,
	},
};
</script>

<style></style>
