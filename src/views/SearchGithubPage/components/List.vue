<!-- 结构 -->
<template>
  <div>
    <van-grid :column-num="3">
      <van-grid-item v-for="item in items" :key="item.id" :icon="item.avatar_url" :text="item.login"
        @click="handleClick(item)" />
    </van-grid>
    <!-- loading -->
    <div class="loading-container" v-show="isLoading">
      <van-loading type="spinner" color="#000000" vertical>加载中...</van-loading>
    </div>
    <!-- 暂无数据 -->
    <van-empty v-show="items.length <= 0" description="暂无数据" />
    <!-- 图片预览 -->
    <van-image-preview v-model="isShowBigPic" :images="showImages" @change="onChange" :startPosition="index">
      <template v-slot:index>{{ items[index].login }}</template>
    </van-image-preview>
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
      isShowBigPic: false,
      showImages: [],
      index: 0,
      isLoading: false
    }
  },
  mounted() {
    this.$bus.$on('getUserInfo', (jsonData) => {
      let data = JSON.parse(jsonData);
      this.isLoading = data.isLoading;
      this.items = data.items;
      this.items.forEach((item) => {
        this.showImages.push(item.avatar_url);
      });
    });
    this.$bus.$on('clearSearch', () => {
      this.items = [];
    });
  },
  methods: {
    handleClick(item) {
      this.isShowBigPic = true;
      this.index = this.showImages.indexOf(item.avatar_url);
    },
    onChange(index) {
      this.index = index;
    },
  },
  beforeDestroy() {
    this.$bus.$off('getUserInfo');
    this.$bus.$off('clearSearch');
  }
}
</script>

<style lang="less" scoped>
.loading-container {
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* 设置容器高度为视口高度 */
}
</style>