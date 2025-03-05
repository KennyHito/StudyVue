<!-- 结构 -->
<template>
  <div class="sticky-nav-bar">
    <van-nav-bar :title="navBarTitle" left-arrow :left-text="navBarLeftText" @click-left="onClickLeft"
      :right-text="navBarRightText" @click-right="onClickRight" />
  </div>
</template>

<!-- 逻辑处理 -->
<script>
// 引入其他组件


export default {
  props: {
    navBarTitle: {
      type: String,
      default() {
        return "";
      },
    },
    navBarLeftText: {
      type: String,
      default() {
        return "";
      },
    },
    navBarRightText: {
      type: String,
      default() {
        return "";
      },
    },
  },
  methods: {
    onClickLeft() {
      // 触发自定义事件，并传递数据
      this.$emit('leftClick', { message: '左侧按钮点击事件', buttonText: this.navBarLeftText });
    },
    onClickRight() {
      // 触发自定义事件，并传递数据
      this.$emit('rightClick', { message: '右侧按钮点击事件', buttonText: this.navBarRightText });
    },
  },
}
</script>

<!-- 样式 -->
<style scoped lang='less'>
.sticky-nav-bar {
  position: sticky;
  top: 0;
  z-index: 999;
  /* 确保导航栏显示在最上层 */
}
</style>