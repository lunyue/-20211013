<template>
  <div class="container" v-if="show">
    <div>{{ text }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style  scoped>
.container {
  position: absolute;
  top: 200px;
  left: 500px;
  width: 500px;
  height:300px;
  text-align: center;
  line-height: 300px;
  
  color:black;
  background-color:orange;
  border-radius: 10px;
  border:5px solid red;
  box-sizing: border-box;
}
.container div{
font-size:30px;
}
</style>