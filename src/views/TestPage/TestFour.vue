<!-- 结构 -->
<template>
  <div>
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />
    <div class="container">
      <!-- 工作内容输入框 -->
      <van-field v-model="inputValue" label="工作任务" placeholder="请输入工作任务" class="input-style" clearable
        @keyup.enter="handleEnter" />

      <br />

      <!-- 遍历显示工作内容 -->
      <div v-for="(item, index) in dataArr" :key="index">
        <div class="data-style-box">
          <van-checkbox v-model="item.checked" checked-color="#ee0a24" shape="square" class="checkbox-style"
            @click="checkBoxClick">{{ item.content }}</van-checkbox>
          <van-button type="danger" class="button-style" v-if="item.checked" @click="deleteItem(index)">删除</van-button>
        </div>
      </div>

      <br />

      <!-- 已完成/全部 等操作按钮 -->
      <div class="bottom-box">
        <van-checkbox v-model="selectAllChecked" checked-color="#ee0a24" shape="square" class="checkbox-style"
          @click="selectAllClick"> 已完成{{ doneCount }},全部{{ dataArr.length }}</van-checkbox>
        <van-button type="danger" class="button-style" @click="deleteAllDone">删除已完成任务</van-button>
      </div>
    </div>
  </div>
</template>

<!-- 逻辑处理 -->
<script>
// 引入其他组件
import MyNavBar from '@/components/MyNavBar.vue';

export default {
  name: 'TestFour',
  components: {
    MyNavBar
  },
  data() {
    return {
      nav: {
        title: "写个ToDo-List案例",
        leftButtonText: "",
        rightButtonText: ""
      },
      dataArr: [],
      doneCount: 0,
      inputValue: '',
      selectAllChecked: false
    }
  },
  methods: {
    handleLeftClick() {
      this.$router.back();
    },
    handleRightClick() {

    },
    handleEnter() {
      if (this.inputValue === "") {
        this.$toast("请输入工作任务");
        return;
      }
      for (let iii = 0; iii < this.dataArr.length; iii++) {
        if (this.dataArr[iii].content === this.inputValue) {
          this.$toast("该任务已存在");
          return;
        }
      }
      this.dataArr.unshift({ content: this.inputValue, checked: false });
      this.inputValue = ""
    },
    checkBoxClick() {
      this.updateDoneCount();
    },
    // 删除某一条
    deleteItem(index) {
      this.dataArr.splice(index, 1);
      this.updateDoneCount();
    },
    // 删除所有已完成
    deleteAllDone() {
      this.selectAllChecked = false;
      //通过filter保留未勾选
      this.dataArr = this.dataArr.filter(item => item['checked'] === false);
      this.doneCount = 0;
    },
    //全选or反全选
    selectAllClick() {
      if (this.selectAllChecked) {
        for (let iii = 0; iii < this.dataArr.length; iii++) {
          this.dataArr[iii].checked = true;
        }
        this.doneCount = this.dataArr.length;
      } else {
        for (let iii = 0; iii < this.dataArr.length; iii++) {
          this.dataArr[iii].checked = false;
        }
        this.doneCount = 0;
      }
    },
    //更新已完成的数量
    updateDoneCount() {
      this.doneCount = 0;
      for (let iii = 0; iii < this.dataArr.length; iii++) {
        if (this.dataArr[iii].checked) {
          this.doneCount++;
        }
      }
      if (this.doneCount === this.dataArr.length) {
        this.selectAllChecked = true;
      } else {
        this.selectAllChecked = false;
      }
    },
  },
  beforeDestroy() {
    console.log('destroy');
  },
}
</script>


<!-- 样式 -->
<style scoped lang='less'>
.container {
  padding: 20px;
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;

  .input-style {
    background-color: aliceblue;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 20px;
  }

  .data-style-box {
    height: 40px;
    line-height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .checkbox-style {
      font-size: 18px;
      font-weight: 500;
    }

    .button-style {
      font-size: 18px;
      height: 22px;
      line-height: 22px;
      border-radius: 10px;
    }
  }

  .bottom-box {
    height: 40px;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .button-style {
      font-size: 18px;
      height: 22px;
      line-height: 22px;
      border-radius: 10px;
    }
  }
}
</style>