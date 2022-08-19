<template>
  <div class="box-card">
    <slot name="header"></slot>
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
const props = withDefaults(defineProps<{
  shadow?: string
}>(), {
  shadow: 'always'
})
</script>
<style scoped>

</style>
