<template></template>

<script>
import { apolloClient } from "../graphql";
import { CURRENT_USER } from "../graphql/schema";
export default {
	name: "Cart",
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
			return {
				path: "/login",
			};
		}
	},
};
</script>

<style></style>
