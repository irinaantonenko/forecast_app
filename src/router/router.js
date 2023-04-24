import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import ForecastPage from '../components/ForecastPage.vue'
import FavoritePage from '../components/FavoritePage.vue'

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'forecast',
            component: ForecastPage
        },
        {
            path:'/favorite',
            name: 'favorite',
            component: FavoritePage,
            props: true
        }
    ]
})

export default router;
const app = createApp({})
app.use(router)