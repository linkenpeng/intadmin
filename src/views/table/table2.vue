<template>
    <el-table :data="tableData" :row-class-name="tableRowClassName" style="width: 100%">
      <el-table-column prop="student_number" label="学号"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="score" label="分数" width="180"></el-table-column>
    </el-table>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tableData: [
          { score: 86, name: "张三", student_number: "100000001" },
          { score: 72, name: "李四", student_number: "100000002" },
          { score: 98, name: "王五", student_number: "100000003" },
          { score: 45, name: "赵六", student_number: "100000004" }
        ]
      };
    },
    methods: {
      tableRowClassName({ row }) {
        let className = '';
        const score = row.score;
        if (score >= 90) {
          className = 'excellent';
        } else if (score >= 80) {
          className = 'good';
        } else if (score < 60) {
          className = 'flunk';
        }
        return className;
      }
    }
  };
  </script>
  
  <style>
  .el-table .excellent {
    background-color: rgb(115, 241, 115);
  }
  .el-table .good {
    background-color: yellow;
  }
  .el-table .flunk {
    background-color: rgb(214, 111, 111);
  }
  </style>