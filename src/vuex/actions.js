//actions 定义方法来提交mutation中定义的方法   异步的
import {getHomeSwipe} from '@/api/index'
import {getCategoryRightdata} from '@/api/Category.js'
import {getGoodsList} from '@/api/GoodsList.js'
import {DetailList} from '@/api/DetailList.js'
import {SearchList} from '@/api/Search.js'
const actions = { 
    async actGetSwipeDatas(context){
        const result = await getHomeSwipe()
        // console.log(result);
        context.commit('getSwipeDatas',result.data)
    },
    async actgetCategoryRightDatas(context,cid){
        const result = await getCategoryRightdata(cid)
        // console.log(result);
        context.commit('getCategoryRightDatas',result.data)
    },
   actgetUserInfo(context,data){
        // console.log(data);
        context.commit('getUserInfo',data)
    },
    async  actgetGoodsListbodys(context,data){
        const result = await getGoodsList(data) 
        // console.log(result);  //商品列表数据
        context.commit('getGoodsListbodys',result.data)

    },
    async actgetDetailList(context,data){
        const result = await DetailList(data)
        // console.log(result); //商品详情数据
        context.commit('getDetailList',result.data)
    },
    async actSearchList(context,data){
        // console.log(this);

        const result =await SearchList(data)
        // console.log(result.data.length);
        if(result.data.length<10){
          this.state.reqflay=false
            return 
        }
        this.state.reqflay=!this.state.reqflay
        // console.log(result);
        // this.state.reqflay=!this.state.reqflay 
        context.commit('SearchList',result.data)
    }   
    
}

export default actions