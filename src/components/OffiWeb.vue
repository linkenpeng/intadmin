
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
    <div>
      <el-link href="https://cn.vuejs.org/" target="_blank">Vue</el-link>
    </div>
    <div>
      <el-link href="https://element-plus.org/zh-CN/component/overview.html" target="_blank">Element-Component</el-link>
    </div>
</template>