
<template>
  <div class="container">
    <div class="demo">
      Sellers
    </div>
  </div>
</template>
<style lang="css">
  .demo{
    background: #ff4;
    padding: 25px;
    width:250px;
    height: 200px;
  }
</style>
<script>
export default {
  data() {
    return {
      sell_count: ""
    };
  },
  mounted() {
    // let vm = this;
    // vm.bus.$on("count", function(val) {
    //   vm.sell_count = val;
    // });
  }
};
</script>
