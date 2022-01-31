import { createApp } from 'vue'
import App from './App.vue'

import {routes} from './router/router.js';
import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App);
app.use(router);
app.mount('#app');
