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

<!-- 样式 -->
<style scoped lang='less'>
.app-box {
  font-size: 30px;
}
</style>