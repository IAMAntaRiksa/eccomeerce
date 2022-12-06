import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/Index.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/category/Index.vue')
    },
    {
      path: '/category/:slug',
      name: 'detail_category',
      component: () => import('../views/category/Show.vue')
    },
  ]
})

export default router
