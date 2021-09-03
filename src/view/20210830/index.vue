<script setup>
import { reactive } from 'vue'
const tableData = reactive([
  {
    date: '2016-05-02',
    name: '王小虎',
    list: ['测试1', '测试1'],
    address: '上海市普陀区金沙江路 1518 弄'
  }
])
const log = e => {
  console.log(e)
  return e
}
const clickLog = e => {
  console.log(e)
}
</script>

<template>
  <el-table :data="tableData" style="width: 100%" @row-click="clickLog">
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column label="测试合并" width="180">
      <template #default="{ row }">
        <div class="ccc" v-for="item in row.list" :key="item">
          {{ item }}
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
  </el-table>
</template>

<style lang="scss" scoped>
.ccc {
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
