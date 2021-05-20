import { createRouter, createWebHashHistory } from 'vue-router'

const router = new createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/view/Home.vue')
    },
    {
      path: '/user',
      component: () => import('@/view/User.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
