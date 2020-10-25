<!--购物车底部模块 -->
<template>
<div class='cart-foot'>
    <div class="checkAll" @click="SelecAllFn">
        <i class="iconfont icon-xuanzekuang" v-if="!selectAll"></i>
        <i class="iconfont icon-xuanzekuanghou active" v-else></i>
        <span>全选</span>
    </div>
    <div class="priceAll">
        <p>合计：<span>{{total}}</span></p>
        <p>(不含运费，已节省 <span>0.00</span>)</p>
    </div>
    <div class="gobuy">
        <a href="javascript:;">去结算(<span>{{ count }}</span>)</a>
    </div>
</div>
</template>

<script>
 
export default {
 
components: {
    
},
computed:{
    selectAll(){
        return this.$store.state.checkAll
    },
     total(){
        let totalPrice = 0;
        this.$store.state.carts.map(item=>{
            if(item.isSelect){
                totalPrice += item.num * item.cost_price
            }
        })

        return totalPrice
    },
    count(){
        let count = 0;
        this.$store.state.carts.map(item=>{
            if(item.isSelect){
                count+=item.num
            }
        })
        return count
    }
},
data() {
//这里存放数据
return {

};
},
methods:{
    SelecAllFn(){
        this.$store.commit('SelecAll')
    }
}
 
}
</script>
<style lang='less'>
    .cart-foot{
        background: #fff;
        position: fixed;
        bottom: 5rem;
        left: 0;
        width: calc(~"100% - 1rem");
        height: 4.4rem;
        line-height: 4.4rem;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-content: center;
        font-size: 1.4rem;
        padding: 0 0 0 1rem;
        .checkAll{
            flex: 1;
            display: flex;
            span{
                margin-left: 1rem;
            }
        }
        .priceAll{
            flex: 2; 
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            p{
                height: 2.2rem;
                line-height: 2.2rem;
                text-align: right; 
            }
            p:first-child{
                span{
                    color:red;
                    font-size: 1.6rem;
                    &::before{
                        content: '￥';
                        font-size: 1.2rem;
                    }
                }
            }
            p:last-child{
                font-size:1rem ;
                color: #ccc; 
            }
        }
        .gobuy{
            flex: 1;
            color: #fff ;
            background: #f55; 
        }
    }
    .active{
        color: red;
    }
</style>