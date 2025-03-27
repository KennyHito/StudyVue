<!-- 结构 -->
<template>
  <!-- 使用 keep-alive 的 include 属性指定需要缓存的组件 -->
  <keep-alive :include="cachedComponents">
    <router-view></router-view>
  </keep-alive>
</template>

<!-- 逻辑处理 -->
<script>
import VConsole from 'vconsole';

export default {
  data() {
    return {
      // 这里缓存的组件必须是组件中name字段的值,并不是路由里面的name!切记!切记!切记!
      cachedComponents: ['TestPage123'],
    }
  },
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