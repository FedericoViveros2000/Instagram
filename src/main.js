import { createApp } from 'vue'
import App from './Views/App.vue'
import store from './store'
import index from './router';
createApp(App).use(store).use(index).mount('#app')
