import { createRouter, createWebHistory } from "vue-router";
import PostsView from "../views/PostsView.vue"
import ProductsView from "../views/ProductsView.vue"
import ProductsDetailView from "../views/ProductsDetailView.vue"
const routes = [
  {path: "/", component: PostsView},
  { path: "/products", component:  ProductsView },
  { path: "/detail/:id", component: ProductsDetailView}
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;