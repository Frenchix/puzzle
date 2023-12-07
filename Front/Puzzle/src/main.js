import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import { setupUserOnlineStatusTracking } from './database/firebase.js';

import App from './App.vue'
import router from './router'

//Permet de mettre à jour le status de l'utilisateur Online/Offline
setupUserOnlineStatusTracking();

const app = createApp(App)

app.use(createPinia())
app.use(ToastPlugin)
app.use(router)

app.mount('#app')
