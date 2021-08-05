<template>
  <div :style="type.lengthen ? 'color: red;' : ''">
    {{ `${dd}日 ${hh}时 ${mm}分 ${ss}秒` }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 状态
      type: {
        lengthen: false,
        stop: false
      },
      // 日时分秒
      dd: '00',
      hh: '00',
      mm: '00',
      ss: '00',
      timer: null
    }
  },
  mounted() {
    this.getCountDown()
  },
  destroyed() {
    clearTimeout(this.timer)
  },
  methods: {
    // 模拟接口发送
    _post() {
      return new Promise((res, err) => {
        setTimeout(() => {
          console.log('后台返回')
          res({ dd: 0, hh: 0, mm: 1, ss: 2 })
        }, 1000 * 1)
      })
    },
    // 开始倒计时方法
    getCountDown() {
      console.log('开始校准时间及状态')
      this._post()
        .then(res => {
          clearTimeout(this.timer)
          const { dd, hh, mm, ss } = res
          let boo = false
          const { _dd, _hh, _mm, _ss, stop } = this._automaticMinusOne(dd, hh, mm, ss)
          this.dd = _dd
          this.hh = _hh
          this.mm = _mm
          this.ss = _ss
          boo = stop
          this.timer = setInterval(() => {
            const { dd, hh, mm, ss } = this
            const { _dd, _hh, _mm, _ss, stop } = this._automaticMinusOne(dd, hh, mm, ss)
            this.dd = _dd
            this.hh = _hh
            this.mm = _mm
            this.ss = _ss
            boo = stop
          }, 1000) // 循环间隔 单位ms
          if (!boo) {
            // 如果没有暂停，则下次继续校准时间
            // setTimeout(() => {
            //   this.getCountDown()
            // }, 1000 * 10) // 每10s刷新一次时间
          }
        })
        .catch(err => {
          console.error(err)
          setTimeout(() => {
            this.getCountDown()
          }, 1000 * 10) // 每10s刷新一次时间
        })
    },
    /**
     * 倒计时减1s
     */
    _automaticMinusOne(dd, hh, mm, ss) {
      let _dd = Number(dd)
      let _hh = Number(hh)
      let _mm = Number(mm)
      let _ss = Number(ss)
      let boo = false // 是否结束
      const toTwo = num => {
        return num > 10 ? num.toString() : '0' + num
      }
      // 开始倒计时
      _ss--
      if (_ss < 0) {
        _ss = 59
        _mm--
        if (_mm < 0) {
          _mm = 59
          _hh--
          if (_hh < 0) {
            _hh = 23
            _dd--
            if (_dd < 0) {
              _dd = _hh = _mm = _ss = 0
              boo = true
              clearTimeout(this.timer)
            }
          }
        }
      }
      return { _dd: toTwo(_dd), _hh: toTwo(_hh), _mm: toTwo(_mm), _ss: toTwo(_ss), stop: boo }
    }
  }
}
</script>
