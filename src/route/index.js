import { createRouter, createWebHashHistory } from 'vue-router'

// 当前路由列表
const routes = [
  {
    // 做些小题
    path: '/20211122',
    title: '做些小题',
    component: () => import('@/view/20211122/index.vue')
  },
  {
    // CSS实现3D正方形
    path: '/20211111',
    title: 'CSS实现3D正方形',
    component: () => import('@/view/20211111/index.vue')
  },
  {
    // 尝试组件嵌套（多级组件）
    path: '/20211028',
    title: '尝试组件嵌套（多级组件）',
    component: () => import('@/view/20211028/index.vue')
  },
  {
    // 分割txt文件
    path: '/20211025',
    title: '分割txt文件',
    component: () => import('@/view/20211025/index.vue')
  },
  {
    // 测试表单校验
    path: '/20210901',
    title: '测试表单校验',
    component: () => import('@/view/20210901/index.vue')
  },
  {
    // 尝试新的合并单元格
    path: '/20210830',
    title: '尝试新的合并单元格',
    component: () => import('@/view/20210830/index.vue')
  },
  {
    // 测试批量校验
    path: '/20210825',
    title: '测试批量校验',
    component: () => import('@/view/20210825/index.vue')
  },
  {
    // 尚美测试倒计时
    path: '/20210805',
    title: '尚美测试倒计时',
    component: () => import('@/view/20210805/index.vue')
  },
  {
    // 元素传值及当前方法接收
    path: '/20210708',
    title: '元素传值及当前方法接收',
    component: () => import('@/view/20210708/index.vue')
  },
  {
    // dom定位及css效果
    path: '/home1',
    title: 'dom定位及css效果',
    component: () => import('@/view/Home1.vue')
  },
  {
    // websocket长连接
    path: '/home',
    title: 'websocket长连接',
    component: () => import('@/view/Home.vue')
  }
]
// 默认路由（最新的一页）
const redirect = routes[0].path

const router = new createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect
    },
    ...routes
  ]
})

router.beforeEach((_1, _2, next) => {
  next()
})

export default router

export { redirect, routes }
