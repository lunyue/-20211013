<template>
  <div class="app">
    <mt-search v-model="value">
      <mt-cell v-for="item in result" :title="item.title" :value="item.value" :key="item">
      </mt-cell>
    </mt-search>
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in items" :key="item.id">
        <img :src="item.url" class="pic" />
        <span class="desc"></span>
      </mt-swipe-item>
    </mt-swipe>
    <div class="show">
      <ul v-for="item in list" :key="item">
        <li>
          <h1 class="title"> {{item.title}}</h1>
          <img :src="item.url" alt="" class="pic2">
        </li>
      </ul>
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible">
    </mt-actionsheet>
    <!-- <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
        <li v-for="item in list">{{ item }}</li>
      </ul> -->
  </div>
</template>
<script>
  import { Swipe, SwipeItem, Search, Cell, InfiniteScrol, Actionsheet } from 'mint-ui'
  // import 'mint-ui/lib/style.css'
  export default {
    data() {
      return {
        sheetVisible:"",
        actions:[
          {
            name:"",
            method:()=>{},
          },
        ],
        list: [
          {
            title: '养殖快线',
            url: require("../../../assets/img/1.jpg"),
          },
          {
            title: '养殖报表',
            url: require("../../../assets/img/2.jpg"),
          },
          {
            title: '我的名字',
            url: require("../../../assets/img/3.jpg"),
          },
          {
            title: '我的名字',
            url: require("../../../assets/img/4.jpg"),
          },
          {
            title: '我的名字',
            url: require("../../../assets/img/5.jpg"),
          },
        ],
        result: [
          {
            value: "",
            title: "",
          }
        ],
        value: "",
        items: [
          {
            title: '你的名字',
            url: require("../../../assets/img/1.jpg"),
          },
          {
            title: '我的名字',
            url: require("../../../assets/img/2.jpg"),
          },
          {
            title: '我的名字',
            url: require("../../../assets/img/3.jpg"),
          },
          {
            title: '我的名字',
            url: require("../../../assets/img/4.jpg"),
          },
          {
            title: '我的名字',
            url: require("../../../assets/img/5.jpg"),
          },
        ]
      }
    },
    methods: {
      // handleChange(index) {
      //   ...
      // }
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 2500);
      }
    },
    components: {
      'mt-swipe': Swipe,
      'mt-swipe-item': SwipeItem,
      'mt-search': Search,
      'mt-cell': Cell,
      'mt-actionsheet':Actionsheet,
    }
  }
</script>

<style scoped>
  .pic {
    width: 100%;
    height: 4rem;
  }

  .mint-swipe {
    height: 3rem;
  }

  .desc {
    /* font-weight: 600; */
    opacity: .9;
    padding: 5px;
    height: 20px;
    line-height: 20px;
    width: 100%;
    color: #fff;
    /* background-color: gray; */
    position: absolute;
    bottom: 0;
  }

  .mint-search {
    width: 100%;
    height: 1rem;
  }

  .show {
    width: 100%;
    margin-top: 0.2rem;
  }

  .show ul {
    border: 1px solid #f3390b;
    margin-top: 0.2rem;
  }

  .show li .title {
    text-align: center;
    font-size: 0.32rem;
  }

  .show .pic2 {
    width: 100%;
    height: 3rem;
    opacity: 0.7;
  }
</style>