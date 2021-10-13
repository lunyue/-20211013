<template>
    <div class="login">
        <div class="box">
            <v-search></v-search>
        </div>
   </div>
  </template>
  <script>
       import vSearch from "../../../components/common/search"
      export default{
        data () {
            return {
     
            }
        },
        components:{
            vSearch,
        }
       }
  </script>
  <style scoped>
      .login {
        padding: 10px;
    }

    .box {
        border: 1px solid #ccc;
    }
  </style>