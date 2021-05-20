export default {
  mounted: el => {
    console.log('加载盒子', el)
    const width = el.offsetWidth // 自身宽度
    const height = el.offsetHeight // 自身高度
    const left = el.offsetLeft // 左边距
    const top = el.offsetTop // 上边距
    const bottom = top + height // 下距离
    const right = left + width // 右距离
    let boxs = window.boxLocation || []
    boxs.push({
      left,
      top,
      bottom,
      right
    })
    window.boxLocation = boxs
    console.log('录入完成')
  }
}
