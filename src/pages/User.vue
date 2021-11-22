<template>
	<div class="user-wrapper p-3.75">
		<div class="break-words" v-if="currentUser.id !== ''">
			<p>current user is : {{ currentUser.id || "''" }}</p>
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
import UserFooter from "../components/NavFooter/UserFooter.vue";
import { useRouter } from "vue-router";
import { useApolloClient, useQuery, useResult } from "@vue/apollo-composable";
import { CURRENT_USER } from "../graphql/schema";
export default {
	name: "User",
	setup() {
		const { result } = useQuery(CURRENT_USER);
		const currentUser = useResult(result, {});
		const router = useRouter();
		const { client } = useApolloClient();
		function logOut() {
			client.clearStore();
			router.push("/login");
		}

		return {
			currentUser,
			logOut,
		};
	},
	components: {
		UserFooter,
	},
};
</script>

<style></style>
