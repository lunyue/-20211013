<template>
  <div id="app">
    <button class="btn" @click="clickMe">点我</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    clickMe() {
　　　　//传入值
      this.$toast("新建的动态组件请笑纳")
    }
  },
  mounted(){
    var i=0.1+0.2;
    console.log(i)
  },
};
</script>
<style >
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>