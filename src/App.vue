<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import Header from "@/components/Header";
import translateForm from "./views/translate/translateForm.vue";
import translateOutput from "./views/translate/translateOutput.vue";
export default {
  components: {
    "translate-form": translateForm,
    "translate-output": translateOutput
  },
  methods: {
    scrollTop() {
      let app = document.getElementById("app");
      app.scrollTop = 0;
    }
  }
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: 100vh;
  overflow: auto;
  position: relative;
}
.title{
  font-size: 36px;
  font-weight: 400;
}
.introduction{
  font-size: 24px;
  padding: 20px;
}

</style>
