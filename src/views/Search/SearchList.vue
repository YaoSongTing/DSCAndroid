<!-- 我是搜索商品列表页 -->
<template>
<div class='search-list'> 
    <div class="img">
     <img src="@/assets/timg.gif"  v-if="!this.$store.state.SearchList.length"  alt="" class="img"> 

    </div>
    <Reusablehead title="搜索商品列表页" :left='left' :right='right'/>
    <GoodsListbody :GoodsListbodys='SearchList'/>
    <div class="title" v-if="this.$store.state.SearchList.length">
        我也是有底线的~~
    </div>
</div>
</template>

<script>
import Reusablehead from '@/components/Reusablehead'
import GoodsListbody from '@/components/GoodsListbody'
export default {

components: {
    Reusablehead,
    GoodsListbody
},
data() {
 
return {
    right:false,
    left:true,
    page:1,
};
},
//监听属性 类似于data概念
computed: {
    SearchList(){
        return this.$store.state.SearchList
    },
    reqflay(){
        return this.$store.state.reqflay
    }
},
//监控data中的数据变化
watch: {
  
},
//方法集合
methods: {

},
beforeCreate(){
    this.$store.state.SearchList=[]
},
mounted(){ 
                

    this.$store.dispatch('actSearchList',{keywords:this.$route.query.title})
       document.body.onscroll= ()=>{ 
       
            //  console.log(window.innerHeight);
            //  console.log(document.documentElement.scrollTop);//卷进去的高度
            // console.log(window.innerHeight);//屏幕视口的高度
            // console.log(document.body.scrollHeight);//文档的高度
            // console.log(111);
            // console.log(document.documentElement.scrollTop+window.innerHeight>=document.body.scrollHeight-22&&this.reqflay);
            // console.log(document.documentElement.scrollTop+window.innerHeight);
            // console.log(document.body.scrollHeight);
            // console.log(this.reqflay);
            // console.log(this.$store.state.reqflay);
            if(document.documentElement.scrollTop+window.innerHeight>=document.body.scrollHeight-20&&this.$store.state.reqflay){
                this.$store.state.reqflay=!this.$store.state.reqflay
                this.page++
                this.$store.dispatch('actSearchList',{keywords:this.$route.query.title,size:10,page: this.page})
                 
            }
         }
     
}
}
</script>
<style lang='less' scoped>
.title{
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    font-size: 2rem;
    color: #ccc;
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
        
    }

 
}

</style>