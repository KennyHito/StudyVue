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
          <select v-model.number="ordinary.n" class="ordinary-dropdown-menu">
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
        <span class="text-common-style">当前求和为: {{ sum }}</span>
        <span class="text-common-style">当前求和放大十倍为: {{ bigSum }}</span>
        <span class="text-common-style">我在{{ school }}，学习{{ subject }}</span>
        <div class="vuex-box-btn">
          <select v-model.number="vuexData.n" class="vuex-dropdown-menu">
            <option v-for="(item, index) in vuexData.option" :key="index" :value="item.value">{{ item.text }}</option>
          </select>
          <button @click="JIA(vuexData.n)">+</button>
          <button @click="JIAN(vuexData.n)">-</button>
          <button @click="jiaOdd(vuexData.n)">当前和为奇数再加</button>
          <button @click="jiaWait(vuexData.n)">等一等再加</button>
        </div>
      </div>

    </div>
  </div>
</template>

<!-- 逻辑处理 -->
<script>
// 引入其他组件
import MyNavBar from '@/components/MyNavBar.vue';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

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
        n: 1,
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
        n: 1,
      }
    }
  },

  computed: {
    // 🌰方法一: 靠程序员自己亲自去写计算属性 this.$store.state
    // sum() {
    //   return this.$store.state.sum
    // },
    // school() {
    //   return this.$store.state.school
    // },
    // subject() {
    //   return this.$store.state.subject
    // },

    // 🌰方法二: mapState
    // 借助mapState生成计算属性，从state中读取数据。（对象写法）
    // ...mapState({ sum: 'sum', school: 'school', subject: 'subject' }),
    //借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState(['sum', 'school', 'subject']),

    /* ******************************************************************** */

    // 🌰方法一:靠程序员自己亲自去写计算属性 this.$store.getters
    // bigSum() {
    //   return this.$store.getters.bigSum
    // },

    // 🌰方法二: mapGetters
    // 借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
    // ...mapGetters({bigSum:'bigSum'})
    // 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
    ...mapGetters(['bigSum'])
  },
  methods: {
    handleLeftClick() {
      this.$router.back();
    },
    handleRightClick() {
    },
    handleClick(flag) {
      if (flag === 1) {
        this.ordinary.sum += this.ordinary.n;
      } else if (flag === 2) {
        this.ordinary.sum -= this.ordinary.n;
      } else if (flag === 3) {
        if (this.ordinary.sum % 2 === 1) {
          this.ordinary.sum += this.ordinary.n;
        }
      } else if (flag === 4) {
        setTimeout(() => {
          this.ordinary.sum += this.ordinary.n;
        }, 2000);
      }
    },

    // 🌰方法一:靠程序员自己亲自去写方法 this.$store.commit
    // JIA() {
    //   // this.$store.dispatch('jia', this.vuexData.n)
    //   // 如果没有逻辑处理可以直接调用commit,名字一定要和mutations中的方法名一样,即为大写的
    //   this.$store.commit('JIA', this.vuexData.n);
    // },
    // JIAN() {
    //   // this.$store.dispatch('jian', this.vuexData.n)
    //   // 同理如上
    //   this.$store.commit('JIAN', this.vuexData.n);
    // },

    // 🌰方法二: mapMutations
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
    // ...mapMutations({ JIA: 'JIA', JIA: 'JIAN' }),
    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
    ...mapMutations(['JIA', 'JIAN']),

    /* ******************************************************************** */

    // 🌰方法一:靠程序员自己亲自去写方法 this.$store.dispatch
    // jiaOdd() {
    //   // 将奇数逻辑等逻辑写到store中去
    //   // if (this.$store.state.sum % 2 === 1) {
    //   //   this.$store.dispatch('jia', this.vuexData.n)
    //   // }
    //   this.$store.dispatch('jiaOdd', this.vuexData.n);
    // },
    // jiaWait() {
    //   // setTimeout(() => {
    //   //   this.$store.dispatch('jia', this.vuexData.n)
    //   // }, 2000);
    //   // 将延迟逻辑等逻辑写到store中去
    //   this.$store.dispatch('jiaWait', this.vuexData.n);
    // },

    // 🌰方法二: mapActions
    //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
    // ...mapActions({ jiaOdd: 'jiaOdd', jiaWait: 'jiaWait' })
    //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
    ...mapActions(['jiaOdd', 'jiaWait'])
  },
}
</script>


<!-- 样式 -->
<style scoped lang='less'>
.container {
  padding: 5px;
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