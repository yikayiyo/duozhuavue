<template>
	<div class="feed-section relative mb-4 bg-white">
		<div class="title p-3.75 bg-white sticky top-ct">
			<h2 class="text-xl font-medium leading-hsh">猜你喜欢</h2>
		</div>
		<div class="book-list-wrapper mt-3.75 p-3.75">some books</div>
	</div>
</template>

<script>
import BookListItem from "./BookListItem.vue";
export default {
	name: "Feed",
	components: {
		BookListItem,
	},
};
</script>

<style></style>
