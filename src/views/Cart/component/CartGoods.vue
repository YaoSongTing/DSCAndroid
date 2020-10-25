<!-- 购物车商品  组件 -->
<template>
<div class='cartg-good'>
    <ul>
        <li v-for="(v,index) in carts" :key="v.goods_id"> 
            <!-- 选择框 -->
            <div class="select" @click="changeSelect(v,index)">
                <i class="iconfont icon-xuanzekuangmoren" v-if='!v.isSelect'></i>
                <i :class="['iconfont', 'icon-xuanzekuangxuanzhong', 'active']" v-else></i>
            </div>
            <div class="goods-info">
                <router-link class="goods-img" :to="'/detaillist?title='+v.goods_id" tag="div"><img :src="v.goods_thumb" alt=""></router-link>
                <div class="goods-conter">
                    <div class="goods-title">{{v.goods_name}}</div>
                    <div class="goods-box">
                        <div class="good-price">{{v.cost_price}}</div>
                        <div>
                            <div class="good-num">
                                <a href="javascript:;" @click="subcartfn(index)">-</a>
                                <input type="number" v-model="v.num" @input="chengefn(index)" ref='val'>
                                <a href="javascript:;" @click="addcartfn(index)">+</a>
                            </div>
                            <div class="good-collect iconfont icon-shoucang1"></div>
                            <div class="good-dele iconfont icon-dustbin_icon" @click="delefn(index)"></div>
                        </div>
                    </div>
                </div>
            </div>
        </li>   
    </ul>
</div>
</template>

<script>
 
export default {
 
components: {},
data() {
//这里存放数据
return {

};
},
 
computed: {
    carts(){
        return this.$store.state.carts
    },
    total(){
        let totalPrice = 0;
        this.$store.state.carts.map(item=>{
            if(item.isSelect){
                totalPrice += item.value * item.shop_price
            }
        })

        return totalPrice
    },
    selectAll(){
        return this.$store.state.checkAll;
    },
    
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    addcartfn(index){
        this.$store.commit('addcart',index)
    },
    subcartfn(index){
        this.$store.commit('subcart',index)
    },
    chengefn(index){
        console.log(index);
        console.log(this.$refs.val[index].value);
        let val = this.$refs.val[index].value
        this.$store.commit('changeValue',{val,index})
    },
    delefn(index){
        this.$store.commit('dele',index)
    },
    changeSelect(v,index){ 
        v.isSelect = !v.isSelect
       this.$store.commit('changselect',{v,index})
    }
} 
}
</script>
<style lang='less'>
.cartg-good{ 
    width: 100%;
    background-color: #F4F4F4;
    ul{
        li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 10rem;
            margin: 0 0 1.6rem 0;
            .select{
                width: 10%;
                 .active{
                    color: red;
                }
            }
            .goods-info{ 
                width: calc(~'90% - 2rem');
                background-color: #fff;
                display: flex;
                justify-content: space-between;
                align-items: center; 
                padding: 1rem;
                .goods-img{
                    width: 7rem;
                    height: 7rem;
                    img{
                        width: 100%;
                    }
                }
                .goods-conter{
                    display: flex;
                    flex-direction: column;
                    width: calc(100% - 7rem);
                    align-items: center;
                    .goods-title{
                        margin: 1rem;
                        height: 4rem;
                        line-height: 2rem; 
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                    }
                    .goods-box{
                        margin-top: 1rem;
                        height:2.5rem ;
                        line-height: 2.5rem;
                        width: calc(~'100% - 2rem');
                        display: flex;
                        justify-content: space-between;
                        padding: 0 1rem;
                        .good-price{
                            font-size: 1.5rem;
                            font-weight: 700;
                            display: inline-block;
                            color: rgb(242, 14, 40);
                            &::before{
                                content: '￥';
                                font-size: 1.2rem;
                            }
                        }
 
                        >div:last-child{
                            display: flex; 
                            >div{
                                margin-left: 1rem; ;
                            }
                        }
                        .good-num{ 
                            display: flex;
                            align-items: center;  
                            height: 2rem;
                            input{
                                width: 3rem;
                                border: 1px solid #ccc;
                                height: 2rem;line-height: 2rem;
                                box-sizing: border-box;
                                text-align: center;
                            }
                            a{
                                background: #eee;
                                 height: 2rem;line-height: 2rem;
                                 width: 1.5rem;
                                 text-align: center;
                            }
                        }
                    }
                }
            }
            
        }
    }
}
</style>