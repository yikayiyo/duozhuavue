<template>
	<div class="relative min-h-screen max-w-dzy m-auto bg-white">
		<main-section></main-section>
		<nav-footer></nav-footer>
	</div>
</template>

<script>
import MainSection from "../MainSection/MainSection.vue";
import NavFooter from "../NavFooter/NavFooter.vue";
export default {
	components: {
		MainSection,
		NavFooter,
	},
};
</script>

<style></style>
