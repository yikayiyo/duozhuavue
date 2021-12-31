import { nextTick } from "@vue/runtime-core";
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
import BookCategory from "../pages/BookCategory.vue";
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
import Activity from "../pages/Activity.vue";
import Comment from "../pages/Comment.vue";
import NewComment from "../pages/NewComment.vue";
import BookShelf from "../pages/BookShelf.vue";
import PageNotFound from "../pages/PageNotFound.vue";

const scrollBehavior = function (to, from, savedPosition) {
	if (savedPosition) {
		return savedPosition;
	} else {
		return {
			top: 0,
			// behavior: "smooth",
		};
	}
};

const routes = [
	{
		path: "/",
		component: HomeWrapper,
		meta: { title: "duozhuavue" },
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
		meta: { title: "卖东西 - duozhuavue" },
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
	{ path: "/cart", component: Cart, meta: { title: "购物车 - duozhuavue" } },
	{
		path: "/users/:userId",
		name: "user",
		component: User,
		meta: { title: "我的 - duozhuavue" },
		children: [
			{
				path: "",
				redirect: {
					name: "user.activity",
				},
			},
			{
				path: "activities",
				name: "user.activity",
				component: Activity,
			},
			{
				path: "owning-bookshelf",
				name: "user.bookshelf",
				component: BookShelf,
			},
		],
	},
	{ path: "/books/:bookId", component: Book },
	{
		path: "/book/rating",
		name: "comment",
		component: Comment,
	},
	{
		path: "/book/rating",
		name: "newComment",
		component: NewComment,
	},
	{
		path: "/categories/:categoryId",
		component: BookCategory,
	},
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
		path: "/support/environmental-exploration",
		component: Env,
	},
	{
		path: "/:pathMatch(.*)*",
		component: PageNotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior,
});

const DEFAULT_TITLE = "Hire me";

router.afterEach((to, from) => {
	nextTick(() => {
		document.title = to.meta.title || DEFAULT_TITLE;
	});
});

export default router;
