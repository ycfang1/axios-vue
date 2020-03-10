
<template>
  <div class="nav">
    <router-link  to="/goods">点菜
     <i class='line'></i>
    </router-link>
    <router-link  to="/ratings">评价 <i class='line'></i></router-link>
    <router-link  to="/sellers">商家 <i class='line'></i></router-link>
  </div>
</template>
<style lang="css">
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.nav_item {
  text-decoration: none;
  color: orange;
  position: relative;
}
.nav_item .line{
    display:block;
    width:20px;
    height: 2px;
    background:red;
    position: absolute;
    left:50%;
    bottom:0px;
    transform: translateX(-50%);
}
a,a:hover,a:focus{
  color: #000 !important;
  text-decoration: none;
}
</style>