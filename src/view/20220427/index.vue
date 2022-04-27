<template>
  <div class="body">
    <div class="loader">
      <span class="ball" style="--i: 1"></span>
      <span class="ball" style="--i: 2"></span>
      <span class="ball" style="--i: 3"></span>
      <span class="ball" style="--i: 4"></span>
      <span class="ball" style="--i: 5"></span>
      <span class="shadow" style="--i: 1"></span>
      <span class="shadow" style="--i: 2"></span>
      <span class="shadow" style="--i: 3"></span>
      <span class="shadow" style="--i: 4"></span>
      <span class="shadow" style="--i: 5"></span>
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
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;

  .loader {
    width: 650px;
    height: 200px;
    position: relative;
  }
  .loader span.ball {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: lightseagreen;
    position: absolute;
    left: calc(var(--i) * 100px);
    animation: jump 2s linear infinite calc(var(--i) * 0.3s);
    z-index: 10;
  }
  @keyframes jump {
    0%,
    100% {
      bottom: 150px;
    }
    46%,
    60% {
      bottom: 0;
      height: 50px;
    }
    50% {
      height: 25px;
      filter: hue-rotate(180deg);
    }
  }
  .loader span.shadow {
    width: 50px;
    height: 25px;
    border-radius: 50%;
    background-color: #000;
    position: absolute;
    left: calc(var(--i) * 100px);
    bottom: -12px;
    animation: shadow 2s linear infinite calc(var(--i) * 0.3s - 2s);
  }
  @keyframes shadow {
    0%,
    100% {
      transform: scale(2);
      opacity: 0.1;
      filter: blur(2px);
    }
    40%,
    60% {
      transform: scale(1);
      opacity: 1;
      filter: blur(5px);
    }
  }
}
</style>
