<template>
  <div style="width: 100%; height: 100%">
    <!-- 指纹扫描动画 -->
    <div class="body_1">
      <div class="scan"></div>
      <h3>Scan...</h3>
    </div>
    <!-- 发光泡泡动画 -->
    <div class="body_2">
      <div class="box">
        <div class="bubble" />
        <div class="shadow" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
// 指纹扫描动画
.body_1 {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #111111;

  .scan {
    position: relative;
    width: 120px;
    height: 120px;
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
// 发光泡泡动画
.body_2 {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(150deg, #d299c2, #fef9d7);
  overflow: hidden;
  .box {
    width: 100px;
    height: 100px;
    position: relative;
    .bubble {
      width: 100%;
      height: 100%;
      background: radial-gradient(at 75% 25%, #fff 5px, #ff21c0 8%, #5b5b5b 60%, #ff21c0 100%);
      border-radius: 50%;
      box-shadow: inset 0 0 10px #fff, inset 5px 0 23px #eaf5fc, inset 40px 0 30px #efcde6, inset -10px -30px 50px #f9f6de,
        inset 0 25px 70px #f9f6de, 0 0 45px #fff;
      // 址姓动画：动画名称 时长 加速后减速 无限播放
      animation: bubble 2s ease-in-out infinite;
    }
    @keyframes bubble {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-40px);
      }
    }
    .shadow {
      background-color: rgba(0, 0, 0, 0.15);
      width: 75px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      left: 12px;
      bottom: -40px;
      filter: blur(1px);
      animation: shadow 2s ease-in-out infinite;
    }
    @keyframes shadow {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(0.5);
      }
    }
  }
}
</style>
