import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getCurrentUser } from '../database/firebase'
import { useUserStore } from '../store/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/game',
        name: 'game',
        component: () => import('../views/GameView.vue')
    },
    {
        path: "/login",
        name: "Login",
        component: () => import('../views/Login.vue')
    },
    {
        path: "/signup",
        name: "Signup",
        component: () => import('../views/Signup.vue')
    },
    {
        path: "/profil",
        name: "Profil",
        component: () => import('../views/Profil.vue')
    },
    {
        path: "/resetPassword",
        name: "ResetPassword",
        component: () => import('../views/ResetPassword.vue')
    },
  ]
})

router.beforeEach(async (to, from) => {
    const store = useUserStore();
    const { updateUser } = store;
    try {
        const user = await getCurrentUser();
        // if (!user) {
        //     if (to.name !== 'Login' && to.name !== 'Signup' && to.name !== 'ResetPassword'){
        //         throw new Error("Besoin de s'identifier");
        //     }
        // } else {
        if (user) {
            if (to.name === 'Login' || to.name === 'Signup' || to.name === 'ResetPassword') {
                return { name : 'Home' }
            }
            updateUser(user.displayName, user.email, user.emailVerified, user.providerData[0].providerId, user.uid)
        }
        return true
    } catch (error) {
        console.log(error);
        return { name : 'Login' }
    }
  })

export default router
