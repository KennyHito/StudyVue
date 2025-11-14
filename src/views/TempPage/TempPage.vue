<!-- 结构 -->
<template>
  <div class="container">
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />

    <!-- van-swipe -->
    <van-swipe :loop="false" @change="onChange" :initial-swipe="currentIndex" ref="swipeRef">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img class="background-image" :src="image" />
      </van-swipe-item>
    </van-swipe>


    <van-button type="info" @click="buttonClick">信息按钮</van-button>

  </div>

</template>

<!-- 逻辑处理 -->
<script>
// 引入其他组件
import MyNavBar from '@/components/MyNavBar.vue';

export default {
  name: 'TempPage',
  components: {
    MyNavBar
  },
  // 页面切换/关闭前保存当前索引（兼容路由切换和页面刷新）
  beforeUnmount() {
    this.saveCurrentIndex();
  },
  mounted() {
    // 获取路由参数
    console.log('⚠️测试打印的内容:--->mounted');

    const savedIndex = localStorage.getItem('vanSwipeLastIndex');
    this.currentIndex = savedIndex !== null ? Number(savedIndex) : 0;
  },
  data() {
    return {
      nav: {
        title: "临时页面",
        leftButtonText: "",
        rightButtonText: ""
      },
      currentIndex: 0,
      images: [
        'https://testconnectpc.lczq.com/lxmf/oss/newfile/storage/20a34575df054020ad03bf92db6bbf03.png',
        'https://testconnectpc.lczq.com/lxmf/oss/newfile/storage/2025/10/23/1_1761184476593.jpg',
        'https://gips3.baidu.com/it/u=3557221034,1819987898&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960',
        'https://img01.yzcdn.cn/vant/apple-3.jpg',
        'https://img01.yzcdn.cn/vant/apple-4.jpg',
      ],
    }
  },

  // 页面切换/关闭前保存当前索引（兼容路由切换和页面刷新）
  beforeUnmount() {
    this.saveCurrentIndex();
  },
  methods: {
    handleLeftClick() {
      this.$router.back();
    },
    handleRightClick() {

    },
    // 滑动时实时更新并保存索引
    onChange(index) {
      localStorage.setItem('vanSwipeLastIndex', index);
    },
    // 手动保存当前索引（用于特殊场景）
    saveCurrentIndex() {
      const currentIndex = this.$refs.swipeRef?.activeIndex;
      if (currentIndex !== undefined) {
        localStorage.setItem('vanSwipeLastIndex', currentIndex);
      }
    },
    buttonClick() {
      this.$router.push({
        path: '/AddressPage'
      });
    }
  }
}
</script>


<!-- 样式 -->
<style scoped lang='less'>
.container {
  width: 100%;
  height: 800px;
  // background-color: orange;
}

.background-image {
  width: 100%;
  /* 强制图片宽度等于容器 */
  height: 250px;
  /* 强制图片高度等于容器 */
  object-fit: fill;
  /* 保持比例，填满容器（裁剪超出部分） */
  object-position: center;
  /* 裁剪时居中显示（可选） */
}
</style>