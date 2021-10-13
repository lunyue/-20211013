<template>
    <div class="login">
        <div class="box">
            <el-card class="box-card">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <el-form-item label="用户名">
                        <el-input v-model="formInline.user" placeholder="请输入你要查询的用户名"></el-input>
                    </el-form-item>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <el-form-item label="角色">
                        <el-select v-model="formInline.region" placeholder="请选择角色">
                            <el-option label="超级管理员" value="shanghai"></el-option>
                            <el-option label="论月星球开发" value="beijing"></el-option>
                            <el-option label="火星开发" value="beijing"></el-option>
                            <el-option label="月球开发" value="beijing"></el-option>
                            <el-option label="火星运营" value="beijing"></el-option>
                            <el-option label="论月星球运营" value="beijing"></el-option>
                            <el-option label="月球运营" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <el-button type="primary" @click="onSubmit">搜索</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
            <div class="mt clearfix">
                <el-button type="primary" class="f_r btn ">添加</el-button>
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column fixed prop="date" label="用户名" width="150">
                    </el-table-column>
                    <el-table-column prop="name" label="邮件" width="200">
                    </el-table-column>
                    <el-table-column prop="province" label="联系方式" width="200">
                    </el-table-column>
                    <el-table-column prop="city" label="所属团队" width="200">
                    </el-table-column>
                    <el-table-column prop="address" label="角色" width="200">
                    </el-table-column>
                    <el-table-column prop="zip" label="创建时间" width="200">
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="200">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="primary" plain size="small">编辑</el-button>
                            <el-button type="danger" plain size="small">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                formInline: {
                    user: '',
                    region: ''
                },
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                ]
            }
        },
        methods: {
            handleClick(row) {
                console.log(row);
            },
            onSubmit(){
                console.log("点击")
            }
        },
        components: {
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

    .el-card {
        display: flex;
        width: 100%;
        height: 100px;
        align-items: center;
        border: 1px solid #ccc;
    }

    .none {
        width: 200px;
    }

    .mt {
        margin-top: 40px;
        width: 100%;
        border: 1px solid #ccc;
    }

    .btn {
        margin-right: 50px;
    }

    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
</style>