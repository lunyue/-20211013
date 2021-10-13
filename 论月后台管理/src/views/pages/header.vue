<template>
    <div class="login">
        <div class="box">
            <div class="header">  
                <el-breadcrumb separator="/">
                  <el-breadcrumb-item >
                    <el-radio-group v-model="isCollapse" style="margin-bottom: 0px;">
                      <el-radio-button :label="false"  icon="el-icon-back" type="primary"> </el-radio-button>
                      <el-radio-button :label="true"></el-radio-button>
                    </el-radio-group>
                  </el-breadcrumb-item>
                  <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
              </div>
        </div>
   </div>
  </template>
  <script>
      export default{
        data () {
            return {
                isCollapse: true,
            }
        },
       }
  </script>
  <style scoped>

  </style>