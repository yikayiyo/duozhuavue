import { createRouter, createWebHistory } from "vue-router";
import Book from "../pages/Book.vue";
import Clothing from "../pages/Clothing.vue";
import Electronics from "../pages/Electronics.vue";
import Original from "../pages/Original.vue";
import SearchBook from "../pages/SearchBook.vue";
import SearchElectronics from "../pages/SearchElectronics.vue";
import SearchClothing from "../pages/SearchClothing.vue";
import OpenCollection from "../pages/OpenCollection.vue";

const routes = [
	{ path: "/", component: Book },
	{ path: "/clothing", component: Clothing },
	{ path: "/electronics", component: Electronics },
	{ path: "/original", component: Original },
	{ path: "/book", redirect: "/" },
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
		path: "/open-collections/:id",
		component: OpenCollection,
	},
];

export default createRouter({
	history: createWebHistory(),
	routes,
});
