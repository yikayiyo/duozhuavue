import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import store from "./store";
import apolloProvider from "./graphql";

createApp(App).use(apolloProvider).use(router).use(store).mount("#app");
