<template>
	<div class="bookshelf-wrapper">
		<Loading v-if="loading" />
		<div class="error" v-else-if="error">{{ error }}</div>
		<div class="book-grid">
			<DoubanBook :book="book" v-for="book in books" :key="book.id" />
		</div>
	</div>
</template>

<script>
import { useQuery, useResult } from "@vue/apollo-composable";
import { useRoute } from "vue-router";
import DoubanBook from "../components/MainSection/DoubanBook.vue";
import { GET_BOOKSHELF } from "../graphql/schema";
import Loading from "../components/Loading/Loading.vue";
export default {
	name: "BookShelf",
	components: {
		DoubanBook,
		Loading,
	},
	setup() {
		const route = useRoute();
		const { result, loading, error } = useQuery(GET_BOOKSHELF, () => ({
			userId: route.params.userId,
		}));
		const books = useResult(result, [], (data) => data.user.bookShelf);
		console.log(books);
		return {
			books,
			loading,
			error,
		};
	},
};
</script>

<style>
.book-grid:last-child {
	margin-bottom: 48px;
}
</style>
