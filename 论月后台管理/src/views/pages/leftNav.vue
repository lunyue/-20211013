<template>
    <div class="login">
        <div class="box">
            <div class="leftBox">
                <!-- 左侧导栏航 -->
                    <h5>自定义颜色</h5>
                    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                      <el-radio-button :label="false">展开</el-radio-button>
                      <el-radio-button :label="true">收起</el-radio-button>
                    </el-radio-group> -->
                    <!--兄弟传值？？？ -->
                    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#545c64" text-color="#fff">
                      <el-submenu index="1">
                        <template slot="title">
                          <i class="el-icon-location"></i>
                          <span slot="title">产品库</span>
                        </template>
                        <el-menu-item-group>
                          <router-link to="/recommed"> <el-menu-item index="1-1">推荐</el-menu-item></router-link>
                          <router-link to="/short"><el-menu-item index="1-2">衣服</el-menu-item></router-link>
                          <router-link to="/shoe"> <el-menu-item index="1-3">鞋子</el-menu-item></router-link>
                          <router-link to="/trousers"> <el-menu-item index="1-4">裤子</el-menu-item></router-link>
                          <router-link to="/ball"><el-menu-item index="1-5">球类</el-menu-item></router-link>
                        </el-menu-item-group>
                      </el-submenu>
                      <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                      </el-menu-item>
                      <el-menu-item index="3" >
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                      </el-menu-item>
                      <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                      </el-menu-item>
                    </el-menu>
              </div>
        </div>
   </div>
  </template>
  <script>
      export default{
        data () {
            return {
                isShow:true,
                isCollapse: true,
                activeIndex: '1',
                activeIndex2: '1'
            }
        },
        methods: {
            handleOpen(key, keyPath) {
              console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
              console.log(key, keyPath);
            },
            handleSelect(key, keyPath) {
              console.log(key, keyPath);
            }
        }
       }
  </script>
  <style scoped>
      .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
  </style>