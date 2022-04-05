/**
 * 公用查询相关方法
 */
/**
 * 获取可通行站点
 * @param {String} id 当前站点id
 * @param {Array} arr 所有路线
 * @returns 可通行站点
 */
const getNext = (id, lines) => {
  let _z = []
  lines.forEach(e => {
    const len = e.children.length || 0
    const i = e.children.findIndex(f => f.id === id)
    if (i === 0) {
      _z.push({
        lid: e.id,
        sid: id,
        eid: e.children[1].id
      })
    } else if (i === len - 1) {
      _z.push({
        lid: e.id,
        sid: id,
        eid: e.children[len - 2].id
      })
    } else if (i > 0 && i < len - 1) {
      _z.push({
        lid: e.id,
        sid: id,
        eid: e.children[i - 1].id
      })
      _z.push({
        lid: e.id,
        sid: id,
        eid: e.children[i + 1].id
      })
    }
  })
  return _z
}
/**
 * 判断下个节点是否上一步
 * @param {String} id 下一站点id
 * @param {Array} alre 当前路线
 * @returns 是否可用
 */
const ifAlre = (id, alre = []) => {
  const boo = alre.find(f => f.sid === id)
  return !boo
}
/**
 * 工具class
 */
class uitl {
  // 初始化
  constructor(data) {
    this.line = data.Line
    this.station = data.Station
  }
  // 所有地铁线
  line = []
  // 所有地铁站
  station = []
  // 计算路径
  getPath = (startid, endid) => {
    if (startid === endid) return console.error('【当前站点已到达】')
    console.log('开始计算路径', startid, endid)
    // 完成路径
    let linefin = []
    // 过程路径
    let linelog = []
    // 获取路径
    const plan1 = (id1, line = []) => {
      console.log(`===========================================起点：${id1}`)
      let nexts = getNext(id1, this.line)
      // 不能往回走
      if (line.length) {
        nexts = nexts.filter(f => ifAlre(f.eid, line))
      }
      // 判断之后有几个方向
      if (!nexts.length) {
        console.log(`路线走到终点${id1}`)
        // 下一段为空
        linefin.push({
          type: 0,
          line: line
        })
        return plan2()
      } else if (nexts.length === 1) {
        // 下一段只有一个
        const seg1 = nexts[0]
        console.log(`路线${id1}只有一个方向：${seg1.eid}`)
        console.log('++++++++++++')
        console.log(95, seg1.eid)
        console.log(96, endid)
        // eid是否为终点
        if (seg1.eid === endid) {
          linefin.push({
            type: 1,
            line: [...line, seg1]
          })
          return plan2()
        } else {
          return plan1(seg1.eid, [...line, seg1])
        }
      } else {
        console.log(`路线${id1}，有多个方向`)
        // 下一段有多个
        const len = linelog.length
        if (!len) {
          console.log(`首次创建历史路径${nexts[0].eid}`)
          // 第一次
          linelog.push({
            sid: id1,
            line: line,
            verify: [nexts[0].eid]
          })
          return plan1(nexts[0].eid, [...line, nexts[0]])
        } else {
          // 日志表最后一项
          const endlog = linelog[len - 1]
          const getVerfy = eid => {
            return !endlog.verify.find(f => f === eid)
          }
          const mores = nexts.find(f => getVerfy(f.eid))
          if (!mores) {
            // 当前项已完成
            return plan2(true)
          } else {
            if (endlog.sid !== id1) {
              console.log(`创建历史路径${mores.eid}`)
              // 过程添加
              linelog.push({
                sid: id1,
                line: line,
                verify: [mores.eid]
              })
            } else {
              console.log(`增加历史路径${mores.eid}`)
              linelog[len - 1].verify.push(mores.eid)
            }
            return plan1(mores.eid, [...line, mores])
          }
        }
      }
    }
    // 重新调用获取路径
    const plan2 = (isdel = false) => {
      if (isdel) {
        console.log('==============触发删除回退')
        linelog.splice(linelog.length - 1, 1)
        // 当所有log跑完之后，弹出所有路径
        if (linelog.length - 1 <= 0) {
          return linefin
        }
        return plan1(linelog[linelog.length - 1].sid, linelog[linelog.length - 1].line)
      } else {
        console.log('==============触发回退')
        return plan1(linelog[linelog.length - 1].sid, linelog[linelog.length - 1].line)
      }
    }
    return plan1(startid, [])
  }
}

export default uitl
