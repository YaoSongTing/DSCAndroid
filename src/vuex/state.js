//state是vuex中的存储数据的
const state ={
    categoryLeftdatas:[],//分类左边的导航栏
    HomeSwipedatas:[],//首页轮播图数据
    categoryRightdatas:[],//分类右边的数据
    userInfo:{}, //登录数据
    GoodsListbodys:[], //商品列表新数据
    DetailList:[],   //商品详情数据
    carts:localStorage['carts']?JSON.parse(localStorage['carts']):[],//购物车数据
    checkAll:localStorage['checkAll'] ? JSON.parse(localStorage['checkAll']):false,//全选按钮
    SearchList:[],//搜索列表数据
    reqflay:false,//是否加载
    SwipeBackgtoundIndex:'',//首页轮播图背景 
    searchHistory:localStorage['searchHistory']?JSON.parse(localStorage['searchHistory']):[],//购物车数据

    

}

export default state