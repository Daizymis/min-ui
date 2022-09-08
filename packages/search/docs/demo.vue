import { ref } from "vue";

<template>
  <div class="demo-card">
    <button @click="showPicker = true">展示</button>
    <search
      search-label="name"
      search-value="name"
      v-model:show-picker="showPicker"
      :options="options"
      remote
      @change="changeValue"
      @search="searchKeyWords"
      @confirm="confirmValue"
    ></search>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import search from "../src/index.vue";

const showPicker = ref(false);
const options = [
  { name: "apple" },
  { name: "banana" },
  { name: "orange" },
  { name: "pineapple" },
];
const changeValue = () => {};
const confirmValue = () => {};
const searchKeyWords = () => {};
</script>