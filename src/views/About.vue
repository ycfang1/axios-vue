<template>
  <div class="container">
    <div>
      <div style="height:120px;">我是about页面</div>
      <main>
        <div id="gaishu">
          <p>认证概述</p>HCIP-5G-RNP&RNO认证，定位于考察相关从业人员对5G网络原理深入原理的掌握、基于5G网络的组网特点对5G网络特性的设计应用与调优能力,无线网络性能优化与投诉问题的分析处理能力，旨在规范5G无线网络规划优化专业人才的技能标准。
          HCIP-5G-RNP&RNO认证包括但不限于：5G空中接口原理、5G协议与信令分析、5G无线网络规划、华为5G无线网络优化相关特性、5G无线网络性能管理与优化、5G无线网络问题分析与处理。
          通过HCIP-5G-RNP&RNO认证，将证明您能够独立完成华为5G无线网络的规划与小区参数设计，对网优相关特性进行评估与应用、管理无线网络性能，完成性能问题的分析与优化。
          拥有HCIP-5G-RNP&RNO认证工程师，意味着企业和部门有能力对华为5G无线网络进行详细规划，对网络性能性能进行管理与保障，支撑用户业务体验。
        </div>
        <div id="qianti">
          <p>认证前提条件</p>无
        </div>
        <div id="feiyong">
          <p>考试及费用</p>H35-581 HCIP-5G-RNP&RNO
          华为认证5G网规网优
          高级工程师 2100 RMB 90分钟 60道单选、
          多选或判断题 600/1000 点击查看
        </div>
        <div id="dagang">
          <p>考试大纲</p>一、5G 无线网络深入原理 (30%)
          1. 5G空中接口原理
          2. 5G协议与信令分析
          二、5G 无线网络规划 (15%)
          1. 5G规划相关特性（Massive MIMO， 双连接， 上下行解耦）与链路预算
          2. 5G无线网络链路预算、覆盖估算与容量估算
          3. 5G小区参数规划
        </div>
        <div id="cailiao">
          <p>参考材料</p>5G 空中接口原理
          5G 无线网络规划概述
          5G 无线网络小区参数设计
          5G 无线网络规划仿真
          5G 无线网络特性
          5G 协议与流程分析
          5G 无线网络性能管理
          5G 网络互操作培训
          5G 无线网络优化问题分析
          5G 无线网络评估
        </div>
        <div id="peixun">
          <p>推荐培训</p>认证培训名称 培训级别 培训时长
          华为认证5G无线网规网优高级工程师培训 III 15天
          *产品解决方案培训 培训级别 培训时长
          5G空中接口培训 I 2天
          5G协议与流程分析培训 II 2天
          5G无线网络规划培训 III 2天
          5G无线网络特性培训 II 4天
          5G无线网络性能管理培训 II 1天
          5G网络互操作培训 III 1天
          5G无线网络优化问题分析培训 III 2天
        </div>
        <div id="youxiaoqi">
          <p>考试成绩有效期</p>本考试成绩有效期为 3 年。
        </div>
        <div id="fangfa">
          <p>再认证方法</p>证书持有者在证书超过有效期之前，可以通过以下方式更新证书有效期
          1. 再次通过本门考试。
          2. 通过本技术领域的更高级别认证的任意一门考试。
        </div>
      </main>
    </div>
    <div id='footer' style="height:100vh;">

    </div>
    <nav id="nav">
      <ul class="list_block">
        <li
          :class="toggle==index?'active':''"
          v-for="(item,index) in navList" @click="jumpTo(index)"
          :key="index"
        >{{item.name}}</li>
      </ul>
    </nav>
  </div>
</template>
<script>
// import logo from '../assets/logo.png'
export default {
  data() {
    return {
      imgSrc: require("../assets/logo.png"),
      navList: [
        {
          name: "认证概述"
        },
        {
          name: "认证前提条件"
        },
        {
          name: "考试及费用"
        },
        {
          name: "考试大纲"
        },
        {
          name: "参考资料"
        },
        {
          name: "推荐培训"
        },
        {
          name: "考试成绩有效期"
        },
        {
          name: "再认证方法"
        }
      ],
      topArr: [],
      toggle: 0
    };
  },
  methods: {
    scroll() {
      let scrollTop =
        window.pageXOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
      if (scrollTop>= this.topArr[0]&& scrollTop < this.topArr[1]) {
        this.toggle = 0;
      } else if (scrollTop >= this.topArr[1] && scrollTop < this.topArr[2]) {
        this.toggle = 1;
      } else if (scrollTop >= this.topArr[2] && scrollTop < this.topArr[3]) {
        this.toggle = 2;
      }else if (scrollTop >= this.topArr[3] && scrollTop < this.topArr[4]) {
        this.toggle = 3;
      }else if (scrollTop >= this.topArr[4] && scrollTop < this.topArr[5]) {
        this.toggle = 4;
      }else if (scrollTop >= this.topArr[5] && scrollTop < this.topArr[6]) {
        this.toggle = 5;
      }else if (scrollTop >= this.topArr[6] && scrollTop < this.topArr[7]) {
        this.toggle = 6;
      }else if (scrollTop >= this.topArr[7] ) {
        this.toggle =7;
      }
    },
    getData() {
      this.topArr[0] = document.getElementById("gaishu").offsetTop;
      this.topArr[1] = document.getElementById("qianti").offsetTop;
      this.topArr[2] = document.getElementById("feiyong").offsetTop;
      this.topArr[3] = document.getElementById("dagang").offsetTop;
      this.topArr[4] = document.getElementById("cailiao").offsetTop;
      this.topArr[5] = document.getElementById("peixun").offsetTop;
      this.topArr[6] = document.getElementById("youxiaoqi").offsetTop;
      this.topArr[7] = document.getElementById("fangfa").offsetTop;

      console.log(this.topArr);
    },
    jumpTo(val){
      window.scrollTo({
        top:this.topArr[val]
      })
    }
  },
  mounted() {
    this.getData();
    window.addEventListener("scroll", this.scroll);
  }
};
</script>
<style lang="scss">
.item {
  // border:1px solid #00ff00;
  height: 200px;
}
#nav {
  position: fixed;
  top: 350px;
  right: 10px;
  z-index: 999;
  border-left: 1px solid #000;
  background: #fff;
}
main {
  font-size: 24px;
  line-height: 35px;
}
.list_block {
  li {
    height: 27px;
    line-height: 27px;
    cursor: pointer;
    &.active {
      color: #f44;
    }
  }
}
</style>