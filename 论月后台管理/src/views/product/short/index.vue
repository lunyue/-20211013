<template>
    <div class="login">
        <div class="box">
            <v-search></v-search>
            <!-- 商品内容 -->
            <div class="allGoods" >
                <div class="goodDetail" v-for="(item,i) in pagination" :key="item.id">
                    <img :src="item.pic" alt="" @click="routeTo(item)">
                    <span class="goodName "> {{item.name}}</span>
                    <span class="goodFont">{{item.theme}}</span>
                    <span class="price">
                        <span class="purchase">采购价：{{item.purchase}}</span>
                        <span class="suggest">建议价:{{item.suggest}}</span>
                    </span>
                </div>
            </div>
            <!-- 分页器 -->
            <div class="block">
                <el-pagination style="float: right;" @size-change="handleSizeChange"
                    @current-change="handleCurrentChange" :current-page.sync="queryinfo.pageNum"
                    :page-sizes="[1,5,10,15]" :page-size.sync="queryinfo.pageSize"
                    layout="total, sizes, prev, pager, next" :total="total">
                </el-pagination>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
     import vSearch from "../../../components/common/search"
    export default {
        data() {
            return {
                // 分页
                queryinfo: {
                    query: "",
                    // 当前页数
                    pageNum: 1,
                    // 当前每页显示多少条数据
                    PageSize: 15,
                },
                // 分页显示数据
                pagination:[],
                // 
                goods: [
                    {
                        id: 14321,
                        name: "美丽的向日葵9",
                        theme: "向日葵主题",
                        pic: require("../../../assets/img/goods/9.jpg"),
                        purchase: "144.0$",
                        suggest: "166.2$",
                    },
                ],
                // 页面数据总条数
                total: 0,
                loading: false,
            }
        },
        components: {
            vSearch,
        },
        // wacth: {
        //     pagination: {json:{deep:true,handler(d){
        //          // 实时计算数组中截取出来的某某个页码的多少条数据
        //         // slice（start,end）截取数组中的数据从start到end
        //         // this.queryinfo.pageNum - 1) *  this.queryinfo.pageSize上个页码所展示的总数据数据
        //         // this.queryinfo.pageNum *  this.queryinfo.pageSize现在页码所展示的总数据数据
        //         console.log(d)
        //         return d=this.goods.slice((this.queryinfo.pageNum - 1) *  this.queryinfo.pageSize, this.queryinfo.pageNum *  this.queryinfo.pageSize);
        //     }
        //     }}
        // },
        mounted() {
            this.initPage();
        },
        methods: {
            handleSizeChange(newsize) {
                // 实时更新页码的数据条数
                this.queryinfo.pageSize = newsize;
                 // 切换页码时，要获取每页显示的条数。
                this.initPage()
            },
            handleCurrentChange(newPage) {
                //实时更新新的页码 
                this.queryinfo.pageNum = newPage;
                // 切换页码时，要获取每页显示的条数。
                this.initPage()
            },
            initPage(){
                // 获取总条数
                this.total = this.goods.length;
                //截取新的数组也就是当前页的数据
                this.pagination=this.goods.slice((this.queryinfo.pageNum - 1) *  this.queryinfo.pageSize, this.queryinfo.pageNum *  this.queryinfo.pageSize);
            },
            // 跳转详情页
            routeTo(item){
                this.$router.push({
                    path:"/index/productdesc",
                    query:{id:item.id},
                })
            },
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

    .allGoods {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 10px;
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
    }

    .goodDetail {
        width: 300px;
        flex: 1;
        height: 360px;
        margin-left: 30px;
    }

    .goodDetail img {
        width: 280px;
        height: 200px;
    }

    .goodName {
        margin-top: 30px;
        display: block;
    }

    .goodFont {
        display: block;
        height: 40px;
        margin-left: 55px;
        color: blue;
        line-height: 40px;
    }

    .suggest {
        margin-left: 100px;
        font-size: 12px;
    }

    .purchase {
        margin-left: 15px;
        font-size: 12px;
    }

    .block {
        float: right;
        width: 100%;
        height: 50px;
        margin-top: 50px;
    }
</style>