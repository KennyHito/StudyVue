<template>
  <div>
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />

    <div class="container">
      <!-- 子组件MoneyInput -->
      <van-button class="button-box" color="linear-gradient(to right, #ff6034, #ee0a24)" @click="handleClick">
        获取输入的用户名
      </van-button>
      <MoneyInput :placeholderText="moneyPlaceholder" ref="moneyInputRef" />

      <div>2、日期字符串转年月日形式: {{ formattedDate }}</div>
      <div>3、全局配置的属性: {{ $apiBaseUrl }}</div>
      <div>
        <van-radio-group class="radio-group-style" v-model="selectedOption">
          4、请选择性别：
          <van-radio name="1">男</van-radio>
          <van-radio name="2">女</van-radio>
        </van-radio-group>
      </div>

    </div>
  </div>
</template>

<script>
// 引入其他组件
import MoneyInput from '@/components/MoneyInput.vue'
import MyNavBar from '@/components/MyNavBar.vue';

export default {
  name: "TestOne",
  components: {
    MoneyInput,
    MyNavBar
  },
  created() {

  },
  mounted() {
    this.moneyPlaceholder = "1、你好,这里的内容来源于父组件传给子组件的!";
  },
  data() {
    return {
      nav: {
        title: "测试_1",
        leftButtonText: "",
        rightButtonText: ""
      },
      date: new Date(),
      currData: [2, 4, 3, 13, 53, 23, 56, 99, 37],
      selectedOption: "1",
      moneyPlaceholder: "",
    };
  },
  methods: {
    handleLeftClick() {
      this.$router.back();
    },
    handleRightClick() {

    },
    handleClick() {
      this.$refs.moneyInputRef.showMoney();
    }
  },
  computed: {
    formattedDate() {
      let dateNum = "20240910";
      const date = new Date(
        dateNum.substring(0, 4),
        dateNum.substring(4, 6) - 1,
        dateNum.substring(6, 8)
      );
      return new Intl.DateTimeFormat('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
      }).format(date);
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 10px;
  font-size: 18px;
}

.radio-group-style {
  display: flex;
  margin-top: 10px;
}

.button-box {
  width: 200px;
  height: 50px;
  border-radius: 25px;
  font-size: 18px;
  margin: 5px;
}
</style>