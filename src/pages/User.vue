<template>
	<div class="user-wrapper p-3.75">
		<p class="break-words">current user is : {{ getUserToken() || "''" }}</p>
	</div>
	<user-footer></user-footer>
</template>

<script>
import UserFooter from "../components/NavFooter/UserFooter.vue";
export default {
	name: "User",
	components: {
		UserFooter,
	},
	methods: {
		getUserToken() {
			return localStorage.getItem("token") || "";
		},
	},
};
</script>

<style></style>
