<!-- 倒计时秒杀 组件 -->
<template>
<div class='seckill'>
    <div><img src="@/assets/3.png" alt=""></div>
    <div>
        距离结束还剩<div><span>{{day}}</span>天<span>{{hour}}</span>时<span>{{minute}}</span>分<span>{{sec}}</span>秒</div>
    </div>
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
    day:'01', 
    hour:'01', 
    minute:'01',
    sec:'01',
    timer:''
    
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    seckill(){
        //获取当前时间
        let nowTime =new Date().getTime();
        // 设置一个时间
        let endTime = new Date("2020-11-11 10:00:00")

        //时间差
        let oTime = endTime-nowTime;

        if(oTime>0){
            this.day=Math.floor(oTime/1000/60/60/24)
            this.day=Number(this.day)>=10?this.day:'0'+this.day //获取天
            this.hour=Math.floor(oTime/1000/60/60%24) //获取时
            this.hour=Number(this.hour)>=10?this.hour:'0'+this.hour //获取天
            this.minute=Math.floor(oTime/1000/60%60) //获取分
            this.minute=Number(this.minute)>=10?this.minute:'0'+this.minute //获取天
            this.sec=Math.floor(oTime/1000%60) //获取秒
            this.sec=Number(this.sec)>=10?this.sec:'0'+this.sec //获取天

        }
    }
},
beforeCreate() {}, //生命周期 - 创建之前
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
beforeMount() {}, //生命周期 - 挂载之前
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    this.timer = setInterval(this.seckill,1000)
},
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {
    clearInterval(this.timer)
}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less'>
.seckill{ 
    padding: 2.2rem 1rem 1.2rem 1.5rem;
    line-height: 2.4rem; 
    display: flex;
    justify-content: space-between;
    img{
        width: 10rem;
    }
    div:last-child{
        display: flex;
       div{
            line-height: 2.4rem; 
            color:red;
            span{
                padding: 2px 3px;
                background-color: red;
                color: #fff;
                font-size:1.2rem;
                margin: 0 5px;
                border-radius: 0.5rem; 
            }
       }
    }
}
</style>