<template>
  <el-table ref="elTable" :data="tableData" :span-method="arraySpanMethod" border style="width: 100%" id="exportTab">
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="name" label="姓名" />
    <el-table-column label="数据">
      <el-table-column prop="amount1" sortable label="数值 1" />
      <el-table-column prop="amount2" sortable label="数值 2" />
      <el-table-column prop="amount3" sortable label="数值 3" />
    </el-table-column>
  </el-table>
  <el-button @click="tttt">导出</el-button>
</template>

<script>
import FileSaver from 'file-saver'
import XLSX from 'xlsx'

export default {
  data() {
    return {
      tableData: [
        {
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        },
        {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        },
        {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        },
        {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        },
        {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }
      ]
    }
  },
  methods: {
    arraySpanMethod({ rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2]
        } else if (columnIndex === 1) {
          return [0, 0]
        }
      }
    },
    tttt() {
      const xlsxParam = { raw: true }
      const wb = XLSX.utils.table_to_book(document.querySelector('#exportTab'), xlsxParam)
      const wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
      try {
        FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '审核情况表.xlsx')
      } catch (e) {
        if (typeof console !== 'undefined') {
          console.log(e, wbout)
        }
      }
      return wbout
    }
  }
}
</script>
