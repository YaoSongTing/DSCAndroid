<!-- 详情页底部插件 -->
<template>
  <div class="detaill-sfooter">
    <div class="kefu">
      <i class="iconfont icon-kefu"></i>
      <span>客服</span>
    </div>
    <div class="collect">
      <i class="iconfont icon-shoucang1"></i>
      <span>收藏</span>
    </div>
    <router-link class="cart" tag="div" to="/cart">
      <i class="iconfont icon-ai66"></i>
      <div :class="{ addNum: flag }" v-show="flag">1</div>
      <em>{{ count }}</em>
      <span>购物车</span>
    </router-link>
    <div class="addcart" @click="addcartfn(DetailList)">加入购物车</div>
    <div class="buy">立即购买</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      flag: false,
    };
  },
  computed: {
    DetailList() {
      return this.$store.state.DetailList;
    },
    count() {
      let count = 0;
      this.$store.state.carts.map((item) => {
        if (item.isSelect) {
          count += item.num;
        }
      });
      return count;
    },
  },
  methods: {
    addcartfn(data) {
      //处理数据
      //判断购物车列表中是否有当前数据
      // 有商品数量++
      // 没有就新增加
      this.flag = true;
      this.timer = setTimeout(() => {
        this.flag = false;
      }, 1000);
      let isCart = this.$store.state.carts.find((item) => {
        if (item.goods_id == data.goods_id) {
          item.num++;
        }
        return item.goods_id == data.goods_id;
      });

      if (!isCart) {
        var cartData = {
          goods_id: data.goods_id,
          goods_thumb: data.goods_thumb,
          goods_name: data.goods_name,
          cost_price: data.cost_price,
          num: 1,
          isSelect: false,
        };
      }

      this.$store.commit("setcartdatas", cartData);
    },
  },
 
};
</script>
<style lang="less">
.detaill-sfooter{
    width: 100%;
    height: 4.9rem;
    border-top: 1px solid #efefef;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: flex;
    >div{
        font-size: 1.2rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #666;
        i{
            font-size: 2rem;
        }
    }
    .addcart{
        flex: 2;
        background: #f55;
        color: #fff;
        font-size: 1.4rem;
    }
    .buy{
        flex: 2;
        background: #ff976a;
        color: #fff;
        font-size: 1.4rem;
    }
    .collect{
        border-left: 1px solid #efefef;
        border-right: 1px solid #efefef;
    }
    .cart{
        position: relative;
        em{
            position: absolute;
            right: 0.5rem;
            top: 0.5rem;
            font-style: normal;
            min-width: 1.6rem;
            height: 1.6rem;
            border-radius: 0.7rem;
            text-align: center;
            line-height: 1.6rem;
            background: #f00;
            color: #fff;

        }
         .addNum {
  color: #f00;
  position: absolute;
  font-size: 2rem;
  width: 100%;
  top: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  opacity: 0;
  text-align: center;
  animation: moveup 1s linear;}
  @keyframes moveup {
  0% {
    top: 1rem;
    opacity: 0;
  }
  50% {
    top: -2rem;
    opacity: 1;
  }
  100% {
    top: -2rem;
    opacity: 0;
  }
    }


}
}

</style>
