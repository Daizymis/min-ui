<template>
  <van-popover
    ref="morePopver"
    v-bind="$attrs"
    v-model:show="show"
    :placement="top ? 'top-start' : 'bottom-start'"
    @open="open"
  >
    <slot name="default">
      <div
        v-for="(btn, index) in actions"
        :key="btn + index"
        @click="btnClick(btn)"
        class="hover-text"
      >
        <slot name="btn" :btn="btn">{{ btn }}</slot>
      </div>
    </slot>
    <template #reference>
      <span ref="moreBtn">
        <slot name="reference">
          <span gray class="font-24 more-text">更多</span>
        </slot>
      </span>
    </template>
  </van-popover>
</template>
<script lang="ts" setup>
import {
  useSlots,
  defineProps,
  withDefaults,
  defineExpose,
  defineEmits,
  ref,
  onMounted,
} from "vue";
import { PopoverAction } from "vant";
interface Props {
  actions?: any[];
  data?: any;
}
interface Emits {
  (e: "action", type: string, data: any): void;
}
const props = withDefaults(defineProps<Props>(), {});
const emit = defineEmits<Emits>();

const show = ref(false);
const top = ref(false);
const btnClick = (event: string) => {
  emit("action", event, props.data);
};
const moreBtn = ref();
const open = () => {
  const height = document.documentElement.clientHeight;
  const domRect = moreBtn.value.getBoundingClientRect();
  if (height - domRect.top < ((props.actions || []).length + 1) * 40) {
    top.value = true;
  } else {
    top.value = false;
  }
};
</script>
<style scoped>
.bottom-btn {
  display: flex;
  justify-content: space-between;
  margin: 20px 0 10px;
  align-items: center;
}
.more-text {
  font-size: 20px;
}

.bottom-btn:deep .van-button {
  width: 120px;
  margin-right: 10px;
}
.bottom-btn:deep .van-popover__wrapper {
  margin-left: 10px;
}
.hover-text {
  padding: 15px 0;
  margin: 0 15px;
  width: 150px;
}
.hover-text:not(:last-child) {
  border-bottom: 1px solid #dddddd;
}
</style>