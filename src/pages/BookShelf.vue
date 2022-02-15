<template>
	<div class="bookshelf-wrapper">
		<!-- <Loading v-if="loading" />
		<div class="error" v-else-if="error">{{ error }}</div> -->
		<div class="book-grid">
			<DoubanBook :book="book" v-for="book in books" :key="book.id" />
		</div>
	</div>
</template>

<script>
import DoubanBook from "../components/MainSection/DoubanBook.vue";
import Loading from "../components/Loading/Loading.vue";
export default {
	name: "BookShelf",
	props: ["books"],
	components: {
		DoubanBook,
		Loading,
	},
	setup(props) {
		const books = props.books;
		return {
			books,
		};
	},
};
</script>

<style>
.book-grid:last-child {
	padding-bottom: 48px;
}
</style>
