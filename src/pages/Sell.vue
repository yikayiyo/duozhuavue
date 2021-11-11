<template>
	<div class="sell-wrapper">
		<sell-nav-header></sell-nav-header>
		<router-view></router-view>
	</div>
</template>

<script>
import SellNavHeader from "../components/NavHeader/SellNavHeader.vue";
export default {
	name: "Sell",
	components: {
		SellNavHeader,
	},
};
</script>

<style></style>
