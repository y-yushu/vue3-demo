<template>
  <div class="body">
    <div class="square">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
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
  background: linear-gradient(135deg, #fce38a, #f38181);
  ul li {
    position: absolute;
    background-color: #e6e1e1;
    width: 30px;
    height: 30px;
    list-style: none;
    opacity: 0;
  }
  .square li {
    top: 40vh;
    left: 60vw;
    animation: square 10s linear infinite;
  }
  .square li:nth-child(2) {
    top: 50vh;
    left: 30vw;
    animation-delay: 2s;
  }
  .square li:nth-child(3) {
    top: 80vh;
    left: 30vw;
    animation-delay: 4s;
  }
  .square li:nth-child(4) {
    top: 10vh;
    left: 70vw;
    animation-delay: 6s;
  }
  .square li:nth-child(5) {
    top: 20vh;
    left: 40vw;
    animation-delay: 8s;
  }
  @keyframes square {
    0% {
      transform: scale(0) rotateY(0deg);
      opacity: 1;
    }
    100% {
      transform: scale(5) rotateY(1000deg);
      opacity: 0;
    }
  }
}
</style>
