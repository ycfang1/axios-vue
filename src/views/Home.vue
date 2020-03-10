<template>
  <div>
    <button @click="toggle=true">开启弹框</button>
    <div class="modal modal-bg" :class="toggle?'show':''">
      <Modal class="examModal" v-if="toggle">
        <template slot="header">
          <div style="position:relative;">
            <p>考试页面的弹窗</p>
            <span style="position:absolute;top:5px;right:5px;" @click="closethis">X</span>
          </div>
        </template>
        <template slot="body">我是主体</template>
      </Modal>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggle: false
    };
  },
 methods: {
    closethis(){
    this.toggle=false;
  }
 },
};
</script>
<style lang="css">
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
}
.modal-bg {
  transition: all 0.3s ease;
  visibility: hidden;
}
.modal-bg.show {
  visibility: visible;
  background: rgba(0, 0, 0, 0.2);
}
.examModal {
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>