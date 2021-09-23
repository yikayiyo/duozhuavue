<template>
	<div
		class="
			fixed
			max-w-xl
			mx-auto
			my-0
			bottom-0
			inset-x-0
			border-t border-b
			z-50
			bg-white
		"
	>
		<nav-footer-list />
	</div>
</template>

<script>
import navFooterList from "./NavFooterList.vue";
export default {
	components: {
		navFooterList,
	},
};
</script>

<style></style>
