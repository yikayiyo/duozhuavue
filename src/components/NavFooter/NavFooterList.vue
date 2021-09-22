<template>
	<ul class="flex flex-row justify-between items-center">
		<li class="flex-1 flex flex-col items-center justify-center">
			<a class="flex flex-col items-center h-13" href="">
				<img class="w-7" src="../../assets/footer/home.svg" alt="" />
				<span class="text-xs">首页</span>
			</a>
		</li>
		<li class="flex-1 flex flex-col items-center">
			<a class="flex flex-col items-center h-13" href="">
				<img class="w-7" src="../../assets/footer/home.svg" alt="" />
				<span class="text-xs">卖东西</span>
			</a>
		</li>
		<li class="flex-1 flex flex-col items-center">
			<a class="flex flex-col items-center h-13" href="">
				<img class="w-7" src="../../assets/footer/cart.svg" alt="" />
				<span class="text-xs">购物车</span>
			</a>
		</li>
		<li class="flex-1 flex flex-col items-center">
			<a class="flex flex-col items-center h-13" href="">
				<img class="w-7" src="../../assets/footer/cart.svg" alt="" />
				<span class="text-xs">我的</span>
			</a>
		</li>
	</ul>
</template>

<script>
import NavFooterListItem from "./NavFooterListItem.vue";
export default {
	props: [],
	components: {
		NavFooterListItem,
	},
};
</script>

<style></style>
