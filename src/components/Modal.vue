<template>
    <div class="modal-wrapper">
       <div class="modal-container" v-click-outside="closeModal">
           <div class='modal-header'>
               <slot name="header"></slot>
           </div>
           <div class='modal-body'>
               <slot name="body"></slot>
           </div>
           <div class='modal-footer'>
               <slot name="fooder"></slot>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        closeModal(){
            this.$emit('close')
        }
    }
}
</script>
<style lang="css">
 .modal-container{
     width: 600px;
     position: absolute;
     background: #fff;
     border-radius: 6px;
     top:50%;
     left: 50%;
     transform: translate(-50%,-50%);
 }
</style>