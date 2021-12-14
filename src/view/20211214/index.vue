<script setup></script>

<template>
  <span>2021.12.14 以目前的形势，纯使用CSS无法实现瀑布流，可以做竖向的，但是横向的还是不行，还是要加入js计算</span>
  <div class="page">
    <div class="module div_1">1</div>
    <div class="module div_2">2</div>
    <div class="module div_3">3</div>
    <div class="module div_4">4</div>
    <div class="module div_5">5</div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  width: 400px;
  height: 600px;
  margin-top: 20px;
  margin-left: 20px;
  background-color: #ffff4d;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: dense;


  .module {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .div_1 {
    height: 120px;
    background-color: #c66f35;
  }
  .div_2 {
    height: 140px;
    background-color: #b80233;
  }
  .div_3 {
    height: 300px;
    background-color: #c8e6c6;
  }
  .div_4 {
    height: 110px;
    background-color: #dffff5;
  }
  .div_5 {
    height: 80px;
    background-color: #122c4b;
  }
}
</style>
