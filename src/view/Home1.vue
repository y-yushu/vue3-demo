<template>
  <div class="page">
    <div class="page_1" v-box></div>
    <div class="page_2" v-box></div>
    <div class="demo" v-drag="{ locateCallback: locateCallback }">
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
    locateCallback(data = {}) {
      console.log('定位回调', data)
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
.cs_color {
  background-color: red;
  animation: turn 1s linear 1;
}
@keyframes turn {
  0% {
    width: 100px;
    height: 100px;
    -webkit-transform: rotate(0deg);
  }
  25% {
    width: 75px;
    height: 75px;
    -webkit-transform: rotate(90deg);
  }
  50% {
    width: 50px;
    height: 50px;
    -webkit-transform: rotate(180deg);
  }
  75% {
    width: 25px;
    height: 25px;
    -webkit-transform: rotate(270deg);
  }
  100% {
    width: 0;
    height: 0;
    -webkit-transform: rotate(360deg);
  }
}
</style>
