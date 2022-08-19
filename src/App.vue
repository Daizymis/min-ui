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
      <router-link
        v-for="(link, index) in data.links"
        :key="index"
        :to="link.path"
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
  width: 100%;
}
.min-ui aside {
  width: 200px;
  padding: 15px;
  border-right: 1px solid #ccc;
}
.min-ui main {
  width: 100%;
  flex: 1;
  padding: 15px;
}
</style>
