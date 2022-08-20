<script setup lang="ts">
import { reactive } from "vue";
import CompoentList from "../packages/list.json";

const data = reactive({
  links: CompoentList.map((item) => ({
    path: `/components/${item.compName}`,
    name: item.compZhName,
  })),
});
</script>

<template>
  <div class="min-ui">
    <aside>
      <strong>基础组件</strong>
      <m-card>hello world</m-card>
      <router-link
        v-for="(link, index) in data.links"
        :key="index"
        :to="link.path"
        class="navbar"
        style="display: block"
        >{{ link.name }}</router-link
      >
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}
.min-ui {
  display: flex;
  min-height: 100vh;
  width: 100vw;
}
.min-ui aside {
  width: 200px;
  padding: 15px;
  border-right: 1px solid #ccc;
  height: 100%;
  position: fixed;
}
.min-ui main {
  width: 100%;
  flex: 1;
  padding: 15px;
  margin-left: 240px;
}
.navbar {
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
  border-radius: 2px;
  color:#606266;
}
.navbar:hover {
  color: #409eff;
}
[aria-current="page"] {
  background-color: #409eff1a;
  color: #409eff;
}
</style>
