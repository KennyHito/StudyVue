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
  name: 'TestThree',
  components: {
    MyNavBar
  },
  data() {
    return {
      nav: {
        title: "测试_3",
        leftButtonText: "",
        rightButtonText: ""
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
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  },
}
</script>


<!-- 样式 -->
<style scoped lang='less'></style>