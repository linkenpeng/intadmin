<template>
    <el-form :model="form" label-position="left" label-width="100px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name" size="medium"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="选择区域" size="large">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="北京" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" size="large">
        <el-date-picker v-model="form.date1" type="date" placeholder="选择日期"></el-date-picker>
        <el-time-picker v-model="form.date2" placeholder="选择时间"></el-time-picker>
      </el-form-item>
      <el-form-item label="是否直播" size="large">
        <el-switch v-model="form.live"></el-switch>
      </el-form-item>
      <el-form-item label="活动类型" size="large">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="线上活动" name="type"></el-checkbox>
          <el-checkbox label="促销活动" name="type"></el-checkbox>
          <el-checkbox label="线下活动" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="场地资源"  size="large">
        <el-radio-group v-model="form.resource">
          <el-radio label="赞助"></el-radio>
          <el-radio label="自助"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="备注" size="small">
        <el-input v-model="form.desc" type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">创建</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          live: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
            { pattern: /^[a-zA-Z][a-zA-Z0-9_-]*$/, message: '请输入字母开头的字母、数字或下划线字符串', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }  
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
  </script>