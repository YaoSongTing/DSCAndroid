<!--  -->
<template>
<div class='login-box'>
    <LoginHeader/> 
    <div class="btns">
        <a href="javascript:;" :class='{active:loginflag}' @click="loginflag=true">短信登录</a>
        <a href="javascript:;" :class='{active:!loginflag}' @click="loginflag=false">账号登录</a>
    </div>
   <!-- 短信登录 -->
   <div v-if="loginflag">
         <div class="username">
            <i class="iconfont icon-wode"></i>
            <input type="tel" placeholder="请输入手机号" maxlength="11" v-model="phone">
            <button v-if="!num" class="getcode" @click="getcodefn">获取验证码</button>
            <button disabled v-else class="getcode">已发送{{num}}s</button>
        </div>
        <div class="passward" v-if="isshow">
            <i class="iconfont icon-suo"></i>
            <input type="password" placeholder="请输入验证码">
            <i class="iconfont icon-yanjing-bi  show" @click="isshowfn"></i>
        </div>
        <div class="passward" v-else>
            <i class="iconfont icon-suo"></i>
            <input type="text" placeholder="请输入验证码">
            <i class="iconfont  icon-yanjing show" @click="isshowfn"></i>
        </div>
   </div>
   <!-- 账号登陆 -->
   <div v-else>
       <div class="username">
            <i class="iconfont icon-wode"></i>
            <input type="text" placeholder="请输入用户名/邮箱/账号" v-model="user_name">
        </div>
        <div class="passward" v-if="isshow">
            <i class="iconfont icon-suo"></i>
            <input type="password" placeholder="请输入密码" v-model="pass">
            <i class="iconfont icon-yanjing-bi  show" @click="isshowfn" ></i>
        </div>
        <div class="passward" v-else>
            <i class="iconfont icon-suo"></i>
            <input type="text" placeholder="请输入密码" v-model="pass">
            <i class="iconfont  icon-yanjing show" @click="isshowfn"></i>
        </div>
        <div class="passward captch"> 
            <input type="text" placeholder="请输入验证码" v-model="captcha">
            <img ref="captcha" @click="getcaptcha" src="http://114.215.173.225:3000/api/v1/users/captcha" alt="">
        </div>
   </div>
    <div class="nav">
        <span>用户注册</span>
        <span>忘记密码</span>
    </div>
    <div class="btn">
        <button @click="login">登录</button>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import LoginHeader from './LoginHeader'
import { Toast } from 'mint-ui';
import { loginuser } from "@/api/login.js";

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    LoginHeader
},
data() {
//这里存放数据
return {
    isshow:true,
    loginflag:true,
    num:0,
    timer:'',
    user_name:'',
    pass:'',
    captcha:'',
    phone:''
};
},
//监听属性 类似于data概念
computed: {
    identifyphone(){
        return /^[1][3,5,7,8,9][0-9]{9}$/.test(this.phone)
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    isshowfn(){
        this.isshow=!this.isshow
    },
    getcaptcha(){
        this.$refs.captcha.src="http://114.215.173.225:3000/api/v1/users/captcha?t="+new Date().getTime()
    },
    getcodefn(){
        if(this.identifyphone){
            this.num=60 
            this.timer=setInterval(()=>{
                this.num--
                if(this.num==0){
                    clearInterval(this.timer)
                }
            },1000)
        }else{
            Toast({
                message: '手机号输入格式不正确',
                position: 'center',
                duration: 2000
            });
        }
    },
    async login(){
        if(!this.user_name){
            Toast('请输入用户名/邮箱/手机号！')
            return
        }else if(!this.pass){
            Toast('请输入密码')
            return
        }else if(!this.captcha){
            Toast('请输入验证码')
            return
        }
        

       
        // 请求数据  
        const result = await loginuser(this.user_name,this.pass,this.captcha)
        console.log(result);

        // 如果成功跳转到首页
        if(result.status==200){
            this.$router.push('/home');
            this.$store.dispatch('actgetUserInfo',result.data[0])
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

},
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less'>
.login-box{
    box-sizing: border-box;
    margin: 10px; 
    padding: 10px 0 0;
    input{
        &:focus{
            border: 1px solid #ccc;
            text-indent: 1.5rem;
            border-radius: 1rem;

        }
    }
    .btns{
        width: 100%;
        height: 4.4rem;
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
        a{
            display: block;
            width: 45%;
            height: 4.4rem;
            line-height: 4.4rem;
            text-align: center;
            background: #ccc;
            font-size: 1.4rem;
        }
    }
    .active{
        background-color: red !important;
        color:#fff;
    }
    .passward,.username{
        margin-bottom:1rem ;
        display: flex;
        color: #bdbdbd;
        margin-right: .5rem;
        border-bottom: 1px solid #ddd;
        overflow: hidden;
        padding: .4rem 0;
        position: relative;
        font-size: 1.5rem;
        i{  
            line-height: 2.4rem;
            height: 2.4rem;
            
        }
        input{
            line-height: 2.4rem;
            height: 2.4rem;
            width: calc(~"100% - 1.6rem");
        }
    }
    .username{
        margin-top: 3rem;
        .getcode{
            height: 2.4rem;
            width: 15rem;
        }
    }
    .passward{
        position: relative;
        .show{
            position: absolute;
            right: 0;
            line-height: 2.4rem;
            height: 2.4rem;
            width: 2.4rem;
            text-align: center;
        }

    }
    .nav{
        height: 4rem;
        line-height: 4rem;
        display: flex;
        justify-content: space-between;
    }
    .btn{
        width: 80%;
        height: 3.5rem;
        margin: 0 auto;
        button{
            width: 100%;
            height: 3.5rem;
            border-radius: 1rem;
            color: #fff;
            background-color: red;
        }
    }
}
.captch{
    img{
        width: 15rem;
        height: 3.5rem;
    }
}
 
</style>