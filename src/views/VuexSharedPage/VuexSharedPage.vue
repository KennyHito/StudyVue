<!-- 结构 -->
<template>
  <div>
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />

    <div class="container">
      <Count />
      <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
        华丽的分割线
      </van-divider>
      <Person />
    </div>
  </div>
</template>


<!-- 逻辑处理 -->
<script>
// 引入其他组件
import MyNavBar from '@/components/MyNavBar.vue';
import Count from './components/Count.vue';
import Person from './components/Person.vue';

export default {
  name: 'VuexSharedPage',
  components: {
    MyNavBar,
    Count,
    Person
  },
  created() {
    this.nav.title = this.$route.query.title;
  },
  data() {
    return {
      nav: {
        title: "",
        leftButtonText: "",
        rightButtonText: ""
      },
    }
  },
  methods: {
    handleLeftClick() {
      this.$router.back();
    },
    handleRightClick() {
    },
  },
}
</script>

<!-- 样式 -->
<style scoped lang='less'>
.container {
  margin: 5px;
  padding: 5px;
  background-color: #efefef;
  border-radius: 10px;
}
</style>