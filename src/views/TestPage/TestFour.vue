<!-- 结构 -->
<template>
  <div>
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />
  </div>
</template>

<!-- 逻辑处理 -->
<script>
// 引入其他组件
import MyNavBar from '@/components/MyNavBar.vue';

export default {
  name: 'TestFour',
  components: {
    MyNavBar
  },
  data() {
    return {
      nav: {
        title: "测试_4",
        leftButtonText: "",
        rightButtonText: "你好"
      },
    }
  },
  mounted() {

  },
  methods: {
    handleLeftClick() {
      this.$router.back();
    },
    handleRightClick() {

    },
  },
  computed: {

  },
  beforeDestroy() {
    console.log('destroy');
  },
}
</script>


<!-- 样式 -->
<style scoped lang='less'></style>