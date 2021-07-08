<template>
  <div>
    <el-button @click="open1">打开弹窗1</el-button>
    <el-button @click="open2">打开弹窗2</el-button>
    <module-1 ref="module1" />
    <module-2 ref="module2" />
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import module1 from './components/module-1.vue'
import module2 from './components/module-2.vue'
export default {
  components: { module1, module2 },
  data() {
    return {}
  },
  methods: {
    open1() {
      const func = value => {
        ElMessage(`输入的为：${value}`)
      }
      this.$refs.module1.open(func)
    },
    open2() {
      this.$refs.module2.open().then(value => {
        ElMessage(`输入的为：${value}`)
      })
    }
  }
}
</script>
