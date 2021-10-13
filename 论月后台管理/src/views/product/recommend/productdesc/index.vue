<template>
    <div class="login">
            <div class="topBox">
                <div class="leftBox">
                    <div class="picBox">
                        <div class="zxpic"> 
                            <zx-magnifie :url="src" alt="" ref="bigPic" class="image-size">
                            </zx-magnifie>
                        </div>
                    </div>
                    <div class="picBottom">
                        <div class="switchPic" v-for="(item,i) in picList" :key="i"
                            @mouseenter="switcnPic(item.id)" ref="smallPic">
                            <img :src="item.picUrl" alt="">
                        </div>
                    </div>
                </div>
                <div class="rightBox">
                    <p class="goodDetail"> {{goodData.goodDetail}}</p>
                    <p class="price">采购价：{{goodData.purchasePrice}}&nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;建议价：{{goodData.buildBargaining}} </p>
                    <p class="goodTitle">上架时间：{{goodData.shelfTime}}</p>
                    <p class="goodTitle">产品SKU：{{goodData.productSku}}</p>
                    <p class="goodTitle">生产周期：{{goodData.productCycle}}</p>
                    <p class="goodTitle">是否定制：{{goodData.ifCustomization}}</p>
                    <p class="goodTitle">产品热度：{{goodData.productHot}}</p>
                    <p class="goodTitle">配合工厂：{{goodData.cooperateFactory}}</p>
                    <p class="goodTitle">分类：{{goodData.classify}}</p>
                    <p class="goodTitle">产品卖点：{{goodData.productBuy}}</p>

                    <p class="goodTitle">商品规格：长：{{goodData.merchandisefication.long}}
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;宽：{{goodData.merchandisefication.breadth}}
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;高：{{goodData.merchandisefication.height}}
                    </p>
                    <p class="goodTitle">装箱规格：长：{{goodData.packingSpecification.long}}
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;宽：{{goodData.packingSpecification.breadth}}
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;高：{{goodData.packingSpecification.height}}
                    </p>

                    <p class="goodTitle">商品重量：{{goodData.productWeight}}</p>
                    <p class="goodTitle">装箱重量：{{goodData.packingtWeight}}</p>
                    <p class="goodTitle">装箱率：{{goodData.packingRate}}</p>
                    <p class="goodTitle">产品规格：{{goodData.productSpecification}}</p>
                </div>
            </div>
            <!-- 相关产品推荐 -->
            <div class="association clearfix">
                <h1 id="associationTitle">相关产品推荐</h1>
                <i class="el-icon-arrow-left"></i>
                <div class="associationGood" v-for="item1 in associationList" :key="item1.id">
                    <img :src="item1.pic" alt="">
                    <span class="goodName "> {{item1.name}}</span>
                    <span class="goodFont"><span>{{item1.theme}}</span></span>
                    <span class="price2">
                        <span class="purchase">采购价：{{item1.purchase}}</span>
                        <span class="suggest">建议价:{{item1.suggest}}</span>
                    </span>
                </div>
            </div>
            <!-- 商品描述 -->
            <div class="description">
                <h1 id="descriptionTitle"> <span>商品描述</span><span>广告素材</span></h1>
                <h4><span>商品属性表</span></h4>
                <el-table :data="tableData" height="160" border height-align="center" style="width: 100%">
                    <el-table-column prop="date" label="采购价" width="500">
                    </el-table-column>
                    <el-table-column prop="name" label="建议价" width="500">
                    </el-table-column>
                    <el-table-column prop="address" label="sku">
                    </el-table-column>
                </el-table>
                <div class="goodDescriptionBox">
                    <h4><span>商品描述</span></h4>
                    <div class="goodDescription">
                        <span>
                            The subject originates in practice of strategy management be introduced into management of
                            human resources in Qingdao FY Vocational Technical College.
                            Implement of the RT-monitor in FY-ⅱ distributed microcomputer control system
                            Design and Calculation of FY Type Grain Loading-Unloading Machines
                            The Study of Equipment Management Informationization Project Planning about FY Company
                            The subject originates in practice of strategy management be introduced into management of
                            human resources in Qingdao FY Vocational Technical College.
                            Implement of the RT-monitor in FY-ⅱ distributed microcomputer control system
                            Design and Calculation of FY Type Grain Loading-Unloading Machines
                            The Study of Equipment Management Informationization Project Planning about FY Company
                            The subject originates in practice of strategy management be introduced into management of
                            human resources in Qingdao FY Vocational Technical College.
                            Implement of the RT-monitor in FY-ⅱ distributed microcomputer control system
                            Design and Calculation of FY Type Grain Loading-Unloading Machines
                            The Study of Equipment Management Informationization Project Planning about FY Company
                            The subject originates in practice of strategy management be introduced into management of
                            human resources in Qingdao FY Vocational Technical College.
                            Implement of the RT-monitor in FY-ⅱ distributed microcomputer control system
                            Design and Calculation of FY Type Grain Loading-Unloading Machines
                            The Study of Equipment Management Informationization Project Planning about FY Company
                        </span>
                    </div>
                </div>
                <div class="specialRequire">
                    <h4><span>特殊要求</span></h4>
                    <h1>暂无！</h1>
                </div>
                <div class="productPic clearfix">
                    <h4><span>产品图片</span></h4>
                    <div v-for="item in picList" :key="item.id"> <img :src="item.picUrl" alt=""></div>
                </div>
                <div>
                    <h4><span>广告素材</span></h4>
                    <div class="clearfix advertisingBox">
                        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                            <el-tab-pane label="图文素材" name="first">
                                <div class="graphic" v-for="item in picList" :key="item.id">
                                    <img :src="item.picUrl" alt="">
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="视频素材" name="second">暂无！</el-tab-pane>
                            <el-tab-pane label="文字素材" name="third">暂无！</el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
    import zxMagnifie from "zx-magnifie"
    export default {
        data() {
            return {
                counts: 0,
                activeName: 'first',
                associationList: [
                    {
                        id: 13123,
                        name: "美丽的向日葵1",
                        theme: "向日葵主题",
                        pic: require("../../../../assets/img/goods/1.jpg"),
                        purchase: "44.0$",
                        suggest: "66.2$",
                    },
                    {
                        id: 131423,
                        name: "美丽的向日葵1",
                        theme: "向日葵主题",
                        pic: require("../../../../assets/img/goods/5.jpg"),
                        purchase: "44.0$",
                        suggest: "66.2$",
                    },
                    {
                        id: 132123,
                        name: "美丽的向日葵1",
                        theme: "向日葵主题",
                        pic: require("../../../../assets/img/goods/6.jpg"),
                        purchase: "44.0$",
                        suggest: "66.2$",
                    },
                    {
                        id: 135123,
                        name: "美丽的向日葵1",
                        theme: "向日葵主题",
                        pic: require("../../../../assets/img/goods/2.jpg"),
                        purchase: "44.0$",
                        suggest: "66.2$",
                    },
                    {
                        id: 1323,
                        name: "美丽的向日葵1",
                        theme: "向日葵主题",
                        pic: require("../../../../assets/img/goods/1.jpg"),
                        purchase: "44.0$",
                        suggest: "66.2$",
                    },
                    {
                        id: 131223,
                        name: "美丽的向日葵1",
                        theme: "向日葵主题",
                        pic: require("../../../../assets/img/goods/5.jpg"),
                        purchase: "44.0$",
                        suggest: "66.2$",
                    },
                    {
                        id: 13223,
                        name: "美丽的向日葵1",
                        theme: "向日葵主题",
                        pic: require("../../../../assets/img/goods/6.jpg"),
                        purchase: "44.0$",
                        suggest: "66.2$",
                    },
                    {
                        id: 15123,
                        name: "美丽的向日葵1",
                        theme: "向日葵主题",
                        pic: require("../../../../assets/img/goods/2.jpg"),
                        purchase: "44.0$",
                        suggest: "66.2$",
                    },
                ],
                show: true,
                isShow: true,
                src: require("../../../../assets/img/goods/2.jpg"),
                picList: [
                    {
                        id: 2,
                        picUrl: require("../../../../assets/img/goods/2.jpg"),
                    },
                    {
                        id: 8,
                        picUrl: require("../../../../assets/img/goods/8.jpg"),
                    },
                    {
                        id: 3,
                        picUrl: require("../../../../assets/img/goods/3.jpg"),
                    },
                    {
                        id: 5,
                        picUrl: require("../../../../assets/img/goods/5.jpg"),
                    },
                ],
                tableData: [],
                goodData: {
                    goodDetail: "属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。",
                    purchasePrice: "0.00$",
                    buildBargaining: "0.00$",
                    shelfTime: "2021-7-20 14:05:59",
                    productSku: "SKJJC2302010202",
                    productCycle: "3-5",
                    ifCustomization: "普货",
                    productHot: "6",
                    cooperateFactory: "论月制造厂",
                    classify: "家居-厨房工具和配件",
                    productBuy: "向日葵主题",
                    merchandisefication: {
                        long: "80cm",
                        breadth: "60cm",
                        height: "100cm"
                    },
                    packingSpecification: {
                        long: "90cm",
                        breadth: "90cm",
                        height: "140cm"
                    },
                    productWeight: "200g",
                    packingtWeight: "500g",
                    packingRate: "30%",
                    productSpecification: "黑色实惠",
                }
            }
        },
        mounted() {
        },
        watch: {

        },
        components: {
            zxMagnifie
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            count() {
                this.counts++
            },
            switcnPic( i) {
                this.count();
                if (this.counts % 2 == 0) {
                    this.$refs.bigPic.style.display="block"
                    this.$refs.bigPic.style.width="400px"
                    this.$refs.bigPic.style.height="400px"
                    this.src = require(`../../../../assets/img/goods/${i}.jpg`)
                    return
                } else {
                    this.src = require(`../../../../assets/img/goods/${i}.jpg`)
                    this.counts = 0;
                }

            },

        },
    }
</script>
<style scoped>
    .login {
        padding: 0px 20px;
        width: 100%;
        border: 1px solid #989898;
    }
    .topBox{
        display:flex;
        flex-wrap: wrap; 
    }
    .leftBox {
        flex:1;
    }
   
    .leftBox .picBox {
        width: 100%;
        /* height: 600px; */
        border: 1px solid #989898;
        margin: 10px 10px;
        display:flex;
        justify-content:center;
        align-items:center;
        /* padding:; */
    }
    .zxpic{
        /* margin-top: 15%;
        margin-left:20%; */
        width: 60% ;
        height: 60% ;
        margin:20% 0;
    }

    .image-size {
        width: 100%;
        height: 100%;
    } 

    .picBottom {
        display: flex;
        height: 150px;
        width: 100%;
        flex-direction: row;
        flex-wrap: nowrap;
        margin-bottom: 0px;
    }

    .switchPic {
        flex: 1;
        height: 100%;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .switchPic img {
        width: 100%;
        height: 80%;
    }

    .switchPic img:hover {
        border: 2px solid red;
    }

    /* 产品介绍 */
    .rightBox {
      flex:1;
        margin-left: 2%;
    }

    .goodDetail {
        font-size: 20px;
        margin-top:5px;
    }
    .goodTitle{
        font-size: 14px;
        margin-top:5px; 
    }
    .price {
        background-color: pink;
        margin-bottom:10px; 
        color: rgb(197, 68, 90);
        font-size: 14px;
        font-weight: bold;
        margin: 0;
        width: 400px;
        padding: 10px;
    }

    /* 相关产品推荐 */
    .association {
        width: 100%;
        /* height: 300px; */
        padding: 50px 0px;
    }

    #associationTitle {
        font-size: 18px;
        font-weight: bold;
    }

    .associationGood {
        width: 181px;
        height: 272px;
        float: left;
        margin-left: 40px;
        margin-top: 40px;
    }

    .associationGood img {
        width: 181px;
        height: 181px;
    }

    .associationGood img:hover {
        transform: scale(1.1);
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
    }

    .goodName {
        display: block;
    }

    .goodFont {
        display: block;
        margin-top: 10px;
    }

    .goodFont span {
        color: blue;
        background-color: rgb(162, 188, 221);
    }

    .price2 {
        margin-top: 10px;
        display: block;
        font-size: 12px;
    }

    .suggest {
        margin-left: 25px;
    }

    .el-icon-arrow-left {
        float: left;
        margin-top: 120px;
        font-size: 40px;
    }

    .el-icon-arrow-left:hover {
        border-radius: 50%;
        background-color: rgb(49, 49, 161);
    }

    /* .goodTitle */
    /* 商品描述 */
    .description {
        margin: 0px 1%;
        width: 98%;
        border: 1px solid #989898;
    }

    #descriptionTitle span {
        margin-left: 30px;
    }

    #descriptionTitle span:hover {
        border-bottom: 10px solid rgb(212, 109, 12);
    }

    .description h4 {
        border-left: 4px solid blue;
        margin-left: 10px;
        margin-top: 40px;
    }

    .description h4 span {
        margin-left: 10px;
    }

    .is-leaf {
        text-align: center;
    }

    .goodDescriptionBox {
        border-top: 1px solid #989898;
        border-bottom: 1px solid #989898;
        width: 100%;
    }

    .goodDescription {
        position: relative;
        width: 96%;
        padding: 0px 2% 50px 2%;
    }

    .goodDescription h4 {
        left: -80px;

    }

    .specialRequire {
        border-bottom: 1px solid #989898;
    }

    .specialRequire h1 {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }

    .productPic {
        border-bottom: 1px solid #989898;
    }

    .productPic div {
        border: 1px solid #989898;
        float: left;
        margin-left: 60px;
    }

    .productPic div img {
        width: 400px;
        height: 400px;
    }

    .advertisingBox {
        height: 300px;
    }

    .graphic img {
        float: left;
        width: 150px;
        height: 200px;
        margin-left: 50px;
    }
</style>