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
    // 计算可行路径 上
    // 完成路径
    let linefin = []
    // 过程路径
    let linelog = []
    /**
     * 递归获取路径
     * @param {String} _startid 当前站点id
     * @param {Array} line 当前已走路线
     * @returns 递归调用
     */
    const recursionGetPath = (_startid, _line = []) => {
      let nexts = getNext(_startid, this.line)
      // 不能往回走
      if (_line.length) {
        nexts = nexts.filter(f => ifAlre(f.eid, _line))
      }
      // 调用递归
      const toPlan1 = next => {
        if (next.eid === endid) {
          addfin(1, [..._line, next])
          return recursionAgen()
        }
        return recursionGetPath(next.eid, [..._line, next])
      }
      // 判断之后有几个方向
      if (!nexts.length) {
        // 下一段为空
        addfin(0, _line)
        return recursionAgen()
      } else if (nexts.length === 1) {
        // 进行递归
        return toPlan1(nexts[0])
      } else {
        // 增加一条log
        const addlog = next => linelog.push({ sid: _startid, line: _line, verify: [next.eid] })
        // 历史节点为空
        if (!linelog.length) {
          // 第一次
          addlog(nexts[0])
          return toPlan1(nexts[0])
        }
        // 获取下个判定节点
        const endlog = linelog[linelog.length - 1]
        const getVerfy = eid => !endlog.verify.find(f => f === eid)
        const mores = nexts.find(f => getVerfy(f.eid))
        if (endlog.sid === _startid) {
          // 该节点所有项都已完成,删除该节点
          if (!mores) {
            return recursionAgen(true)
          }
          endlog.verify.push(mores.eid)
          return toPlan1(mores)
        } else {
          // 历史节点列表不存在该节点
          addlog(mores)
          return toPlan1(mores)
        }
      }
    }
    /**
     * 从上一节点重新开始递归
     * @param {Boolean} _isdel 是否删除上一节点
     * @returns 继续递归 || 所有路径
     */
    const recursionAgen = (_isdel = false) => {
      if (_isdel) {
        linelog.splice(linelog.length - 1, 1)
      }
      // 所有分支完成，返回所有路线数据
      if (linelog.length - 1 <= 0) {
        return linefin
      }
      return recursionGetPath(linelog[linelog.length - 1].sid, linelog[linelog.length - 1].line)
    }
    // 增加已完成路线
    const addfin = (_type, _line) => {
      // 当前路线保存
      linefin.push({
        type: _type,
        line: _line
      })
    }
    // 获取路线
    const paths = recursionGetPath(startid, [])
    // 计算可行路径 下
    return paths
  }
}

export default uitl
