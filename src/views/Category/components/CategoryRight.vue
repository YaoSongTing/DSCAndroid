<!-- 分类 -->
<template>
<div class='categoryright' >
     <img src="@/assets/timg.gif" alt="" v-if="!this.$store.state.categoryRightdatas.length" class="img"> 
    <div class="bagimg"><img :src="img1?img1:img2" alt=""></div>
    <div v-for="list in this.$store.state.categoryRightdatas" :key='list.cat_id'>
         <h2>{{list.cat_name}}</h2>
         <ul>
             <li v-for="item in list.child" :key='item.cat_id' @click="togoodsList(item.cat_id,)">
                 <a href="javascript:;">
                     <img :src="item.touch_icon" alt="">
                     <span>{{item.cat_name}}</span>
                 </a>
             </li> 
         </ul> 
    </div> 
</div>
 
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import Axios from 'axios';
// import getCategoryRightdatas from '@/api/Category'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    
},
data() {
//这里存放数据
return {
    categoryrightdatas:'',
    img1:'',
    cid:'',
    arr:'',
   
};
},
//监听属性 类似于data概念
computed: {
  img2(){  
      var arr2=[]
      if(this.$store.state.categoryLeftdatas){ 
            arr2=this.$store.state.categoryLeftdatas.filter( item=> item.cat_id==this.cid )  
        } 
      return   arr2.length?  arr2[0].touch_catads:''  
  }
   
},    
//监控data中的数据变化
watch: {
    $route(to){ 
       
        let cid = to.params.cid;
        this.getCategoryRightDatasfn(cid) 
    }
    
},
//方法集合
methods: {
    // 获取右边数据
    getCategoryRightDatasfn(cid){ 
        this.cid=cid
        this.$store.state.categoryRightdatas=[] 
        
        this.$store.dispatch('actgetCategoryRightDatas',cid) 
        if(this.$store.state.categoryLeftdatas ){ 
          this.arr=this.$store.state.categoryLeftdatas.filter(item=>{
                    return item.cat_id==cid
                }) 
                this.arr.length?this.img1=this.arr[0].touch_catads:''
        }    
    },
    togoodsList(gid){
        this.$router.push('/goodslist/'+gid)
    } 
},
beforeCreate() {}, //生命周期 - 创建之前
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
beforeMount() {}, //生命周期 - 挂载之前
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    // console.log(this.$route);
        this.getCategoryRightDatasfn(this.$route.params.cid)
    
   

},
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less'>
.categoryright{
        background-color:#fff;
        width: calc(~"100% - 8.4rem");
        overflow: scroll; 
        padding: 1rem;
        .img{
            position: absolute;
            left: 50%;
            top: 50%;
            width: 8rem;
            height: 8rem;
            transform: translate(-4rem,-4rem);
            img{
                width: 100%;
            }
        }
        .bagimg{
            width: 100%;
            height: 9.6rem;
            img{
                width:100%;
                height: 100%;
            }
        }
        h2{
            width: 100%;
            text-align: center;
            line-height: 2.7rem;
            height: 2.7rem;
            margin: 1.1rem 0;
            font-weight: normal;
            font-size: 1.4rem;
            color: #333;
        }
        ul{
            display: flex;
            flex-wrap: wrap; 
            li{
                text-align: center;
                margin-bottom: 2rem;
                width: 33.33%;
                img{
                    width: 5.2rem;
                }
                span{
                    display: block;
                    
                }
            }
        }
    }
  
.categoryright::-webkit-scrollbar{
    display: none;
}
</style>