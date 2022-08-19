<template>
  <div>
    <m-card class="box-card">
      <template #> hello world </template>
    </m-card>
    <m-card shadow="hover" class="box-card" header="my card">
      <template #> hello world </template>
    </m-card>
  </div>
</template>
<script lang="ts" setup>
import mCard from "../src/index.vue";
</script>
<style scoped>
.box-card {
  width: 400px;
  margin-top: 20px;
}
</style>
