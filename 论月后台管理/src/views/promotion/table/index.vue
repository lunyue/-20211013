<template>
  <div class="app">
    <h1>表格练习</h1>
    <el-button size="mini" type="danger" @click="handleAdd()">新增</el-button>
    <el-table :data="RoleTableData" style="width: 100%">
      <el-table-column label="用户名" prop="username">
      </el-table-column>
      <el-table-column label="邮箱" prop="email">
      </el-table-column>
      <el-table-column label="联系方式" prop="mobile_phone">
      </el-table-column>
      <el-table-column label="所属团队" prop="type_formatted">
      </el-table-column>
      <el-table-column label="角色" prop="name">
      </el-table-column>
      <el-table-column label="创建日期" prop="created_at">
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
      <!-- <h1 v-if="tableData.length ==0"> 
        暂无数据!!!
      </h1> -->
    </el-table>
    <div class="myForm" v-show="isShow">
      <h1 class="font">{{font}}<el-button icon="el-icon-close" circle class="btn" @click="close"></el-button>
      </h1>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-col :span="20">
            <el-input v-model="ruleForm.username" ref="aa"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-col :span="20">
            <el-input v-model="ruleForm.password" ref="bb"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirm_password">
          <el-col :span="20">
            <el-input v-model="ruleForm.confirm_password" ref="cc"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-col :span="20">
            <el-input v-model="ruleForm.email" ref="cc"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="手机号码" prop="mobile_phone">
          <el-col :span="20">
            <el-input v-model="ruleForm.mobile_phone" ref="cc"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="角色" prop="roles">
          <el-col :span="20">
            <el-select v-model="ruleForm.roles" placeholder="请选择角色">
              <el-option
                v-for="item in options"
                :key="item.key"
                :label="item.label"
                :value="item.value"
                :disabled="item.label=='超级管理员'"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item>
          <!-- <el-button type="primary" @click="submitForm('ruleForm')"><template v-slot><span></span></template></el-button> -->
          <el-button type="primary" @click="submitForm">{{font}}</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button @click="closeForm()">取消</el-button>
        </el-form-item>
      </el-form>

    </div>
    <div class="block">
      <!-- <span class="demonstration">调整每页显示条数</span> -->
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page.sync="queryInfo.pageNum" :page-sizes="[2, 4, 6, 8]" :page-size="queryInfo.pageSize"
        layout="sizes, prev, pager, next" :total="total">
      </el-pagination>
    </div>
    <!-- --------------------- vue.set应用-------------------------- -->
    <!-- <div>{{hoot.sex}}</div>
    <button @click="down">点击我改变hoot</button> -->
  </div>
</template>
<script>
  import { mapGetters} from 'vuex'
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.confirm_password !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
      return {
        options: [
      ],
        ruleForm: {
          username: "", //账号
        password: "", //密码
        confirm_password: "", //确认密码
        mobile_phone: "", //手机号码
        email: "", //邮箱
        roles: "" //角色
        },
        queryInfo: {
          //这里解决了初始值为6比如此处设置为5但是分页
          //选项为2.4.6.8这样就会照成每页为2但是数据为5的情况
          pageSize: 2,
          pageNum: 1,
        },
        isAdd: false,
        isShow: false,
        RoleTableData: [],
        total: 0,
        hoot:
          {
            name:"李俊",
            age:"24",
          }
        ,
        tableData: [
        {
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
          },
        {
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
          },
        {
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
          },
        {
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
          },
        ],
        font: "编辑",
        search: '',
        rules: {
          username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ validator: validatePass, trigger: "blur" },
           { min: 6, message: '长度在 6个字符以上', trigger: 'blur' }
        ],
        confirm_password: [{ validator: validatePass2, trigger: "blur" }],
        mobile_phone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },

          { type: "number", message: "手机号码必须为数字值" },
          {
            // 正则验证
            pattern: /^1[0123456789][0-9]{9}$/,
            message: "请输入11位正确手机号码",
            trigger: "blur"
          }
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        roles: [{ required: true, message: "请选择角色", trigger: "change" }]
        }
      };
    },
    
    methods: {
      //实现this.$set()
      down(){
        if(!this.hoot.sex){
          console.log("dasdsadas")
          this.$set(this.hoot,"sex","男")
          // this.hoot.sex="男"
        }else{
          this.hoot.age++
        }
      },
      //添加
      handleAdd() {
        this.isShow = true;
        this.font = "添加";
      },
      handleEdit(index, row) {
        console.log(index, row);
        this.$nextTick(() => {
          this.font = "编辑";
        })
        this.isShow = true;
      },
      handleDelete(index, row) {
       this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          console.log(index, row,"dassssssssssssssssssssssssssssssssssss")
          row={};
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      handleSizeChange(newSize) {
        this.queryInfo.pageSize = newSize;
        this.initPage();
        console.log("newSize", newSize)
      },
      handleCurrentChange(newPage) {
        this.queryInfo.pageNum = newPage;
        this.initPage();
        console.log("newPage", newPage)
      },
      initPage() {
        this.total = this.tableData.length;
        console.log(this.total)
        //截取新的数组也就是当前页的数据
        this.RoleTableData = this.tableData.slice((this.queryInfo.pageNum - 1) * this.queryInfo.pageSize, this.queryInfo.pageNum * this.queryInfo.pageSize);
      },
      dClick() {
        this.$nextTick(() => {
          this.initPage()
        })
      },
      // 编辑
      submitForm() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.isShow = false;
            this.ruleForm = {
              username: "", //账号
        password: "", //密码
        confirm_password: "", //确认密码
        mobile_phone: "", //手机号码
        email: "", //邮箱
        roles: "" //角色
            }
            if (this.font == "添加") {
              console.log(this.ruleForm.address,"wqeq2weq")
                this.tableData.address = this.ruleForm.address
                this.tableData.name = this.ruleForm.name
                this.tableData.date = this.ruleForm.date
            }
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      close() {
        this.isShow = false;
      },
      closeForm() {
        this.isShow = false;
      }
    },
    computed: {
      ...mapGetters([
        'name'
      ])
    },
    mounted() {
      this.dClick();
      this.submitForm();
      // console.log(this.$refs.ruleForm,'afasfsaf')
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    position: relative;
  }

  .myForm {
    position: absolute;
    left: 30%;
    top: 5%;
    width: 500px;
    /* height: 400px; */
    background: #c3c3c3;
    opacity: 0.9;
    border: 1px solid goldenrod;
  }

  .font {
    text-align: center;
    height: 40px;
    line-height: 40px;
    position: relative;
  }

  ::v-deep .el-table_1_column_1,
  .is-leaf {
    border: 1px solid yellow;
  }

  .font .btn {
    position: absolute;
    top: -15px;
    right: 20px;
    background: #c3c3c3;
    border: 0px;
  }

  .btn {
    width: 20px;
    height: 20px;
  }
</style>