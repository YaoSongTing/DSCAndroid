<!--首页-首页  -->
<template>
<div class='home-index'>
    <div class="swipe-bg" :style="'background:'+background"></div>
    <div class="swipe-wrap">
        <Swipe :Swipedata='Swipedata' /> 
    </div>
    <QuickNav/>
    <SwipeNews />
    <div class="plummet">
        <img src="@/assets/2.png" alt="">
    </div>
    <div class="seckill-warp">
        <Seckill/>
        <SeckillTab/>

    </div>
    <!-- <SwipeList :IndexSwipeListdata='IndexSwipeListdata' /> -->

    <div class="yyyyyyyy"></div>
    首页-首页366
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swipe from '@/components/Swipe'
import QuickNav from '../components/QuickNav'
import SwipeNews from '../components/SwipeNews'
// import SwipeList from '../components/SwipeList'
import Seckill from '@/components/Seckill'
import SeckillTab from '@/components/SeckillTab'
export default {
//import引入的组件需要注入到对象中才能使用
props:{
     background:{
        type:String,
        default:'red'
    }
},
components: {
    Swipe,
    QuickNav,
    SwipeNews,
    // SwipeList,
    Seckill,
    SeckillTab
},
data() {
//这里存放数据
return {
    IndexSwipeListdata:[{
        id:1,
        imgsrc:'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg',
        title:'电饭锅1'
    },{
        id:2,
        imgsrc:'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg',
        title:'电饭锅2'
    },{
        id:3,
        imgsrc:'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg',
        title:'电饭锅3'
    },{
        id:4,
        imgsrc:'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg',
        title:'电饭锅4'
    },{
        id:5,
        imgsrc:'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg',
        title:'电饭锅5'
    },{
        id:6,
        imgsrc:'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg',
        title:'电饭锅6'
    },{
        id:7,
        imgsrc:'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg',
        title:'电饭锅7'
    },{
        id:8,
        imgsrc:'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg',
        title:'电饭锅8'
    },{
        id:9,
        imgsrc:'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg',
        title:'电饭锅9'
    },{
        id:10,
        imgsrc:'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg',
        title:'电饭锅10'
    },],
    Swipedata:[{
        id:1,
        img_src:require("@/assets/indexswipe1.jpg"), 
    },{
        id:2, 
        img_src:require("@/assets/indexswipe2.jpg"), 
    },{
        id:3, 
        img_src:require("@/assets/indexswipe3.jpg"), 
    },{
        id:4, 
        img_src:require("@/assets/indexswipe4.jpg"), 
    },{
        id:5, 
        img_src:require("@/assets/indexswipe5.jpg"), 
    }]
};
},
 
}
</script>
<style lang='less'>
.swipe-bg{
  position: absolute;
  left: 0;
  top: 8.8rem;
  width: 100%;
  height: 3.3rem;
  border-radius:0  0 1.5rem 1.5rem ;
 
}
.swipe-wrap{
    margin: 0 10px;
    div{
        border-radius:10px !important;
    }
}
.yyyyyyyy{
    height: 6rem;
}
.plummet{
    width: calc(~"100% - 2rem");
    margin: 1rem 1rem 0;
    img{
        width: 100%;
    }
}
.seckill-warp{
    width: calc(~"100% -2rem");
    margin: 10px 10px 0;
    background-color:#fff;
    border-radius: 1rem;

}
</style>