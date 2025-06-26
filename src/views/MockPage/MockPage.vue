<!-- 结构 -->
<template>
  <div>

    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />
    <div class="search">
      <input v-model="searchKeyword" placeholder="搜索用户名/邮箱">
      <button @click="fetchUserList(true)">模糊搜索</button>
    </div>

    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div v-for="user in userList" :key="user.id">
          <div>序号: {{ user.id }}</div>
          <div>头像: <img :src="user.avatar" alt="用户头像" class="img_box" /></div>
          <div>姓名: {{ user.name }}</div>
          <div>年龄: {{ user.age }}</div>
          <div>性别: {{ user.gender }}</div>
          <div>手机号: {{ user.phone }}</div>
          <div>邮箱: {{ user.email }}</div>
          <div>地址: {{ user.address }}</div>
          <hr />
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<!-- 逻辑处理 -->
<script>
// 引入其他组件
import MyNavBar from '@/components/MyNavBar.vue'
import { getUserList } from '@/api';

export default {
  name: 'MockPage',
  components: {
    MyNavBar,
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
      loading: false,
      finished: false,
      refreshing: false,
      userList: [],
      currentPage: 1,
      pageSize: 10,
      total: 0,
      searchKeyword: '',
      totalPages: 0
    };
  },
  methods: {
    handleLeftClick() {
      this.$router.back();
    },
    handleRightClick() {

    },
    onLoad() {
      this.fetchUserList(false);
    },
    fetchUserList(flag) {
      console.log('⚠️我加载了数据!');
      if (flag) {
        this.refreshing = true;
        // 清空列表数据
        this.finished = false;

        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        this.loading = true;
        this.currentPage = 1;
        this.userList = [];
      }
      getUserList(
        {
          page: this.currentPage,
          pageSize: this.pageSize,
          keyword: this.searchKeyword
        }
      )
        .then(response => {
          this.loading = false;
          this.refreshing = false;
          if (flag) {
            this.userList = response.data.data.list;
          } else {
            this.userList = [...this.userList, ...response.data.data.list];
          }
          this.total = response.data.data.total;
          this.totalPages = Math.ceil(this.total / this.pageSize);
          if (this.currentPage >= this.totalPages) {
            this.finished = true;
          } else {
            this.currentPage = this.currentPage + 1;
          }
        })
        .catch(error => {
          console.log('⚠️测试打印的内容:--->', error);
          this.loading = false;
          this.refreshing = false;
        });
    },
    onRefresh() {
      this.onLoad(true);
    },
  },
};
</script>


<!-- 样式 -->
<style scoped lang='less'>
.img_box {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>