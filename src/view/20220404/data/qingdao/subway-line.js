/**
 * 地铁路线-青岛
 */
export default [
  // 2号线
  {
    id: 'qingdao-2',
    name: '2号线',
    versions: 1,
    children: [
      { id: 'liaoyangdonglu', starttime1: '', starttime2: '', endtime1: '', endtime2: '' },
      { id: 'tonganlu', starttime1: '', starttime2: '', endtime1: '', endtime2: '' },
      { id: 'miaolinglu', starttime1: '', starttime2: '', endtime1: '', endtime2: '' }, // 11号线
      { id: 'shilaorenyuchang', starttime1: '', starttime2: '', endtime1: '', endtime2: '' },
      { id: 'haianlu', starttime1: '', starttime2: '', endtime1: '', endtime2: '' }
    ]
  },
  // 11号线
  {
    id: 'qingdao-11',
    name: '11号线',
    versions: 1,
    children: [
      { id: 'miaolinglu', starttime1: '', starttime2: '', endtime1: '', endtime2: '' }, // 2号线
      { id: 'huizhanzhongxin', starttime1: '', starttime2: '', endtime1: '', endtime2: '' },
      // { id: 'qingdaoerzhong', starttime1: '', starttime2: '', endtime1: '', endtime2: '' },
      // { id: 'qingdaokeda', starttime1: '', starttime2: '', endtime1: '', endtime2: '' },
      // { id: 'zhangcun', starttime1: '', starttime2: '', endtime1: '', endtime2: '' },
      // { id: 'kutao', starttime1: '', starttime2: '', endtime1: '', endtime2: '' },
      // { id: 'haiyangdaxue', starttime1: '', starttime2: '', endtime1: '', endtime2: '' },
      // { id: 'shiboyuan', starttime1: '', starttime2: '', endtime1: '', endtime2: '' },
      // { id: 'beizhai', starttime1: '', starttime2: '', endtime1: '', endtime2: '' }
    ]
  }
]
