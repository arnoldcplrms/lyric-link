import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@mdi/font/css/materialdesignicons.css';
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

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app');
