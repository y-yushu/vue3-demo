<script setup>
import { ref } from 'vue'
import * as PdfJs from 'pdfjs-dist/build/pdf.js'
import workerSrc from 'pdfjs-dist/build/pdf.worker.entry'
// import Pdf from './test1.pdf'
import Pdf from './test2.pdf'

/**
 * pdf渲染相关
 */
const pdflenght = ref(0)
// 解析方式
PdfJs.GlobalWorkerOptions.workerSrc = workerSrc
// 渲染pdf
const loadingTask = PdfJs.getDocument(Pdf)
loadingTask.promise.then(pdf => {
  // 总长度
  pdflenght.value = pdf.numPages || 0

  // 根据页码进行渲染
  const torender = (num, sum) => {
    pdf.getPage(num).then(page => {
      // 开始渲染
      const scale = 1
      const viewport = page.getViewport({ scale: scale })
      // 设备像素比
      const outputScale = window.devicePixelRatio || 1

      // 创建像素
      let canvas = document.getElementById('pdf-canvas-' + num)
      const context = canvas.getContext('2d')

      canvas.width = Math.floor(viewport.width * outputScale)
      canvas.height = Math.floor(viewport.height * outputScale)
      canvas.style.width = Math.floor(viewport.width) + 'px'
      canvas.style.height = Math.floor(viewport.height) + 'px'

      const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null

      const renderContext = {
        canvasContext: context,
        transform: transform,
        viewport: viewport
      }
      page.render(renderContext)
      // 循环调用，每秒一次
      setTimeout(() => {
        if (num + 1 <= sum) torender(num + 1, sum)
        else console.log('加载完成')
      }, 20)
    })
  }
  // 如果页码存在，则开始调用
  if (pdflenght.value) torender(1, pdflenght.value)
})

/**
 * 页面显示相关
 */
const show = ref(false)
// 鼠标移入移出
const move = value => (show.value = value)
// 点击打印
const types = {
  png: 'image/png',
  jpg: 'image/jpeg',
  webp: 'image/webp'
}
const print = () => {
  console.log('触发打印')
  for (let i = 1; i <= pdflenght.value; i++) {
    const canvas = document.getElementById('pdf-canvas-' + i)
    const a = document.createElement('a')
    a.href = canvas.toDataURL(types.png)
    a.download = '测试' + i
    a.click()
  }
}
</script>

<template>
  <div class="header" @mouseover="move(true)" @mouseleave="move(false)">
    <div v-if="show" class="buttons">
      <el-button type="primary" @click="print()">测试</el-button>
    </div>
  </div>
  <canvas v-for="index in pdflenght" :key="index" :id="'pdf-canvas-' + index" />
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;

  .buttons {
    width: 100%;
    height: 100%;
    background-color: #c9d8cda8;
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
