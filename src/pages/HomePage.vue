<template>
	<div class="home">
		<search
			link="/search/book"
			placeholder="搜索书名、作者、分类、ISBN"
			showIcon="true"
		/>
		<home-section></home-section>
	</div>
</template>

<script>
import Search from "../components/Search/Search.vue";
import HomeSection from "../components/Home/HomeSection.vue";

export default {
	name: "HomePage",
	components: {
		Search,
		HomeSection,
	},
};
</script>

<style></style>
