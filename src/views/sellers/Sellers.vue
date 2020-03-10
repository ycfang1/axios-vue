
<template>
  <div>{{sell_count}}</div>
</template>
<script>
export default {
  data() {
    return {
      sell_count: ""
    };
  },
  mounted() {
    let vm = this;
    vm.bus.$on("count", function(val) {
      vm.sell_count = val;
    });
  }
};
</script>