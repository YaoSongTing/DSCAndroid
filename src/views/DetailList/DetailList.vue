<!-- 详情页 -->
<template>
<div class='detail-list'> 
    <DetaillSwipe :DetailListswipe='DetailListswipe.gallery_list' />
    <div class="contend">
        <div>

        <h2>{{DetailListswipe.market_price}}</h2><span></span>
        </div>
        <h3>{{DetailListswipe.goods_style_name}}</h3>
        <div class="title">
            <span :class="{active:flag}">商品详情</span>
            <span :class="{active:!flag}">规格参数</span>
        </div>
        <div class="deta" v-html="DetailListswipe.goods_desc"></div>
    </div>
    <DetaillFooter/>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import DetaillSwipe from './components/DetaillSwipe'
import DetaillFooter from './components/DetaillFooter'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    DetaillSwipe,
    DetaillFooter,
},
data() {
//这里存放数据
return {
flag:true
};
},
//监听属性 类似于data概念
computed: {
    DetailListswipe(){ 
        return this.$store.state.DetailList
    }
},
//监控data中的数据变化
watch: {},
//方法集合
 
methods: {

},
beforeCreate() {}, //生命周期 - 创建之前
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.$store.dispatch('actgetDetailList',{goods_id:this.$route.query.title})
},
beforeMount() {}, //生命周期 - 挂载之前
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() { 
},
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' >
.contend{
    height: 3.4rem;
    line-height: 3.4rem;
    padding: 1rem 1rem   0;
    h2{
        font-size: 2.2rem;
        color: red;
        &::before{
            content: '￥';
            font-size: 1.5rem;

        }
    }
    h3{
            font-size: 1.5rem;
    overflow: hidden;
    line-height: 1.5;
    max-height: 5rem;
    }
    .title{
        span{
            text-align: center;
            display: inline-block;
            width: 50%;
            font-size: 1.6rem;
        }
    }
    .active{
        border-bottom: 1px solid red;
    }
    .deta{
        width: 100%;
        margin-bottom: 5rem;
        p{
            a{
                img{
                 width: 100%; 
                 display: block;  
                }
            }
        }
        img{
                 width: 100%; 
                 display: block;  
                }
    //     .img, .imgalt {
    //     width: 100%;
    //     display: block;
    //     img{
    //             width: 100%;
    //     display: block;
    //     }
    // }
    }
}
</style>