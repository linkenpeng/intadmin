<template>
    <el-table :data="tableData" ref="myTable" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="date" label="Date" width="180"></el-table-column>
      <el-table-column prop="name" label="Name" width="180"></el-table-column>
      <el-table-column label="Address" prop="address"></el-table-column>
    </el-table>
    <div style="margin-top:20px">
      <el-button @click="selectRow([tableData[1], tableData[3]])">选中第2行和第4行</el-button>
      <el-button @click="selectRow()">清空选中行</el-button>
    </div>
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
      selectRow(rows) {
        if (rows) {
          rows.forEach((row) => {
            this.$refs.myTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.myTable.clearSelection();
        }
      },
      handleSelectionChange(selectRows) {
        console.log(selectRows);
      }
    }
  };
  </script>