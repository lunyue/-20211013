<template>
    <div>
        <!-- <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
        </div> -->
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="date" label="分类广告图片" width="250">
            </el-table-column>
            <el-table-column prop="name" label="分类名称" width="250">
            </el-table-column>
            <el-table-column prop="province" label="排序" width="250">
            </el-table-column>
            <el-table-column prop="city" label="备注" width="250">
            </el-table-column>
            <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>&nbsp;|&nbsp;
                    <el-button type="text" size="small">删除</el-button>
                    <el-button type="text" size="small">关联商品</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                // currentPage:"",
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333
                }]

            }
        },
        mounted() {

        },
        methods: {
            handleClick(row) {
                console.log(row);
            },
            // handleSizeChange(val) {
            //     console.log(`每页 ${val} 条`);
            // },
            // handleCurrentChange(val) {
            //     console.log(`当前页: ${val}`);
            // }
        }
    }
</script>
<style scoped>

</style>