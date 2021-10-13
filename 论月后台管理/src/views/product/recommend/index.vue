<template>
    <div class="login">
        <el-card class="box-card" style="text-align: center;" shadow="never">
            <!-- 轮播图·1 -->
            <div class="box">
                <el-carousel :interval="3000" arrow="always" height="500px">
                    <el-carousel-item v-for="(item,i) in imgList" :key="item.id">
                        <!-- 就这卡了我一个小时记得变成动态 -->
                        <!-- item.picture_path ok -->
                        <img :src="item.picture_path" alt="" class="pic" @click="routeTo(item)">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <!-- 搜索框 -->
            <div class="search">
                <div>
                    <el-input placeholder="请输入产品的名称" v-model="value" clearable class="inp">
                    </el-input>
                    <el-button type="primary" class="btn" ref="btn">搜索</el-button>
                    <ul v-show="isShow" ref="uls">
                    </ul>
                </div>
            </div>
            <!-- 新品上市 -->
            <div class="merchandise">
                <div class="leftBox">

                    <div class="titleFont clearfix">
                        <span class="font1"> 新品上市</span>
                        <span class="font1 font2">喜爱那个日葵。。。。。。。。。。。</span>
                        <span class="font1 font2 ">2021-7-17</span>
                        <span class="font3">更多></span>
                    </div>
                    <div class="goods">
                        <div class="goodDetail" v-for="(item1,index) in goodList" :key="item1.index">
                            <img :src="item1.pic" alt="" @click="routeTo(item1)">
                            <span class="goodName "> {{item1.name}}</span>
                            <span class="goodFont">{{item1.theme}}</span>
                            <span class="price">
                                <span class="purchase">采购价：{{item1.purchase}}</span>
                                <span class="suggest">建议价:{{item1.suggest}}</span>
                            </span>
                        </div>
                    </div>
                </div>
                <!-- 销售榜 -->
                <div class="rightBox">
                    <div class="rankingIcon"> <span class="iconfont icon-bangdan"></span></div>
                    <h1> <i class="el-icon-s-data"></i> 销售榜</h1>

                    <div class="oneMassage" v-for="(item,i) in salesRanking" :key="item.i">
                        <div class="ranking">
                            <span>{{i+1}}</span>
                        </div>
                        <span class="commodityRank">{{item.title}}</span>
                    </div>
                </div>
            </div>
        </el-card>
        <!-- 热销产品 -->
        <div class="hotStart">
            <h1 class="hotTitle">
                <span class="hotFont">热销产品</span>
                <span class="hotFont2"> 紧跟时代潮流~~~~~~~~~~~~~~~~~~~~</span>
                <span class="more">更多></span>
            </h1>
            <div class="hotProducts">
                <!-- 热销榜 -->
                <div class="hotBox">
                    <h1 class="hotHeader"> <i class="el-icon-s-data"></i> 热销榜</h1>

                    <div class="oneMassage" v-for="(item,i) in hotRanking" :key="item.i">
                        <div class="ranking">
                            <span>{{i+1}}</span>
                        </div>
                        <span class="commodityRank">{{item.name}}</span>
                    </div>
                </div>
                <div class="hotGood">
                    <div class="goodDetail" v-for="(item2,index) in hotList" :key="index">
                        <img :src="item2.pic" alt="" @click="routeTo(item2)">
                        <span class="goodName "> {{item2.name}}</span>
                        <span class="goodFont">{{item2.theme}}&nbsp; &nbsp;{{item2.detail}}</span>
                        <span class="price">
                            <span class="purchase">建议价:{{item2.suggest}}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 优选产品 -->
        <div class="hotStart">
            <h1 class="hotTitle">
                <span class="hotFont">优选产品</span>
                <span class="hotFont2"> 致优选的你~~~~~~</span>
                <span class="more">更多></span>
            </h1>
            <div class="hotProducts">
                <!-- 优选榜 -->
                <div class="hotBox">
                    <h1 class="hotHeader"> <i class="el-icon-s-data"></i> 优选榜</h1>

                    <div class="oneMassage" v-for="(item,i) in hotRanking">
                        <div class="ranking">
                            <span>{{i+1}}</span>
                        </div>
                        <span class="commodityRank">{{item.name}}</span>
                    </div>
                </div>
                <div class="hotGood">
                    <div class="goodDetail" v-for="(item3,index) in preferredList" :key="index">
                        <img :src="item3.pic" alt="" @click="routeTo(item3)">
                        <span class="goodName "> {{item3.name}}</span>
                        <span class="goodFont">{{item3.theme}}&nbsp; &nbsp;{{item3.detail}}</span>
                        <span class="price">
                            <span class="purchase">建议价:{{item3.suggest}}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    // 
    import vSearch from "../../../components/common/search"
    import { HttpGetbannerList, HttpGetTopList_sale, HttpGetTopList_new, HttpGetcategoryList, Httprecommendt } from "@/api/product/recommend"
    import { getId } from "../../../utils/auth"
    export default {
        data() {
            return {
                n: 0,
                isShow: false,
                //轮播图
                imgList: [
                ],
                toutuList: [],
                dataall: {},
                // 搜索储存库
                search: [],
                //新品上市
                goodList: [
                    {
                        id: 1,
                        name: "美丽的向日葵1",
                        theme: "向日葵主题",
                        pic: require("../../../assets/img/goods/1.jpg"),
                        purchase: "44.0$",
                        suggest: "66.2$",
                    },
                    {
                        id: 2,
                        name: "美丽的向日葵2",
                        theme: "向日葵主题",
                        pic: require("../../../assets/img/goods/2.jpg"),
                        purchase: "44.0$",
                        suggest: "66.2$",
                    },
                    {
                        id: 3,
                        name: "美丽的向日葵3",
                        theme: "向日葵主题",
                        pic: require("../../../assets/img/goods/3.jpg"),
                        purchase: "44.0$",
                        suggest: "66.2$",
                    },
                    {
                        id: 4,
                        name: "美丽的向日葵4",
                        theme: "向日葵主题",
                        pic: require("../../../assets/img/goods/4.jpg"),
                        purchase: "44.0$",
                        suggest: "66.2$",
                    },
                    {
                        id: 5,
                        name: "美丽的向日葵5",
                        theme: "向日葵主题",
                        pic: require("../../../assets/img/goods/5.jpg"),
                        purchase: "44.0$",
                        suggest: "66.2$",
                    },
                    {
                        id: 6,
                        name: "美丽的向日葵6",
                        theme: "向日葵主题",
                        pic: require("../../../assets/img/goods/6.jpg"),
                        purchase: "44.0$",
                        suggest: "66.2$",
                    },
                    {
                        id: 7,
                        name: "美丽的向日葵7",
                        theme: "向日葵主题",
                        pic: require("../../../assets/img/goods/7.jpg"),
                        purchase: "344.0$",
                        suggest: "266.2$",
                    },
                    {
                        id: 8,
                        name: "美丽的向日葵8",
                        theme: "向日葵主题",
                        pic: require("../../../assets/img/goods/8.jpg"),
                        purchase: "144.0$",
                        suggest: "166.2$",
                    },
                    {
                        id: 9,
                        name: "美丽的向日葵9",
                        theme: "向日葵主题",
                        pic: require("../../../assets/img/goods/9.jpg"),
                        purchase: "144.0$",
                        suggest: "166.2$",
                    },
                ],
                //销量榜
                salesRanking: [
                ],
                //热销榜
                hotRanking: [
                    {
                        id: 1,
                        name: "赤日炎炎似火烧",
                    },
                    {
                        id: 2,
                        name: "大街小巷闲人少",
                    },
                    {
                        id: 3,
                        name: "有谁知晓民工苦",
                    },
                    {
                        id: 4,
                        name: "汗如雨下挥锄镐",
                    },
                    {
                        id: 5,
                        name: "连绵细雨润心扉",
                    },
                ],
                // 热烈推荐产品   
                hotList: [
                    {
                        id: 1,
                        name: "美丽的向日葵1",
                        theme: "运营定制",
                        pic: require("../../../assets/img/hotGoods/1.jpg"),
                        detail: "T-shirt",
                        suggest: "66.2$",
                    },
                    {
                        id: 2,
                        name: "美丽的向日葵2",
                        theme: "运营定制",
                        pic: require("../../../assets/img/hotGoods/2.jpg"),
                        detail: "T-shirt",
                        suggest: "66.2$",
                    },
                    {
                        id: 3,
                        name: "美丽的向日葵3",
                        theme: "运营定制",
                        pic: require("../../../assets/img/hotGoods/3.jpg"),
                        detail: "T-shirt",
                        suggest: "66.2$",
                    },
                    {
                        id: 4,
                        name: "美丽的向日葵4",
                        theme: "运营定制",
                        pic: require("../../../assets/img/hotGoods/4.jpg"),
                        detail: "T-shirt",
                        suggest: "66.2$",
                    },
                    {
                        id: 5,
                        name: "美丽的向日葵5",
                        theme: "运营定制",
                        pic: require("../../../assets/img/hotGoods/5.jpg"),
                        detail: "T-shirt",
                        suggest: "66.2$",
                    },
                    {
                        id: 6,
                        name: "美丽的向日葵6",
                        theme: "运营定制",
                        pic: require("../../../assets/img/hotGoods/6.jpg"),
                        detail: "T-shirt",
                        suggest: "66.2$",
                    },
                    {
                        id: 7,
                        name: "美丽的向日葵7",
                        theme: "运营定制",
                        pic: require("../../../assets/img/hotGoods/7.jpg"),
                        detail: "T-shirt",
                        suggest: "266.2$",
                    },
                    {
                        id: 8,
                        name: "美丽的向日葵8",
                        theme: "运营定制",
                        pic: require("../../../assets/img/hotGoods/8.jpg"),
                        detail: "T-shirt",
                        suggest: "166.2$",
                    },
                    {
                        id: 9,
                        name: "美丽的向日葵8",
                        theme: "运营定制",
                        pic: require("../../../assets/img/hotGoods/9.jpg"),
                        detail: "T-shirt",
                        suggest: "166.2$",
                    },
                    {
                        id: 10,
                        name: "美丽的向日葵7",
                        theme: "运营定制",
                        pic: require("../../../assets/img/hotGoods/7.jpg"),
                        detail: "T-shirt",
                        suggest: "266.2$",
                    },
                    {
                        id: 11,
                        name: "美丽的向日葵8",
                        theme: "运营定制",
                        pic: require("../../../assets/img/hotGoods/8.jpg"),
                        detail: "T-shirt",
                        suggest: "166.2$",
                    },
                    {
                        id: 12,
                        name: "美丽的向日葵8",
                        theme: "运营定制",
                        pic: require("../../../assets/img/hotGoods/9.jpg"),
                        detail: "T-shirt",
                        suggest: "166.2$",
                    },
                ],
                // 优选产品
                preferredList: [
                    {
                        id: 1,
                        name: "杯子1",
                        theme: "游戏主题",
                        pic: require("../../../assets/img/referredGood/1.jpg"),
                        detail: "杯子1",
                        suggest: "66.2$",
                    },
                    {
                        id: 2,
                        name: "杯子1",
                        theme: "游戏主题",
                        pic: require("../../../assets/img/referredGood/2.jpg"),
                        detail: "T-shirt",
                        suggest: "66.2$",
                    },
                    {
                        id: 3,
                        name: "杯子1",
                        theme: "游戏主题",
                        pic: require("../../../assets/img/referredGood/3.jpg"),
                        detail: "T-shirt",
                        suggest: "66.2$",
                    },
                    {
                        id: 4,
                        name: "杯子1",
                        theme: "游戏主题",
                        pic: require("../../../assets/img/referredGood/4.jpg"),
                        detail: "T-shirt",
                        suggest: "66.2$",
                    },
                    {
                        id: 5,
                        name: "杯子1",
                        theme: "游戏主题",
                        pic: require("../../../assets/img/referredGood/5.jpg"),
                        detail: "T-shirt",
                        suggest: "66.2$",
                    },
                    {
                        id: 6,
                        name: "杯子1",
                        theme: "游戏主题",
                        pic: require("../../../assets/img/referredGood/6.jpg"),
                        detail: "T-shirt",
                        suggest: "66.2$",
                    },
                    {
                        id: 7,
                        name: "杯子1",
                        theme: "游戏主题",
                        pic: require("../../../assets/img/referredGood/7.jpg"),
                        detail: "T-shirt",
                        suggest: "266.2$",
                    },
                    {
                        id: 8,
                        name: "杯子1",
                        theme: "游戏主题",
                        pic: require("../../../assets/img/referredGood/8.jpg"),
                        detail: "T-shirt",
                        suggest: "166.2$",
                    },
                    {
                        id: 9,
                        name: "美丽的向日葵8",
                        theme: "游戏主题",
                        pic: require("../../../assets/img/referredGood/1.jpg"),
                        detail: "T-shirt",
                        suggest: "166.2$",
                    },
                    {
                        id: 10,
                        name: "杯子1",
                        theme: "游戏主题",
                        pic: require("../../../assets/img/referredGood/2.jpg"),
                        detail: "T-shirt",
                        suggest: "266.2$",
                    },
                    {
                        id: 11,
                        name: "杯子1",
                        theme: "游戏主题",
                        pic: require("../../../assets/img/referredGood/8.jpg"),
                        detail: "T-shirt",
                        suggest: "166.2$",
                    },
                    {
                        id: 12,
                        name: "杯子1",
                        theme: "游戏主题",
                        pic: require("../../../assets/img/referredGood/3.jpg"),
                        detail: "T-shirt",
                        suggest: "166.2$",
                    },
                ],
                value: "",
            }
        },
        mounted() {
            this.PageInit_all();
            this.getTopList();
        },
        methods: {
            // 跳转详情页
            routeTo(item) {
                this.$router.push({
                    path: "/product/productdesc",
                    query: { id: item.id },
                })
            },
            PageInit_all() {
                // 轮播图接口
                HttpGetbannerList()
                    .then(res => {
                        this.imgList = res.data.items
                    });
                //新品榜
                HttpGetTopList_new()
                    .then(res => {
                        //
                        if (res.data.items.length == 0) {
                            this.TopList_new = [
                                {
                                    id: 374,
                                    title:
                                        "Letter Print 11oz Porcelain Coffeee Mugs, White Ceramic Cup with Large Handle",
                                    title_chinese: "字母印花11盎司大把手白色陶瓷杯",
                                    quantity: 0
                                },
                                {
                                    id: 373,
                                    title:
                                        "Men's Fashion Long Sleeve Pullover Hoodie Casual Sweatshirt",
                                    title_chinese: "男士时尚休闲长袖连帽卫衣",
                                    quantity: 0
                                },
                                {
                                    id: 372,
                                    title:
                                        "Unisex Funny Letter Print Casual Cotton Sweater Long Sleeve Sweatshirt",
                                    title_chinese: "男女同款长袖字母印花套头卫衣",
                                    quantity: 0
                                },
                                {
                                    id: 371,
                                    title: "Biden and Trump Printing Cotton Men's Sweatshirt",
                                    title_chinese: "拜登和特朗普印花男士棉质套头卫衣",
                                    quantity: 0
                                },
                                {
                                    id: 370,
                                    title:
                                        "New Different Printing About Trump Men's Hoodie Sweatshirt",
                                    title_chinese: "新款特朗普不同印花男式连帽卫衣",
                                    quantity: 0
                                },
                            ];
                        } else {
                            this.TopList_new = res.data.items;
                        }
                    });
                //获取产品数据
                HttpGetcategoryList().then(res => {
                    if (res.success) {
                        let data = res.data;
                        this.toutuList = res.data;
                        for (let index = 0; index < data.length; index++) {
                            const element = data[index];
                            let params = {
                                recommended_category_id: element.id,
                                expand: "new-product",
                                page: 1
                            };
                            // console.log(this.toutuList,"toutuList")
                            Httprecommendt(params).then(res => {
                                if (res.success) {
                                    // console.log("res.data._meta", res.data._meta);

                                    //    console.log("res.data", res.data.items);

                                    this.$set(this.dataall, "a" + element.id, res.data);
                                    // this.classifyList=
                                }
                            }); 
                        }
                    }
                })
            },
            getNewProduct() {
                let id = getId();
                http.getNewProduct(id)
                    .then(res => {
                    }).catch(err => { })
            },
            // 销售榜接口
            getTopList() {
                HttpGetTopList_sale()
                    .then(res => {
                        if (res.data.length == 0) {
                            this.salesRanking = [
                                {
                                    id: 374,
                                    title:
                                        "Letter Print 11oz Porcelain Coffeee Mugs, White Ceramic Cup with Large Handle",
                                    title_chinese: "字母印花11盎司大把手白色陶瓷杯",
                                    quantity: 0
                                },
                                {
                                    id: 373,
                                    title:
                                        "Men's Fashion Long Sleeve Pullover Hoodie Casual Sweatshirt",
                                    title_chinese: "男士时尚休闲长袖连帽卫衣",
                                    quantity: 0
                                },
                                {
                                    id: 372,
                                    title:
                                        "Unisex Funny Letter Print Casual Cotton Sweater Long Sleeve Sweatshirt",
                                    title_chinese: "男女同款长袖字母印花套头卫衣",
                                    quantity: 0
                                },
                                {
                                    id: 371,
                                    title: "Biden and Trump Printing Cotton Men's Sweatshirt",
                                    title_chinese: "拜登和特朗普印花男士棉质套头卫衣",
                                    quantity: 0
                                },
                                {
                                    id: 370,
                                    title:
                                        "New Different Printing About Trump Men's Hoodie Sweatshirt",
                                    title_chinese: "新款特朗普不同印花男式连帽卫衣",
                                    quantity: 0
                                },
                                {
                                    id: 369,
                                    title:
                                        "White Letter Printing Ceramic Coffee Mug, Removes Stubborn Orange Stains",
                                    title_chinese: "白色字母印花陶瓷咖啡杯，去除顽固橙色污渍",
                                    quantity: 0
                                },
                                {
                                    id: 368,
                                    title: "Letter Printing Biden Harris 2020 New Ceramic Coffee Mug",
                                    title_chinese: "字母印花拜登哈里斯2020新款陶瓷咖啡杯",
                                    quantity: 0
                                },
                                {
                                    id: 367,
                                    title: "2020 White Trump Ceramic Mug, Keep America Great ",
                                    title_chinese: "2020款白色特朗普陶瓷杯，让美国保持强大",
                                    quantity: 0
                                },
                                {
                                    id: 364,
                                    title: "New Unisex Hoodies with Letter Printing Sweatshirt",
                                    title_chinese: "新款字母印花男女连帽卫衣",
                                    quantity: 0
                                },
                                {
                                    id: 363,
                                    title: "Awkward Styles Trump 2020 New Style Unisex Trump Sweater",
                                    title_chinese: "2020尴尬风格的新款特朗普男女套头卫衣",
                                    quantity: 0
                                }
                            ];
                        } else {
                            this.salesRanking = res.data
                        }
                    }).catch(err => { })
            },


        },
        components: {
            vSearch,
        },
        watch: {
            value(newValue, oldValue) {

                if (newValue) {
                    this.isShow = true
                    // 判断newValue是否已经存在在search数组当中，如果不存在则返回-1
                    // 解决用户按回退键，任然添加元素
                    if (this.search.indexOf(newValue) == -1) {
                        // 将搜索的内容添加到数组中
                        this.search.push(newValue)
                        this.$refs.uls.style.backgroundColor = "#ccc"
                        let liElement = document.createElement("li");
                        this.$refs.uls.appendChild(liElement);
                        this.$refs.uls.childNodes[this.n].innerHTML = newValue;
                        this.$refs.uls.childNodes[this.n].style.listStyle = "none";
                        this.n++;
                        return
                    }
                } else {
                    // 将search数组中搜索的内容清空
                    this.search = [];
                    this.isShow = false
                    this.$refs.uls.innerHTML = "";
                    this.n = 0;
                }
            }
        }
    }
</script>
<style scoped>
    .box {
        border: 1px solid #ccc;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .pic {
        width: 100%;
        height: 100%;
    }

    .login .search {
        margin-top: 10px;
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
    }

    .inp {
        width: 400px;
        height: 100%;
    }

    .merchandise {
        margin-top: 30px;
        width: 100vw;
        height: 600px;
    }

    .leftBox {
        width: 67%;
        float: left;
        border: 1px solid #ccc;
        border-radius: 10px;
    }

    /* 新品上市 */
    .merchandise img:hover {
        transform: scale(1.1);
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
    }

    .titleFont {
        border-left: 10px solid orange;
        margin-top: 20px;
        height: 40px;
    }

    .font1 {
        display: block;
        height: 40px;
        margin-left: 20px;
        float: left;
        font-size: 24px;
        line-height: 40px;
        color: orange;
    }

    .font2 {
        font-size: 16px;
        color: rgb(43, 42, 41);
    }

    .font3 {
        display: block;
        height: 40px;
        float: right;
        margin-right: 20px;
        line-height: 40px;
        font-size: 14px;
        color: #99a9bf;
    }

    .goods {
        margin-top: 50px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    /* BUG 300px 未起效晚上待查原因 */
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
        margin-left: 60px;
        font-size: 12px;
    }

    .purchase {
        margin-left: 15px;
        font-size: 12px;
    }

    /* 排行榜 开始*/
    .rankingIcon span {
        font-size: 30px;
        color: cyan;
    }

    .rightBox {
        width: 350px;
        float: left;
        margin-left: 30px;
        border: 1px solid #ccc;
        border-radius: 10px;
    }

    /* .rightBox h1{
        text-align: center;
    } */
    .oneMassage {
        height: 60px;
        line-height: 60px;
    }

    .ranking {
        margin-left: 10px;
        margin-right: 20px;
        display: block;
        height: 25px;
        width: 25px;
        float: left;
        background-color: rgb(97, 122, 67);
        margin-top: 20px;
        border-radius: 50%;
        line-height: 25px;
        text-align: center;
    }

    .commodityRank {
        float: left;
        width: 80%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-align: left;
    }

    /* 热销产品开始 */
    .hotStart {
        border: 1px solid #ccc;
        border-radius: 10px;
        margin-top: 20px;
    }

    .hotProducts {
        padding-top: 10px;
        width: 100%;
        background-color: #ddd;

    }

    .hotTitle {
        height: 40px;
        margin-top: 30px;
        margin-left: 10px;
        border-left: 10px solid rgb(78, 134, 236);
        background-color: #fff;
        line-height: 40px;
    }

    .hotFont {
        margin-left: 20px;
        font-size: 24px;
        color: rgb(78, 134, 236);
    }

    .hotFont2 {
        margin-left: 20px;
        font-size: 16px;
    }

    .more {
        float: right;
        font-size: 14px;
        margin-right: 20px;
        color: #99a9bf;
    }

    .hotHeader {
        width: 100%;
        text-align: center;
        font-size: 26px;
    }

    /* 热烈推荐衣服 */
    .hotGood {
        margin-top: 50px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .hotGood img:hover {
        transform: scale(1.1);
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
    }
</style>