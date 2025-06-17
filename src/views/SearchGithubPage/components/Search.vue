<!-- 结构 -->
<template>
  <div>
    <van-field v-model="username" center clearable label="用户名" placeholder="请输入用户名">
      <template #button>
        <van-button type="danger" @click="handleClick">获取用户</van-button>
      </template>
    </van-field>
  </div>
</template>

<!-- 逻辑处理 -->
<script>
// 引入其他组件
import http from '@/config/httpService';
import { Request_Api_1, Request_Api_2, Request_Api_3 } from '@/config/ApiHeader.js';
export default {
  name: 'Search',
  data() {
    return {
      username: '',
    }
  },
  mounted() {
    this.$bus.$on('clearSearch', () => {
      this.username = '';
    });
  },
  methods: {
    handleClick() {
      if (!this.username) {
        this.$toast('请输入用户名');
        return;
      }
      this.$bus.$emit('getUserInfo', JSON.stringify({ isLoading: true, items: [] }));
      http.get(Request_Api_3 + this.username).then(res => {
        if (res.status === 200) {
          if (res.data.total_count === 0) {
            this.$toast("暂无数据");
          }
          this.$bus.$emit('getUserInfo', JSON.stringify({ isLoading: false, items: res.data.items }));
        } else {
          this.$toast(res.statusText);
        }
      })
    }
  },
  beforeDestroy() {
    this.$bus.$off('clearSearch');
  }
}
</script>