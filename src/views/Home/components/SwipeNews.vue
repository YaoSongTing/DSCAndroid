<!-- 首页滚动新闻 -->
<template>
<div class='swipe-news'>
    <div class="news-title">
        <img :src="imgTitle" alt="">
    </div>
    <ul :class="{'news-list':true,'trans':flag}" ref="news">
        <li v-for="(item) in newsListDatas" :key="item.id">{{item.title}}</li>
    </ul>
    <div class="news-icon"><i class="iconfont icon-you1"></i></div>
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
    imgTitle:require('@/assets/1.png'),
    flag: false,
    times:'',
    newsListDatas: [
        {
          id: "1",
          title: "新闻001",
        },
        {
          id: "2",
          title: "新闻002",
        },
        {
          id: "3",
          title: "新闻003",
        },
        {
          id: "4",
          title: "新闻004",
        },
      ],
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    scrollnews(){
        let oul = this.$refs.news;//获取ul节点
        oul.style.marginTop='-5rem';
        this.flag=!this.flag
        setTimeout(()=>{
            this.newsListDatas.push(this.newsListDatas[0]);
            this.newsListDatas.shift();
            oul.style.marginTop='0';
            this.flag=!this.flag
        },1000)
    }
},
beforeCreate() {}, //生命周期 - 创建之前
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
beforeMount() {}, //生命周期 - 挂载之前
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    this.times=setInterval(this.scrollnews,2000)
},
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {
    clearInterval(this.times)
}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less'>
.swipe-news{
    height: 5rem;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    background-color:#fff ;
    border-radius: 0 0 1rem 1rem;
    padding: 0 1rem;
    margin:0 10px;
    overflow: hidden;
    .news-title{
        float: left;
        img{
            height: 3rem;
            margin-top:1rem;
        }
    }
    .news-list{
        float: left; 
        margin-left: 2rem;
        li{
            height: 5rem;
            line-height: 5rem;
            font-size: 1.4rem;
        }
    }
    .trans{
        transition: all 2s;
    }
    .news-icon{
        float: right;
        line-height: 5rem;
        line-height: 5rem;
        font-size: 1.4rem;
        color: #F22438;
    }
}
</style>