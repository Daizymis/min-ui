<template>
  <div class="navbar">
    <router-link to="/home">首页</router-link>
    <router-link to="/doc">文档</router-link>
  </div>
</template>
<style scoped>
.navbar {
  text-align: right;
  background: #ffffff;
  width: 100%;
  border-bottom: 1px solid #ebecf8;
  height: 50px;
}
.navbar a {
  display: inline-block;
  padding: 0 20px;
  color: #333333;
  line-height: 50px;
}
.navbar a:hover {
  border-bottom: 1px solid #7a7fd9;
  color: #7a7fd9;
}
</style>