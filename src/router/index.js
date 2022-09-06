import { createRouter, createWebHistory } from "vue-router";
import PostsView from "../views/PostsView.vue"
import ProductsView from "../views/ProductsView.vue"
import ProductsDetailView from "../views/ProductsDetailView.vue"
import SearchUsersView from "../Views/SearchUsersView.vue"
import ReelsView from "../Views/ReelsView.vue";
//import LikedPostsView from "../views/LikedPostsView.vue"
//import LikedPostComponent from "../components/posts/LikedPostComponent.vue"
import LikedPost from "../components/posts/LikedPostComponent.vue";
//import DarkMode from "../components/mode/DarkModeComponent.vue";
const routes = [
  {path: "/Instagram", component: PostsView},
  {path: "/Instagram/reels", component: ReelsView},
  {path: "/Instagram/products", component:  ProductsView },
  {path: "/Instagram/detail/:id", component: ProductsDetailView},
  {path: "/Instagram/users", component: SearchUsersView},
  {path: "/Instagram/likedPosts", component: LikedPost, meta: {transition: "liked"}},
  //{path: "/Instagram/profile", component: DarkMode}
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;