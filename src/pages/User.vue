<template>
	<div class="user-wrapper">current user is : {{ $route.params.userId }}</div>
	<user-footer></user-footer>
</template>

<script>
import UserFooter from "../components/NavFooter/UserFooter.vue";
export default {
	name: "User",
	components: {
		UserFooter,
	},
};
</script>

<style></style>
