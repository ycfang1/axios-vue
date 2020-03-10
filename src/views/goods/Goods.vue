
<template>
  <div class="container goods_section">
    <ul>
      <li @click="count_index(index)" v-for="(item,index) in activities" :key="index">{{item.name}}</li>
    </ul>
    
  </div>
</template>
<script>
import Alert from "@/components/Alert.vue";
export default {
  data() {
    return {
      like_count: 0,
      liked: false,
      activities:[
        {name:'rose'},
        {name:'lisa'},
        {name:'jennie'}
      ],
      activeIndex:0,
      money:'',
    };
  },
  components: {
    alert: Alert
  },
  methods: {
    praise() {
      if (!this.liked) {
        this.like_count++;
      } else {
        this.like_count--;
      }
      this.liked = !this.liked;
    },
    count_index(index){
     this.bus.$emit("count",index);
    },
    show(val){
      this.money=val;
      console.log(val);
    }
  },
  created() {
  //  console.log(this.Event);
  },
};
</script>
<style lang="css">
.goods_section {
  background: #f5f5f5;
  font-family: "Glyphicons Halflings";
}
span.active {
  color: rgb(255, 113, 60);
}
span:hover {
  cursor: pointer;
}
</style>