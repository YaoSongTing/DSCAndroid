<!-- 首页-水平滚动 -->
<template>
<div>
    <div class='swipe-list-wrap'>
        <div class="list-wrap" :style="styleobj2">
            <div class="list-item" v-for="v in IndexSwipeListdata" :key="v.id">
                <img  :src="v.imgsrc">
                <span>{{v.title}}</span>
            </div> 
        </div>
    </div>
    <div class="progress"  >
        <div class="progress-bar" :style="styleobj"></div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
props:{
    IndexSwipeListdata:Array,
},
components: {},
data() {
//这里存放数据
return {
    //1、屏幕的宽度
    screenW:document.documentElement.clientWidth || document.body.clientWidth,
    //2、滚动内容的宽度
    scrollContentW:1100,
    //3、进度条的背景宽度
    bgBarW:100,
    //4、进度条的长度
    barW:20,
    //5、进度条的起点
    startX:0,
    //6、进度条的终点
    endX:0,
    //7、移动的距离
    barMoverW:0,
    //8、内容滚动的距离
    contentMoveW:0,
    //9、设置变量来存储上一次滚动的left值
    contentMove:0
};
},

//监控data中的数据变化
watch: {},
//方法集合
methods: {
    //开始触摸
    touchstartFn(e){
        // 获取触摸第一个点 
        this.startX=e.touches[0].pageX
    },
    //触摸开始移动
    touchmoverFn(e){
        //移动距离
        let moveWidth =e.touches[0].pageX-this.startX;
        //保存内容移动的距离
        this.contentMove=moveWidth+this.contentMoveW; 
        // 进度条移动的距离
        this.barMoverW = this.endX-this.bgBarW/this.scrollContentW*moveWidth   
        if(this.barMoverW<=0){
            this.barMoverW=0
        }else if(this.barMoverW>this.bgBarW-this.barW){
            this.barMoverW=this.bgBarW-this.barW
        } 
        //判断边界值
        if(this.contentMove>=0){
            this.contentMove=0
        }else if(this.contentMove<=this.screenW-this.scrollContentW){
            this.contentMove=this.screenW-this.scrollContentW
        }
    },
    getBarwidth(){
        this.barW=this.bgBarW*this.screenW/this.scrollContentW
    },
    touchendFn(){
        this.endX=this.barMoverW
        this.contentMoveW=this.contentMove
    },
    bindEvent(){
        this.$el.addEventListener('touchstart',this.touchstartFn,false);
        this.$el.addEventListener('touchmove',this.touchmoverFn,false);
        this.$el.addEventListener('touchend',this.touchendFn,false);
    }
},
beforeCreate() {}, //生命周期 - 创建之前
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
beforeMount() {}, //生命周期 - 挂载之前
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
     
    this.getBarwidth()
    this.bindEvent()
},
//监听属性 类似于data概念
computed: {
    styleobj(){
        return{
            width:`${this.barW}px`,
            left:`${this.barMoverW}px`,
        };
    },
    styleobj2(){
        return{
            left:`${this.contentMove}px`
        }
    }
},
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less'>
.swipe-list-wrap {
    width: 100%;
    height: 19rem;
    background-color: #ccc;
    position: relative;
    overflow-x: hidden;
    .list-wrap{
        width: 110rem;
        height: 19rem;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        .list-item{
            width: 11rem;
            height: 19rem;
            background-color: #fff;
            display: flex;
            text-align: center;
            flex-direction: column; 
            img{
                width: 9rem;
            }
        }
    }
}

//隐藏滚动条
.swipe-list-wrap::-webkit-scrollbar{
    display: none;
}
// 进度条样式
.progress{
    width: 100px;
    height: 5px;
    background: #ccc;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    .progress-bar{
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 20px;
        background: #f00;
    }
}
</style>