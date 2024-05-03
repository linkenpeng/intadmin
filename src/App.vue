<script setup>
import HelloWorld from './components/HelloWorld.vue'
import OffiWeb from './components/OffiWeb.vue'
</script>

<template>
  <div>
    <ul class="nav">
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link :to="{path:'/home', query:{id:1}}">Home Query</router-link></li>
      <li><router-link :to="{name:'home', params:{id:1}}">Home Params</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
    <router-view></router-view>

    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <OffiWeb />
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.nav {display: flex;}
.nav li{width:100px; list-style: none;}
</style>
