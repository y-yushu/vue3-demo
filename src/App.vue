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
      <router-view />
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
  grid-template-columns: 200px 1fr;
}
.page_left {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
