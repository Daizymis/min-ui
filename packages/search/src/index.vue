<!--
* @Author:Min Huang
* @Date: 2021/5/25
* @Desc: 模糊搜索
-->
<template>
  <div class="selector">
    <van-popup
      position="bottom"
      v-model:show="show"
      :close-on-click-overlay="false"
      @click-overlay="close"
    >
        <van-search
          v-if="remote || filterable"
          v-model="searchText"
          :placeholder="placeholder"
          @input="onSearch"
        >
        </van-search>
        <van-picker
          ref="refPicker"
          show-toolbar
          :columns="showOptions"
          style="margin-top: 0.2rem"
          :default-index="index"
          class="picker-box"
          @confirm="onConfirm"
          @cancel="close"
          @change="onChange"
        >
          <template #option="item">
            {{ getShowData(item) }}
          </template>
        </van-picker>
    </van-popup>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  nextTick,
  toRefs,
  ref,
  watch,
  computed,
} from "vue";
import { PickerInstance } from "vant";
// interface Props {
//   searchValue: string;
//   searchLabel:string;
//   showPicker:Boolean;
//   options:[];
//   filterable: Boolean;
//   remote: boolean;
//   param: string | number |{}
// }
export default defineComponent({
  props: {
    //下拉选项保存值
    searchValue: {
      type: String,
      default: "id",
    },
    //下拉展示的字段，可以是单个属性，也可以是多个属性拼接
    // 单属性 label='name'|| 多属性 :label="['key', 'name']"
    searchLabel: {
      type: [String, Array],
      default: "value",
    },
    placeholder: {
      type: String,
      default: '搜索'
    },
    showPicker: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
    filterable: {
      type: Boolean,
      default: false,
    },
    //是否为远程搜索
    remote: {
      type: Boolean,
      default: false,
    },
    param: {
      type: [String, Number, Object],
      default: null,
    },
  },
  setup(props, { emit }) {
    let showOptions = ref([] as any[]);
    let refPicker = ref<PickerInstance>();
    const show = computed({
      get() {
        return props.showPicker;
      },
      set(visible: boolean) {
        emit("update:showPicker", visible);
      },
    });
    //模糊搜索时需同步更新下拉列表
    watch(
      () => props.options,
      (val) => {
        showOptions.value = val;
        updateIndex();
      }
    );
    watch(
      () => props.showPicker,
      (val) => {
        if (val === true) {
          updateIndex();
        }
      }
    );
    let currentChoose = ref(null);
    let index = ref(0);
    let searchText = ref("");
    onMounted(() => {
      console.log(props)
      showOptions.value = props.options.slice(0);
    });
    //搜索时
    const onSearch = () => {
      if (props.remote) {
        emit("search", searchText);
      } else if (props.filterable) {
        onFilter();
      }
    };
    //过滤
    const onFilter = () => {
      if (searchText.value === "" || searchText.value === null) {
        showOptions.value = props.options.slice(0);
      } else {
        showOptions.value = props.options.filter(
          (item) => getShowData(item).indexOf(searchText) > -1
        );
      }
      updateIndex();
      emit("onFilter", showOptions.value);
    };
    /**
     * 选择器展示值
     * @param item
     * @returns {string|*}
     */
    const getShowData = (item: any) => {
      if (item) {
        if (typeof props.searchLabel == "string") {
          if (props.searchLabel.indexOf("item") > -1) {
            return eval(props.searchLabel) ? eval(props.searchLabel) : item.id;
          }
          return item[props.searchLabel] ? item[props.searchLabel] : item.id;
        } else {
          let str = "";
          props.searchLabel.forEach((i: any) => {
            str = str.concat(item[i] + " ");
          });
          return str;
        }
      }
    };
    /**
     * 确认回调
     * @param value
     */
    const onConfirm = (value: any) => {
      if (value) {
        if (props.searchValue === "item") {
          currentChoose = value;
        } else {
          currentChoose = value[props.searchValue];
        }
        emit("onShow", value);
        emit("confirm", currentChoose);
        searchText.value = "";
      }
      emit("update:showPicker", false);
    };
    const close = () => {
      emit("update:showPicker", false);
      emit("close");
    };
    const onChange = (picker: any, value: any) => {
      if (value) {
        if (props.searchValue === "item") {
          currentChoose = picker;
        } else {
          currentChoose = picker[props.searchValue];
        }
        emit("change", currentChoose);
      }
    };
    const updateIndex = () => {
      nextTick(() => {
        index.value = getIndexWithKey(
          props.param,
          showOptions.value,
          props.searchValue,
          props.searchValue === "item"
        );
        if (index.value > 0) {
          refPicker?.value?.setIndexes([index.value]);
        }
      });
    };
    const getIndexWithKey = (key:any, list:any[], checkKey:any, flag = false)=> {
    let index = -1;
    if (flag === true && key) {
      index = (list || []).indexOf(key);
    } else if (flag === false && key) {
      index = (list || []).findIndex((item:any )=> item[checkKey] == key);
    }
    return index;
  }
    return {
      ...toRefs(props),
      searchText,
      currentChoose,
      showOptions,
      index,
      show,
      onSearch,
      onFilter,
      getShowData,
      onConfirm,
      onChange,
      close,
    };
  },
});
</script>

<style scoped>
.selector .placehodler-text {
    color: #999999;
  }
.close-popup {
  position: absolute;
  right: 0.28rem;
  top: 0.3rem;
}
.search-dev {
  background: #ffffff;
  position: relative;
}
.search-dev  .van-cell {
    font-size: 0.28rem;
    line-height: 0.36rem;
  }
.picker-box :deep van-picker-column__item {
  word-break: break-all;
}
</style>
