<!--  -->
<template>
  <div class="category-header">
    <header>
      <a
        href="javascript:;"
        class="iconfont icon-xiangzuo"
        onclick="window.history.back()"
      ></a>
      <router-link to="/Search" tag="form">
        <input type="text" placeholder="请输入关键字" />
        <i class="iconfont icon-search"></i>
      </router-link>
    </header>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

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
    tosearch() {},
  },
};
</script>
<style lang="less">
.category-header {
  width: 100%;
  height: 4.4rem;
  border-bottom: 1px solid #ccc;
  header {
    display: flex;
    form {
      width: 80%;
      position: relative;
      input {
        width: 100%;
        height: 3rem;
        margin-top: 0.7rem;
        border: 1px solid #efefef;
        border-radius: 1.5rem;
        text-indent: 1.5rem;
      }
      i {
        position: absolute;
        right: 0;
        line-height: 4.4rem;
        height: 4.4rem;
        width: 4.4rem;
        text-align: center;
      }
    }
    a {
      width: 15%;
      display: block;
      height: 4.4rem;
      line-height: 4.4rem;
      text-align: center;
    }
  }
}
</style>
