<template>
    <div class="modal-dialog">
       <div class="modal-content">
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
<style lang="css">
 
</style>