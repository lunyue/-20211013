<template>
  <div>
    <h1 class="title">盛夏西瓜圣夜</h1>
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <h3 class="medium"><img :src="item.img" alt=""></h3>
      </el-carousel-item>
    </el-carousel>
    <div class="lazyBox">
      <div class="goods">
        <div class="goodDetail" v-for="(item1,index) in goodList" :key="item1.index">
          <img  v-lazy="item1.pic" alt="" @click="routeTo(item1)">
          <span class="goodName "> {{item1.name}}</span>
          <span class="goodFont">{{item1.theme}}</span>
          <span class="price">
            <span class="purchase">采购价：{{item1.purchase}}</span>
            <span class="suggest">建议价:{{item1.suggest}}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imgList: [
          {
            id: 1,
            img: require("../../../assets/homeland/1.jpg"),
          },
          {
            id: 2,
            img: require("../../../assets/homeland/2.jpg"),
          },
          {
            id: 3,
            img: require("../../../assets/homeland/3.jpg"),
          },
          {
            id: 4,
            img: require("../../../assets/homeland/4.jpg"),
          },
          {
            id: 5,
            img: require("../../../assets/homeland/5.jpg"),
          },
          {
            id: 6,
            img: require("../../../assets/homeland/6.jpg"),
          },
        ],
        //新品上市
        goodList: [
          {
            id: 13213,
            name: "美丽的向日葵1",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/1.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 23123,
            name: "美丽的向日葵2",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/2.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 332432,
            name: "美丽的向日葵3",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/3.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 432423,
            name: "美丽的向日葵4",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/4.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 54324,
            name: "美丽的向日葵5",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/5.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 64324,
            name: "美丽的向日葵6",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/6.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 74324,
            name: "美丽的向日葵7",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/7.jpg"),
            purchase: "344.0$",
            suggest: "266.2$",
          },
          {
            id: 897898,
            name: "美丽的向日葵8",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/8.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 99879,
            name: "美丽的向日葵9",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/9.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 187987,
            name: "美丽的向日葵1",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/1.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 278987,
            name: "美丽的向日葵2",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/2.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 378987,
            name: "美丽的向日葵3",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/3.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 49879,
            name: "美丽的向日葵4",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/4.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 59789,
            name: "美丽的向日葵5",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/5.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 69789,
            name: "美丽的向日葵6",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/6.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 7798,
            name: "美丽的向日葵7",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/7.jpg"),
            purchase: "344.0$",
            suggest: "266.2$",
          },
          {
            id: 887,
            name: "美丽的向日葵8",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/8.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 9789,
            name: "美丽的向日葵9",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/9.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 198,
            name: "美丽的向日葵1",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/1.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          // ------------------------------------------------------------------------------
          {
            id:21332,
            name: "美丽的向日葵2",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/2.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id:658653,
            name: "美丽的向日葵3",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/3.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 86584,
            name: "美丽的向日葵4",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/4.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 67565,
            name: "美丽的向日葵5",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/5.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 435436,
            name: "美丽的向日葵6",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/6.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 2132157,
            name: "美丽的向日葵7",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/7.jpg"),
            purchase: "344.0$",
            suggest: "266.2$",
          },
          {
            id: 2132138,
            name: "美丽的向日葵8",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/8.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 42132139,
            name: "美丽的向日葵9",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/9.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 123113,
            name: "美丽的向日葵1",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/1.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 7772,
            name: "美丽的向日葵2",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/2.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 3,
            name: "美丽的向日葵3",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/3.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 477,
            name: "美丽的向日葵4",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/4.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 566,
            name: "美丽的向日葵5",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/5.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 556,
            name: "美丽的向日葵6",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/6.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 447,
            name: "美丽的向日葵7",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/7.jpg"),
            purchase: "344.0$",
            suggest: "266.2$",
          },
          {
            id: 118,
            name: "美丽的向日葵8",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/8.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 921,
            name: "美丽的向日葵9",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/9.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          // ------------------------------------------------------------------------------
          {
            id:21332,
            name: "美丽的向日葵2",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/2.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id:658653,
            name: "美丽的向日葵3",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/3.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 86584,
            name: "美丽的向日葵4",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/4.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 67565,
            name: "美丽的向日葵5",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/5.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 435436,
            name: "美丽的向日葵6",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/6.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 2132157,
            name: "美丽的向日葵7",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/7.jpg"),
            purchase: "344.0$",
            suggest: "266.2$",
          },
          {
            id: 2132138,
            name: "美丽的向日葵8",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/8.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 42132139,
            name: "美丽的向日葵9",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/9.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 123113,
            name: "美丽的向日葵1",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/1.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 7772,
            name: "美丽的向日葵2",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/2.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 3,
            name: "美丽的向日葵3",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/3.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 477,
            name: "美丽的向日葵4",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/4.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 566,
            name: "美丽的向日葵5",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/5.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 556,
            name: "美丽的向日葵6",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/6.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 447,
            name: "美丽的向日葵7",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/7.jpg"),
            purchase: "344.0$",
            suggest: "266.2$",
          },
          {
            id: 118,
            name: "美丽的向日葵8",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/8.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 921,
            name: "美丽的向日葵9",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/9.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          // ------------------------------------------------------------------------------
          {
            id:21332,
            name: "美丽的向日葵2",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/2.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id:658653,
            name: "美丽的向日葵3",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/3.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 86584,
            name: "美丽的向日葵4",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/4.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 67565,
            name: "美丽的向日葵5",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/5.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 435436,
            name: "美丽的向日葵6",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/6.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 2132157,
            name: "美丽的向日葵7",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/7.jpg"),
            purchase: "344.0$",
            suggest: "266.2$",
          },
          {
            id: 2132138,
            name: "美丽的向日葵8",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/8.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 42132139,
            name: "美丽的向日葵9",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/9.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 123113,
            name: "美丽的向日葵1",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/1.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 7772,
            name: "美丽的向日葵2",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/2.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 3,
            name: "美丽的向日葵3",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/3.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 477,
            name: "美丽的向日葵4",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/4.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 566,
            name: "美丽的向日葵5",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/5.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 556,
            name: "美丽的向日葵6",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/6.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 447,
            name: "美丽的向日葵7",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/7.jpg"),
            purchase: "344.0$",
            suggest: "266.2$",
          },
          {
            id: 118,
            name: "美丽的向日葵8",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/8.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 921,
            name: "美丽的向日葵9",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/9.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 13213,
            name: "美丽的向日葵1",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/1.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 23123,
            name: "美丽的向日葵2",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/2.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 332432,
            name: "美丽的向日葵3",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/3.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 432423,
            name: "美丽的向日葵4",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/4.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 54324,
            name: "美丽的向日葵5",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/5.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 64324,
            name: "美丽的向日葵6",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/6.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 74324,
            name: "美丽的向日葵7",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/7.jpg"),
            purchase: "344.0$",
            suggest: "266.2$",
          },
          {
            id: 897898,
            name: "美丽的向日葵8",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/8.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 99879,
            name: "美丽的向日葵9",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/9.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 187987,
            name: "美丽的向日葵1",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/1.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 278987,
            name: "美丽的向日葵2",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/2.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 378987,
            name: "美丽的向日葵3",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/3.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 49879,
            name: "美丽的向日葵4",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/4.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 59789,
            name: "美丽的向日葵5",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/5.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 69789,
            name: "美丽的向日葵6",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/6.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 7798,
            name: "美丽的向日葵7",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/7.jpg"),
            purchase: "344.0$",
            suggest: "266.2$",
          },
          {
            id: 887,
            name: "美丽的向日葵8",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/8.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 9789,
            name: "美丽的向日葵9",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/9.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 198,
            name: "美丽的向日葵1",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/1.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          // ------------------------------------------------------------------------------
          {
            id:21332,
            name: "美丽的向日葵2",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/2.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id:658653,
            name: "美丽的向日葵3",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/3.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 86584,
            name: "美丽的向日葵4",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/4.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 67565,
            name: "美丽的向日葵5",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/5.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 435436,
            name: "美丽的向日葵6",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/6.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 2132157,
            name: "美丽的向日葵7",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/7.jpg"),
            purchase: "344.0$",
            suggest: "266.2$",
          },
          {
            id: 2132138,
            name: "美丽的向日葵8",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/8.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 42132139,
            name: "美丽的向日葵9",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/9.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 123113,
            name: "美丽的向日葵1",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/1.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 7772,
            name: "美丽的向日葵2",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/2.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 3,
            name: "美丽的向日葵3",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/3.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 477,
            name: "美丽的向日葵4",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/4.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 566,
            name: "美丽的向日葵5",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/5.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 556,
            name: "美丽的向日葵6",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/6.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 447,
            name: "美丽的向日葵7",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/7.jpg"),
            purchase: "344.0$",
            suggest: "266.2$",
          },
          {
            id: 118,
            name: "美丽的向日葵8",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/8.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 921,
            name: "美丽的向日葵9",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/9.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          // ------------------------------------------------------------------------------
          {
            id:21332,
            name: "美丽的向日葵2",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/2.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id:658653,
            name: "美丽的向日葵3",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/3.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 86584,
            name: "美丽的向日葵4",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/4.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 67565,
            name: "美丽的向日葵5",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/5.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 435436,
            name: "美丽的向日葵6",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/6.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 2132157,
            name: "美丽的向日葵7",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/7.jpg"),
            purchase: "344.0$",
            suggest: "266.2$",
          },
          {
            id: 2132138,
            name: "美丽的向日葵8",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/8.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 42132139,
            name: "美丽的向日葵9",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/9.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 123113,
            name: "美丽的向日葵1",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/1.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 7772,
            name: "美丽的向日葵2",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/2.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 3,
            name: "美丽的向日葵3",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/3.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 477,
            name: "美丽的向日葵4",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/4.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 566,
            name: "美丽的向日葵5",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/5.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 556,
            name: "美丽的向日葵6",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/6.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 447,
            name: "美丽的向日葵7",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/7.jpg"),
            purchase: "344.0$",
            suggest: "266.2$",
          },
          {
            id: 118,
            name: "美丽的向日葵8",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/8.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 921,
            name: "美丽的向日葵9",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/9.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          // ------------------------------------------------------------------------------
          {
            id:21332,
            name: "美丽的向日葵2",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/2.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id:658653,
            name: "美丽的向日葵3",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/3.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 86584,
            name: "美丽的向日葵4",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/4.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 67565,
            name: "美丽的向日葵5",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/5.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 435436,
            name: "美丽的向日葵6",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/6.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 2132157,
            name: "美丽的向日葵7",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/7.jpg"),
            purchase: "344.0$",
            suggest: "266.2$",
          },
          {
            id: 2132138,
            name: "美丽的向日葵8",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/8.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 42132139,
            name: "美丽的向日葵9",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/9.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 123113,
            name: "美丽的向日葵1",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/1.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 7772,
            name: "美丽的向日葵2",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/2.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 3,
            name: "美丽的向日葵3",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/3.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 477,
            name: "美丽的向日葵4",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/4.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 566,
            name: "美丽的向日葵5",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/5.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 556,
            name: "美丽的向日葵6",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/6.jpg"),
            purchase: "44.0$",
            suggest: "66.2$",
          },
          {
            id: 447,
            name: "美丽的向日葵7",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/7.jpg"),
            purchase: "344.0$",
            suggest: "266.2$",
          },
          {
            id: 118,
            name: "美丽的向日葵8",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/8.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
          {
            id: 921,
            name: "美丽的向日葵9",
            theme: "向日葵主题",
            pic: require("../../../assets/homeland/9.jpg"),
            purchase: "144.0$",
            suggest: "166.2$",
          },
        ],
      }
    },
  }
</script>
<style scoped>
  .el-breadcrumb {
    height: 49px;
    border-bottom: 1px solid #ccc;
    line-height: 50px;
  }

  .title {
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 40px;
    color: crimson;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 400px;
    margin: 0;
  }

  .el-carousel__item h3 img {
    width: 100%;
    height: 100%;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  /* 懒加载 */
  .goods {
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  /* BUG 300px 未起效晚上待查原因 */
  .goodDetail {
    width: 300px;
    flex: 1;
    height: 360px;
    margin-left: 30px;
  }

  .goodDetail img {
    width: 280px;
    height: 200px;
  }

  .goodName {
    margin-top: 30px;
    display: block;
  }

  .goodFont {
    display: block;
    height: 40px;
    margin-left: 55px;
    color: blue;
    line-height: 40px;
  }

  .suggest {
    margin-left: 60px;
    font-size: 12px;
  }
</style>