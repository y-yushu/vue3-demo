<script setup>
import { ref } from 'vue'
import * as PdfJs from 'pdfjs-dist/build/pdf.js'
import workerSrc from 'pdfjs-dist/build/pdf.worker.entry'
// import Pdf from './test1.pdf'
import Pdf from './test2.pdf'

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
</script>

<template>
  <button>解析</button>
  <canvas v-for="index in pdflenght" :key="index" :id="'pdf-canvas-' + index" />
</template>
