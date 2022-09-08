<template>
  <div class="demo-card">
    <m-Popover :actions="arr" :data="data" @action="action" @open="open">
      <template v-slot:btn="scope">
        {{ scope.btn.name }}
      </template>
    </m-Popover>
    <div style="position: absolute; bottom: 0">
      <m-Popover :actions="arr" :data="data" @action="action">
        <template v-slot:btn="scope">
          {{ scope.btn.name }}
        </template>
      </m-Popover>
    </div>
  </div>
</template>
<script lang="ts" setup>
import mPopover from "../src/index.vue";

const arr = [
  { name: "添加", action: "你猜" },
  { name: "删除", action: "你猜" },
];
const data = { res: {} };
const action = (event: string, data: any) => {
  alert(`${event},${data}`);
};
const open = () => {
  alert("open");
};
</script>
