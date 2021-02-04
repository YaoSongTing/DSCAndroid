//定义路由模块
// 需要导入 vue模块 和 vue-router
//vue-router 需要下载 cnpm install vue-router --save  保存
import Vue from 'vue';
import VueRouter from 'vue-router';


// 使用
Vue.use(VueRouter)

//创建组件--新建.vue文件---导入文件(通常组件名称为大写字母开头)
import Home from "../views/Home/Home"
import Mine from "../views/Mine/Mine"
import Category from "../views/Category/Category"
import Search from "../views/Search/Search"
import Cart from "../views/Cart/Cart"
import Login from '../views/Login/Login'
import Register from '../views/Register/Register'
import GoodsList from '../views/GoodsList/GoodsList'
import Demo from '../views/Demo/Demo'

//配置首页的子组件
import Index from '../views/Home/children/Index'
import Ele from '../views/Home/children/Ele'
import Person from '../views/Home/children/Person'
import Box from '../views/Home/children/Box'
import Phone from '../views/Home/children/Phone'
import Computer from '../views/Home/children/Computer'
import House from '../views/Home/children/House'
import Face from '../views/Home/children/Face'


//配置搜索页面的子组件
import SearchList from '../views/Search/SearchList'


//详情页
import DetailList from '../views/DetailList/DetailList'
//配置路由
const routes = [{
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
        path: 'index',
        component: Index
    }, {
        path: 'ele',
        component: Ele
    }, {
        path: 'person',
        component: Person
    }, {
        path: 'box',
        component: Box
    }, {
        path: 'phone',
        component: Phone
    }, {
        path: 'computer',
        component: Computer
    }, {
        path: 'house',
        component: House
    }, {
        path: 'face',
        component: Face
    }, {
        path: '/home',
        redirect: '/home/index'
    }]
}, {
    path: '/mine',
    name: 'mine',
    component: Mine
}, {
    path: '/category/:cid',
    name: 'category',
    component: Category,

}, {
    path: '/search',
    name: 'search',
    component: Search
}, {
    path: '/cart',
    name: 'Cart',
    component: Cart
}, {
    path: '/login',
    component: Login
}, {
    path: '/register',
    component: Register
}, {
    path: '/detaillist',
    component: DetailList
}, {
    path: '/searchlist',
    component: SearchList
}, {
    path: '/goodsList/:gid',
    component: GoodsList
}, {
    path: '/demo',
    component: Demo
}]


// 实例化一个路由对象

const router = new VueRouter({
    routes
})

// router.beforeEach(function (to, from, next) { 
//     if (to.path.includes('/searchlist')) {
//         console.log(localStorage);
//           localStorage['searchHistory']? localStorage.getItem('searchHistory'):localStorage.setItem('searchHistory','[]');//购物车数据
//         console.log(localStorage['searchHistory']);
//         console.log(to.query.title);
//         Array.of(localStorage['searchHistory']).push(to.query.title)

//         // localStorage.setItem('searchHistory',Array.of(localStorage['searchHistory']).push(to.query.title))
//     next(false)
//     }  
//     next()

//   })

//暴露出去
export default router
