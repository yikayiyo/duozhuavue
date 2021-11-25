<template>
	<div class="feed-section relative mb-4 bg-white">
		<div class="title p-3.75 bg-white sticky top-ct">
			<h2 class="text-xl font-medium leading-hsh">{{ category.name }}</h2>
		</div>
		<div class="book-list-wrapper -mt-3.75">
			<book-list-item
				:book="item"
				v-for="item of category.items"
				:key="item.id"
			/>
		</div>
	</div>
</template>

<script>
import BookListItem from "./BookListItem.vue";
export default {
	name: "Feed",
	props: ["category"],
	components: {
		BookListItem,
	},
};
</script>

<style></style>
