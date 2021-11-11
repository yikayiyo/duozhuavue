<template>
	<nav-header></nav-header>
	<router-view></router-view>
	<nav-footer></nav-footer>
</template>

<script>
import NavHeader from "../components/NavHeader/NavHeader.vue";
import NavFooter from "../components/NavFooter/NavFooter.vue";
export default {
	name: "HomeWrapper",
	components: {
		NavHeader,
		NavFooter,
	},
};
</script>

<style></style>
