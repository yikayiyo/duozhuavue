<template>
	<div class="user-wrapper p-3.75">
		{{ result }}
		<div class="break-words" v-if="result.loggedIn">
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
import { useMutation, useQuery } from "@vue/apollo-composable";
import UserFooter from "../components/NavFooter/UserFooter.vue";
import { IS_LOGGED_IN, SIGN_OUT } from "../graphql/schema";
export default {
	name: "User",
	setup() {
		const { result } = useQuery(IS_LOGGED_IN);
		return {
			result,
		};
	},
	components: {
		UserFooter,
	},
	methods: {
		getUserToken() {
			return localStorage.getItem("token") || "";
		},
		logOut() {
			localStorage.removeItem("token");
			const { mutate } = useMutation(SIGN_OUT);
			mutate();
		},
	},
};
</script>

<style></style>
