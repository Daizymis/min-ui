<template>
  <div class="example">
    <div class="example-showcase">
      <slot></slot>
    </div>
    <div class="example-source-btn">
      <span @click="copySourceCode">复制</span
      ><span @click="showSourceCode = !showSourceCode">显示源代码</span>
    </div>
    <div v-if="showSourceCode" class="example-source-wrapper">
      <pre
        class="language-html example-source"
      ><code class="language-html">{{ sourcecode }}</code></pre>
    </div>
  </div>
  <div class="example-source--hid" v-if="showSourceCode" @click="showSourceCode = false">隐藏源代码</div>
</template>
<script lang="ts" setup>
import { nextTick, onMounted, ref } from "vue";
// import Prism from 'prismjs'
import '@/assets/prism.css';
const env = import.meta.env.MODE;

const props = withDefaults(
  defineProps<{ compName?: string; demoName?: string }>(),
  {
    demoName: "demo",
  }
);
const showSourceCode = ref(false);
const sourcecode = ref<any>("");
onMounted(() => {
  getSourceCode();
});
const getSourceCode = async () => {
  if (env === "development") {
    sourcecode.value = (
      await import(
        /* @vite-ignore */ `packages/${props.compName}/docs/${props.demoName}.vue?raw`
      )
    ).default;
  } else {
    sourcecode.value = await fetch(
      `/packages/${props.compName}/docs/${props.demoName}.vue`
    ).then((res) => res.text());
  }
  // nextTick(() => {
  //   Prism.highlightAll();
  // });
};
const copySourceCode = () => {
    let el = document.createElement("textarea");
    el.value = sourcecode.value;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    alert("复制成功");
    document.body.removeChild(el);
  };
</script>
<style scoped>
.example {
  border: 1px solid #dcdfe6;
}
.example-showcase {
  padding: 1.5rem;
  margin: 0.5px;
  background-color: #ffffff;
  border-bottom: 1px solid #dcdfe6;
}
.example-source {
  /* position: relative; */
  margin: 20px;
  background-color: #f5f7fa;
  overflow-x: auto;
  padding: 20px;
}
.example-source-btn {
  height: 40px;
  line-height: 40px;
  text-align: right;
}
.example-source-btn span {
  cursor: pointer;
  margin-right: 10px;
}
.example-source-btn span:hover {
  color: #409eff;
}
.example-source--hid{
  text-align: center;
  height: 60px;
  line-height: 60px;
  border: 1px solid #dcdfe6;
}
</style>