<!-- 结构 -->
<template>
  <router-view />
</template>

<!-- 逻辑处理 -->
<script>
import VConsole from 'vconsole';

export default {
  mounted() {
    new VConsole();
  },
}
</script>

<!-- 不建议在app.vue中写scoped 一般都服务于全局 -->
<style lang='less'>
.text {
  font-size: 18px;
  font-weight: bold;
  color: darkkhaki;
}
</style>