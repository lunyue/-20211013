<template>
  <div id="app">
    <h1 class="title">五星连珠</h1>
    <div class="source-spread"></div>
    <div class="source">
      <h1 class="yue">月球</h1>
    </div>
    <div class="source-beam"></div>
    <div class="c1">
      <h1 class="tu">土星</h1>
    </div>
    <div class="c2">
      <h1 class="mu">木星</h1>
    </div>
    <div class="c3"></div>
    <!-- <div class="c4"></div>
    <div class="c5"></div> -->
    <!-- <div class="c6"></div> -->
    <div class="c7"></div>
    <div class="c8">
      <h1 class="jin">金星</h1>
    </div>
    <div class="c9"></div>
    <div class="c10"></div>
    <div class="c11"></div>
    <div class="c12">
      <h1 class="shui">水星</h1>
    </div>
    <div class="c13"></div>
    <!-- <div class="c14"></div> -->
    <div class="mouth">
      <div class="small"></div>
    </div>
    <div class="starts">
      <div ref="star" v-for="(item,index) in starsCount" :key="index" class="star">
      </div>
    </div>
  </div>
</template>
<script>
   import pubsub from "@/utils/pubsub.js"
  export default {
    data() {
      return {
        name:"个人简历",
        starsCount: 800,//星星数量
        distance: 800,//间距
      }
    },
    methods: {
      // pubsubs() {
      //   pubsub.trigger("item", this.name)
      // }
    },
    mounted() {
      // this.pubsubs()
      let that = this
      pubsub.trigger("item", this.name)
      let startArr = that.$refs.star
      startArr.forEach(item => {
        var speed = 0.2 + (Math.random() * 1);
        var thisDistance = that.distance + (Math.random() * 300)
        item.style.transformOrigin = `0 0  ${thisDistance}px`
        // item.style.transfrom = `translate3d(0,0,-${thisDistance}px) rotateY(${(Math.random() * 360)}deg)  rotateX(${(Math.random() * -50)}deg) scale(${speed},${speed})`
        item.style.transform = `translate3d(0,0,-${thisDistance}px) rotateY(${(Math.random() * 360)}deg) rotateX(${(Math.random() * -50)}deg) scale(${speed},${speed})`
      });
    }
  }
//   export default {
//   data() {
//     return {
//       list_star: 800, //星星数量
//       distance: 800,//间距
//     }
//   },
//   mounted(){
//     let that = this
//     let starArr = that.$refs.star
//     starArr.forEach(item => {
//       let speed = 0.2 + (Math.random() * 1);
//       let thisDistance = that.distance + (Math.random() * 300);
//       item.style.transformOrigin = `0 0 ${thisDistance}px`;
//       item.style.transform = `translate3d(0,0,-${thisDistance}px) rotateY(${(Math.random() * 360)}deg) rotateX(${(Math.random() * -50)}deg) scale(${speed},${speed})`
//     })
//   }
// }​
</script>
<style scoped>
  .el-breadcrumb {
    height: 49px;
    border-bottom: 1px solid #ccc;
    line-height: 50px;
  }

  .title {
    text-align: center;
    width: 100vw;
    color: rgb(12, 233, 141);
  }

  .mouth {
    /* background: radial-gradient(ellipse at center, rgba(0, 0, 0, .5) 4%, rgba(100, 145, 42, .2) 36%, rgba(163, 240, 63, .2) 38%, rgba(100, 145, 42, .1) 40%, rgba(189, 91, 87, 0) 43%); */
    background-color: #f7f7b8;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    position: absolute;
    top: 49%;
    left: 51%;
    opacity: 0.9;
  }

  .small {
    background-color: #75517d;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    position: absolute;
    top: 8px;
    left: -5px;
  }

  #app {
    position: relative;
    display: flex;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(200% 100% at bottom center, #f7f7b6, #e96f92, #1b2947);
    background: radial-gradient(220% 105% at top center, #1b2947 10%, #75517d 40%, #e96f92 65%, #f7f7b6);
    background-attachment: fixed;
    overflow: hidden;
  }

  @keyframes rotate {
    0% {
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
    }

    100% {
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
    }
  }

  .starts {
    transform: perspective(500px);
    transform-style: preserve-3d;
    position: absolute;
    perspective-origin: 50% 100%;
    left: 50%;
    animation: rotate 90s infinite linear;
    bottom: 0;
  }

  .star {
    width: 4px;
    height: 4px;
    background-color: #f7f7b8;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
  }

  .source-spread {
    position: absolute;
    background: radial-gradient(rgba(255, 225, 255, .05) 10%, rgba(255, 225, 255, .05) 30%, rgba(0, 0, 0, 0) 60%);
    border-radius: 50%;
    width: 2000px;
    height: 2000px;
    margin-top: -1000px;
    margin-left: -1000px;
    top: 14%;
    left: 14%;
    z-index: 0;
  }

  .source {
    position: absolute;
    background: radial-gradient(#fff 0%, rgba(243, 206, 205, .4) 35%, rgba(88, 88, 88, .3) 60%, rgba(0, 0, 0, 0) 70%);
    border-radius: 50%;
    width: 800px;
    height: 800px;
    margin-top: -400px;
    margin-left: -400px;
    top: 53%;
    left: 55%;
    z-index: 2;
  }

  .source-beam {
    position: absolute;
    background: radial-gradient(rgba(255, 255, 255, .3) 0%, rgba(0, 0, 0, 0) 70%);
    border-radius: 50%;
    width: 2200px;
    height: 28px;
    margin-top: -14px;
    margin-left: -1100px;
    top: 53%;
    left: 55%;
    z-index: 1;
  }

  .c1 {
    position: absolute;
    background: radial-gradient(ellipse at center, rgba(189, 91, 87, 0) 40%, rgba(189, 91, 87, 0.5) 45%, rgba(189, 91, 87, 0) 50%, rgba(189, 91, 87, 0) 100%);
    border-radius: 50%;
    width: 400px;
    height: 400px;
    margin-top: -200px;
    margin-left: -200px;
    top: 23%;
    left: 23%;
    z-index: 3;
  }

  .c2 {
    position: absolute;
    background: radial-gradient(ellipse at center, rgba(162, 196, 134, 0) 20%, rgba(162, 196, 134, 0.3) 43%, rgba(67, 85, 52, 0) 50%, rgba(67, 85, 52, 0) 100%);
    border-radius: 50%;
    width: 300px;
    height: 300px;
    margin-top: -150px;
    margin-left: -150px;
    top: 8%;
    left: 8%;
    z-index: 4;
  }

  .c3 {
    position: absolute;
    background: radial-gradient(ellipse at center, rgba(31, 99, 255, .1) 1%, rgba(31, 99, 255, .13) 100%);
    border-radius: 50%;
    width: 160px;
    height: 160px;
    margin-top: -80px;
    margin-left: -80px;
    top: 23%;
    left: 23%;
    z-index: 5;
  }

  .c4 {
    position: absolute;
    background: radial-gradient(ellipse at center, rgba(31, 99, 255, .1) 1%, rgba(31, 99, 255, .13) 100%);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-top: -25px;
    margin-left: -25px;
    top: 44%;
    left: 44%;
    z-index: 6;
  }

  .c5 {
    position: absolute;
    background: radial-gradient(ellipse at center, rgba(31, 99, 255, .1) 1%, rgba(31, 99, 255, .13) 100%);
    border-radius: 50%;
    width: 88px;
    height: 88px;
    margin-top: -44px;
    margin-left: -44px;
    top: 47%;
    left: 47%;
    z-index: 7;
  }

  .c6 {
    position: absolute;
    background: radial-gradient(ellipse at center, rgba(255, 129, 57, .15) 1%, rgba(255, 129, 57, .2) 100%);
    border-radius: 50%;
    width: 88px;
    height: 88px;
    margin-top: -44px;
    margin-left: -44px;
    top: 57%;
    left: 57%;
    z-index: 8;
  }

  .c7 {
    position: absolute;
    background: radial-gradient(rgba(255, 225, 255, .9) 10%, rgba(137, 255, 220, .4) 30%, rgba(0, 0, 0, 0) 60%);
    border-radius: 50%;
    width: 16px;
    height: 16px;
    margin-top: -8px;
    margin-left: -8px;
    top: 62%;
    left: 62%;
    z-index: 9;
  }

  .c8 {
    position: absolute;
    background: radial-gradient(ellipse at center, rgba(255, 129, 57, .15) 10%, rgba(187, 129, 57, .20) 50%, rgba(255, 129, 57, .2) 60%, rgba(0, 0, 0, 0) 65%);
    border-radius: 50%;
    width: 190px;
    height: 190px;
    margin-top: -95px;
    margin-left: -95px;
    top: 73%;
    left: 73%;
    z-index: 10;
  }

  .c9 {
    position: absolute;
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, .15) 1%, rgba(255, 129, 57, .2) 100%);
    border-radius: 50%;
    width: 104px;
    height: 104px;
    margin-top: -52px;
    margin-left: -52px;
    top: 73%;
    left: 73%;
    z-index: 11;
  }

  .c10 {
    position: absolute;
    background: radial-gradient(rgba(255, 225, 255, .9) 10%, rgba(137, 255, 220, .4) 30%, rgba(0, 0, 0, 0) 60%);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-top: -30px;
    margin-left: -30px;
    top: 73%;
    left: 73%;
    z-index: 12;
  }

  .c11 {
    position: absolute;
    background: radial-gradient(rgba(255, 225, 255, .9) 10%, rgba(137, 255, 220, .4) 30%, rgba(0, 0, 0, 0) 60%);
    border-radius: 50%;
    width: 22px;
    height: 22px;
    margin-top: -11px;
    margin-left: -11px;
    top: 8%;
    left: 8%;
    z-index: 13;
  }

  .c12 {
    position: absolute;
    background: radial-gradient(ellipse at center, rgba(73, 168, 199, .15) 10%, rgba(100, 145, 42, .20) 30%, rgba(100, 145, 42, .2) 60%, rgba(0, 0, 0, 0) 65%);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-top: -40px;
    margin-left: -40px;
    top: 81%;
    left: 81%;
    z-index: 14;
  }

  .c13 {
    position: absolute;
    background: radial-gradient(rgba(255, 225, 255, .9) 10%, rgba(137, 255, 220, .4) 30%, rgba(0, 0, 0, 0) 60%);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-top: -30px;
    margin-left: -30px;
    top: 81%;
    left: 81%;
    z-index: 12;
  }

  .c14 {
    position: absolute;
    background: radial-gradient(ellipse at center, rgba(189, 91, 87, 0) 39%, rgba(94, 29, 191, 0.2) 41%, rgba(29, 71, 191, 0.2) 42%, rgba(191, 113, 29, 0.2) 43%, rgba(189, 91, 87, 0) 45%, rgba(189, 91, 87, 0) 100%);
    border-radius: 50%;
    width: 600px;
    height: 600px;
    margin-top: -300px;
    margin-left: -300px;
    top: 99%;
    left: 99%;
    z-index: 16;
  }

  .mu {
    position: absolute;
    top: 60px;
    left: 120px;
    color: crimson;
    font-size: 16px;
  }

  .tu {
    position: absolute;
    top: 60px;
    left: 180px;
    color: rgb(111, 231, 42);
    font-size: 16px;
  }

  .tu {
    position: absolute;
    top: 60px;
    left: 180px;
    color: rgb(111, 231, 42);
    font-size: 16px;
  }

  .yue {
    position: absolute;
    top: 60px;
    left: 300px;
    color: rgb(131, 146, 122);
    font-size: 30px;
  }

  .jin {
    position: absolute;
    top: 60px;
    left: 30px;
    color: rgb(245, 104, 10);
    font-size: 16px;
  }

  .shui {
    position: absolute;
    top: 10px;
    left: 10px;
    color: rgb(32, 63, 197);
    font-size: 12px;
  }
</style>