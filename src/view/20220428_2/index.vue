<template>
  <div class="body">
    <div class="box">
      <div class="flipper">
        <div class="front">123</div>
        <div class="back">456</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.body {
  width: 100%;
  height: 100%;
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    width: 200px;
    height: 240px;
    perspective: 1000;
  }
  .box:hover .flipper {
    transform: rotateY(180deg);
  }
  .flipper,
  .front,
  .back {
    width: 100%;
    height: 100%;
  }
  .flipper {
    transition: 1.2s;
    transform-style: preserve-3d;
  }
  .front,
  .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
  .front {
    background: orange;
  }
  .back {
    background: blueviolet;
    transform: rotateY(180deg);
  }
}
</style>
