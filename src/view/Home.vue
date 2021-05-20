<template>
  <div class="page">
    <div class="page_1" v-box></div>
    <div class="page_2" v-box></div>
    <!-- <div class="page_1" @mouseover="mouseover"></div> -->
    <div class="demo" v-drag>
      <span class="demo_span">{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      title: 'My Home'
    }
  },
  methods: {
    mouseover(e) {
      console.log('鼠标移入')
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
// 盒子元素1
.page_1 {
  width: 300px;
  height: 200px;
  background-color: rgba(19, 139, 109, 0.493);
}
// 盒子元素2
.page_2 {
  position: relative;
  top: 50px;
  left: 60px;
  width: 400px;
  height: 300px;
  background-color: rgba(201, 225, 65, 0.863);
}
// 可拖动组件
.demo {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: rgba(65, 105, 225, 0.24);
  position: absolute;
  top: 10px;
  left: 10px;
  text-align: center;
}
</style>
