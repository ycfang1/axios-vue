import {directive as VClickOutside} from 'vue-clickaway'
const globajDirective = {
    install: function (Vue) {
        Vue.directive('click-outside', VClickOutside)
    }
}
export default globajDirective;