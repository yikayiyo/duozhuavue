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
import { apolloClient } from "../graphql";
import { CURRENT_USER } from "../graphql/schema";
export default {
	name: "User",
	setup() {
		const { result } = useQuery(CURRENT_USER);
		const currentUser = useResult(result, {});
		const router = useRouter();
		const { client } = useApolloClient();
		function logOut() {
			client.resetStore();
			router.push("/login");
		}

		return {
			currentUser,
			logOut,
		};
	},
	beforeRouteEnter(to, _) {
		try {
			const { currentUser } = apolloClient.cache.readQuery({
				query: CURRENT_USER,
			});
			if (currentUser.id === "") {
				return {
					path: "/login",
				};
			}
			if (currentUser.id !== "" && to.params.userId === "0") {
				return {
					path: "/users/" + currentUser.id,
				};
			} else {
				return true;
			}
		} catch (err) {
			// console.error(err);
			return {
				path: "/login",
			};
		}
	},
	components: {
		UserFooter,
	},
};
</script>

<style></style>
