<!--可复用头部  -->
<template>
<div class='reusable-head'>
    <div class="back iconfont icon-xiangzuo"  onclick='window.history.back()' v-if="left"> </div>
    <div class="title"> {{title}}</div>
    <div class="share iconfont icon-fenxiang2" @click="fn" v-if="right"> </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
//import引入的组件需要注入到对象中才能使用
components: {
 
},
methods:{
    fn(){
        console.log(111);
    }
},
props:{
    title:String,
    left:Boolean,
    right:Boolean
},
data() {
//这里存放数据
return {

};

},
mounted(){
    
} 

 

}
</script>
<style lang='less'>
    .reusable-head{
        display: flex;
        justify-content: space-between;  
        text-align: center; 
        border-bottom: 1px solid #efefef;
        width: 100%;
        height: 4.4rem;
        position: relative;
        top: 0;
        left: 0;
        z-index: 999;
        font-size: 1.4rem;
        line-height: 4.4rem;
        .back{
            width: 10%;
            text-align: center;
            position: relative;
            z-index: 10;
        }
        .share{
            width: 10%;
            text-align: center;
             position: relative;
            z-index: 10;
        }
        .title {
            width: 100%;
            position: absolute;
            left: 0;
            z-index: 9;
        }
    }
</style>