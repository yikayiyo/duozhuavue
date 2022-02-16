<template>
	<div
		id="feed-section"
		class="feed-section relative bg-white dark:bg-black dark:text-white mb-4"
	>
		<div
			id="title-wrapper"
			class="title-wrapper p-3.75 bg-white dark:bg-black sticky top-ct z-10"
			:class="{ 'is-pinned': isPinned }"
			ref="target"
		>
			<h2 class="text-xl font-medium leading-hsh">{{ category.name }}</h2>
		</div>
		<div class="book-list-wrapper -mt-3.75">
			<book-list-item
				class="book-list-item"
				:book="book"
				:isLoggedIn="isLoggedIn"
				v-for="book in books"
				:key="book.id"
			/>
			<div
				class="
					feed-footer
					py-4
					text-footer text-center
					border-t-0.5 border-menu
					dark:border-darkborder
				"
				@click="loadMoreBooks(category.id, cursor)"
				v-if="hasNextPage"
			>
				加载更多
			</div>
			<div
				class="
					feed-footer
					py-4
					text-footer text-center
					border-t-0.5 border-menu
					dark:border-darkborder
				"
				v-else
			>
				该分类下没有书籍了
			</div>
		</div>
	</div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import BookListItem from "./BookListItem.vue";
import { onMounted } from "@vue/runtime-core";
import { useApolloClient } from "@vue/apollo-composable";
import { CURRENT_USER } from "../../graphql/schema";
export default {
	name: "Feed",
	props: ["category", "loadMoreBooks"],
	setup(props) {
		const categoryItemConnection = computed(() => {
			return props.category.items;
		});
		const books = computed(() =>
			categoryItemConnection.value.edges.map((edge) => edge.node)
		);
		const hasNextPage = computed(
			() => categoryItemConnection.value.pageInfo.hasNextPage
		);
		const cursor = computed(
			() => categoryItemConnection.value.pageInfo.endCursor
		);

		// 分类标题sticky为true时，添加一个下边界
		const target = ref();
		const isPinned = ref(false);
		const observer = new IntersectionObserver(
			([e]) => {
				isPinned.value = !e.isIntersecting;
			},
			{
				rootMargin: "-68px 0px 0px 0px",
				threshold: 1,
			}
		);
		onMounted(() => {
			observer.observe(target.value);
		});

		// 获取当前用户
		const { client } = useApolloClient();
		const {
			currentUser: { id },
		} = client.cache.readQuery({ query: CURRENT_USER });
		const isLoggedIn = computed(() => id !== "");
		return {
			target,
			isPinned,
			books,
			hasNextPage,
			cursor,
			isLoggedIn,
		};
	},
	components: {
		BookListItem,
	},
};
</script>

<style scoped>
.dark .title-wrapper.is-pinned {
	border-bottom: 0.5px solid #2f3336;
}
.title-wrapper.is-pinned {
	border-bottom: 0.5px solid rgb(242, 242, 242);
}
.book-list-wrapper > .book-list-item:last-child {
	margin-bottom: 16px;
}
.feed-section:last-child {
	padding-bottom: 48px;
}
</style>
