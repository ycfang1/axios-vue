<template>
  <div  class="translateOutput">
    <div v-if="translatedText" >{{ translatedText}}</div>
    <div v-else>翻译内容</div>
  </div>
</template>
<script>
export default {
  props: ["translatedText",],

};
</script>
<style lang="css">
.translateOutput {
  width: 500px;
  background: #f5f5f5;
  height: 80px;
  margin: 0 auto;
}
</style>