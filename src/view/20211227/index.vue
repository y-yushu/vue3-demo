<template>
  <div class="pdf-page">
    <canvas id="pdf-canvas"></canvas>
  </div>
</template>
<script>
import Pdf from './test.pdf'
import * as PdfJs from 'pdfjs-dist/legacy/build/pdf.js'
import workerSrc from 'pdfjs-dist/build/pdf.worker.entry'
PdfJs.GlobalWorkerOptions.workerSrc = workerSrc

const loadingTask = PdfJs.getDocument(Pdf)
loadingTask.promise.then(pdf => {
  console.log('pdf\n', pdf)
  pdf.getPage(1).then(page => {
    console.log('page\n', page)

    // 开始渲染
    const scale = 1
    const viewport = page.getViewport({ scale: scale })
    const outputScale = window.devicePixelRatio || 1

    let canvas = document.getElementById('pdf-canvas')
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
  })
})
</script>

<style lang="scss" scoped>
.pdf-page {
  border: 1px solid rebeccapurple;
  margin: 0 auto;
}
</style>
