<template>
	<div>
		<h1>Comment page</h1>
		bookId: {{ bookId }} <br />
		commentId: {{ commentId }}
	</div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
	name: "Comment",
	setup() {
		const route = useRoute();
		const { bookId, commentId } = route.query;
		return {
			bookId,
			commentId,
		};
	},
};
</script>

<style></style>
