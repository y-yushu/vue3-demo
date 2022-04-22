<template>
  <div class="body">
    <div class="scan"></div>
    <h3>Scan...</h3>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #111111;

  .scan {
    position: relative;
    width: 160px;
    height: 160px;
    background: url('./fingerprint1.png');
    background-size: 100%;
  }
  .scan::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('./fingerprint2.png');
    background-size: 100%;
    animation: animate 4s ease-in-out infinite;
  }
  @keyframes animate {
    0%,
    100% {
      height: 0%;
    }
    50% {
      height: 100%;
    }
  }
  .scan::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #3fefef;
    border-radius: 4px;
    filter: drop-shadow(0 0 20px #3fefef) drop-shadow(0 0 60px #3fefef);
    animation: animate2 4s ease-in-out infinite;
  }
  @keyframes animate2 {
    0%,
    100% {
      top: 0;
    }
    50% {
      top: 100%;
    }
  }
  h3 {
    margin-top: 5px;
    color: #3fefef;
    filter: drop-shadow(0 0 10px #3fefef);
  }
}
</style>
