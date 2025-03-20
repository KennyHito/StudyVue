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
        <span class="text-common-style">当前求和为: {{ ordinary.sum }}</span>
        <span class="text-common-style">当前求和放大十倍为: {{ ordinary.sum * 10 }}</span>
        <div class="ordinary-box-btn">
          <select v-model.number="ordinary.value" class="ordinary-dropdown-menu">
            <option v-for="(item, index) in ordinary.option" :key="index" :value="item.value">{{ item.text }}</option>
          </select>
          <button @click="handleClick(1)">+</button>
          <button @click="handleClick(2)">-</button>
          <button @click="handleClick(3)">当前和为奇数再加</button>
          <button @click="handleClick(4)">等一等再加</button>
        </div>
      </div>

      <div class="vuex-box">
        <div class="text-common-style">👇🏻 用Vuex方式实现下面的功能: 👇🏻</div>
        <span class="text-common-style">当前求和为: {{ $store.state.sum }}</span>
        <span class="text-common-style">当前求和放大十倍为: {{ $store.getters.bigSum }}</span>
        <div class="vuex-box-btn">
          <select v-model.number="vuexData.value" class="vuex-dropdown-menu">
            <option v-for="(item, index) in vuexData.option" :key="index" :value="item.value">{{ item.text }}</option>
          </select>
          <button @click="handleVuexClick(1)">+</button>
          <button @click="handleVuexClick(2)">-</button>
          <button @click="handleVuexClick(3)">当前和为奇数再加</button>
          <button @click="handleVuexClick(4)">等一等再加</button>
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
      },
      // Vuex的数据
      vuexData: {
        showPopover: false,
        option: [
          { text: '1', value: 1 },
          { text: '2', value: 2 },
          { text: '3', value: 3 },
        ],
        value: 1,
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
    },
    handleVuexClick(flag) {
      if (flag === 1) {
        // this.$store.dispatch('jia', this.vuexData.value)
        // 如果没有逻辑处理可以直接调用commit,名字一定要和mutations中的方法名一样,即为大写的
        this.$store.commit('JIA', this.vuexData.value)
      } else if (flag === 2) {
        // this.$store.dispatch('jian', this.vuexData.value)
        // 同理如上
        this.$store.commit('JIAN', this.vuexData.value)
      } else if (flag === 3) {
        // if (this.$store.state.sum % 2 === 1) {
        //   this.$store.dispatch('jia', this.vuexData.value)
        // }
        this.$store.dispatch('jiaOdd', this.vuexData.value);
      } else if (flag === 4) {
        // setTimeout(() => {
        //   this.$store.dispatch('jia', this.vuexData.value)
        // }, 2000);
        this.$store.dispatch('jiaWait', this.vuexData.value);
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
    background-color: rgb(255, 197, 197);
    border-radius: 5px;

    .ordinary-box-btn {
      display: flex;
      flex-direction: row;
      gap: 5px;
      align-items: center;

      .ordinary-dropdown-menu {
        width: 30px;
        height: 28px;
      }
    }
  }

  .vuex-box {
    margin-top: 20px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: rgb(255, 230, 184);
    border-radius: 5px;

    .vuex-box-btn {
      display: flex;
      flex-direction: row;
      gap: 5px;
      align-items: center;

      .vuex-dropdown-menu {
        width: 30px;
        height: 28px;
      }
    }
  }
}

.text-common-style {
  font-size: 20px;
  font-weight: bold;
}
</style>