import { createRouter, createWebHashHistory } from 'vue-router'

const router = new createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/20210825'
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
    },
    {
      // 尚美测试倒计时
      path: '/20210805',
      component: () => import('@/view/20210805/index.vue')
    },
    {
      // 测试批量校验
      path: '/20210825',
      component: () => import('@/view/20210825/index.vue')
    }
  ]
})

router.beforeEach((_1, _2, next) => {
  next()
})

export default router
