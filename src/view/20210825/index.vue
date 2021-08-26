<template>
  <el-form>
    <el-table :data="list" :header-cell-style="{ background: '#eef1f6', color: '#606266' }" height="100" border fit highlight-current-row>
      <el-table-column align="center" prop="name" label="名称">
        <template #default="scope">
          <el-form-item prop="name">
            <el-input v-model="scope.row.name" />
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="num" label="数量">
        <template #default="scope">
          <el-form-item prop="num" :rules="[{ validator: (_1, _2, c) => customCcheck(scope.row.num, c, scope.row), trigger: 'blur' }]">
            <el-input v-model="scope.row.num" />
          </el-form-item>
        </template>
      </el-table-column>
    </el-table>
  </el-form>
  <span @click="ttt">{{ rr }}</span>
</template>

<script setup>
// import {  } from 'vue'
console.log('加载完成')
const list = [
  {
    id: 1,
    name: '',
    num: 0,
    max: 10
  },
  {
    id: 2,
    name: '',
    num: 0,
    max: 14
  }
]
const customCcheck = (b, c, item) => {
  console.log(b, item)
  if (b > item.max) c('不能超过最大值')
  else c()
}
</script>
