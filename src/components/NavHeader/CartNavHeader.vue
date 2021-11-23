<template>
	<div
		class="
			cart-nav-header-wrapper
			sticky
			top-0
			text-sold-out text-base
			h-12
			bg-white
			border-0.5 border-b
			flex
			items-center
			justify-between
		"
	>
		<router-link to="/cart">
			<span class="nav-item">全部</span>
		</router-link>
		<router-link to="/cart/wishlist">
			<span class="nav-item">到货提醒</span>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "CartNavHeader",
};
</script>

<style scoped>
.cart-nav-header-wrapper::before,
.cart-nav-header-wrapper::after {
	content: "";
	display: block;
}
.router-link-active {
	color: rgb(51, 51, 51);
}
.router-link-active > span::after {
	content: "";
	position: absolute;
	bottom: -15px;
	left: 0;
	right: 0;
	height: 2px;
	background-color: rgb(51, 51, 51);
	border-radius: 99px;
}
.nav-item {
	position: relative;
}
</style>
