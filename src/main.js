import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import "@fontsource/montserrat"
import "./assets/icomoon/style.css"
import store from './vuex/store.js'



const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
