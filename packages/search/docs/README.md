# 模糊搜索组件
<script setup>
    import demo from './demo.vue'
</script>
<demo/>

## API
参数     | 说明 | 类型 | 默认值
----------- | --------------|---------------|-----------------
showPicker     | 弹出框显示 | boolean | 默认值
searchValue     | 组件绑定字段即确认回调入参（item为对象） | string | item
searchLabel     | 1.单个字段 searchLabel='name'<br/>2.多个字段空格拼接 :searchLabel="['name','id']"<br/>3.自定义拼接 searchLabel = "item.custName + ' (' + item.billcname + ')'" | boolean | 默认值
options     | 下拉列表 | array | []
remote     | 是否远程搜索 | boolean | 默认值
filterable     | 是否过滤 | boolean | 默认值
param     | 确认回调传参，与选择器回参一致，需要定位选择器选项位置时使<br/>用，可不传 | string | 默认值

## Events
事件名     | 说明 | 回调参数
----------- | --------------|---------------
close     | 取消时触发 | 无
search     | 搜索时触发 |输入框内容
confirm     | 确认时触发 | 确认回调的传参
change     | 选中数据改变时触发 | 选中的数据
      