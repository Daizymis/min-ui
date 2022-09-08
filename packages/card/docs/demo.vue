<template>
  <div class="demo-card">
    <h4>基础用法</h4>
    <m-card class="box-card">
      <template #> hello world </template>
    </m-card>
    <h4>带标题的卡片</h4>
    <m-card shadow="hover" class="box-card" header="标题">
      <template #> hello world </template>
    </m-card>
  </div>
</template>
<script lang="ts" setup>
import mCard from "../src/index.vue";
</script>
<style scoped>
.box-card {
  width: 200px;
  margin-top: 20px;
}
</style>
