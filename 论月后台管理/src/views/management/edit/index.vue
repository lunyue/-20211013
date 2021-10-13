<template>
    <div class="login"> 
        <div class="box">
            <el-card style="margin-top: 20px;" shadow="never">
                <el-form :inline="true" :model="formData" class="demo-form-inline clearfix">
                    <div class="trademark">
                        <span> 商品编辑：</span>
                        <span class="allFont">全部</span>
                        <span>独家销售</span>
                        <span>已推荐产品</span>
                    </div>
                    <div style="margin-top: 15px;" class="demo-input-size clearfix">
                        <el-row :gutter="20">
                            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                                <el-form-item label-width="0px" prop="">
                                    <el-input placeholder="请输入查询内容" v-model="input3" class="input-with-select"
                                        size="small" clearable style="vertical-align: unset;">
                                        <el-select v-model="select" slot="prepend" placeholder="请选择"
                                            style="width: 100px;">
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
                                    <el-cascader v-model="formData.region" placeholder="活动区域" size="small">
                                        <el-option label="服装" value="shanghai"></el-option>
                                        <el-option label="男装" value="beijing"></el-option>
                                        <el-option label="手机和手机配件" value="beijing"></el-option>
                                        <el-option label="平板和平板配件" value="beijing"></el-option>
                                    </el-cascader>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                                <span class="startItem">采购价</span>
                                <el-form-item style="width:30%;">
                                    <el-input v-model="formData.price_begin" placeholder="最小价" style="width:100%;"
                                        size="small">
                                    </el-input>
                                </el-form-item>
                                <span class="line">-</span>
                                <el-form-item style="width: 30%;">
                                    <el-input v-model="formData.price_end" placeholder="最大价" style="width: 100%;"
                                        size="small">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                                <span class="startItem">建议价</span>
                                <el-form-item style="width: 30%;">
                                    <el-input v-model="formData.recommend_begin_price" placeholder="最小价"
                                        style="width: 100%;" size="small">
                                    </el-input>
                                </el-form-item>
                                <span class="line">-</span>
                                <el-form-item style="width: 30%;">
                                    <el-input v-model="formData.recommend_end_price" placeholder="最大价"
                                        style="width: 100%;" size="small">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" style="width: 40%;">
                                <span class="startItem">创建时间</span>
                                <el-form-item>
                                    <el-date-picker style="width: 100%" size="small" v-model="formData.createTime"
                                        type="daterange" align="right" unlink-panels format="yyyy-MM-dd"
                                        value-format="yyyy-MM-dd" range-separator="-" start-placeholder="开始日期"
                                        end-placeholder="结束日期" :picker-options="pickerOptions"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" style="width: 40%;">
                                <span class="startItem">更新时间</span>
                                <el-form-item>
                                    <el-date-picker style="width: 100%" size="small" v-model="formData.updateTime"
                                        type="daterange" align="right" unlink-panels format="yyyy-MM-dd"
                                        value-format="yyyy-MM-dd" range-separator="-" start-placeholder="开始日期"
                                        end-placeholder="结束日期" :picker-options="pickerOptions"></el-date-picker>
                                </el-form-item>
                            </el-col>

                            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                                <span class="startItem">开发人员</span>
                                <el-form-item>
                                    <el-select v-model="formData.created_by" placeholder="请选择" size="small">
                                        <el-option label="全部" value=""></el-option>
                                        <el-option v-for="item in options" :key="item.value" :label="item.username"
                                            :value="item.id">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                                <el-form-item label-width="25px">
                                    <el-button size="small" type="primary" icon="el-icon-search" @click="SubmitForm">确定
                                    </el-button>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                </el-form>
            </el-card>
        </div>
        <div class="productList">
            <p class="productListFont">产品列表</p>
            <div class="block">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page.sync="queryinfo.pageNum" :page-sizes="[5, 8, 10, 12]" :page-size.sync="queryinfo.pageSize"
                    layout="total, sizes, prev, pager, next, jumper" :total="total" style="float: right;">
                </el-pagination>
                <el-table :data="newList" style="width: 100%">
                    <el-table-column prop="ord" label="排序" width="80">
                    </el-table-column>
                    <el-table-column prop="pic" label="产品图" width="65" align="center">
                    </el-table-column>
                    <el-table-column prop="sku" label="SKU" width="60" align="center">
                    </el-table-column>
                    <el-table-column prop="englishName" label="中文名称" width="120" align="center">
                    </el-table-column>
                    <el-table-column prop="address" label="英文名称" width="120" align="center">
                    </el-table-column>
                    <el-table-column prop="sellingPonit" label="买点" width="120" align="center">
                    </el-table-column>
                    <el-table-column prop="goodsClassify" label="商品分类" width="120" align="center">
                    </el-table-column>
                    <el-table-column prop="productSpecifications" label="产品规格" width="120" align="center">
                    </el-table-column>
                    <el-table-column prop="productionCycle" label="生产周期" width="120" align="center">
                    </el-table-column>
                    <el-table-column prop="purchasePrice" label="采购价" width="120" align="center">
                    </el-table-column>
                    <el-table-column prop="suggestPrice" label="建议价" width="120" align="center">
                    </el-table-column>
                    <el-table-column prop="suggestPrice" label="产品配件" width="120" align="center">
                    </el-table-column>
                    <el-table-column prop="suggestPrice" label="支持定制" width="120" align="center">
                    </el-table-column>
                    <el-table-column prop="suggestPrice" label="库存" width="120" align="center">
                    </el-table-column>
                    <el-table-column prop="suggestPrice" label="热度值" width="120" align="center">
                    </el-table-column>
                    <el-table-column prop="suggestPrice" label="时间" width="120" align="center">
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="180" prop align="center">
                        <template>
                            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text"
                                size="small">
                                查看
                            </el-button>
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
                queryinfo: {
                    pageSize: 5,
                    pageNum: 0,
                },
                total: 0,
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
                currentPage: 0,
                tableData: [
                    {
                        ord: '1',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '2',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '3',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '4',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '15',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '6',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '7',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '8',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '9',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '1-0',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '11',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '12',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '13',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '14',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '15',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '16',
                        pic: '6王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '17',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '18',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '19',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '10',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '1-1',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '22',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '23',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '241',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '25',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '26',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '27',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '281',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '29',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '30',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '31',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '32',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '33',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '34',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '35',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '36',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '37',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '47',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '39',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '40-',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '41',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '1',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '1',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '1',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '1',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '1',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '1',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '1',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '1',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '1',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '1',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '1',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },
                    {
                        ord: '1',
                        pic: '王小虎',
                        sku: '上海',
                        englishName: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        sellingPonit: 200333,
                        goodsClassify: "dasdsad",
                        productSpecifications: "wqeqwrt",
                        productionCycle: 21,
                        purchasePrice: 212,
                        suggestPrice: 455,
                    },

                ],
                newList: [],
            }
        },
        methods: {
            // 
            pickerOptions() {
                console.log("时间")
            },
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            handleSelect(item) {
                console.log(item);
            },
            // 商品分类
            onSubmit() {
                console.log('submit!');
            },
            SubmitForm() {
                console.log("点击")
            },
            // 分页
            handleSizeChange(newSize) {
                this.queryinfo.pageSize = newSize;
                this.initPage();
            },
            handleCurrentChange(newPage) {
                
                this.queryinfo.pageNum = newPage;
                this.initPage();
            },
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            initPage() {
                this.total = this.tableData.length;
                //截取新的数组也就是当前页的数据
                this.newList = this.tableData.slice((this.queryinfo.pageNum - 1) * this.queryinfo.pageSize, this.queryinfo.pageNum * this.queryinfo.pageSize);
            }
        },
        mounted() {
            this.initPage();
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
    .trademark .allFont {
        color: blue;
    }
    .el-col {
        width: 25%;
    }
    .line {
        height: 40px;
        line-height: 40px;
    }
    .startItem {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
    }
    .el-card {
        border-bottom: 1px solid #ccc;
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