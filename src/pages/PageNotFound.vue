<template>
	<div class="not-found flex flex-col items-center h-screen justify-center">
		<div class="qr w-qr h-qr">
			<img src="/qr.png" alt="欢迎去使用多抓鱼买卖二手书" class="w-full" />
		</div>
		<span class="mt-5"
			>这里没有鱼，去<router-link to="/book" class="text-load">首页</router-link
			>逛逛吧</span
		>
	</div>
	<user-footer :userId="0"></user-footer>
</template>

<script>
import UserFooter from "../components/NavFooter/UserFooter.vue";
export default {
	name: "PageNotFound",
	components: {
		UserFooter,
	},
};
</script>

<style></style>
