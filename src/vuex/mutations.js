import { MessageBox } from 'mint-ui';
//mutations里面定义的方法是用来修改state的数据
const mutations = {
    getSwipeDatas(state,data){
        state.HomeSwipedatas=data
    },
    getCategoryRightDatas(state,data){
        state.categoryRightdatas=data
    },
    getUserInfo(state,data){
        state.userInfo=data
    },
    getGoodsListbodys(state,data){  
        state.GoodsListbodys.push(...data)
    },
    getDetailList(state,data){
        state.DetailList=data
    },
    setcartdatas(state,data){//设置购物车数据
        if(data){
            state.carts.push(data)
        }
        localStorage.setItem('carts',JSON.stringify(state.carts))
    },
    addcart(state,index){
        state.carts[index].num++
        localStorage.setItem('carts',JSON.stringify(state.carts))
    },
    subcart(state,index){
        if(state.carts[index].num-1<1){
            state.carts[index].num=1
            MessageBox('亲，至少要买一个哟')
        }else{
            state.carts[index].num--
            localStorage.setItem('carts',JSON.stringify(state.carts))
        }
    },
    dele(state,index){
        MessageBox.confirm('亲，您确定放弃该宝贝吗?').then(() => {
            state.carts.splice(index,1)
            localStorage.setItem('carts',JSON.stringify(state.carts))
          },()=>{});
    },
    // 输入数字
    changeValue(state,data){
          if(data.val<=1){
              data.val=1
              MessageBox('亲，至少要买一个哟')
          }
          state.carts[data.index].num=data.val
          localStorage.setItem('carts',JSON.stringify(state.carts))
    },
    SelecAll(state){
        state.checkAll=!state.checkAll
        state.carts.forEach(item=>{
            item.isSelect = state.checkAll
        })
        localStorage.setItem('carts',JSON.stringify(state.carts))
        localStorage.setItem('checkAll',state.checkAll)
    },
    changselect(state,data){
        console.log(data);
        state.carts[data.index]=data.v
       let ischenk = state.carts.every(item=>item.isSelect==true)

       state.checkAll = ischenk
       localStorage.setItem('checkAll',state.checkAll)
       localStorage.setItem('carts',JSON.stringify(state.carts))
    },
    //搜索列表数据
    SearchList(state,data){
        // if(data.length==0)
        state.SearchList.push(...data)
    },
    //首页轮播图背景
    setSwipeIndex(state,data){
        state.SwipeBackgtoundIndex=data
    },
    searchHistory(state,data){
       if(state.searchHistory.some((item)=>{
          return item.includes(data)
       })){
           return;
       }
        state.searchHistory.unshift(data)
        localStorage.setItem('searchHistory',JSON.stringify(state.searchHistory))
    },
    clearsearchHistory(state){
        state.searchHistory=[]
        localStorage.setItem('searchHistory',JSON.stringify(state.searchHistory))
    }
    
}

export default mutations