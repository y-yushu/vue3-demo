<script setup>
import { ref } from 'vue'
import YysFather from './components/yys-father.vue'
import YysChildren from './components/yys-children.vue'

// 页面组件
const father = ref(null)

// 广播数据
const message = ref('')

// 当前输入框
const input1 = ref('')
const toShow1 = t => (input1.value = t)
const input2 = ref('')
const toShow2 = t => (input2.value = t)
const input3 = ref('')
const toShow3 = t => (input3.value = t)
const input4 = ref('')
const toShow4 = t => (input4.value = t)

const sendBroadcast = () => {
  father.value.open(message.value)
}
</script>

<template>
  <yys-father ref="father">
    <yys-children name="name1" @toShow="toShow1">
      <el-input v-model="input1" />
    </yys-children>
    <yys-children name="name2" @toShow="toShow2">
      <el-input v-model="input2" />
    </yys-children>
    <yys-children name="name3" @toShow="toShow3">
      <el-input v-model="input3" />
    </yys-children>
    <yys-children name="name4" @toShow="toShow4">
      <el-input v-model="input4" />
    </yys-children>
  </yys-father>
  <el-input v-model="message" placeholder="Please input">
    <template #append>
      <el-button type="text" @click="sendBroadcast()">触发广播</el-button>
    </template>
  </el-input>
</template>
