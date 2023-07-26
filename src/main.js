import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import "@fontsource/montserrat"
import "./assets/icomoon/style.css"
import store from './vuex/store.js'
import i18n from './i18n/locale.js'
import Cookies from 'js-cookie'

const token = Cookies.get('token');
if (token) {
  store.commit('SET_TOKEN', token);
}
const app = createApp(App)
app.use(store)
app.use(router)
app.use(i18n)
app.mount('#app')
