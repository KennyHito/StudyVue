<!-- 结构 -->
<template>
  <div class="sticky-nav-bar">
    <van-nav-bar :safe-area-inset-top="true" class="nav-bar-box" @click-left="onClickLeft" @click-right="onClickRight">
      <!-- 标题内容 -->
      <template #title>
        <span class="nav-title-text-box" @dblclick.prevent="handleDoubleClick">{{ navBarTitle }}</span>
      </template>

      <!-- 左侧内容 -->
      <template #left>
        <img src="../assets/back.png" alt="" class="back-icon-box" v-if="isShowLeftArrow" />
        <span class="nav-leftOrRight-text-box" @dblclick.prevent="handleDoubleClick">{{ navBarLeftText }}</span>
      </template>

      <!-- 右侧内容 -->
      <template #right>
        <span class="nav-leftOrRight-text-box" @dblclick.prevent="handleDoubleClick">{{ navBarRightText }}</span>
      </template>
    </van-nav-bar>
  </div>
</template>

<!-- 逻辑处理 -->
<script>
// 引入其他组件

export default {
  props: {
    navBarTitle: {
      type: String,
      default: ""
    },
    navBarLeftText: {
      type: String,
      default: ""
    },
    navBarRightText: {
      type: String,
      default: ""
    },
    isShowLeftArrow: {
      type: Boolean,
      default: true
    }
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
    // 通过阻止 dblclick 事件来禁用双击放大。
    handleDoubleClick(event) {
      event.preventDefault(); // 阻止默认行为
    }
  },
}
</script>

<!-- 样式 -->
<style scoped lang='less'>
.sticky-nav-bar {
  position: sticky;
  top: 0;
  z-index: 999;
  font-size: 20px;
}

.nav-bar-box {
  background: ivory;
  height: 49px;
  line-height: 49px;
  display: grid;
  align-items: center;
}

/deep/ .nav-bar-box .van-nav-bar__title {
  font-size: 20px;
}

/deep/ .nav-bar-box .van-nav-bar__text {
  font-size: 18px;
}

.back-icon-box {
  width: 20px;
  height: 20px;
}

.nav-title-text-box {
  font-size: 20px;
  font-weight: 700;
}

.nav-leftOrRight-text-box {
  font-size: 18px;
  font-weight: 500;
}
</style>