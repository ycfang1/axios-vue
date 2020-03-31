<template>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- 轮播（Carousel）指标 -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <!-- 轮播（Carousel）项目 -->
    <div class="carousel-inner">
      <div class="item active">
        <p style="width:100%;height:500px">
            <img style="width:100%;height:100%" src="../assets/1.jpg" alt="">
        </p>
      </div>
      <div class="item">
        <p style="width:100%;height:500px"> <img style="width:100%;height:100%" src="../assets/2.jpg" alt=""></p>
      </div>
      <div class="item">
        <p style="width:100%;height:500px">Third slide</p>
      </div>
    </div>
    <!-- 轮播（Carousel）导航 -->
    <a
      class="left carousel-control"
      href="#myCarousel"
      role="button"
      data-slide="prev"
    >
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    </a>

    <a
      class="right carousel-control"
      href="#myCarousel"
      role="button"
      data-slide="next"
    >
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    </a>
  </div>
</template>