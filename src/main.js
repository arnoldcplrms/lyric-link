import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import { createApp } from 'vue'
import App from './App.vue'
import YoutubeIframe from '@techassi/vue-youtube-iframe';

createApp(App)
.use(YoutubeIframe)
.mount('#app')
