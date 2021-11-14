<template>
	<div class="user-wrapper p-3.75">
		<div class="break-words" v-if="isLoggedIn">
			<p>current user is : {{ getUserToken() || "''" }}</p>
			<button
				@click="logOut"
				class="
					w-full
					mt-8
					text-load text-lg
					font-medium
					border
					py-3
					px-9
					rounded-full
					shadow-sm
				"
			>
				LogOut
			</button>
		</div>
	</div>
	<user-footer></user-footer>
</template>

<script>
import gql from "graphql-tag";
import UserFooter from "../components/NavFooter/UserFooter.vue";
export default {
	name: "User",
	data() {
		return {
			isLoggedIn: false,
		};
	},
	components: {
		UserFooter,
	},
	methods: {
		getUserToken() {
			return localStorage.getItem("token") || "";
		},
		async logOut() {
			localStorage.removeItem("token");
			await this.$apollo.getClient().resetStore();
			this.$router.push("/login");
		},
	},
	apollo: {
		isLoggedIn: {
			query: gql`
				{
					isLoggedIn @client
				}
			`,
		},
	},
};
</script>

<style></style>
