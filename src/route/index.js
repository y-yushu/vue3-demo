import { createRouter, createWebHashHistory } from 'vue-router'

const router = new createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/20210708'
    },
    {
      // websocket长连接
      path: '/home',
      component: () => import('@/view/Home.vue')
    },
    {
      // dom定位及css效果
      path: '/home1',
      component: () => import('@/view/Home1.vue')
    },
    {
      // 元素传值及当前方法接收
      path: '/20210708',
      component: () => import('@/view/20210708/index.vue')
    }
  ]
})

router.beforeEach((_1, _2, next) => {
  next()
})

export default router
