<!-- 结构 -->
<template>
  <div>
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />
    <Search />
    <List />
  </div>
</template>

<!-- 逻辑处理 -->
<script>
// 引入其他组件
import MyNavBar from '@/components/MyNavBar.vue';
import Search from './components/Search.vue';
import List from './components/List.vue';

export default {
  name: 'SearchGithubPage',
  created() {
    this.nav.title = this.$route.query.title;
  },
  components: {
    MyNavBar,
    Search,
    List,
  },
  data() {
    return {
      nav: {
        title: "",
        leftButtonText: "",
        rightButtonText: "清空"
      },

    }
  },
  methods: {
    handleLeftClick() {
      this.$router.back();
    },
    handleRightClick() {
      console.log('清空');
      this.$bus.$emit('clearSearch');
    },
  }
}
</script>

<!-- 样式 -->
<style scoped lang='less'></style>