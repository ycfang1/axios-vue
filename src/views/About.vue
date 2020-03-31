<template>
  <div>
    <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">开始演示模态框</button>
    <!-- 模态框（Modal） -->
    <div
      class="modal fade"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog exam-modal">
        <div class="modal-content">
          <!-- <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="myModalLabel">模态框（Modal）标题</h4>
          </div>-->
          <div id="modal-body" class="modal-body">
            <ul class="nav nav-tabs" id="myTab">
              <li :class="{active:tab==1}">
                <a href="#home"  data-toggle="tab" @click="tab=1">注册协议</a>
              </li>
              <li :class="{active:tab==2}">
                <a href="#profile" data-toggle="tab" @click="tab=2">隐私协议</a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="home">
                <p>注册协议</p>本产品尊重并保护所有使用网络服务用户的个人隐私权。为了给您提供更
                准确、更有个性化的服务，会按照本隐私权政策的规定使用和披露您的个
                人信息。但将以高度的勤勉、审慎义务对待这些信息。除本隐私权政策另
                有规定外，在未征得您事先许可的情况下，本产品不会将这些信息对外披
                露或向第三方提供。本产品会不时更新本隐私权政策。您在同意本产品网
                络服务使用协议之时，即视为您已经同意本隐私权政策全部内容。本隐私
                权政策属于本产品网络服务使用协议不可分割的一部分。
                1.适用范围
                a)在您注册本产品帐号时，
                您根据本产品要求提供的个人注册信息（商家应法律法规要求需公示的企
                业名称及相关工商注册信息除外）；
                b)在您使用本产品网络服务，或访问本产品平台网页时，本产品自动接收
                并记录的您的浏览器和iphone或者ipad上的信息，包括但不限于您的IP
                地址、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及
                您需求的网页记录等数据；
                c)本产品通过合法途径从商业伙伴处取得的用户个人数据。您了解并同
                意，以下信息不适用本隐私权政策：
                d)您在使用本产品平台提供的搜索服务时输入的关键字信息；隐私政策
                2.信息使用
                a)本产品不会向任何无关第三方提供、出售、出租、分享或交易您的个人
                信息，除非事先得到您的许可，或该第三方和本产品（含本产品关联公司）
                单独或共同为您提供服务，且在该服务结束后，其将被禁止访问包括其以
                前能够访问的所有这些资料。
                b)本产品亦不允许任何第三方以任何手段收集、编辑、出售或者无偿传播
                您的个人信息。任何本产品平台用户如从事上述活动，一经发现，本产品
                有权立即终止与该用户的服务协议。
                c)为服务用户的目的，本产品可能通过使用您的个人信息，向您提供您感
                兴趣的信息，包括但不限于向您发出产品和服务信息，或者与本产品合作
                伙伴共享信息以便他们向您发送有关其产品和服务的信息（后者需要您的
                事先同意）。
                3.信息披露
                在如下情况下，本产品将依据您的个人意愿或法律的规定全部或部分的披
                露您的个人信息：
                a)经您事先同意，向第三方披露；
                b)为提供您所要求的产品和服务，而必须和第三方分享您的个人信息；
                c)根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、
                司法机构披露；
                d)如您出现违反中国有关法律、法规或者本产品服务协议或相关规则的情
                况，需要向第三方披露；
              </div>
              <div class="tab-pane" id="profile">
                <p>隐私协议</p>本产品尊重并保护所有使用网络服务用户的个人隐私权。为了给您提供更
                准确、更有个性化的服务，会按照本隐私权政策的规定使用和披露您的个
                人信息。但将以高度的勤勉、审慎义务对待这些信息。除本隐私权政策另
                有规定外，在未征得您事先许可的情况下，本产品不会将这些信息对外披
                露或向第三方提供。本产品会不时更新本隐私权政策。您在同意本产品网
                络服务使用协议之时，即视为您已经同意本隐私权政策全部内容。本隐私
                权政策属于本产品网络服务使用协议不可分割的一部分。
                1.适用范围
                a)在您注册本产品帐号时，
                您根据本产品要求提供的个人注册信息（商家应法律法规要求需公示的企
                业名称及相关工商注册信息除外）；
                b)在您使用本产品网络服务，或访问本产品平台网页时，本产品自动接收
                并记录的您的浏览器和iphone或者ipad上的信息，包括但不限于您的IP
                地址、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及
                您需求的网页记录等数据；
                c)本产品通过合法途径从商业伙伴处取得的用户个人数据。您了解并同
                意，以下信息不适用本隐私权政策：
                d)您在使用本产品平台提供的搜索服务时输入的关键字信息；隐私政策
                2.信息使用
                a)本产品不会向任何无关第三方提供、出售、出租、分享或交易您的个人
                信息，除非事先得到您的许可，或该第三方和本产品（含本产品关联公司）
                单独或共同为您提供服务，且在该服务结束后，其将被禁止访问包括其以
                前能够访问的所有这些资料。
                b)本产品亦不允许任何第三方以任何手段收集、编辑、出售或者无偿传播
                您的个人信息。任何本产品平台用户如从事上述活动，一经发现，本产品
                有权立即终止与该用户的服务协议。
                c)为服务用户的目的，本产品可能通过使用您的个人信息，向您提供您感
                兴趣的信息，包括但不限于向您发出产品和服务信息，或者与本产品合作
                伙伴共享信息以便他们向您发送有关其产品和服务的信息（后者需要您的
                事先同意）。
                3.信息披露
                在如下情况下，本产品将依据您的个人意愿或法律的规定全部或部分的披
                露您的个人信息：
                a)经您事先同意，向第三方披露；
                b)为提供您所要求的产品和服务，而必须和第三方分享您的个人信息；
                c)根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、
                司法机构披露；
                d)如您出现违反中国有关法律、法规或者本产品服务协议或相关规则的情
                况，需要向第三方披露；
              </div>
            </div>
          </div>
          <div class="modal-footer" style="text-align:center;">
            <button v-if="tab==1" type="button" class="btn btn-primary" @click="nextPage" id="nextPage" disabled>下一页</button>
            <button v-if="tab==2" type="button" class="btn btn-default" data-dismiss="modal">不同意</button>
            <button v-if="tab==2" id="con_btn" disabled type="button" class="btn btn-danger">同意</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: 1
    };
  },
   watch: {
      tab() {
        let app = document.getElementById("modal-body");
        app.scrollTop = 0;
        document.getElementById('nextPage').disabled=true;
      }
   },
  methods: {
    loadingMore() {
      var app = document.getElementById("modal-body");
      var bottom = app.scrollHeight - app.clientHeight - app.scrollTop;
      //  console.log(bottom);
      if (bottom <= 20) {
        let con_btn=document.getElementById('con_btn');
        let nextPage=document.getElementById('nextPage')
        if(con_btn){
          con_btn.disabled = false;
          
        }
        if(nextPage){
          nextPage.disabled=false;
          // nextPage.style.backgroundColor="red";
          nextPage.style.color="#fff";

        }
      }
    },
    nextPage(){
       $('#myTab a:last').tab('show');
       this.tab=2;
    }
  },
  mounted() {
    let box = document.getElementById("modal-body");
    box.addEventListener("scroll", this.loadingMore);
  }
};
</script>
<style lang="css">
.exam-modal {
  top: 50%;
  transform: translateY(-50%) !important;
}
#modal-body {
  position: relative;
  padding: 20px;
  height: 300px;
  overflow: auto;
}
</style>