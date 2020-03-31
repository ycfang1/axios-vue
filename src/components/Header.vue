
<template>
  <div class="container" style="text-align:right;">
    <div class="userinfo" v-if="$store.state.userName">
      <span>您好，{{$store.state.userName}}</span>
      <span>|</span>
      <span @click="loginout" class="tuichu">退出</span>
    </div>
    <button v-else @click="login" class="btn btn-success">登录</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
      let userName=localStorage.getItem('userName')||'';
      this.$store.commit('setUserName',userName)
  },
  methods: {
    login() {
      localStorage.setItem("userName", "ming");
      this.$store.commit("setUserName", "ming");
    },
    loginout() {
      localStorage.removeItem("userName");
      this.$store.commit("setUserName", "");
    }
  }
};
</script>
<style lang="css">
.userinfo span {
  display: inline-block;
  padding: 10px;
}
.tuichu {
  color: #31ac90;
  cursor:pointer;
}
</style>