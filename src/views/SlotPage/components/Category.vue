<!-- 结构 -->
<template>
  <div class="content">
    <slot>我是默认内容</slot>
    <div>你好,世界!</div>
  </div>
</template>

<!-- 逻辑处理 -->
<script>
// 引入其他组件


export default {
  name: 'Category',
}
</script>


<!-- 样式 -->
<style scoped lang='less'>
.content {
  background-color: #f5f5f5;
  height: 200px;
  text-align: center;
  align-content: center;
  border-radius: 10px;
  color: orange;
}
</style>