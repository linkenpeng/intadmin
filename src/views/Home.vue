<template>
    <el-config-provider :locale="locale">
      <el-table :data="tableData" ref="myTable" stripe="width: 100%" row-key="id"
      @selection-change="handleSelectionChange" :tree-props="{children: 'children'}"
      :default-sort="{prop:'date', order:'descending'}">
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="id" fixed label="ID" width="80"></el-table-column>
        <el-table-column prop="date" fixed label="Date" width="180" sortable></el-table-column>
        <el-table-column prop="name" label="Name" width="180" 
          :filters="[{text:'Tom',value:'Tom'},{text:'Jack',value:'Jack'},{text:'Brown',value:'Brown'}]" 
          :filter-method="filterHandler">
          <template #default="scope">
              <div class="name-wrapper">
                  <el-tag size="medium"> {{scope.row.name}}</el-tag>
              </div>
          </template>
        </el-table-column>
        <el-table-column type="expand">
          <template #default="props">
              <p>City: {{ props.row.city }}</p>
              <p>Zip: {{ props.row.zip }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="zip" label="Zip" width="180"></el-table-column>
        <el-table-column prop="city" label="City" width="180"></el-table-column>
        <el-table-column label="Address" prop="address">
          <template #header>
              <el-input v-model="search" size="small" placeholder="Type to search" />
          </template>
          <template #default="{$index, row}">
            <router-link :icon="Edit" type="primary" :to="{path:'/user/profile', query:{id:row.id}}">修改</router-link>
            <el-button size="small" type="danger" @click="handleDelete($index, row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top:20px">
        <el-button @click="selectRow([tableData[1], tableData[3]])">选中第2行和第4行</el-button>
        <el-button @click="selectRow()">清空选中行</el-button>
      </div>
      <div>
        <el-pagination layout="total, sizes, prev, pager, next, jumper" 
        v-model:currentPage="currentPage" 
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize" 
        :total="total" hide-on-single-page 
        @current-change="handleCurrentChange" 
        @size-change="handleSizeChange"></el-pagination>
      </div>
    </el-config-provider>
  </template>
  
  <script>
  import locale from 'element-plus/es/locale/lang/zh-cn.mjs'
  import { mockData } from '@/utils/util'

  const data = mockData(120)
  export default {
    data() {
      return {
        locale,
        currentPage: 1,
        pageSize: 10,
        total:0, 
        tableData: [],
      };
    },
    created() {
      this.getData(1, this.pageSize);
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
      handleDelete(index, row) {
        console.log(row.id)
        this.$router.push({ path: "/user/profile/", query: { id: row.id }})
      },
      getData(page, pageSize) {
        this.tableData = data.slice((page - 1) * pageSize, page * pageSize);
        this.total = data.length;
      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.getData(this.currentPage, this.pageSize);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.getData(this.currentPage, this.pageSize);
      },
      handleSelectionChange(selectRows) {
        console.log(selectRows);
      },
      filterHandler(value, row, column) {
        console.log('filterHandler', value, row, column)
        const property = column['property']
        return row[property] === value
      }
    }
  };
  </script>