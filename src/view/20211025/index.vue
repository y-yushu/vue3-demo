<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

// 选择项
const activeName = ref('first')
// 文件属性
const file = reactive({
  isRead: false, // 是否读取
  name: '', // 名称
  details: '' // 内容
})

// 选择读取文件
const fileChange = e => {
  const input = e.target
  let reader = new FileReader()
  if (input.files.length) {
    const _file = input.files[0]
    reader.readAsText(_file)
    reader.onload = () => {
      file.isRead = true // 已读取
      file.name = _file.name // 文件名称
      file.details = reader.result // 内容
    }
  }
}

/**
 * 分割逻辑
 */
// 分割参数
const splitType = ref('1') // 分割类型
const splitNum = ref(5) // 字符分割长度
const splitValue = ref(1000) // 字符分割单位
const splitOptions = [
  {
    label: '字',
    value: 1
  },
  {
    label: '千字',
    value: 1000
  },
  {
    label: '百万',
    value: 1000 * 1000
  }
]
const splitAverage = ref(2) // 份额分割
// 分割方法
const segmentation = () => {
  const { details } = file // 文件参数
  const len = details.length // 总长度
  // 获取拆分单位
  let size = 0
  // 根据字数拆分
  if (splitType.value === '1') size = splitNum.value * splitValue.value
  // 根据份数平均拆分
  else if (splitType.value === '2') size = Math.ceil(len / splitAverage.value)
  // 意外情况
  if (size <= 0) return ElMessage.error('单位出错，无法分割。')
  // 递归获取拆分结果
  const getPortion = (sub = 0, arr = []) => {
    if (sub >= len) return arr
    const text = details.substring(sub, sub + size)
    arr.push(text)
    return getPortion(sub + size, arr)
  }
  const texts = getPortion()
  // 拆分完成，开始下载
  const time = Date.parse(new Date())
  texts.forEach((e, i) => {
    let link = document.createElement('a')
    link.href = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(e)
    link.download = `${time}-${i + 1}.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  })
}
</script>

<template>
  <div class="page">
    <el-tabs v-model="activeName">
      <!-- 分割 -->
      <el-tab-pane label="分割" name="first">
        <el-input v-model="file.name" placeholder="点击上传文件" readonly>
          <template #append>
            <div class="upload-file">
              <input type="file" accept=".txt" @change="fileChange" />
              {{ '上传文件' }}
            </div>
          </template>
        </el-input>
        <el-row style="margin-top: 20px" :gutter="16">
          <el-col :span="10">
            <el-input v-model="splitNum" type="number" :disabled="splitType !== '1'">
              <template #prepend>
                <el-radio v-model="splitType" label="1">字数分割</el-radio>
              </template>
              <template #append>
                <el-select v-model="splitValue" style="width: 80px" :disabled="splitType !== '1'">
                  <el-option v-for="item in splitOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
              </template>
            </el-input>
          </el-col>
          <el-col :span="10">
            <el-input v-model="splitAverage" type="number" :disabled="splitType !== '2'">
              <template #prepend>
                <el-radio v-model="splitType" label="2">平均分割</el-radio>
              </template>
              <template #append>
                {{ '份' }}
              </template>
            </el-input>
          </el-col>
          <el-col :span="4" style="text-align: right">
            <el-button type="primary" :disabled="!file.isRead" @click="segmentation" style="width: 80px">开始分割</el-button>
          </el-col>
        </el-row>
      </el-tab-pane>
      <!-- 整合 -->
      <el-tab-pane label="整合" name="second">Config</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>
.page {
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #f1f1f1;
}

// 上传按钮
.upload-file {
  width: 100%;
  height: 100%;

  input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
}
</style>
