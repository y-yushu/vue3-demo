export default {
  mounted: el => {
    // 获取元素基本属性
    const p = el.parentNode // 父级元素
    const parentWidth = p.offsetWidth // 父级宽度
    const parentHeight = p.offsetHeight // 父级高度
    const disWidth = el.offsetWidth // 自身宽度
    const disHeight = el.offsetHeight // 自身高度
    /**
     * 鼠标按下
     * @param {*} e 绑定元素
     */
    el.onmousedown = e => {
      //算出鼠标相对元素的位置
      const disF = e.clientX - el.offsetLeft // 鼠标相对左边距
      const disT = e.clientY - el.offsetTop // 鼠标相对上边距

      /**
       * 鼠标移动
       * @param {*} e 绑定元素
       */
      document.onmousemove = e => {
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disF
        let top = e.clientY - disT

        // 元素触壁 - 上左下右
        if (top <= 0) top = 0
        if (left <= 0) left = 0
        if (top + disHeight >= parentHeight) top = parentHeight - disHeight
        if (left + disWidth >= parentWidth) left = parentWidth - disWidth

        //移动当前元素
        el.style.left = left + 'px'
        el.style.top = top + 'px'
      }
      // 鼠标抬起
      document.onmouseup = e => {
        document.onmousemove = null
        document.onmouseup = null
        console.log('距离', window.boxLocation)
        let i = 10
        const timer = setInterval(() => {
          i += 10
          if (i >= 180) i = 10
          el.rotate(i)
        }, 200)
        // setTimeout(() => {
        //   console.log('自销毁')
        //   el.remove()
        // }, 2000)
      }
    }
  }
}
