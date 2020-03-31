<template>
  <div>
    <ul class="nav nav-tabs"  id="myTab">
      <li>
        <a href="#home" data-toggle="tab">首页</a>
      </li>
      <li>
        <a href="#profile" data-toggle="tab">介绍</a>
      </li>
    </ul>

    <div class="tab-content">
      <div class="tab-pane active" id="home">注册协议</div>
      <div class="tab-pane" id="profile">隐私协议</div>
    </div>
  </div>
</template>
<script>
// $("#myTab a").click(function(e) {
//   e.preventDefault();
//   $(this).tab("show");
// });
export default {};
</script>
<style lang="css">
  #myTab li{
    width:50%;
    text-align:center;
  }
</style>