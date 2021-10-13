<template>
  <div class="login">
    <div class="box">
      <el-card style="margin-top: 20px;" shadow="never">
        <el-form :inline="true" :model="formData" class="demo-form-inline clearfix" size="samll">
          <div class="trademark">
            <span> 上传来源：</span>
            <span class="allFont">全部</span>
            <span>论月团队</span>
            <span>夸克团队</span>
            <span>火星团队</span>
            <span>月球团队</span>
          </div>
          <div class="trademark" style="margin-bottom: 30px;">
            <span> 审核状态：</span>
            <span class="allFont">全部</span>
            <span>论月团队</span>
            <span>夸克团队</span>
            <span>火星团队</span>
            <span>月球团队</span>
            <span>望蓝星团队</span>
          </div>
          <el-row>
            <el-col :span="6">
              <el-form-item label="订单编号:">
                <el-input v-model="formData.input" placeholder="多个订单" size="small" style="margin-top: 6px;">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="状态：">
                <el-select v-model="formData.region" placeholder="请选择" size="small">
                  <el-option label="全部" value="shanghai"></el-option>
                  <el-option label="待处理" value="beijing"></el-option>
                  <el-option label="已处理" value="beijing"></el-option>
                  <el-option label="已取消" value="beijing"></el-option>
                  <el-option label="已完成" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" style="width: 40%;">
              <span class="startItem">下单时间：</span>
              <el-form-item>
                <el-date-picker style="width: 70%" size="small" v-model="formData.createTime" type="daterange"
                  align="right" unlink-panels format="yyyy-MM-dd" value-format="yyyy-MM-dd" range-separator="-"
                  start-placeholder="开始日" end-placeholder="结束日" :picker-options="pickerOptions"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-tabs type="border-card" style="margin-top: 30px;">
          <!-- 订单管理 -->
          <el-tab-pane label="订单管理">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form label-position="left" inline class="demo-table-expand">
                    <el-table :data="tableData1" style="width: 100%">
                      <el-table-column prop="date" label="产品图" width="150">
                      </el-table-column>
                      <el-table-column prop="id" label="运单号" width="150">
                      </el-table-column>
                      <el-table-column prop="address" label="sku" width="150">
                      </el-table-column>
                      <el-table-column prop="date" label="产品名称" width="150">
                      </el-table-column>
                      <el-table-column prop="name" label="中文名" width="150">
                      </el-table-column>
                      <el-table-column prop="address" label="售后状态" width="150">
                      </el-table-column>
                      <el-table-column prop="address" label="商品来源" width="150">
                      </el-table-column>
                      <el-table-column prop="address" label="单价" width="150">
                      </el-table-column>
                      <el-table-column prop="address" label="数量" width="150">
                      </el-table-column>
                      <el-table-column prop="address" label="产品描述">
                      </el-table-column>
                    </el-table>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column prop="number" width="150">
                <template slot="header">
                  <el-button size="small" :class="expandBool ? 'el-icon-arrow-down':'el-icon-arrow-up'"
                    @click="extendAllTable" style="color:#EE6A50" class="extend_all_bt">{{expandBool?'收起':"展开"}}
                  </el-button>
                  <span class="extend_all_bt">订单编号</span>
                </template>
              </el-table-column>
              <el-table-column label="订单来源" prop="name" align="center">
              </el-table-column>
              <el-table-column label="下单人" prop="desc" align="center">
              </el-table-column>
              <el-table-column label="下单时间" prop="time" align="center">
              </el-table-column>
              <el-table-column label="状态" prop="option" align="center">
              </el-table-column>
              <el-table-column label="总计" prop="sum" align="center">
              </el-table-column>
              <el-table-column label="操作" prop="desc" align="center">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                  <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">编辑</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>

          <!-- 售后单管理 -->
          <el-tab-pane label="售后单管理">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form label-position="left" inline class="demo-table-expand">
                    <!-- 向前子table -->
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column prop="number" width="150" >
                <template slot="header">
                  <el-button size="small" :class="expandBool ? 'el-icon-arrow-down':'el-icon-arrow-up'"
                    @click="extendAllTable" style="color:#EE6A50" class="extend_all_bt">{{expandBool?'收起':"展开"}}
                  </el-button>
                  <span class="extend_all_bt">退货订单</span>
                </template>
              </el-table-column>
              <el-table-column label="订单号" prop="name" align="center">
              </el-table-column>
              <el-table-column label="申请人" prop="desc" align="center">
              </el-table-column>
              <el-table-column label="状态" prop="desc" align="center">
              </el-table-column>
              <el-table-column label="操作" prop="desc" align="center">
              </el-table-column>
            </el-table>
          </el-tab-pane>


        </el-tabs>
        <div class="block">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100"
            layout="total, sizes, prev, pager, next, jumper" :total="400" style="float: right;">
          </el-pagination>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentPage: 0,
        expandBool: true,
        tableData1: [{
          id: "123213",
          date: "2021-7-23 16:10:59",
          name: "论月星球",
          address: "待发货",
        },
        ],
        tableData: [
          {
            number: '12987122',
            name: '论月星球',
            desc: 'yuabzi_operation',
            time: "2021-7-23 11:11:00",
            option: "待发货",
            sum: "0",
          },
          {
            number: '12987122',
            name: '论月星球',
            desc: 'yuabzi_operation',
            time: "2021-7-23 11:11:00",
            option: "待发货",
            sum: "0",
          },
        ],
        formData: {
          region: "",
          select: '',
          input: "",
          region: "",
          createTime: "",
        }
      }
    },
    methods: {
      pickerOptions() {
        console.log("pickerOptions")
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      extendAllTable() {
        console.log("extendAllTable");
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    }
  }
</script>
<style scoped>
  .login {
    border: 1px solid #898982;
  }

  .el-input__inner {
    width: 40%;
  }

  .el-select .el-input {
    width: 130px;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  .el-row {
    height: 40px;
    line-height: 40px;
  }

  /* 订单管理 */
  .extend_all_bt {
    transform: translateX(-20px);
  }

  .el-table td .el-table th {
    padding: 0px;
    transform: translateY(-10px);
  }
</style>