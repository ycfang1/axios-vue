<template>
  <button @click="on_click" class="btn btn-success">显示余额</button>
</template>
<script>
export default {
  props:['msg'],
  methods: {
    on_click() {
      this.$emit("show","522");
    }
  },
  
};
</script>