<!--  -->
<template>
  <div class="home">
    <Header :background='swipeColor[backgroundIndex]' />
    <div class="nav-list" :style="'background:'+swipeColor[backgroundIndex]">
      <ly-tab
        v-model="selectedId"
        :items="items"
        :options="options"
        @change="changeFn"
        
      ></ly-tab>
      <div class="category-link">
        <i class="iconfont icon-iconfontzhizuobiaozhun023145"></i>
        <span>分类</span>
      </div>
    </div>
    <div style="height:8.8rem"></div>
    <router-view :background='swipeColor[backgroundIndex]' />
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "./components/HomeHeader";
import Footer from "@/components/Footer";
import Axios from "axios";
// import Swipe from '@/components/Swipe'

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Header,
    Footer,
    // Swipe
  },
  data() {
    //这里存放数据
    return {
       
      swipeColor:['red','blue','green','skyblue','orange'],
      selectedId: 0,
      items: [
        { label: "首页" },
        { label: "家用电器" },
        { label: "男装女装" },
        { label: "鞋靴箱包" },
        { label: "手机数码" },
        { label: "电脑办公" },
        { label: "家具家访" },
        { label: "个人化妆" },
      ],
      options: {
        activeColor: "#fff",

        // 可在这里指定labelKey为你数据里文字对应的字段名
      },
      childrenRouter: [
        "/home/index",
        "/home/ele",
        "/home/person",
        "/home/box",
        "/home/phone",
        "/home/computer",
        "/home/house",
        "/home/face",
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {
    backgroundIndex(){
      return this.$store.state.SwipeBackgtoundIndex
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    changeFn(item, index) {
      // console.log(item);
      // console.log(index);
      // console.log(this.$router);
      this.$router.push(this.childrenRouter[index]);
    },
    
    //分类左边导航栏
    categorynavdatafn() {
      Axios.get("/api/catalog/list").then((res) => {
        if (res.status == 200) {
          this.$store.state.categoryLeftdatas = res.data.data;
        }
      });
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.categorynavdatafn();
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.home {
  background-color: #f4f4f4;

  .nav-list {
    position: fixed;
    z-index: 99;
    top: 4.4rem;
    left: 0;
    display: flex;
    // background: red;
    color: #fff;
    .ly-tab {
      width: 85%;
      .ly-tabbar {
        background: transparent;
        border: 0;
        box-shadow: 0 0 0 0 #eee;
        .ly-tab-list {
          padding: 0;
          height: 4.4rem;
          a {
            color: #fff;
          }
        }
      }
    }
  }
  .category-link {
    width: 15%;
    line-height: 4.4rem;
    text-align: center;
    height: 4.4rem;
    i {
      font-size: 1.6rem;
      padding-left: 5px;
      box-shadow: -6px 0 4px -4px rgba(0, 0, 0, 0.4);
    }
    span {
      font-size: 1.4rem;
    }
  }
}
</style>
