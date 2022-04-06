<script setup>
import metro from './data/index'
import Tool from './data/utils'

const qingdao = new Tool(metro.qingdao)
const path = qingdao.getPath('beizhai', 'qingdaokeda')
console.log(path)
// let aaa = ['111', '222', '333', '444', '555']
// aaa.splice(aaa.length - 1, 1)
// console.log(aaa.length)
// console.log(aaa[aaa.length - 1])
</script>

<template>
  <span>123</span>
</template>

<style scoped></style>
