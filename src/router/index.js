import { createRouter, createWebHistory } from 'vue-router'
import UserLoginView from '@/views/UserLoginView.vue'
import HomeView from '@/views/HomeView.vue'
import AdminLoginView from '@/views/AdminLoginView.vue'
import AdminDashboardView from '@/views/admin/AdminDashboardView.vue'
import ImportView from '@/views/ImportView.vue'
import EspacesView from '@/views/EspacesView.vue'
import Reservation from '@/views/Reservation.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: UserLoginView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/admin',
      name: 'admin-login',
      component: AdminLoginView,
    },
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: AdminDashboardView,
    },
    {
      path: '/import',
      name: 'import',
      component: ImportView,
    },
    {
      path: '/espace',
      name: 'espace',
      component: EspacesView,
    },
    {
      path: '/reservation/:espace/:date',
      component: Reservation,
    },
  ],
})

export default router
