import App from "./App.vue";
import { createApp } from "vue";
import * as VueRouter from "vue-router";

import "./style.scss";

import Home from "./pages/Home.vue";
import Product from "./pages/Product.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/product", component: Product },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
