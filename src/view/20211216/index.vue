<script setup>
import { onMounted, ref } from 'vue'
import * as PIXI from 'pixi.js'
// 引入素材
import Cat from '@/assets/image/cat.png'
import Hamb from '@/assets/image/hamburger.png'

// 容器宽度高度
const width = ref(0)
const height = ref(0)

// 组件加载完成
onMounted(() => {
  // 容器加载及数据获取
  const page = document.getElementById('page')
  width.value = page.offsetWidth
  height.value = page.offsetHeight
  // 容器初始化
  const app = new PIXI.Application({ width: width.value, height: height.value, backgroundColor: 0x0b2144 })
  page.appendChild(app.view)
  // 监听引入进度
  app.loader.onProgress.add((loader, resource) => {
    console.log('引入素材: ' + resource.url)
    console.log('引入进度: ' + loader.progress + '%')
  })
  // 引入素材
  app.loader
    .add([
      {
        name: 'cat',
        url: Cat
      },
      {
        name: 'hamb',
        url: Hamb
      }
    ])
    .load((_, resources) => {
      // 设置猫相关操作
      const cat = new PIXI.Sprite(resources.cat.texture)
      cat.x = app.renderer.width / 2
      cat.y = app.renderer.height / 2
      cat.anchor.set(0.5, 0.5)
      const animals = new PIXI.Container()
      animals.addChild(cat)
      console.log('width', animals.width)
      console.log('height', animals.height)
      app.stage.addChild(animals)
      // 设置汉堡位置
      // const hamb = new PIXI.Sprite(resources.hamb.texture)
      // hamb.x = 200
      // hamb.y = 200
      // hamb.width = 200
      // hamb.height = 200
      // app.stage.addChild(hamb)
      // 监听帧更新
      app.ticker.add(() => {
        // 每一帧我们都让猫转一圈
        cat.rotation += 0.01
      })
    })
})
</script>

<template>
  <div id="page" class="background" />
</template>

<style lang="scss" scoped>
.background {
  width: 100%;
  height: 100%;
}
</style>
