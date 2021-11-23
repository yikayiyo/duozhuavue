<template>
	<div class="cart-wrapper relative">
		<cart-nav-header></cart-nav-header>
		<router-view></router-view>
		<back-to></back-to>
	</div>
</template>

<script>
import CartNavHeader from "../components/NavHeader/CartNavHeader.vue";
import BackTo from "../components/BackTo/BackTo.vue";
export default {
	name: "Cart",
	components: {
		CartNavHeader,
		BackTo,
	},
};
</script>

<style></style>
