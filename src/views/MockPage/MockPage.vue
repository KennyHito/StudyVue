<template>
  <div>
    <div class="search">
      <input v-model="searchKeyword" placeholder="搜索用户名/邮箱">
      <button @click="fetchUserList">搜索</button>
    </div>

    <h2>用户列表（第{{ currentPage }}页）</h2>
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>头像</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>性别</th>
            <th>邮箱</th>
            <th>注册时间</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userList" :key="user.id">
            <td>{{ user.id }}</td>
            <td><img :src="user.avatar" alt="用户头像" class="img_box" /></td>
            <td>{{ user.name }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.createTime }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage >= totalPages">下一页</button>
    </div>
  </div>
</template>

<script>
import { getUserList } from '@/api';

export default {
  data() {
    return {
      userList: [],
      currentPage: 1,
      pageSize: 10,
      total: 0,
      searchKeyword: '',
      loading: false,
      totalPages: 0
    };
  },
  mounted() {
    this.fetchUserList();
  },
  methods: {
    fetchUserList() {
      this.loading = true;
      getUserList(
        {
          page: this.currentPage,
          pageSize: this.pageSize,
          keyword: this.searchKeyword
        }
      )
        .then(response => {
          console.log('⚠️测试打印的内容:--->', response);

          this.loading = false;
          this.userList = response.data.data.list;
          this.total = response.data.data.total;
          this.totalPages = Math.ceil(this.total / this.pageSize);
        })
        .catch(error => {
          this.loading = false;
          console.error('获取用户列表失败:', error);
        });
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchUserList();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchUserList();
      }
    }
  }
};
</script>

<style scoped lang="less">
.img_box {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>