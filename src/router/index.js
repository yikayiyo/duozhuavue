import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Book from "../pages/Book.vue";
import Clothing from "../pages/Clothing.vue";
import Electronics from "../pages/Electronics.vue";
import Original from "../pages/Original.vue";
import SearchBook from "../pages/SearchBook.vue";
import SearchElectronics from "../pages/SearchElectronics.vue";
import SearchClothing from "../pages/SearchClothing.vue";
import OpenCollections from "../pages/OpenCollections.vue";
import OpenCollection from "../pages/OpenCollection.vue";
import BookService from "../pages/BookService.vue";
import Support from "../pages/Support.vue";
import Env from "../pages/Env.vue";

const routes = [
	{ path: "/", component: Home },
	{ path: "/clothing", component: Clothing },
	{ path: "/electronics", component: Electronics },
	{ path: "/original", component: Original },
	{ path: "/book", redirect: "/" },
	{ path: "/books/:bookId", component: Book },
	{
		path: "/search/book",
		component: SearchBook,
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
