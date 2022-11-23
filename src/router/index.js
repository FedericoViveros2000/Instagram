import { createRouter, createWebHistory } from "vue-router";
import PostsView from "../views/PostsView.vue"
import ProductsView from "../views/ProductsView.vue"
import ProductsDetailView from "../views/ProductsDetailView.vue"
import SearchUsersView from "../views/SearchUsersView.vue";
import DiscoverView from "../views/DiscoverView.vue";
import ReelsView from "../views/ReelsView.vue";
import LikedPost from "../components/posts/LikedPostComponent.vue";
import ChatView from "../Views/ChatView.vue";
/* import ModalChatComponent from "../components/chat/ModalChatComponent.vue" */
import ChatContactsView from "../Views/ChatContactsView.vue"
import ProfileView from "../Views/ProfileView.vue"
import PostsSendComponent from "../components/posts/PostsSendComponent.vue";
import PostsComponent from "../components/posts/PostsComponent.vue";
import PostsDiscoverView from "../Views/PostsDiscoverView.vue"

const routes = [
  {path: "/Instagram", component: PostsView},
  {path: "/Instagram/reels", component: ReelsView},
  {path: "/Instagram/products", component:  ProductsView },
  {path: "/Instagram/detail/:id", component: ProductsDetailView},
  {path: "/Instagram/users", component: SearchUsersView},
  {path: "/Instagram/discover", component: DiscoverView},
  {path: "/Instagram/likedPosts", component: LikedPost, meta: {transition: "liked"}},
  {path: "/Instagram/chatView", component: ChatView},
  {path: "/Instagram/chatContactsView", component: ChatContactsView},
  {path: "/Instagram/postSend/:id", component: PostsSendComponent},
  {path: "/Instagram/postDiscover", component: PostsComponent},
  {path: "/Instagram/profile", component: ProfileView},
  {path: "/Instagram/postMore/:id", component: PostsDiscoverView}
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;