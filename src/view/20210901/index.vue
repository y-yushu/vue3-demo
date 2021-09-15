<script setup>
import { ref, reactive } from 'vue'

// 表单元素
const dom = ref(null)
// 校验规则
const rules = {
  affirm: [
    {
      required: true,
      validator: (_1, _2, cb) => {
        const { checked1 } = form
        cb(checked1 ? '' : '请先阅读通知')
      },
      trigger: 'blur'
    }
  ]
}
// 绑定数据
const form = reactive({
  name: '',
  checked1: false
})
// 测试方法
const onSubmit = () => {
  console.log('提交数据', form)
  // 开始校验
  dom.value.validate(valid => {
    console.log('校验结果', valid)
  })
}
</script>

<template>
  <el-form ref="dom" :model="form" :rules="rules" label-width="80px">
    <el-form-item label="名称" prop="name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="提交须知" prop="affirm">
      <el-checkbox v-model="form.checked1" label="我已阅读须知" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">测试</el-button>
    </el-form-item>
  </el-form>
</template>
