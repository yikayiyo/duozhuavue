import { createRouter, createWebHistory } from "vue-router";
import Book from "../pages/Book.vue";
import Clothing from "../pages/Clothing.vue";
import Electronics from "../pages/Electronics.vue";
import Original from "../pages/Original.vue";

const routes = [
	{ path: "/book", component: Book },
	{ path: "/clothing", component: Clothing },
	{ path: "/electronics", component: Electronics },
	{ path: "/original", component: Original },
	{ path: "/", component: Book },
];

export default createRouter({
	history: createWebHistory(),
	routes,
});
