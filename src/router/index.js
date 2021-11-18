import { createRouter, createWebHistory } from "vue-router";
import HomeWrapper from "../pages/HomeWrapper.vue";
import HomePage from "../pages/HomePage.vue";
import Sell from "../pages/Sell.vue";
import SellBook from "../pages/SellBook.vue";
import SellClothing from "../pages/SellClothing.vue";
import SellElectronics from "../pages/SellElectronics.vue";
import Login from "../pages/Login.vue";
import SignUp from "../pages/SignUp.vue";
import Cart from "../pages/Cart.vue";
import User from "../pages/User.vue";
import Book from "../pages/Book.vue";
import ClothingPage from "../pages/ClothingPage.vue";
import ElectronicsPage from "../pages/ElectronicsPage.vue";
import OriginalPage from "../pages/OriginalPage.vue";
import SearchBook from "../pages/SearchBook.vue";
import SearchBookInfo from "../pages/SearchBookInfo.vue";
import SearchElectronics from "../pages/SearchElectronics.vue";
import SearchClothing from "../pages/SearchClothing.vue";
import OpenCollections from "../pages/OpenCollections.vue";
import OpenCollection from "../pages/OpenCollection.vue";
import BookService from "../pages/BookService.vue";
import Support from "../pages/Support.vue";
import Env from "../pages/Env.vue";

const routes = [
	{
		path: "/",
		component: HomeWrapper,
		children: [
			{ path: "", redirect: "/book" },
			{ path: "/book", component: HomePage },
			{ path: "/clothing", component: ClothingPage },
			{ path: "/electronics", component: ElectronicsPage },
			{ path: "/original", component: OriginalPage },
		],
	},
	{
		path: "/signup",
		component: SignUp,
	},
	{
		path: "/login",
		component: Login,
	},
	{
		path: "/sell",
		component: Sell,
		children: [
			{
				path: "",
				component: SellBook,
			},
			{
				path: "clothing",
				component: SellClothing,
			},
			{
				path: "electronics",
				component: SellElectronics,
			},
		],
	},
	{ path: "/cart", component: Cart },
	{
		path: "/users/:userId",
		component: User,
		beforeEnter: (to, from) => {
			// 如果未登录，跳转到登录界面
			return false;
		},
	},
	{ path: "/books/:bookId", component: Book },
	{
		path: "/search/book",
		component: SearchBook,
	},
	{
		path: "/search/book/:info",
		component: SearchBookInfo,
	},
	{
		path: "/search/clothing",
		component: SearchClothing,
	},
	{
		path: "/search/electronics",
		component: SearchElectronics,
	},
	{
		path: "/search",
		redirect: "/search/book",
	},
	{
		path: "/open-collections",
		component: OpenCollections,
	},
	{
		path: "/open-collections/:id",
		component: OpenCollection,
	},
	{
		path: "/support",
		component: Support,
	},
	{
		path: "/support/book-service",
		component: BookService,
	},
	{
		path: "/support/env",
		component: Env,
	},
];

export default createRouter({
	history: createWebHistory(),
	routes,
});
