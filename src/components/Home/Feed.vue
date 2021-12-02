<template>
	<div id="feed-section" class="feed-section relative bg-white">
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
				:book="item"
				v-for="item of category.items"
				:key="item.id"
			/>
		</div>
	</div>
</template>

<script>
import { ref } from "@vue/reactivity";
import BookListItem from "./BookListItem.vue";
import { onMounted } from "@vue/runtime-core";
export default {
	name: "Feed",
	props: ["category"],
	setup() {
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
		return {
			target,
			isPinned,
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
