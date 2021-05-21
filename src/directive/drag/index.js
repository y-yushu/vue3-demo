export default {
  mounted: (el, binding) => {
    // 获取元素基本属性
    const p = el.parentNode // 父级元素
    const parentWidth = p.offsetWidth // 父级宽度
    const parentHeight = p.offsetHeight // 父级高度
    const disWidth = el.offsetWidth // 自身宽度
    const disHeight = el.offsetHeight // 自身高度
    // 参数
    const { value } = binding
    const blank = () => {}
    const locateCallback = (value && value.locateCallback) || blank
    console.log('接收方法', locateCallback)
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
        console.log('操作前', el.classList)
        el.classList.add('cs_color')
        el.addEventListener('animationend', anim => {
          locateCallback({
            width: el.style.width,
            height: el.style.height,
            left: el.style.left,
            top: el.style.top
          })
          el.classList.remove('cs_color')
        })
        console.log('操作后', el.classList)
      }
    }
  }
}
