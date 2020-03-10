import Modal from "./Modal.vue"

const commonComponent = {
    install: function (Vue) {
        Vue.component('Modal', Modal)
    }
}
export default commonComponent;