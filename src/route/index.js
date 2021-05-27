import { createRouter, createWebHashHistory } from 'vue-router'

const router = new createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home1'
    },
    {
      path: '/home',
      component: () => import('@/view/Home.vue')
    },
    {
      // 第一版本
      path: '/home1',
      component: () => import('@/view/Home1.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
