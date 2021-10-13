<template>
  <div class="login">
    <div class="box">
      <el-card style="margin-top: 20px;" shadow="never">
        <el-form :inline="true" :model="formData" class="demo-form-inline clearfix">
          <el-row>
            <el-col :span="5">
              <el-form-item label="下单团队：" size="small">
                <el-select v-model="formData.region" placeholder="请选择下单团队" label-width="width:100%;">
                  <el-option label="论月团队" value="shanghai"></el-option>
                  <el-option label="夸克团队" value="beijing"></el-option>
                  <el-option label="火星团队" value="beijing"></el-option>
                  <el-option label="月球团队" value="beijing"></el-option>
                  <el-option label="望蓝星团队" value="beijing"></el-option>
                  <el-option label="雪舞团队" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="下单人：" size="small">
                <el-select v-model="formData.region" placeholder="请选择下单人" label-width="width:400px;">
                  <el-option label="lunyue_operation" value="shanghai"></el-option>
                  <el-option label="huoxing_operation" value="beijing"></el-option>
                  <el-option label="mouth_operation" value="beijing"></el-option>
                  <el-option label="mark_operation" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="下单人：" size="small">
                <el-input v-model="formData.name" placeholder="请输入单号"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="5" style="width:30%;">
              <span class="startItem">下单时间：</span>
              <el-form-item>
                <el-date-picker style="width: 70%" size="small" v-model="formData.createTime" type="daterange"
                  unlink-panels format="yyyy-MM-dd" value-format="yyyy-MM-dd" range-separator="-"
                  start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <div class="btn">
            <el-button class="f_r btn1" size="small">导出</el-button>
            <el-button type="primary" icon="el-icon-search" class="f_r" size="small">搜索</el-button>
          </div>
          <p>
            <span class="f_r  font1"> 退款金额：0</span>
            <span class="f_r"> 销售金额：110.00</span>
          </p>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="订单号" width="300">
            </el-table-column>
            <el-table-column prop="name" label="订单金额" width="300">
            </el-table-column>
            <el-table-column prop="address" label="下单时间" width="300">
            </el-table-column>
            <el-table-column prop="address" label="下单名额" width="300" >
            </el-table-column>
            <el-table-column prop="address" label="下单所属团队">
            </el-table-column>
          </el-table>
        </el-form>
        <div class="block f_l">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
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
        currentPage:4 ,
        formData: {
          region: "",
          createTime: "",
          name: "",
        },
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
      }
    },
    methods: {
      pickerOptions() {
        console.log("pickerOptions")
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>
<style scoped>
  .login {
    border: 1px solid #898982;
  }

  .el-input__inner {
    width: 100%;
  }

  .btn {
    width: 70%;
    height: 40px;
  }

  .btn1 {
    margin-left: 20px;
  }

  .font1 {
    margin-left: 20px;
    margin-right: 20px;
  }
</style>