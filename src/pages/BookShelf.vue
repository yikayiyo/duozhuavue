<template>
	<div class="bookshelf-wrapper">
		<div class="book-grid pb-12" v-if="books.length > 0">
			<DoubanBook :book="book" v-for="book in books" :key="book.id" />
		</div>
		<div v-else class="mt-5">
			<div class="qr w-qr h-qr mx-auto">
				<img :src="qr" alt="欢迎去使用多抓鱼买卖二手书" class="w-full" />
			</div>
			<div class="text-center mt-5">
				这里没有鱼，去
				<router-link to="/book" class="text-load">首页</router-link>逛逛吧
			</div>
		</div>
	</div>
</template>

<script>
import DoubanBook from "../components/MainSection/DoubanBook.vue";
import qr from "../assets/qr.png"
export default {
	name: "BookShelf",
	props: ["books"],
	components: {
		DoubanBook,
	},
	setup(props) {
		const books = props.books;
		return {
			books,
			qr
		};
	},
};
</script>

<style>
</style>
