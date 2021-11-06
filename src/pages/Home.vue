<template>
	<nav-header></nav-header>
	<div class="">
		<search :link="link" :placeholder="placeholder" :showIcon="showIcon" />
		<home-section></home-section>
	</div>
	<nav-footer></nav-footer>
</template>

<script>
import NavHeader from "../components/NavHeader/NavHeader.vue";
import NavFooter from "../components/NavFooter/NavFooter.vue";
import Search from "../components/Search/Search.vue";
import HomeSection from "../components/Home/HomeSection.vue";
export default {
	name: "Home",
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
		HomeSection,
		NavFooter,
	},
};
</script>

<style></style>
