<!-- 结构 -->
<template>
  <div>
    <van-nav-bar title="编辑地址" left-text="返回" right-text="" left-arrow @click-left="onClickLeft"
      @click-right="onClickRight" />
    <van-address-edit :area-list="areaList" show-postal show-delete show-set-default show-search-result
      :search-result="searchResult" :address-info="addressInfo" :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave" @delete="onDelete" @change-detail="onChangeDetail" @click-area="clickArea" />
  </div>
</template>

<!-- 逻辑处理 -->
<script>
import { Toast } from 'vant';
import { areaList } from '@vant/area-data';
export default {
  data() {
    return {
      areaList,
      searchResult: [],
      addressInfo: {
        name: this.$route.query.name,
        tel: this.$route.query.tel,
        province: this.$route.query.province,
        city: this.$route.query.city,
        county: this.$route.query.county,
        addressDetail: this.$route.query.addressDetail,
        areaCode: '024300',
        postalCode: this.$route.query.postalCode,
        isDefault: this.$route.query.isDefault === 'true' ? true : false,
      },
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onClickRight(){

    },
    clickArea(){

    },
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
}
</script>


<!-- 样式 -->
<style scoped lang='less'></style>