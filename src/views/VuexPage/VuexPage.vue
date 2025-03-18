<!-- 结构 -->
<template>
  <div>
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />

    <div class="container">
      <!-- 先用普通写法 -->
      <div class="ordinary-box">
        <div class="text-common-style">👇🏻 用普通方式实现下面的功能: 👇🏻</div>
        <span>当前求和为: {{ ordinary.sum }}</span>
        <div class="ordinary-box-btn">
          <van-dropdown-menu class="dropdown-menu">
            <van-dropdown-item v-model="ordinary.value" :options="ordinary.option" />
          </van-dropdown-menu>
          <button @click="handleClick(1)">+</button>
          <button @click="handleClick(2)">-</button>
          <button @click="handleClick(3)">当前和为奇数再加</button>
          <button @click="handleClick(4)">等一等再加</button>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- 逻辑处理 -->
<script>
// 引入其他组件
import MyNavBar from '@/components/MyNavBar.vue';


export default {
  name: 'VuexPage',
  components: {
    MyNavBar
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
      // 普通的数据
      ordinary: {
        showPopover: false,
        option: [
          { text: '1', value: 1 },
          { text: '2', value: 2 },
          { text: '3', value: 3 },
        ],
        value: 1,
        sum: 0
      }
    }
  },
  methods: {
    handleLeftClick() {
      this.$router.back();
    },
    handleRightClick() {
    },
    handleClick(flag) {
      if (flag === 1) {
        this.ordinary.sum += this.ordinary.value;
      } else if (flag === 2) {
        this.ordinary.sum -= this.ordinary.value;
      } else if (flag === 3) {
        if (this.ordinary.sum % 2 === 1) {
          this.ordinary.sum += this.ordinary.value;
        }
      } else if (flag === 4) {
        setTimeout(() => {
          this.ordinary.sum += this.ordinary.value;
        }, 2000);
      }
    }
  },
}
</script>


<!-- 样式 -->
<style scoped lang='less'>
.container {
  padding: 10px;
  font-size: 18px;

  .ordinary-box {
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #f5f5f5;

    .ordinary-box-btn {
      display: flex;
      flex-direction: row;
      gap: 5px;
      align-items: center;

      .dropdown-menu {
        width: 45px;
      }
    }
  }
}
</style>