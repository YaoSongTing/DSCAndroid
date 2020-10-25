<!--  -->
<template>
  <div class="category-search">
    <header>
      <a
        href="javascript:;"
        class="iconfont icon-xiangzuo"
        onclick="window.history.back()"
      ></a>
      <form action="">
        <input
          type="text"
          placeholder="请输入关键字"
          v-model="titie"
          @keyup.enter="tosearchfn"
        />
        <i class="iconfont icon-search"></i>
      </form>
      <span @click="tosearchfn">搜索</span>
      <!-- <router-link :to="'/searchlist?title='+titie" tag="span" >搜索</router-link> -->
    </header>
    <div class="title">
      <h2>历史搜索</h2>
      <h2 @click="clearsearchHistory">清空历史</h2>
    </div>
    <div class="history-warp">
      <div
        @click="tosearch"
        v-for="(v, index) in searchHistory"
        :key="index"
        ref="item"
      >
        {{ v }}
      </div>
    </div>
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
    return {
      titie: "",
    };
  },
  //监听属性 类似于data概念
  computed: {
    searchHistory() {
      return this.$store.state.searchHistory;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    tosearchfn() {
      if (this.titie) {
        this.$store.commit("searchHistory", this.titie);
      }
      this.$router.push("/searchlist?title=" + this.titie);
    },
    clearsearchHistory() {
      this.$store.commit("clearsearchHistory");
    },
    tosearch() {
      let that = this;
      for (let i = 0; i < this.$refs.item.length; i++) {
        this.$refs.item[i].onclick = function() {
          that.$router.push("/searchlist?title=" + this.innerText);
        };
      }
    },
  },
};
</script>
<style lang="less">
.category-search {
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
        top: 0;
        line-height: 4.4rem;
        height: 4.4rem;
        width: 4.4rem;
        text-align: center;
      }
    }
    span,
    a {
      width: 10%;
      height: 4.4rem;
      line-height: 4.4rem;
      text-align: center;
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
    h2 {
      padding: 1rem 1rem 0;
      font-size: 1.8rem;
      color: #000;
    }
  }

  .history-warp {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    height: 8rem;
    overflow: hidden;
    div {
      width: 20%;
      text-align: center;
      height: 3rem;
      line-height: 3rem;
      color: #333;
    }
  }
}
</style>
