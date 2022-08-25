import { createRouter, createWebHistory } from "vue-router";
import PostsView from "../views/PostsView.vue"
import ProductsView from "../views/ProductsView.vue"
import ProductsDetailView from "../views/ProductsDetailView.vue"
import SearchUsersView from "../Views/SearchUsersView.vue"
//import LikedPostsView from "../views/LikedPostsView.vue"
//import LikedPostComponent from "../components/posts/LikedPostComponent.vue"
import LikedPost from "../components/posts/LikedPostComponent.vue";
import DarkMode from "../components/mode/DarkModeComponent.vue"
const routes = [
  {path: "/", component: PostsView},
  {path: "/products", component:  ProductsView },
  {path: "/detail/:id", component: ProductsDetailView},
  {path: "/users", component: SearchUsersView},
  {path: "/likedPosts", component: LikedPost, meta: {transition: "liked"}},
  {path: "/profile", component: DarkMode}
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;