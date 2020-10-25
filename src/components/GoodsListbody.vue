<!-- 商品详情页身体 公共的 -->
<template>
<div class='goodslist-body'>  
    <ul>
        <router-link tag="li" :to="'/detaillist?title='+value.goods_id" class="list-item" v-for="value in GoodsListbodys" :key="value.goods_id">
            <img :src="value.goods_img" alt="">
            <h2>{{value.goods_name}}</h2>
        </router-link>
    </ul> 
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
};
},
props:{
    GoodsListbodys:Array
},
//监听属性 类似于data概念
computed: {
    // GoodsListbodys(){
    //     return this.$store.state.GoodsListbodys
    // }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
beforeCreate() {}, //生命周期 - 创建之前
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
beforeMount() {}, //生命周期 - 挂载之前
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    // 请求数据
        //  getGoodsList(this.$route.params.gid).then(res=>{
        //      this.GoodsListbodys=res.data 
        //  })
    //    this.$store.dispatch('actgetGoodsListbodys',this.$route.params.gid) 
        
},
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less'>
.goodslist-body{
  padding: 0 10px;
  width: calc(~'100% - 20px');
    background-color: #f4f4f4;
  ul{
   
    display: flex; 
    justify-content: space-between;
    flex-wrap: wrap;
    .list-item{
        background-color: #fff;
      width: calc(~'50% - 5px');
        img{
            width: 100%;
        }
        h2{
            height: 4rem;
            line-height: 2rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
    }
  }
 
}
</style>