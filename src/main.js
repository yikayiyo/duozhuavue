import { createApp, h, provide } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "./graphql";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import Toast, {POSITION} from "vue-toastification";
import "vue-toastification/dist/index.css";

const toastOptions = {
	timeout: 3000,
	position: POSITION.TOP_CENTER,
	closeButton: false,
};

const app = createApp({
	setup() {
		provide(DefaultApolloClient, apolloClient);
	},
	render: () => h(App),
});
app.use(Toast, toastOptions);
app.use(router).mount("#app");
