<template>
	<div class="clothing-wrapper">
		<search :link="link" :placeholder="placeholder" :showIcon="showIcon" />
		<div>No data yet.</div>
	</div>
</template>

<script>
import Search from "../components/Search/Search.vue";
export default {
	name: "ClothingPage",
	data() {
		return {
			placeholder: "搜索服饰品牌、分类",
			link: "/search/clothing",
			showIcon: true,
		};
	},
	components: {
		Search,
	},
};
</script>

<style></style>
