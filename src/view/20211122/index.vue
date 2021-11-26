<script setup>
// 1. 求和
const getSum = () => {
  const add = (arr, di) => {
    const len = arr.length
    if (len > di) return arr
    arr.push(arr[len - 2] + arr[len - 1])
    return add(arr, di)
  }
  // const arr1 = add([0, 1], 9)
  // console.log('查询第九位')
  // console.log(arr1)
  const arr2 = add([0, 1], 30)
  console.log('查询第30位')
  console.log(arr2)
}
// 2. 使用内存
const useMemory = () => {
  const func = (a, b) => {
    a = 20
    b.push(30)
  }
  let num = 10
  let arr = [0, 1]
  console.log('变化前', num, arr)
  func(num, arr)
  console.log('变化后', num, arr)
}

// 计算必须数
const demo3 = () => {
  let a, b, c, d, e, f, g
  a = 6.18
  b = a * 2
  console.log('b', b)
  c = a + b
  console.log('c', c)
  d = c / b + a
  console.log('d', d)
  e = c - d * b + a //
  console.log('e', e)
  f = e + d / c - b * a
  console.log('f', f)
  g = f * e - d + c * b + a
  console.log('g', g)
  a = g * g
  a = Math.floor(a)
  console.log('a', a)
}
</script>

<template>
  <el-button type="text" @click="getSum">求和</el-button>
  <el-button type="text" @click="useMemory">内存使用</el-button>
  <el-button type="text" @click="demo3">计算</el-button>
</template>
