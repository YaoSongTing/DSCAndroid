<!-- 商品列表页 -->
<template>
<div class='goodslist'>
    <div class="img">
     <img src="@/assets/timg.gif"  v-if="!this.$store.state.GoodsListbodys.length"  alt="" class="img"> 

    </div>
    <CategoryHeader/>
    <GoodsListbody :GoodsListbodys='GoodsListbodys'/>
    <div class="good-footer" >
        我也是有底线的~~~~
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import GoodsListbody from '@/components/GoodsListbody'
import CategoryHeader from '../Category/components/CategoryHeader'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    GoodsListbody,
    CategoryHeader
},
data() {
//这里存放数据
return {
    page:1,
    reqflay:true
};
},
//监听属性 类似于data概念
computed: {
     GoodsListbodys(){
        return this.$store.state.GoodsListbodys
    }
},
//监控data中的数据变化
watch: {
    
},
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
    // console.log(this.$route.params.gid);
         this.$store.dispatch('actgetGoodsListbodys',{cat_id:this.$route.params.gid,size:10,page: this.page}) 
         document.body.onscroll= ()=>{ 
      
            //  console.log(window.innerHeight);
            //  console.log(document.documentElement.scrollTop);//卷进去的高度
            // console.log(window.innerHeight);//屏幕视口的高度
            // console.log(document.body.scrollHeight);//文档的高度
            // if(document.documentElement.scrollTop+window.innerHeight>=document.body.scrollHeight&&this.reqflay){
            //     this.reqflay=!this.reqflay
            //     console.log(this.reqflay);
            //     this.page++
            //     this.$store.dispatch('actgetGoodsListbodys',{cat_id:this.$route.params.gid,size:10,page: this.page})  
                 
            // }
                 if(document.documentElement.scrollTop+window.innerHeight>=document.body.scrollHeight-20&&this.$store.state.reqflay){
                this.$store.state.reqflay=!this.$store.state.reqflay
                this.page++
                this.$store.dispatch('actgetGoodsListbodys',{keywords:this.$route.query.title,size:10,page: this.page})
                 
            }
         }
},
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {
    this.$store.state.GoodsListbodys=[]
}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script >
<style lang='less' scoped>
.good-footer{
    height: 4rem;
    width: 100%;
    line-height: 4rem;
    color: #ccc;
    font-size: 2rem;
    text-align: center;
    background: #F4F4F4;
}
    .img{
    width: 20rem;
    height: 20rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-10rem,-10rem);
    img{
        width: 100%;
        
    }}
</style>