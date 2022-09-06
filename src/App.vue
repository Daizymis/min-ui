<script setup lang="ts">
import TopBar from "./pages/TopBar.vue";
</script>

<template>
  <top-bar></top-bar>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}
.main {
  height: calc(100%-50px);
}
</style>
