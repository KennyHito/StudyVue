<!-- 结构 -->
<template>
  <div>
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />

    <div>
      <div class="search-box">
        <van-field v-model="searchKeyword" placeholder="请输入用户名/邮箱" class="custom-field" />
        <van-button type="danger" @click="fetchUserList(true)" class="custom-btn">模糊搜索</van-button>
      </div>
      <div class="content-box">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div v-for="user in userList" :key="user.id">
              <div>序号: {{ user.id }}</div>
              <div class="custom-img-box">头像:
                <img :src="user.avatar" alt="用户头像" class="custom-img" />
              </div>
              <div>姓名: {{ user.name }}</div>
              <div>年龄: {{ user.age }}</div>
              <div>性别: {{ user.gender }}</div>
              <div>手机号: {{ user.phone }}</div>
              <div>血型: {{ user.bloodType }}</div>
              <div>星座: {{ user.constellation }}</div>
              <div>婚姻状况: {{ user.maritalStatus }}</div>
              <div>学历: {{ user.education }}</div>
              <div>账户余额: {{ user.balance }}</div>
              <div>信用分: {{ user.creditScore }}</div>
              <div>毕业学校: {{ user.graduationSchool }}</div>
              <div>邮箱: {{ user.email }}</div>
              <div>微信号: {{ user.wechat }}</div>
              <div>QQ号: {{ user.qq }}</div>
              <div>个人博客: {{ user.blog }}</div>
              <div>职业: {{ user.profession }}</div>
              <div>公司: {{ user.company }}</div>
              <div>地址: {{ user.address }}</div>
              <div>爱好: {{ user.tags }}</div>
              <div>个性签名: {{ user.signature }}</div>
              <div>创建时间: {{ user.createTime }}</div>
              <div>最后登录时间: {{ user.lastLoginTime }}</div>
              <hr />
            </div>
          </van-list>
        </van-pull-refresh>
      </div>
    </div>
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
.search-box {
  padding: 10px;
  background-color: rgb(226, 224, 224);
  display: flex;
  flex-direction: row;

  .custom-field {
    border-radius: 10px;
  }

  .custom-btn {
    margin-left: 20px;
    width: 150px;
    border-radius: 10px;
  }
}

.content-box {
  padding: 10px;

  .custom-img-box {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .custom-img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
}
</style>