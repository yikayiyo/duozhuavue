<template>
	<div class="home">
		<search :link="link" :placeholder="placeholder" :showIcon="showIcon" />
		<home-section></home-section>
	</div>
</template>

<script>
import Search from "../components/Search/Search.vue";
import HomeSection from "../components/Home/HomeSection.vue";

export default {
	name: "HomePage",
	data() {
		return {
			placeholder: "搜索书名、作者、分类、ISBN",
			link: "/search/book",
			showIcon: true,
		};
	},
	components: {
		Search,
		HomeSection,
	},
};
</script>

<style></style>
