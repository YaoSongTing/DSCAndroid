<!--  -->
<template>
<div class='cart'>
    <Reusablehead title="购物车" :left='left' :right='right'/>
    <CartGoods/>
    <CartFoot/>
    <Footer/>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from '@/components/Footer'
import Reusablehead from '@/components/Reusablehead'
import CartFoot from './component/CartFoot'
import CartGoods from './component/CartGoods'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Footer,
    Reusablehead,
    CartFoot,
    CartGoods
},
data() {
//这里存放数据
return {
    left:true,
    right:false
};
},
//监听属性 类似于data概念
computed: {},
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

},
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style>

</style>