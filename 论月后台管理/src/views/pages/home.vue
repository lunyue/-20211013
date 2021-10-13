<template>
  <div class="app">
    <div class="box">
      <el-container>
        <!-- width=null 解决固定宽的问题 -->
        <el-aside width=null>
          <!---------------------------------------------- 左侧----------------------- -->
          <div class="leftBox">
            <!-- 左侧导栏航 -->
            <h5>自定义颜色</h5>
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
              :collapse="isCollapse" background-color="#545c64" text-color="#fff">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span slot="title">产品库</span>
                </template>
                <el-menu-item-group>
                  <router-link to="/index/recommend" tag="div">
                    <el-menu-item index="1-1">推荐</el-menu-item>
                  </router-link>
                  <router-link to="/index/short" tag="div">
                    <el-menu-item index="1-2">衣服</el-menu-item>
                  </router-link>
                  <router-link to="/index/shoe" tag="div">
                    <el-menu-item index="1-3">鞋子</el-menu-item>
                  </router-link>
                  <router-link to="/index/trousers" tag="div">
                    <el-menu-item index="1-4">裤子</el-menu-item>
                  </router-link>
                  <router-link to="/index/ball" tag="div">
                    <el-menu-item index="1-5">球类</el-menu-item>
                  </router-link>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-school"></i>
                  <span slot="title">商品管理</span>
                </template>
                <el-menu-item-group>
                  <router-link to="/management/edit" tag="div">
                    <el-menu-item index="2-1">商品编辑</el-menu-item>
                  </router-link>
                  <router-link to="/management/audit" tag="div">
                    <el-menu-item index="2-2">商品审核</el-menu-item>
                  </router-link>
                  <router-link to="/management/auditChange" tag="div">
                    <el-menu-item index="2-3">变更审核</el-menu-item>
                  </router-link>
                  <router-link to="/management/auditRecord" tag="div">
                    <el-menu-item index="2-4">审核记录</el-menu-item>
                  </router-link>
                  <router-link to="/management/testingWares" tag="div">
                    <el-menu-item index="2-5">测品管理</el-menu-item>
                  </router-link>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-s-shop"></i>
                  <span slot="title">卖家中心</span>
                </template>
                <el-menu-item-group>
                  <router-link to="/seller_center/order_management" tag="div">
                    <el-menu-item index="2-1">订单管理</el-menu-item>
                  </router-link>
                  <router-link to="/seller_center/account_income" tag="div">
                    <el-menu-item index="2-2">账户收益</el-menu-item>
                  </router-link>
                  <router-link to="/seller_center/order_sales_data" tag="div">
                    <el-menu-item index="2-3">订单销量数据</el-menu-item>
                  </router-link>
                </el-menu-item-group>
              </el-submenu>
              <router-link to="/authority/role" >
                <el-menu-item index="4">
                  <i class="el-icon-s-custom"></i>
                  <span slot="title">用户管理</span>
                </el-menu-item>
              </router-link>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span slot="title">系统设置</span>
                </template>
                <el-menu-item-group>
                  <router-link to="/management/edit" tag="div">
                    <el-menu-item index="2-1">商品编辑</el-menu-item>
                  </router-link>
                  <router-link to="/management/audit" tag="div">
                    <el-menu-item index="2-2">商品审核</el-menu-item>
                  </router-link>
                  <router-link to="/management/auditChange" tag="div">
                    <el-menu-item index="2-3">变更审核</el-menu-item>
                  </router-link>
                  <router-link to="/management/auditRecord" tag="div">
                    <el-menu-item index="2-4">审核记录</el-menu-item>
                  </router-link>
                  <router-link to="/management/testingWares" tag="div">
                    <el-menu-item index="2-5">测品管理</el-menu-item>
                  </router-link>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </div>
        </el-aside>
        <el-container>
          <el-header>
            <div class="header">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                  <div v-model="isCollapse" class="switch">
                    <i class="el-icon-s-fold" v-if="isShow" @click="close"></i>
                    <i class="el-icon-s-unfold" v-if="!isShow" @click="open"></i>
                  </div>
                </el-breadcrumb-item>
                <el-breadcrumb-item>论月产品库</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item class="title">{{$router.history.current.name}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </el-header>
          <el-main>
            <!-- 二级路由出口 -->
            <router-view></router-view>
          </el-main>
          <el-footer>
            <div class="bottom">
              <div>备案号：粤CP21大生意</div>
            </div>
          </el-footer>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: true,
        isCollapse: true,
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    // --------------------------方法-------------------------------------------------
    methods: {
      // ------------------------开关开始---------------------------
      // 记得传参isShow
      close(isShow) {
        console.log("点击")
        this.isShow = !isShow;
        this.isCollapse = false;
        return
      },
      open(isShow) {
        this.isShow = isShow;
        this.isCollapse = true;
        return
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
      // ------------------------开关结束---------------------------
    }
    // -------------------------------------------------------------------------------
  }
</script>
<style scoped>
  /* 开关 */
  .switch i {
    font-size: 20px;
    line-height: 50px;
    margin-right: 20px;
    position: absolute;

  }

  .box {
    width: 100vw;
    height: 100vh;
    display: flex;
  }

  .leftBox {
    float: left;
    background-color: #545c64;
    height: 99vh;
  }

  .rightBox {
    float: left;
    flex-grow: 1;
  }

  .header {
    height: 49px;
    border-bottom: 1px solid #ccc;
    line-height: 50px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-breadcrumb {
    height: 49px;
    border-bottom: 1px solid #ccc;
    line-height: 50px;
  }

  .select {
    background: rgb(211, 82, 7) !important;
    color: fuchsia !important;
  }

  .title {
    color: fuchsia !important;
  }

  .bottom {
    display: flex;
    top: 100vh;
    left: 0px;
    width: 100%;
    height: 50px;
    background-color: #000;
    color: #fff;
    text-align: center;
    line-height: 50px;
    z-index: 999;
  }

  .bottom div {
    bottom: 0px;
    width: 100%;
    height: 50px;
    background-color: #000;
    color: #fff;
  }
</style>