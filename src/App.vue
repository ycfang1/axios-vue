<template>
  <div id="app">
    <router-view />
    <!-- <ul class="fixed_label">
      <li @click="scrollTop">回到顶部</li>
      <li>智能客服</li>
    </ul> -->
  </div>
</template>
<script>
import Header from "@/components/Header";
import Nav from "@/views/nav/Nav.vue";
import Goods from "@/views/goods/Goods.vue";
import Sellers from "@/views/sellers/Sellers.vue";
export default {
  components: {
    "my-header": Header,
    "my-nav": Nav,
    Goods,
    Sellers
  },
  methods: {
    scrollTop(){
      let app=document.getElementById("app");
      app.scrollTop=0;
    }
  },
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height:100vh;
  // overflow: auto;
  position: relative;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fixed_label {
  position: fixed;
  top: 50%;
  right: 80px;
  text-align: center;
  li {
    width: 80px;
    // height: 35px;
    line-height: 35px;
    padding: 5px 0;
    background: #f44;
    color: #fff;
    border-bottom: 1px solid #fff;
    cursor: pointer;
  }
}
</style>
