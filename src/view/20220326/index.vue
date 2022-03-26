<script setup>
import { onMounted } from 'vue'
import * as echarts from 'echarts'

// 页面加载完成
onMounted(() => {
  // 模拟后台数据
  const list = {
    arr1: [55, 75, 93, 87, 100],
    arr2: [89, 80, 83, 74, 95]
  }
  const filtration = arr => {
    return arr.map(e => {
      if (e <= 80) {
        return e * 0.625
      } else {
        const _top = e - 80
        return _top / 0.4 + 50
      }
    })
  }
  const mock = {
    blue: {
      oldList: list.arr1,
      showList: filtration(list.arr1)
    },
    green: {
      oldList: list.arr2,
      showList: filtration(list.arr2)
    }
  }

  const myChart = echarts.init(document.getElementById('main'))
  // 绘制图表
  myChart.setOption({
    tooltip: {
      trigger: 'axis',
      formatter: params => {
        const _show = params.map(e => {
          const _old = mock[e.seriesName].oldList
          return e.marker + e.seriesName + '：' + _old[e.dataIndex]
        })
        return _show.join('<br/>')
      }
    },
    legend: {},
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} %'
      },
      min: 0,
      max: 100,
      minInterval: 50,
      axisLabel: {
        formatter: (value, index) => {
          //Y轴的自定义刻度值，对应上图
          if (index == 0) {
            value = 0
          } else if (index == 1) {
            value = 80
          } else if (index == 2) {
            value = 100
          }
          return value + '%'
        }
      }
    },
    series: [
      {
        name: 'blue',
        type: 'line',
        data: mock.blue.showList
      },
      {
        name: 'green',
        type: 'line',
        data: mock.green.showList
      }
    ]
  })
})
</script>

<template>
  <div id="main" class="echart" />
</template>

<style scoped>
.echart {
  width: 800px;
  height: 600px;
}
</style>
