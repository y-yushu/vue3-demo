<template>
  <div class="page_all">
    <div class="page_1"></div>
    <div class="page_2"></div>
    <div class="page_3">
      <div class="page_3_1"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.page_all {
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  flex-direction: column;
}
.page_1 {
  width: 100%;
  height: 20%;
  background-color: yellow;
}
.page_2 {
  width: 100%;
  height: 30%;
  background-color: yellowgreen;
}
.page_3 {
  width: 100%;
  flex: 1;
  background-color: rebeccapurple;
  .page_3_1 {
    width: 100%;
    height: 100%;
    background-color: rosybrown;
  }
}
</style>
