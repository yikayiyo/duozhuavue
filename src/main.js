import { createApp, h, provide } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "./graphql";
import App from "./App.vue";
import "./index.css";
import router from "./router";

const app = createApp({
	setup() {
		provide(DefaultApolloClient, apolloClient);
	},
	render: () => h(App),
});

app.use(router).mount("#app");
