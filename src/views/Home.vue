<template>
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
            <el-input v-model="search" size="mini" placeholder="Type to search" />
        </template>
        <template #default="{$index, row}">
            <el-button size="mini" @click="handleEdit($index, row)">Edit</el-button>
            <el-button size="mini" type="danger" @click="handleDelete($index, row)">Delete</el-button>
        </template>
      </el-table-column>
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
            {
                id: 1,
                date: '2016-05-03',
                name: 'Tom',
                city: 'Guangzhou',
                zip: '10001',
                address: 'No. 189, Grove St, Los Angeles',
                children: [
                    {
                        id: 11,
                        date: '2016-05-02',
                        name: 'Tom2',
                        city: 'Guangzhou',
                        zip: '10002',
                        address: 'No. 189, Grove St, Los Angeles'
                    },
                    {
                        id: 12,
                        date: '2016-05-02',
                        name: 'Tom3',
                        city: 'Guangzhou',
                        zip: '10002',
                        address: 'No. 189, Grove St, Los Angeles'
                    },
                ]
            },
            {
                id: 2,
                date: '2016-05-02',
                name: 'Jack',
                city: 'Shenzhen',
                zip: '10002',
                address: 'No. 189, Grove St, Los Angeles'
            },
            {
                id: 3,
                date: '2016-05-04',
                name: 'Peter',
                city: 'Wuhan',
                zip: '10003',
                address: 'No. 189, Grove St, Los Angeles'
            },
            {
                id: 4,
                date: '2016-05-01',
                name: 'Brown',
                city: 'Beijing',
                zip: '10004',
                address: 'No. 189, Grove St, Los Angeles'
            }      
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
      },
      filterHandler(value, row, column) {
        console.log('filterHandler', value, row, column)
        const property = column['property']
        return row[property] === value
      }
    }
  };
  </script>