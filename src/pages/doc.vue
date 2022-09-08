<template>
  <header>
    <top-bar></top-bar>
  </header>
  <div class="min-ui">
    <aside>
      <div class="doc-nav--title">基础组件</div>
      <router-link
        v-for="(link, index) in data.links"
        :key="index"
        :to="link.path"
        class="doc-nav--item"
        style="display: block"
        @change="change(link)"
        >{{ link.name }}</router-link
      >
    </aside>
    <main>
      <router-view></router-view>
    </main>
    <div
      id="demoIframe"
      class="component-demo"
      draggable="true"
      ondragstart="dragIframe(event)"
      ondragover="dropIframe(event)"
    >
      <iframe
        :src="urlWithNoTransition"
        width="375"
        height="600"
        border="0"
        frameborder="0"
        draggable="true"
      ></iframe>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, watchEffect } from "vue";
import CompoentList from "../../packages/list.json";
import { nextTick, onBeforeMount, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import TopBar from "../pages/TopBar.vue";
const demo = ref("");
const router = useRouter();
const urlWithNoTransition = ref("");
onBeforeMount(() => {
  const value = useRoute().meta.demo;
  nextTick(() => {
    demo.value = value as string;
    console.log(demo.value);
    if (demo) {
      urlWithNoTransition.value = `${location.origin}/#/demo/${demo.value}`;
      console.log(urlWithNoTransition.value);
    }
  });
});
watch(() => router.currentRoute.value.path,(toPath) => {
        //要执行的方法
        urlWithNoTransition.value = `${location.origin}/#${toPath.replace('components', 'demo')}`;
     },{immediate: true,deep: true})
const data = reactive({
  links: CompoentList.map((item) => ({
    path: `/components/${item.compName}`,
    name: item.compZhName,
  })),
});
const change = (e) =>{
  console.log(e)
}
</script>

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
  /* margin-top:50px; */
}
.min-ui aside {
  width: 160px;
  padding: 10px;
  border-right: 1px solid #ccc;
  height: 100%;
  position: fixed;
  background: #ffffff;
}
.min-ui main {
  width: 100%;
  flex: 1;
  padding: 15px;
  margin-left: 180px;
  padding-right: 375px;
}
[aria-current="page"] {
  background-color: #eeefff;
  color: #7a7fd9;
}
.doc-nav--title {
  padding: 8px 0 8px 24px;
  color: #455a64;
  font-weight: 600;
  font-size: 15px;
  line-height: 28px;
}
.doc-nav--item {
  color: #455a64;
  font-size: 13px;
  line-height: 20px;
  transition: color 0.2s;
  padding: 10px 0 10px 20px;
}
.doc-nav--tem :hover {
  color: #7a7fd9;
}
.component-demo {
  position: absolute;
  right: 5px;
  top: 55px;
  width: 377px;
  height: 600px;
  display: inline-block;
  border: 1px solid #ececec;
  border-radius: 15px;
  overflow: hidden;
  z-index: 2500;
}
</style>