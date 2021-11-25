<template>
	<loading v-if="loading" />
	<div class="error" v-else-if="error">{{ error }}</div>
	<div class="book-category-wrapper text-is-active" v-else>
		<div
			class="book-category-header py-8.75 flex flex-col items-center text-white"
			:style="{ backgroundColor: headerBg }"
		>
			<h1 class="text-2xl">{{ category.name }}</h1>
			<p class="mt-2.5 text-footer">{{ category.description }}</p>
		</div>
		<div class="book-list-wrapper">
			<div class="sort-options bg-white text-hsh sticky top-0 z-20">
				<div
					class="
						sort-option
						selected
						h-10
						border-b border-b-1 border-search-input
						flex
						items-center
						justify-center
					"
				>
					<div class="sort-option font-medium" @click="toggleShowAllOptions">
						评分优先
					</div>
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
						:style="showAllOptions ? 'transform: rotate(180deg)' : ''"
					>
						<polyline points="6 9 12 15 18 9"></polyline>
					</svg>
				</div>
				<div
					class="
						sort-more-options
						absolute
						left-0
						right-0
						text-footer
						font-medium
						flex flex-col
						justify-center
						bg-white
					"
					v-if="showAllOptions"
				>
					<div class="sort-option px-6 py-3 bg-white">评分优先</div>
					<div class="sort-option px-6 py-3 bg-white">低价优先</div>
				</div>
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
import { computed, ref } from "@vue/reactivity";
export default {
	name: "BookCategory",
	setup() {
		const route = useRoute();
		const categoryId = route.params.categoryId;
		const { result, loading, error } = useQuery(GET_BOOKS_FROM_CATEGORY, {
			categoryId,
		});
		const category = useResult(result, [], (data) => data.category);
		const headerBg = computed(
			() => category.value.parentCategory[0].themeColor
		);

		const showAllOptions = ref(false);
		const toggleShowAllOptions = function () {
			showAllOptions.value = !showAllOptions.value;
		};

		return {
			category,
			loading,
			error,
			headerBg,
			showAllOptions,
			toggleShowAllOptions,
		};
	},
	components: {
		Loading,
		BookListItem,
	},
};
</script>

<style></style>
