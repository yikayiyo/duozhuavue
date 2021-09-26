<template>
	<nav-header></nav-header>
	<div class="overflow-scroll">
		<search :link="link" :placeholder="placeholder" :showIcon="showIcon" />
	</div>
</template>

<script>
import NavHeader from "../components/NavHeader/NavHeader.vue";
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
		NavHeader,
		Search,
	},
};
</script>

<style></style>
