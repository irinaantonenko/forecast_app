import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import PartnershipPage from '../components/PartnershipPage/PartnershipPage.vue'
import DashboardPage from '../components/DashboardPage/DashboardPage.vue'
import DepositPage from '../components/DepositPage/DepositPage.vue'
import NewsPage from '../components/NewsPage/NewsPage.vue'
import ProfilePage from '../components/ProfilePage/ProfilePage.vue'
import PlansPage from '../components/PlansPage/PlansPage.vue'
import WithdrawalPage from '../components/WithdrawalPage/WithdrawalPage.vue'
import AuthorizationPage from '../components/AuthorizationPage.vue'
import NotFound from '../components/NotFound.vue'
import EmailActivation from '../components/EmailActivation.vue'

const router = createRouter ({
    history: createWebHistory(),
    scrollBehavior() {
        return { left: 0, top: 0 };
    },
    routes: [
        {
            path: '/partnership',
            name: 'partnership',
            component: PartnershipPage
        },
        {
            path:'/',
            name: 'dashboard',
            component: DashboardPage
        },
        {
            path:'/deposit',
            name: 'deposit',
            component: DepositPage
        },
        {
            path:'/news',
            name: 'news',
            component: NewsPage
        },
        {
            path:'/profile',
            name: 'profile',
            component: ProfilePage
        },
        {
            path:'/plans',
            name: 'plans',
            component: PlansPage
        },
        {
            path:'/withdrawal',
            name: 'withdrawal',
            component: WithdrawalPage
        },
        {
            path:'/login',
            name: 'login',
            component: AuthorizationPage
        },
        {
            path: '/email_activation/:catchAll(.*)',
            name: 'email_activation',
            component: EmailActivation
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFound
        },
    ]
});
    router.beforeEach((to, from, next) => {
        if (to.name === 'not-found') {
            console.log(`Route not found: ${to.path}`);
        }
        next();
    });

export default router;
const app = createApp({})
app.use(router)