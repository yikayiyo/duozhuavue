<template>
	<div class="overflow-scroll">
		<search :link="link" :placeholder="placeholder" :showIcon="showIcon" />
	</div>
</template>

<script>
import Search from "../components/Search/Search.vue";
export default {
	data() {
		return {
			placeholder: "搜索书名、作者、分类、ISBN",
			link: "/search/book",
			showIcon: true,
		};
	},
	components: {
		Search,
	},
};
</script>

<style></style>
