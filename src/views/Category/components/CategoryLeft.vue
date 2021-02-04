<!-- 分类导航 -->
<template>
  <div class="categoryleft">
    <ul>
      <li
        v-for="list in this.$store.state.categoryLeftdatas"
        :key="list.cat_id"
      >
        <router-link :to="'/category/' + list.cat_id" tag="p">{{
          list.cat_name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
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
.categoryleft {
  width: 8.4rem;
  height: 100%;
  overflow-y: scroll;

  ul {
    li {
      margin: 0.7rem 0;
      text-align: center;
      p {
        height: 2.4rem;
        line-height: 2.4rem;
        font-size: 1.2rem;
      }
    }
    .router-link-active {
      border-left: 2px solid red;
      color: red;
    }
  }
}
.categoryleft::-webkit-scrollbar {
  display: none;
}
</style>
