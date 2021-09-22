import { createRouter, createWebHashHistory } from "vue-router";
import Book from "../pages/Book.vue";
import Clothing from "../pages/Clothing.vue";

const routes = [
	{ path: "/", component: Book },
	{ path: "/clothing", component: Clothing },
];

export default createRouter({
	history: createWebHashHistory(),
	routes,
});
