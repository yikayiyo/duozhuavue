<template>
	<loading v-if="loading" />
	<div class="error" v-else-if="error">{{ error }}</div>
	<div class="book-category-wrapper text-is-active dark:text-white" v-else>
		<div
			class="book-category-header py-8.75 flex flex-col items-center text-white"
			:style="{ backgroundColor: headerBg }"
		>
			<h1 class="text-2xl">{{ category.name }}</h1>
			<p class="mt-2.5 text-footer">{{ category.description }}</p>
		</div>
		<div class="book-list-wrapper">
			<div class="sort-options bg-white dark:bg-black text-hsh sticky top-0 z-20">
				<div
					class="sort-option selected h-10 border-b border-b-1 border-search-input dark:border-darkborder flex items-center justify-center"
					:class="showAllOptions ? 'text-load' : ''"
				>
					<div class="sort-option font-medium" @click="toggleShowAllOptions">{{ selectedSortOption }}</div>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="rgb(51, 51, 51)"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						style="flex-shrink: 0; margin-left: 3px; transform: rotate(0deg)"
						:style="showAllOptions ? 'transform: rotate(180deg)' : ''"
						:class="showAllOptions ? 'text-load stroke-current' : ''"
					>
						<polyline points="6 9 12 15 18 9" />
					</svg>
				</div>
				<div
					class="sort-more-options absolute left-0 right-0 text-footer font-medium flex flex-col justify-center bg-white dark:bg-darkbg border-b-0.5 border-menu dark:border-darkborder"
					v-if="showAllOptions"
				>
					<div
						class="sort-option px-6 py-3 bg-white dark:bg-black flex justify-between"
						:class="selectedSortOption === '评分优先' ? 'text-load' : ''"
						name="rating"
						@click="sortByRating"
					>
						<span>评分优先</span>
						<svg
							width="18px"
							height="18px"
							viewBox="0 0 20 20"
							version="1.1"
							fill="none"
							fill-rule="evenodd"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2.90909091"
							style="width: 15px; height: 15px"
							:class="selectedSortOption === '评分优先' ? 'stroke-current' : ''"
						>
							<polyline points="2 9.70728325 7.53750321 15 18 5" />
						</svg>
					</div>
					<div
						class="sort-option px-6 py-3 bg-white dark:bg-black flex justify-between"
						:class="selectedSortOption === '低价优先' ? 'text-load' : ''"
						name="price"
						@click="sortByPrice"
					>
						<span>低价优先</span>
						<svg
							width="18px"
							height="18px"
							viewBox="0 0 20 20"
							version="1.1"
							fill="none"
							fill-rule="evenodd"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2.90909091"
							style="width: 15px; height: 15px"
							:class="selectedSortOption === '低价优先' ? 'stroke-current' : ''"
						>
							<polyline points="2 9.70728325 7.53750321 15 18 5" />
						</svg>
					</div>
				</div>
			</div>
			<book-list-item v-for="book of sortedBooks" :key="book.id" :book="book"></book-list-item>
			<div
				class="load-more py-4 text-footer text-center border-t-0.5 border-b-0.5 border-menu dark:border-darkborder"
				v-if="hasNextPage"
				@click="loadMoreBooks"
			>再多来点儿</div>
		</div>
	</div>
	<back-to />
</template>

<script>
import { useQuery, useResult } from "@vue/apollo-composable";
import { useRoute } from "vue-router";
import { GET_BOOKS_FROM_CATEGORY } from "../graphql/schema";
import Loading from "../components/Loading/Loading.vue";
import BookListItem from "../components/Home/BookListItem.vue";
import BackTo from "../components/BackTo/BackTo.vue";
import { computed, ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import useLoggedInUserId from "../hooks/useLoggedInUserId";
export default {
	name: "BookCategory",
	setup() {
		const route = useRoute();
		const selectedSortOption = ref("评分优先");
		const showAllOptions = ref(false);

		const categoryId = route.params.categoryId;
		const userId = useLoggedInUserId();
		const { result, loading, error, fetchMore } = useQuery(
			GET_BOOKS_FROM_CATEGORY,
			{
				categoryId,
				userId
			}
		);

		const category = useResult(result, {}, (data) => data.category);
		const cursor = useResult(
			result,
			"",
			(data) => data.category.items.pageInfo.endCursor
		);
		const hasNextPage = useResult(
			result,
			false,
			(data) => data.category.items.pageInfo.hasNextPage
		);
		const edges = useResult(result, [], (data) => data.category.items.edges);
		const books = computed(() => {
			return edges.value.map((edge) => {
				return edge.node;
			});
		});

		let sortedBooks = ref([]);
		// 解决白屏问题
		watch(
			books,
			() => {
				sortedBooks.value = [...books.value];
			},
			{
				immediate: true,
			}
		);
		sortedBooks.value.sort((a, b) => {
			return b.doubanRating - a.doubanRating;
		});

		const headerBg = computed(
			() => category.value.parentCategory[0].themeColor
		);

		const toggleShowAllOptions = function () {
			showAllOptions.value = !showAllOptions.value;
		};

		const sortByRating = function () {
			selectedSortOption.value = "评分优先";
			sortedBooks.value.sort((a, b) => {
				return b.doubanRating - a.doubanRating;
			});
			toggleShowAllOptions();
		};

		const sortByPrice = function () {
			selectedSortOption.value = "低价优先";
			sortedBooks.value.sort((a, b) => {
				return a.originalPrice - b.originalPrice;
			});
			toggleShowAllOptions();
		};

		const loadMoreBooks = function () {
			fetchMore({
				variables: {
					after: cursor.value,
				},
			});
		};

		return {
			category,
			sortedBooks,
			loading,
			error,
			headerBg,
			showAllOptions,
			toggleShowAllOptions,
			selectedSortOption,
			sortByRating,
			sortByPrice,
			cursor,
			hasNextPage,
			loadMoreBooks,
		};
	},
	components: {
		Loading,
		BookListItem,
		BackTo,
	},
};
</script>

<style></style>
