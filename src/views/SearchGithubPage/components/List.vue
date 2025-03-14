<!-- 结构 -->
<template>
  <div>
    <!-- <van-loadmore :status="loadmoreStatus" :finished-text="finishedText" @loadmore="onLoadmore"> -->
    <van-grid :column-num="3">
      <van-grid-item v-for="item in items" :key="item.id" :icon="item.avatar_url" :text="item.login" />
    </van-grid>
    <van-empty v-show="items.length <= 0" description="暂无数据" />
    <!-- </van-loadmore> -->
  </div>
</template>

<!-- 逻辑处理 -->
<script>
// 引入其他组件


export default {
  name: 'List',
  data() {
    return {
      items: [],
      loadmoreStatus: 'loading', // loadmore 组件的状态，初始为加载中
      finishedText: '没有更多数据了' // 加载完成后的提示文本
    }
  },
  mounted() {
    this.$bus.$on('getUserInfo', (items) => {
      this.items = items;
    });
    this.$bus.$on('clearSearch', () => {
      this.items = [];
    });
  },
  beforeDestroy() {
    this.$bus.$off('getUserInfo');
  }
}
</script>