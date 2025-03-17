<!-- 结构 -->
<template>
  <div>
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />
    <div class="div-box">
      <Category>
        <!-- 这里是走slot的默认内容 -->
      </Category>
      <Category>
        <div>👇🏻这里显示自定义的文字👇🏻</div>
        <span>哈哈哈哈</span>
      </Category>
      <Category>
        <div>👇🏻这里显示自定义的图片👇🏻</div>
        <img src="@/assets/skull.png" alt="" style="height: 70%;">
      </Category>
      <Category>
        <div>👇🏻这里显示自定义的视频👇🏻</div>
        <video controls :src="movieUrl" style="height:70%"></video>
      </Category>
    </div>
  </div>
</template>

<!-- 逻辑处理 -->
<script>
// 引入其他组件
import MyNavBar from '@/components/MyNavBar.vue';
import Category from './components/Category.vue';

export default {
  name: 'SlotPage',
  components: {
    MyNavBar,
    Category
  },
  data() {
    return {
      nav: {
        title: "slot插槽",
        leftButtonText: "",
        rightButtonText: ""
      },
      movieUrl: ''
    }
  },
  mounted() {
    this.movieUrl = process.env.VUE_APP_BASE_URL;
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
.div-box {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>