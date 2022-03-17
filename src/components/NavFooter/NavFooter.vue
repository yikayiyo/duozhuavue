<template>
	<div
		class="
			fixed
			max-w-dzy
			mx-auto
			my-0
			bottom-0
			inset-x-0
			border-t
			dark:border-darkborder
			z-50
			bg-white
			dark:bg-black dark:text-white
		"
	>
		<nav-footer-list />
	</div>
</template>

<script>
import NavFooterList from "./NavFooterList.vue";
export default {
	components: {
		NavFooterList,
	},
};
</script>

<style></style>
