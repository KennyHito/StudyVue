<template>
  <div>
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />

    <div class="container">
      <!-- 子组件MoneyInput -->
      <van-button class="button-box" color="linear-gradient(to right,#EA5514,#EB6821,#EC7A2E,#ED8B3C,#EE9C4B)"
        @click="handleClick">
        获取输入的用户名
      </van-button>
      <MoneyInput :name="studentName" :age="studentAge" ref="moneyInputRef" />

      <div>2、日期字符串转年月日形式: {{ formattedDate }}</div>
      <div>3、全局配置的属性: {{ $apiBaseUrl }}</div>
      <div>
        <van-radio-group class="radio-group-style" v-model="selectedOption">
          4、请选择性别：
          <van-radio name="1">男</van-radio>
          <van-radio name="2">女</van-radio>
        </van-radio-group>
      </div>

      <van-button class="button-box"
        color="linear-gradient(to right, #F1C78E,#BBD2CE,#F3B89E,#EB5E58,#F1D986,#E8C9AC,#CFA8D3,#E5C89E)"
        @click="showMsg">
        点击获取通知
      </van-button>
    </div>
  </div>
</template>

<script>
// 引入其他组件
import MoneyInput from '@/components/MoneyInput.vue'
import MyNavBar from '@/components/MyNavBar.vue';
import { common } from '../../mixin/common'

export default {
  name: "TestOne",
  mixins: [common],
  components: {
    MoneyInput,
    MyNavBar
  },
  created() {

  },
  mounted() {
    this.studentName = "张三";
    this.studentAge = 18;
  },
  data() {
    return {
      nav: {
        title: "测试_1",
        leftButtonText: "返回",
        rightButtonText: "啊啊啊"
      },
      date: new Date(),
      currData: [2, 4, 3, 13, 53, 23, 56, 99, 37],
      selectedOption: "1",
      studentName: "",
      studentAge: 0
    };
  },
  methods: {
    handleLeftClick() {
      this.$router.back();
    },
    handleRightClick() {
      this.$toast('啊啊啊');
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
  text-align: center;
  padding: 10px;
  font-size: 18px;
}

.radio-group-style {
  display: flex;
  margin-top: 10px;
}

.button-box {
  width: 300px;
  height: 50px;
  border-radius: 25px;
  font-size: 18px;
  margin: 5px;
}
</style>