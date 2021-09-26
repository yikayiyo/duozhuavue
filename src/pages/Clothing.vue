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
			placeholder: "搜索服饰品牌、分类",
			link: "/search/clothing",
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
