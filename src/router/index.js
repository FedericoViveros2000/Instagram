import { createRouter, createWebHistory } from "vue-router";
import PostsView from "../views/PostsView.vue"
import ProductsView from "../views/ProductsView.vue"
import ProductsDetailView from "../views/ProductsDetailView.vue"
import SearchUsersView from "../Views/SearchUsersView.vue"
import ReelsView from "../Views/ReelsView.vue";
//import LikedPostsView from "../views/LikedPostsView.vue"
//import LikedPostComponent from "../components/posts/LikedPostComponent.vue"
import LikedPost from "../components/posts/LikedPostComponent.vue";
import DarkMode from "../components/mode/DarkModeComponent.vue";
const routes = [
  {path: "/", component: PostsView},
  {path: "/ecommerce/reels", component: ReelsView},
  {path: "/ecommerce/products", component:  ProductsView },
  {path: "/ecommerce/detail/:id", component: ProductsDetailView},
  {path: "/ecommerce/users", component: SearchUsersView},
  {path: "/ecommerce/likedPosts", component: LikedPost, meta: {transition: "liked"}},
  {path: "/ecommerce/profile", component: DarkMode}
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;