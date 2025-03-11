<!-- 结构 -->
<template>
  <div>
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />
    <div class="container">
      <van-button class="button-box" color="linear-gradient(to right,#EB5E58,#F1D986)" @click="handleLocalStorage(1)">
        点击保存一个数据
      </van-button>
      <van-button class="button-box" color="linear-gradient(to right,#BBD2CE,#F3B89E)" @click="handleLocalStorage(2)">
        点击读取一个数据
      </van-button>
      <van-button class="button-box" color="linear-gradient(to right,#CFA8D3,#E5C89E)" @click="handleLocalStorage(3)">
        点击删除一个数据
      </van-button>
      <van-button class="button-box" color="linear-gradient(to right,#CFA8D3,#E5C89E)" @click="handleLocalStorage(4)">
        点击清空数据
      </van-button>
    </div>
  </div>
</template>

<!-- 逻辑处理 -->
<script>
// 引入其他组件
import MyNavBar from '@/components/MyNavBar.vue';

export default {
  name: 'LocalStorage',
  components: {
    MyNavBar
  },
  data() {
    return {
      nav: {
        title: "本地存储",
        leftButtonText: "返回",
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
    handleLocalStorage(type) {
      if (type === 1) {
        //保存
        window.localStorage.setItem("name", "张三");
        window.localStorage.setItem('userInfo', JSON.stringify({ "name": "李四", "age": 18 }));
      } else if (type === 2) {
        //读取
        console.log(window.localStorage.getItem("name"));
        console.log(window.localStorage.getItem("userInfo"));
      } else if (type === 3) {
        //删除
        window.localStorage.removeItem("name");
      } else if (type === 4) {
        //清空数据
        window.localStorage.clear();
      }
    }
  },
  computed: {

  },
  beforeDestroy() {
    console.log('页面即将销毁');
  },
  destroyed() {
    console.log('页面已销毁');
  },
}
</script>


<!-- 样式 -->
<style scoped lang='less'>
.container {
  padding: 10px;
}

.button-box {
  height: 50px;
  border-radius: 25px;
  font-size: 18px;
  margin: 5px;
}
</style>