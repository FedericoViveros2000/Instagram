import { createRouter, createWebHistory } from "vue-router";
import ProductsComponent from "../components/ProductsComponent.vue"
const routes = [
  { path: "/", component: ProductsComponent },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;