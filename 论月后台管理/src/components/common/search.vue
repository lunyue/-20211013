 <template>
    <div>
        <div class="box">
            <div class="search">
                <div>
                    <el-input placeholder="请输入内容" v-model="value" clearable class="inp">
                    </el-input>
                    <el-button type="primary" class="btn">搜索</el-button>
                </div>
            </div>
            <div class="inquire">
                <div class="tilte1">
                    <span >时间筛选：</span>
                    <li class="blueFont">全部</li>
                    <li>今天</li>
                    <li>昨天</li>
                    <li>本周</li>
                    <li>本月</li>
                    <li>自定义</li>
                </div>
                <div class="tilte1">
                    <span>商品标签：</span>
                    <li class="blueFont">全部</li>
                    <li>独家销售</li>
                    <li>已推荐产品</li>
                </div>
                <div class="tilte1">
                    <span>筛选条件：</span>
                    <li class="blueFont">全部</li>
                    <li>采购价<i class="el-icon-caret-top"></i></li>
                    <li>建议价<i class="el-icon-caret-top"></i></li>
                </div>
                <div class="tilte1" >
                    <span >商品分类：</span>
                    <li class="blueFont">全部</li>
                    <li v-for="(item,index) in classTitle" :key="item.id">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                {{item.name}}
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item v-for="item1 in item.children" :key="item1.id">
                                    {{item1.name}}
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </li>
                    <li>
                        <el-dropdown trigger="click">
                            <span class="el-dropdown-link">
                                更多<i class="el-icon-caret-right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                              <el-dropdown-item v-for="item2 in moreList" :key="item2.id"> {{item2.name}}</el-dropdown-item>
                            </el-dropdown-menu>
                          </el-dropdown>
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value: '',
                // 商品分类
                classTitle: [
                    {
                        id: 1,
                        name: "服装",
                        children: [
                            {
                                id: 1,
                                name: '卫衣',
                            },
                            {
                                id: 2,
                                name: '外套',
                            },
                            {
                                id: 3,
                                name: '毛衣',
                            },
                            {
                                id: 4,
                                name: '男士内衣',
                            },
                            {
                                id: 5,
                                name: '男装运动服',
                            },
                            {
                                id: 6,
                                name: '男装运动服',
                            },
                        ]
                    },
                    {
                        id: 2,
                        name: "男装",
                        children: [
                            {
                                id: 1,
                                name: '卫衣',
                            },
                            {
                                id: 2,
                                name: '外套',
                            },
                            {
                                id: 3,
                                name: '毛衣',
                            },
                            {
                                id: 4,
                                name: '男士内衣',
                            },
                            {
                                id: 5,
                                name: '男装运动服',
                            },
                            {
                                id: 6,
                                name: '男装运动服',
                            },
                        ]
                    },
                    {
                        id: 3,
                        name: "手机和手机配件",
                        children: [
                            {
                                id: 1,
                                name: '卫衣',
                            },
                            {
                                id: 2,
                                name: '外套',
                            },
                            {
                                id: 3,
                                name: '毛衣',
                            },
                            {
                                id: 4,
                                name: '男士内衣',
                            },
                            {
                                id: 5,
                                name: '男装运动服',
                            },
                            {
                                id: 6,
                                name: '男装运动服',
                            },
                        ]
                    },
                    {
                        id: 4,
                        name: "平板和平板配件",
                        children: [
                            {
                                id: 1,
                                name: '卫衣',
                            },
                            {
                                id: 2,
                                name: '外套',
                            },
                            {
                                id: 3,
                                name: '毛衣',
                            },
                            {
                                id: 4,
                                name: '男士内衣',
                            },
                            {
                                id: 5,
                                name: '男装运动服',
                            },
                            {
                                id: 6,
                                name: '男装运动服',
                            },
                        ]
                    },
                    {
                        id: 5,
                        name: "包包",
                        children: [
                            {
                                id: 1,
                                name: '卫衣',
                            },
                            {
                                id: 2,
                                name: '外套',
                            },
                            {
                                id: 3,
                                name: '毛衣',
                            },
                            {
                                id: 4,
                                name: '男士内衣',
                            },
                            {
                                id: 5,
                                name: '男装运动服',
                            },
                            {
                                id: 6,
                                name: '男装运动服',
                            },
                        ]
                    },
                    {
                        id: 6,
                        name: "鞋子",
                        children: [
                            {
                                id: 1,
                                name: '卫衣',
                            },
                            {
                                id: 2,
                                name: '外套',
                            },
                            {
                                id: 3,
                                name: '毛衣',
                            },
                            {
                                id: 4,
                                name: '男士内衣',
                            },
                            {
                                id: 5,
                                name: '男装运动服',
                            },
                            {
                                id: 6,
                                name: '男装运动服',
                            },
                        ]
                    },
                    {
                        id: 7,
                        name: "服饰配饰",
                        children: [
                            {
                                id: 1,
                                name: '卫衣',
                            },
                            {
                                id: 2,
                                name: '外套',
                            },
                            {
                                id: 3,
                                name: '毛衣',
                            },
                            {
                                id: 4,
                                name: '男士内衣',
                            },
                            {
                                id: 5,
                                name: '男装运动服',
                            },
                            {
                                id: 6,
                                name: '男装运动服',
                            },
                        ]
                    },
                    {
                        id: 8,
                        name: "饰品",
                        children: [
                            {
                                id: 1,
                                name: '卫衣',
                            },
                            {
                                id: 2,
                                name: '外套',
                            },
                            {
                                id: 3,
                                name: '毛衣',
                            },
                            {
                                id: 4,
                                name: '男士内衣',
                            },
                            {
                                id: 5,
                                name: '男装运动服',
                            },
                            {
                                id: 6,
                                name: '男装运动服',
                            },
                        ]
                    },
                ],
                // 更多
                moreList:[
                    {
                        id:13214,
                        name:"电脑和办公工具",
                    },
                    {
                        id:3211,
                        name:"电脑和办公工具",
                    },
                    {
                        id:121321,
                        name:"电脑和办公工具",
                    },
                    {
                        id:412321,
                        name:"电脑和办公工具",
                    },
                    {
                        id:1212321,
                        name:"电脑和办公工具",
                    },
                    {
                        id:321,
                        name:"电脑和办公工具",
                    },
                    {
                        id:123,
                        name:"电脑和办公工具",
                    },
                    {
                        id:71,
                        name:"电脑和办公工具",
                    },
                    {
                        id:6,
                        name:"电脑和办公工具",
                    },
                    {
                        id:5,
                        name:"电脑和办公工具",
                    },
                    {
                        id:4,
                        name:"电脑和办公工具",
                    },
                    {
                        id:3,
                        name:"电脑和办公工具",
                    },
                    {
                        id:2,
                        name:"电脑和办公工具",
                    },
                ]
            }
        },
    }
</script>
<style scoped>
    li {
        list-style: none;
    }

    .box .search {
        margin-top: 10px;
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
    }

    .inp {
        width: 270px;
        height: 100%;
    }

    .inquire {
        margin-top: 30px;
        width: 100%;
        height: 220px;
    }

    .tilte1 {
        height: 36px;
        width: 100%;
        margin-top: 20px;
    }
    .tilte1 span{
        float: left;
        margin-left: 20px; 
    }
    .tilte1 li {
        float: left;
        margin-left: 20px;
        margin-top: 0xp;
    }
    .tilte1 li:hover{
        color: blue;
    }
    .el-dropdown-link{
        font-size: 16px;
        color: #000;
    }
    .el-dropdown-link:hover{
        color: blue;
    }
    .blueFont{
        color: blue;
    }
    /* .tilte2{
          margin-top:20px ;
      }
      .tilte2 li{
        float: left;
        margin-left:20px;
        margin-top:0xp;  
      } */
</style>