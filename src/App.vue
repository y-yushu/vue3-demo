<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { redirect, routes } from '@/route/index.js'

// 路由
const router = useRouter()

// 当前路由
const active = ref(redirect)
// 路由跳转
const toMenu = ({ path }) => router.push({ path })

// 路由改变
watch(
  () => router.currentRoute.value.path,
  path => (active.value = path)
)

/**
 * 改变左侧菜单栏宽度
 * 注释：传递到每个组件中，如果组件需要，则单个组件自己调用
 */
const gridWidth = ref('200px')
const changeWidth = () => {
  if (gridWidth.value) {
    gridWidth.value = 0
  } else {
    gridWidth.value = '200px'
  }
}
</script>

<template>
  <div class="page_grid">
    <div class="page_left">
      <el-menu :default-active="active" class="el-menu-vertical-demo">
        <el-menu-item v-for="item in routes" :key="item.path" :index="item.path" @click="toMenu(item)">
          <span>{{ item.title }}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div>
      <router-view :change="changeWidth" />
    </div>
  </div>
</template>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: white;
}

.page_grid {
  height: 100%;
  display: grid;
  grid-template-columns: v-bind('gridWidth') 1fr;
}
.page_left {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
