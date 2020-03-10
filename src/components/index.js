import Modal from "./Modal.vue"
import Banner from './Banner.vue'

const commonComponent = {
    install: function (Vue) {
        Vue.component('Modal', Modal);
        Vue.component('Banner', Banner);
    }
}
export default commonComponent;