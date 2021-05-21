<template>
  <div class="page">
    <el-row>
      <el-button type="primary" plain @click="openLink">开启连接</el-button>
      <el-input v-model="content" placeholder="发送内容"></el-input>
      <el-button type="primary" plain @click="send">发送信息</el-button>
    </el-row>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: 'Home',
  data() {
    return {
      socket: null,
      url: 'ws://127.0.0.1:8001/ws/',
      id: nanoid(),
      content: ''
    }
  },
  unmounted() {
    this.socket.onclose = this.close()
  },
  methods: {
    openLink() {
      console.log('开启连接')
      if (typeof WebSocket === 'undefined') {
        console.error('浏览器不支持socket')
      } else {
        // 实例化socket
        console.log(`id`, this.id)
        this.socket = new WebSocket(this.url + this.id)
        // 监听socket连接
        this.socket.onopen = this.open
        // 监听socket错误信息
        this.socket.onerror = this.error
        // 监听socket消息
        this.socket.onmessage = this.getMessage
      }
    },
    // 链接成功
    open() {
      console.log('WebSocket连接成功')
    },
    // 链接异常
    error() {
      console.log('WebSocket连接异常')
    },
    send() {
      console.log('发送消息')
      const str = JSON.stringify({
        id: this.id,
        data: this.content
      })
      this.socket.send(str)
    },
    // 接收消息
    getMessage(ms) {
      console.log('接收消息', ms)
      const res = JSON.parse(ms.data)
      if (res.code === 2000) {
        console.log('接收消息', res)
      }
    },
    // 关闭链接
    close() {
      this.socket.close()
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  overflow: hidden;
  // background: linear-gradient(90deg, #ffffff 5%, transparent 0), linear-gradient(#ffffff 5%, transparent 0);
  // background-size: 2% 2%;
  // background-color: rgba(143, 90, 196, 0.479);
}
</style>
