<template>
	<div class="sell-wrapper relative">
		<sell-nav-header></sell-nav-header>
		<router-view></router-view>
		<back-to></back-to>
	</div>
</template>

<script>
import SellNavHeader from "../components/NavHeader/SellNavHeader.vue";
import BackTo from "../components/BackTo/BackTo.vue";
export default {
	name: "Sell",
	components: {
		SellNavHeader,
		BackTo,
	},
};
</script>

<style scoped>
.shadow {
	box-shadow: rgb(0, 0, 0, 10%) 0px 0px 8px 0px;
}
</style>
