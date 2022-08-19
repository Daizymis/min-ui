## 气泡弹出框
<script setup>
    import demo from './example.vue'
</script>
<demo/>

### API
参数     | 说明 | 类型 | 默认值
----------- | --------------|---------------|-----------------
arr     | 弹出框展示的列表 | array | []

### Events
与 van-popover一致

### Slots
名称     | 说明 | 参数
----------- | --------------|---------------
btn     | 弹出框列表内展示的内容 | 列表数据
default     | 弹出框展示的内容 |
reference     | 触发 Popover 显示的元素内容 | 