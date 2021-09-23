<template>
	<nav-header></nav-header>
	<router-view></router-view>
</template>

<script>
import NavHeader from "../NavHeader/NavHeader.vue";
export default {
	components: {
		NavHeader,
	},
};
</script>

<style></style>
