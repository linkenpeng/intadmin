<template>
  <div id="header">
    <h2>
      <router-link to="/">Int Admin</router-link>
    </h2>
    <div class="avatar">
      <router-link to="/user">User</router-link>
    </div>
  </div>

  <div class="container">
    <div id="sidebar">
      <ul>
        <li>
          <router-link to="/user/profile">个人信息</router-link>
        </li>
        <li>
          <router-link to="/user/settings">用户设置</router-link>
        </li>
        <li>
          <router-link to="/activity/index">活动设置</router-link>
        </li>
      </ul>
    </div>
    <div class="main-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
html, body, ul, li, div, h1 {
  padding: 0;
  margin: 0;
}
html, body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  padding: 0 30px;
  align-items: center;
  justify-content: space-between;
  background: #000;
  color: #fff;
  height: 54px;
}
#header a {
  font-weight: bold;
  border-radius: 50%;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}
#header .avatar a {
  width: 42px;
  height: 42px;
  line-height: 42px;
  background-color: #eee;
  color: #666;
}
.main-body {
  padding: 10px;
}
</style>