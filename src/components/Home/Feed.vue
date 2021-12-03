<template>
	<div id="feed-section" class="feed-section relative bg-white mb-4">
		<div
			id="title-wrapper"
			class="title-wrapper p-3.75 bg-white sticky top-ct z-10"
			:class="{ 'is-pinned': isPinned }"
			ref="target"
		>
			<h2 class="text-xl font-medium leading-hsh">{{ category.name }}</h2>
		</div>
		<div class="book-list-wrapper -mt-3.75">
			<book-list-item
				class="book-list-item"
				:book="book"
				v-for="book in books"
				:key="book.id"
			/>
			<div
				class="
					feed-footer
					py-4
					text-footer text-center
					border-t-0.5 border-menu
				"
				@click="loadMore(category.id, cursor)"
				v-if="hasNextPage"
			>
				加载更多
			</div>
		</div>
	</div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import BookListItem from "./BookListItem.vue";
import { onMounted } from "@vue/runtime-core";
export default {
	name: "Feed",
	props: ["category", "loadMore"],
	setup(props) {
		const target = ref();
		const isPinned = ref(false);

		const categoryItemConnection = computed(() => {
			return props.category.items;
		});

		const books = categoryItemConnection.value.edges.map((edge) => edge.node);

		const hasNextPage = categoryItemConnection.value.pageInfo.hasNextPage;

		const cursor = categoryItemConnection.value.pageInfo.endCursor;

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
		return {
			target,
			isPinned,
			books,
			hasNextPage,
			cursor,
		};
	},
	components: {
		BookListItem,
	},
};
</script>

<style scoped>
.title-wrapper.is-pinned {
	border-bottom: 0.5px solid rgb(242, 242, 242);
}
.book-list-wrapper > .book-list-item:last-child {
	margin-bottom: 16px;
}
</style>
