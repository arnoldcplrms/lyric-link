import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import VideoEmbed from './components/SessionComponents/VideoEmbed.vue';
import AddSongs from './components/MobileComponents/AddSongs.vue';
import LyricLinkLogin from './components/LyricLinkLogin.vue';
import EnterYourName from './components/MobileComponents/EnterYourName.vue'
import CreateOrJoin from './components/SessionComponents/CreateOrJoin.vue'
// Create the router
const routes = [
  { path: '/', component: EnterYourName },
  { path: '/options', component: CreateOrJoin },
  { path: '/session', component: VideoEmbed },
  { path: '/add-songs', component: AddSongs },
  { path: '/login', component: LyricLinkLogin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app');
