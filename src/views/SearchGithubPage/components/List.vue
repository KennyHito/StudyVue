<!-- 结构 -->
<template>
  <div>
    <van-grid :column-num="3">
      <van-grid-item v-for="item in items" :key="item.id" :icon="item.avatar_url" :text="item.login"
        @click="handleClick(item)" />
    </van-grid>

    <van-empty v-show="items.length <= 0" description="暂无数据" />

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
    }
  },
  mounted() {
    this.$bus.$on('getUserInfo', (items) => {
      items.forEach((item) => {
        this.showImages.push(item.avatar_url);
      });
      this.items = items;
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