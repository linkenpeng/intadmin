<template>
    <div class="container">
      <div class="main-body">
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
        count() {
            return this.$store.state.count
        }
    }
  }
  </script>