import { createStore } from "vuex";
import cart from "./modules/cart";
import user from "./modules/user";
import collections from "./modules/collections";

export default createStore({
	modules: {
		cart,
		user,
		collections,
	},
});
