<template>
	<div
		class="
			sell-nav-header-wrapper
			sticky
			top-0
			text-sold-out text-base
			h-12
			bg-white
			dark:bg-black
			border-0.5 border-b
			dark:border-darkborder
			flex
			items-center
			justify-between
		"
	>
		<router-link
			to="/sell"
			:active-class="$route.path === '/sell' ? 'is-active' : ''"
		>
			<span class="nav-item">卖书</span>
		</router-link>
		<router-link
			to="/sell/clothing"
			:active-class="$route.path === '/sell/clothing' ? 'is-active' : ''"
		>
			<span class="nav-item">卖衣服</span>
		</router-link>
		<router-link
			to="/sell/electronics"
			:active-class="$route.path === '/sell/electronics' ? 'is-active' : ''"
		>
			<span class="nav-item">卖电子</span>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "SellNavHeader",
};
</script>

<style scoped>
.sell-nav-header-wrapper::before,
.sell-nav-header-wrapper::after {
	content: "";
	display: block;
}
.is-active {
	color: rgb(51, 51, 51);
}
.dark .is-active {
	color: white;
}
.is-active > span::after {
	content: "";
	position: absolute;
	bottom: -15px;
	left: 0;
	right: 0;
	height: 2px;
	background-color: rgb(51, 51, 51);
	border-radius: 99px;
}
.dark .is-active > span::after {
	background-color: white;
}
.nav-item {
	position: relative;
}
</style>
