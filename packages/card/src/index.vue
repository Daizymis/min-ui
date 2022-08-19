<template>
  <div class="m-card" :class="`m-card-${shadow}`">
    <div class="m-card__header" v-if="$slots.header || header">
      <slot name="header">{{header}}</slot>
    </div>
    <div class="m-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    shadow?: string;
    header?: string | null;
    bodyStyle?: string;
  }>(),
  {
    shadow: "always",
    header: null,
    bodyStyle: "",
  }
);
</script>
<style scoped>
.m-card {
  
  border: 1px solid #e4e7ed;
  overflow: hidden;
  border-radius: 4px;
}
.m-card-always {
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
}
.m-card-hover:hover {
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
}
.m-card__header {
  border-bottom: 1px solid #dddddd;
  padding: 20px;
}
.m-card__body {
  padding: 20px;
}
</style>
