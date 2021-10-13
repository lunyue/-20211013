<template>
    <div class="login">
        <div class="box">
            <el-card style="margin-top: 20px;" shadow="never">
                <el-form :inline="true" :model="formData" class="demo-form-inline clearfix">
                    <div class="trademark">
                        <span> 上传来源：</span>
                        <span class="allFont">全部</span>
                        <span>术科</span>
                        <span>冷月科技</span>
                        <span>夸克科技</span>
                        <span>天宫星球</span>
                    </div>
                    <div class="trademark" style="margin-bottom: 50px;">
                        <span> 审核状态：</span>
                        <span class="allFont">全部</span>
                        <span>待审核</span>
                        <span>审核中</span>
                        <span>审核通过</span>
                        <span>审核不通过</span>
                    </div>
                    <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                        <el-form-item label-width="0px" prop="">
                            <el-input placeholder="请输入查询内容" v-model="input3" class="input-with-select" size="small"
                                clearable style="vertical-align: unset;">
                                <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 100px;">
                                    <el-option label="中文名称" value="1"></el-option>
                                    <el-option label="英文名称" value="2"></el-option>
                                    <el-option label="sku" value="3"></el-option>
                                    <el-option label="产品配件" value="4"></el-option>
                                </el-select>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                        <el-form-item label="商品分类">
                            <el-cascader v-model="formData.region" placeholder="请选择商品分类" size="small">
                                <el-option label="服装" value="shanghai"></el-option>
                                <el-option label="男装" value="beijing"></el-option>
                                <el-option label="手机和手机配件" value="beijing"></el-option>
                                <el-option label="平板和平板配件" value="beijing"></el-option>
                            </el-cascader>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                        <span class="startItem">采购价格</span>
                        <el-form-item style="width:30%;">
                            <el-input v-model="formData.price_begin" placeholder="最小价" style="width:100%;" size="small">
                            </el-input>
                        </el-form-item>
                        <span class="line">~</span>
                        <el-form-item style="width: 30%;">
                            <el-input v-model="formData.price_end" placeholder="最大价" style="width: 100%;" size="small">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                        <span class="startItem">建议价格</span>
                        <el-form-item style="width: 30%;">
                            <el-input v-model="formData.recommend_begin_price" placeholder="最小价" style="width: 100%;"
                                size="small">
                            </el-input>
                        </el-form-item>
                        <span class="line">~</span>
                        <el-form-item style="width: 30%;">
                            <el-input v-model="formData.recommend_end_price" placeholder="最大价" style="width: 100%;"
                                size="small">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-row>
                        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" style="width: 40%;">
                            <span class="startItem">申请时间：</span>
                            <el-form-item>
                                <el-date-picker style="width: 70%" size="small" v-model="formData.createTime"
                                    type="daterange" align="right" unlink-panels format="yyyy-MM-dd"
                                    value-format="yyyy-MM-dd" range-separator="至" start-placeholder="开始日期"
                                    end-placeholder="结束日期" :picker-options="pickerOptions"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" style="width: 40%;">
                            <span class="startItem">审核时间：</span>
                            <el-form-item>
                                <el-date-picker style="width: 70%" size="small" v-model="formData.updateTime"
                                    type="daterange" align="right" unlink-panels format="yyyy-MM-dd"
                                    value-format="yyyy-MM-dd" range-separator="至" start-placeholder="开始日期"
                                    end-placeholder="结束日期" :picker-options="pickerOptions"></el-date-picker>
                            </el-form-item>
                            <el-form-item>
                                <el-button size="small" type="primary" icon="el-icon-search" @click="SubmitForm">搜索
                                </el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </el-card>
            <div class="productList">
                <p class="productListFont">产品列表 <el-button type="primary" style="float: right;margin-right: 40px;">主要按钮</el-button></p>
                <div class="block">
                    <el-table :data="tableData" style="width: 100%; margin-top: 40px;">
                        <el-table-column prop="date" label="产品图" width="80">
                        </el-table-column>
                        <el-table-column prop="name" label="申请单号" width="65" align="center">
                        </el-table-column>
                        <el-table-column prop="province" label="SKU" width="60" align="center">
                        </el-table-column>
                        <el-table-column prop="city" label="中文名称" width="120" align="center">
                        </el-table-column>
                        <el-table-column prop="address" label="英文名称" width="120" align="center">
                        </el-table-column>
                        <el-table-column prop="zip" label="商品分类" width="120" align="center">
                        </el-table-column>
                        <el-table-column prop="zip" label="申请时间" width="120" align="center">
                        </el-table-column>
                        <el-table-column prop="zip" label="申请人" width="120" align="center">
                        </el-table-column>
                        <el-table-column prop="zip" label="来源团队" width="120" align="center">
                        </el-table-column>
                        <el-table-column prop="zip" label="采购价" width="120" align="center">
                        </el-table-column>
                        <el-table-column prop="zip" label="建议价" width="120" align="center">
                        </el-table-column>
                        <el-table-column prop="zip" label="状态" width="120" align="center">
                        </el-table-column>
                        <el-table-column prop="zip" label="审核时间" width="120" align="center">
                        </el-table-column>
                        <el-table-column prop="zip" label="备注" width="120" align="center">
                        </el-table-column>
                        <el-table-column fixed="right" label="操作" width="180" prop align="center">
                            <template>
                                <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text"
                                    size="small">
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper" :total="400" style="float: right;">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                currentPage: 0,
                input3: '',
                select: '',
                restaurants: [],
                state1: '',
                options: [],
                formData: {
                    createTime: "",
                    created_by: "",
                    updateTime: "",
                    region: "",
                    price_begin: "",
                    price_end: "",
                    recommend_begin_price: "",
                    recommend_end_price: "",
                },
                tableData:[
                {
                    date: '1',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                ],
            }
        },
        methods: {
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            handleSelect(item) {
                console.log(item);
            },
            pickerOptions() {
                console.log("pickerOptions")
            },
            SubmitForm() {
                console.log("SubmitForm")
            },
               // 分页
               handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            deleteRow(index, rows) {
                rows.splice(index, 1);
            } 
        },
        components: {
        }
    }
</script>
<style scoped>
    .box {
        border: 1px solid #ccc;
        border-radius: 10px;
    }

    .trademark {
        display: block;
        width: 100%;
        height: 40px;
        line-height: 40px;
    }

    .trademark span {
        margin-left: 20px;
    }

    /* @media screen and (min-width: 700px) {
        .btn {
            margin-left: 15px;
            width: 54px;
            height: 26px;
            line-height: 10px;
            margin-top: 1px;
        }
    } */

    .trademark .allFont {
        color: blue;
    }

    .startItem {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
    }

    /* 产品列表 */
    .productList {
        margin-top: 50px;
        border: 1px solid #ccc;
        width: 100%;
        height: 1000px;
        border-radius: 10px;
    }

    .productListFont {
        margin-top: 10px;
        margin-left: 15px;
    }
</style>