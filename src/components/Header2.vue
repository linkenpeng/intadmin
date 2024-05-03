<template>
    <h1>我是About头部</h1>
    <router-link @click="goHome">Home</router-link>
</template>

<script>
export default {
   methods: {
    goHome() {
        this.$router.push('/')
    }
   }
}
</script>
