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
          <div>
            <van-button type="danger" class="edit-button-style" v-if="item.checked"
              @click="editItem(index)">编辑</van-button>
            <van-button type="danger" class="del-button-style" v-if="item.checked"
              @click="deleteItem(index)">删除</van-button>
          </div>
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

    <van-dialog v-model="showEditView" title="编辑todo" show-cancel-button @confirm="onConfirm">
      <van-field v-model="editValue" placeholder="请输入编辑的todo" class="input-style" clearable />
    </van-dialog>
  </div>
</template>

<!-- 逻辑处理 -->
<script>
// 引入其他组件
import MyNavBar from '@/components/MyNavBar.vue';

export default {
  name: 'TodoList',
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
        rightButtonText: "清除缓存"
      },
      dataArr: JSON.parse(localStorage.getItem('todos')) || [],
      doneCount: 0,
      inputValue: '',
      selectAllChecked: false,
      showEditView: false,
      editValue: "",
      editIndex: 0
    }
  },
  methods: {
    handleLeftClick() {
      this.$router.back();
    },
    handleRightClick() {
      this.dataArr = [];
      this.updateDoneCount();
      window.localStorage.removeItem('todos');
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
    //编辑某一条
    editItem(index) {
      this.editIndex = index;
      this.editValue = this.dataArr[index].content;
      this.showEditView = true;
    },
    onConfirm() {
      console.log("confirm")
      this.dataArr[this.editIndex].content = this.editValue;
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
      if (this.doneCount === this.dataArr.length && this.dataArr.length !== 0) {
        this.selectAllChecked = true;
      } else {
        this.selectAllChecked = false;
      }
    },
  },
  watch: {
    dataArr: {
      deep: true,
      handler(newValue, oldValue) {
        window.localStorage.setItem('todos', JSON.stringify(newValue));
      }
    }
  },
  beforeDestroy() {

  },
  destroyed() {

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

    .edit-button-style {
      background-color: rgb(137, 169, 169);
      border: 0;
      font-size: 18px;
      height: 22px;
      line-height: 22px;
      border-radius: 10px;
      margin-right: 5px;
    }

    .del-button-style {
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