<template>
  <el-dialog title="提示" v-model="visible" width="30%">
    <span>
      <el-input v-model="value" placeholder="请输入内容" />
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      value: '',
      callBack: null
    }
  },
  methods: {
    // 打开弹窗
    open() {
      return new Promise(cb => {
        this.callBack = cb
        this.visible = true
      })
    },
    // 点击确认
    submit() {
      if (this.callBack) {
        this.visible = false
        this.callBack(this.value)
      }
    }
  }
}
</script>
