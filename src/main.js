import { createApp } from 'vue'
import App from '@/App.vue'

// 路由
import router from '@/route'

// 状态管理
import { store } from '@/store'

// Element UI 框架
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(router).use(store).use(ElementPlus, { size: 'small' }).mount('#app')
