<template>
	<loading v-if="loading" />
	<div class="error" v-else-if="error">{{ error }}</div>
	<div class="book-category-wrapper" v-else>
		<div
			class="book-category-header py-8.75 flex flex-col items-center text-white"
			:style="{ backgroundColor: headerBg }"
		>
			<h1 class="text-2xl">{{ category.name }}</h1>
			<p class="mt-2.5 text-footer">{{ category.description }}</p>
		</div>
		<div class="book-list-wrapper">
			<div class="sort-option text-hsh h-10 flex items-center justify-center">
				<div class="label font-medium">综合排序</div>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="rgb(51, 51, 51)"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					xmlns="http://www.w3.org/2000/svg"
					class="Icon"
					width="18"
					height="18"
					style="flex-shrink: 0; margin-left: 3px; transform: rotate(0deg)"
				>
					<polyline points="6 9 12 15 18 9"></polyline>
				</svg>
			</div>
			<book-list-item
				v-for="book of category.items"
				:key="book.id"
				:book="book"
			></book-list-item>
		</div>
	</div>
</template>

<script>
import { useQuery, useResult } from "@vue/apollo-composable";
import { useRoute } from "vue-router";
import { GET_BOOKS_FROM_CATEGORY } from "../graphql/schema";
import Loading from "../components/Loading/Loading.vue";
import BookListItem from "../components/Home/BookListItem.vue";
import { computed } from "@vue/reactivity";
export default {
	name: "BookCategory",
	setup() {
		const route = useRoute();
		const categoryId = route.params.categoryId;
		const { result, loading, error } = useQuery(GET_BOOKS_FROM_CATEGORY, {
			categoryId,
		});
		console.log(result);
		const category = useResult(result, [], (data) => data.category);
		const headerBg = computed(
			() => category.value.parentCategory[0].themeColor
		);
		return {
			category,
			loading,
			error,
			headerBg,
		};
	},
	components: {
		Loading,
		BookListItem,
	},
};
</script>

<style></style>
