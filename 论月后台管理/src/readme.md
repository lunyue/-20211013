### day25笔记
#### redux状态管理
* redux有三种状态
* npm install redux
state action(dispatch) reducer
* React-redux (npm i react-redux)
它的作用把组件分成2部分 一UI组件（视图，类里面return的内容）
二、容器型组件（主要用来交互redux）
* 以上链接方式，action是同步，我们会有大量的异步操作，比如（与服务器端进行交互，其实就是调取接口）借助于中间件，就是依赖插件，redux-thunk(npm i redux-thunk)
---
#### 一、扩展下git
* 代码版本管理工具有很多
> git 和 svn(一般的情况局域网)
* 解决多人协作开发，代码管理混乱
*git是什么（有自己的用户名和密码）
> 代码版本管理工具
> 三部分远程仓库（管理你的代码） 本地仓库（本地代码）暂缓区（临时缓存区）
* git官网：https://git-scm.com/
* 下载并安装
> 点download就自动下载了
> 安装过程就是傻瓜式安装 下一步 下一步直到完成
> 安装完成之后，在文件中或者桌面右键出现Git Bash Here 就是成功的状态
* 第一次往远程仓库推送代码
① 在你的项目文件夹右键 git bash here 
② git init 初始化
③ git add . (.代表全部) 添加当前目录下的所有文件
④ git commit -m '你的log信息'  提交代码的时候会让你添加个备注
⑤ 如果当前是电脑第一用git 
会出现 让你输入你用邮箱地址和用户名 一步一步输入即可（关闭，删除.git文件整个流程重新走一遍）
**第五步，你自己登录一台电脑，只操作一次**
如果你想单独输入，其实它相当于修改
 git config --global user.email "you@example.com"
 git config --global user.name "Your Name"
 ⑥  git remote add origin https://github.com/zhangzhangzhangdada/shoppingProject.git 链接你的远程仓库，地址就是你刚才创建好的地址
 ⑦ git push -u origin master 把本地代码推送到远程仓库
 * 第一次的还要输入用户名和密码
 * 注意点 如果提交的时候是空文件夹，那么是不会被提交的
提交成功

> 工作流程：
> 第一次下载项目，要有项目地址（仓库地址）
> 打开本地文件夹 右键git bash here
> git clone https://github.com/Leslin/thinkphp5-restfulapi.git
（仓库地址）把远程仓库的内容克隆到本地 ，这个操作对于新项目，只操作一遍
> 每天进入公司的第一件事，更新代码
> 进入到你克隆之后的项目文件夹，看到.git文件再操作

> git pull (拉取，把远程仓库的没从拉去下来)
>如果有更新就自动下载了，如果没有更新，就会显示一段英文，表示是最新的（Already up to date）

> 每天下班之前，要提交代码，提交之前一定要更新！！！！
> git add .(.代表所有，你还可以输入文件名 比如 git add 1 或者git add 1 2 3)
> git commit -m '添加这个备注信息'
> git push
* 会出现代码冲突
* 大家可能同时修改同一个文件，你改了还没提交，对方已经提交了。
* 你上传之前会先更新，更新的时候就出现错误
CONFLICT (content): Merge conflict in project/index.html
Automatic merge failed; fix conflicts and then commit the result.
合并失败，要手动合并
> <body>
<<<<<<< HEAD
    <h1>我是首页</h1>
    <h2>我加了一句话</h2>
=======
    <h1 class="green">我是首页</h1>
>>>>>>> 9911f20434cbf9cd9772e5bdf077cc1ffd8c4498

自己手动合并代码，然后再走一遍更新流程
*GitHub（为开发者建立）开源的
> 官网地址：https://github.com/
> 注册：用户名是唯一的，不要起太复杂或者太长，因为你要用。 下一步下一步
> 注册成功之后登陆
* Nginx
Nginx (engine x) 是一个高性能的HTTP和反向代理web服务器
用于线上解决跨域问题

---
* 如果你git无法操作代码上传或者下载
* 修改hosts文件(以管理员身份，有权限)
地址： C:\Windows\System32\drivers\etc\hosts
在底部添加几行代码
192.30.253.112    github.com
185.199.111.153   github.github.io
185.199.110.153   assets-cdn.github.com
151.101.185.194   github.global.ssl.fastly.net
* 然后cmd打开命令窗口，刷新一下缓存
* 输入：ipconfig /flushdns
* 如果大家访问不了github 建议大家用VPN
* 删除仓库
* 进入到仓库中，找到setting 拉倒最下面，看见delete点击
* 然后输入仓库名称删除

* git的衍生工具
* 比如：sourcetree 官网地址： https://www.sourcetreeapp.com/

* 其他的代码版本管理
* 比如： svn(外号：小乌龟) 官网： https://tortoisesvn.net/
* 使用教程： https://www.runoob.com/svn/tortoisesvn-intro.html
---
#### 二、扩展下公司的工作流程以及组织架构
---
#### 三、电商项目流程（主要是加入购物车的流程）
* 需求分析
> 移动端（引入rem.js）并初始化
> 有哪些骨架
> 1、首页 2、分类 3、购物车 4、个人中心 5、登录 6、注册 7、详情 8、index（这几个页面都是由路由控制的 分清一（5、登录 6、注册 7、详情  8、index--承接二级路由用的）、二级（1、首页 2、分类 3、购物车 4、个人中心））

一般一个项目（几十个－－上百个接口）

* 首页
> 没什么难度 ，调取接口
> 搜索不用做，如果做可以用watch
* 分类
> 不能写成路由 （侧边栏的功能点太多了，用路由完全浪费性能）
> 一般情况下 都是一个商品列表 ，同一个接口通过传入不同的分类id，得到不同的返回值 
> 可以利用v-if 去渲染右边内容
* 个人中心
> 登录之后返回给我们，token，userId（用户ＩＤ），还会返回用户详情
> 到了个人中心这个组件　调取各个接口
> 针对于当前项目（登录之后把用户信息，进行缓存　，在个人中心用本地存储取）
* 登录 
> 直接调取接口（登录的各种拦截都写出来）
> 成功之后跳转到个人中心
* 退出功能点（不是组件页面）
> 点击退出按钮 清空缓存 去登录也行，在当前页面（个人中心，未登录的页面）也行，主要是由产品经理和需求去定
* 注册
> 难点就是各种判断，比如判空，比如判这个正则
> 实现思路
> 点击注册
> 第一步所有表单进行判空 return（调取注册接口的时候，必传参数，必须要判空），判空的同时加正则
> 优先判空协议
> 昵称（要求唯一，第一种提供检测唯一昵称的接口，调取就完了。在页面中通过@blur方法，失去焦点的时候，调取检测接口。第二种就是注册的时候返回当前昵称被占用，网易接口是第二种）
```js
methods:{
    blur(){
        let reg = /d/
        if(this.value==''){
            this.errMsg = '不能为空'
            return
        }else if(reg.test(this.value)){
             this.errMsg = '不能有特殊字符'
             return
        }
    }
}
```
> 手机号
> 判空的同时加正则
> 密码
> 判空的同时加正则
> 验证码
> 发送验证码 
> 点击上述按钮，可以用div可用input v-model='msg' ,
```js
data(){
    return{
        msg:'发送验证',
        count:60
    }
}
methods:{
    send(){
        发送接口参数再次判空
        调取发送验证法接口
        执行倒计时
        让按钮变disabled ，不可点击
        this.msg = '倒计时内容'
        当60秒倒计时变成0的时候内容
        清空定时器
        this.msg = '重新发送'
    }
}
```
> 以上 判空发送验证码都结束了，
> 就调取验证验证码接口
```js
axios({url:'验证码接口地址'}).then(res=>{
    if(res.code==200){
        //调取注册接口
        axios({url:'注册接口'}).then(res=>{
            if(res.code==200){
                //注册成功，跳转个人中心
            }
        }).catch(err=>{})
    }
}).catch(err=>{})
```
* 详情
> 根据不同的商品列表，跳转到详情页
> 到了详情页面 就直接获取数据
> 一个是商品详情 一个是买家口
> 这个两个切换也禁止用路由
> 两种实现思路
> 第一个 v-if
> 第二个动态is ,动态的组件切换（推荐）
> 买家口碑中评价的切换可以用v-if
> 点击按钮 带颜色并切换，归根结底都可以用动态class去完成

* 底部导航切换
* 用vue基础知识实现导航切换带样式
```vue
<template>
  <div>
    <router-view></router-view>
    <div>
      <span :class="[item.path==flag?'active':'']" @click='goPath(item.path)' v-for="item in navList" :key="item.path">
        <img :src="item.path==flag?item.img1:item.img" alt="">
        <span>{{item.title}}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag:'',
      navList: [
        {
          path: "/index",
          title: "首页",
          img: require("../assets/image/tab_home_nor.png"),
          img1: require("../assets/image/tab_home_hig.png")
        },
        {
          path: "/sort",
          title: "分类",
          img: require("../assets/image/tab_menu_nor.png"),
          img1: require("../assets/image/tab_menu_hig.png")
        },
        {
          path: "/shopcar",
          title: "购物车",
          img: require("../assets/image/tab_shopping_nor.png"),
          img1: require("../assets/image/tab_shopping_hig.png")
        },
        {
          path: "/mine",
          title: "个人中心",
          img: require("../assets/image/tab_me_nor.png"),
          img1: require("../assets/image/tab_me_hig.png")
        }
      ]
    };
  },
  mounted(){
    //组件一加载 获取path 并给flag赋值
    console.log(this.$route,'路由元')
    this.flag = this.$route.path
  },
  methods: {
    //跳转不同的地址渲染不同组件
    goPath(path){
      this.flag = path
      this.$router.push(path)
    }
  },
};
</script>
<style lang="stylus" scoped>
.active{
  color:red
}
</style>
```
* 用插件实现导航
```vue
<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="pink" route>
      <van-tabbar-item replace to="/index" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/sort" icon="discount">分类</van-tabbar-item>
      <van-tabbar-item replace to="/shopcar" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="setting-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="stylus" scoped>
.active {
  color: red;
}
</style>
````
**购物车思路**
**购物车思路**
**购物车思路**
一般情况下购物的实现方式2种
一种是必须登录才能看见比如：淘宝
登录之后就接数据，调取接口，获取商品列表
二种是不登录也能看看购物车信息比如：京东
>这种情况如何实现
点击加入购物车的时候，把数据存储到本地存储中
然后来到购物车页面，通过从本地存储取值来判断是否有数据，用来渲染不同页面（有列表的购物车 和 空购物车）
出现蒙版 有两个按钮 ①加入购物车 直接关闭购物车 或者直接跳页面（过程中做了存储） ②直接购买，直接就跳支付页面
（大家在实现项目的过程中，不明白，就可以玩玩京东，玩玩淘宝）
**详情中的加入购物车和弹层蒙版中的加入购物车 一定不能是一个事件**
* 把数据存储到购物车（本地存储）的代码
```js
//视图
<div class="select_list">
          <div class="list_name">大小</div>
          <ul class="con_wrap">
            <li
              v-for="(item,idS) in size"
              :key="item"
              :class="idS==sizeNum?'list_con active':'list_con'"
              @click="getSize(idS)"
            >{{item}}</li>
          </ul>
        </div>
        <div class="select_list">
          <div class="list_name">年龄</div>
          <ul class="con_wrap">
            <li
              v-for="(item,idA) in age"
              :key="item"
              @click="getAge(idA)"
              :class="idA==ageNum?'list_con active':'list_con'"
            >{{item}}</li>
          </ul>
        </div>
//数据和方法
data() {
    return {
      size: ["1L", "2L", "3L", "4L"],
      age: ["5岁上", "3岁以下"],
      sizeNum: 0,
      ageNum: 0
    };
  },
  methods: {
    //得到size
    getSize(n) {
      console.log(n);
      //给中间变量赋值索引 实现点击带样式
      this.sizeNum = n;
    },
    //得到age
    getAge(n) {
      console.log(n);
      //给中间变量赋值索引 实现点击带样式
      this.ageNum = n;
    },
    //加入购物车
    toCar() {
      this.show = !this.show;
      //首先获取到你的大小和年龄 扔到一个一对象
      let obj = {
        size: this.size[this.sizeNum],
        age: this.age[this.ageNum],
        img: "",
        price: "",
        isShow: false
      };
      //定义一个空数组
      let arr = [];
      //逻辑分成两部分
      //②本地存储有数据，代表购物车已经有数据，我们就先取出数据，再添加对象
      if (localStorage.getItem("arrList")) {
        //JSON.parse把字符串转化成对象或数组
        arr = JSON.parse(localStorage.getItem("arrList"));
        //添加对象
        arr.push(obj);
        //再次进行存储
        localStorage.setItem("arrList", JSON.stringify(arr));
      } else {
        //①购物车是空的加入内容（相当于本地存储没数据）
        //我们就直接push
        //把商品信息推到数组中 并加入到本地存储
        arr.push(obj);
        localStorage.setItem("arrList", JSON.stringify(arr));
      }
    },
  }
```
* 购物车页面
```js
data:{
    empty:true,
    carList:[]
}
<div v-if='empty'>空购物车</div>
<div v-if='!empty'>购物车有数据，循环列表</div>
mounted(){
   本地存储有数据?this.emtry= false : this.emtry= true
   this.carList = 本地存储有数据
}
```
* vant中的商品规格
```js
<template>
  <div>
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      goodsId: "0001", //商品id
      quota: 0,
      quotaUsed: 0,
      sku: {
        // 数据结构见下方文档
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "大小", // skuKeyName：规格类目名称
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "1L" // skuValueName：规格值名称
              },
              {
                id: "2", // skuValueId：规格值 id
                name: "2L" // skuValueName：规格值名称
              },
              {
                id: "3", // skuValueId：规格值 id
                name: "3L" // skuValueName：规格值名称
              },
              {
                id: "4", // skuValueId：规格值 id
                name: "4L" // skuValueName：规格值名称
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          },
          {
            k: "年龄", // skuKeyName：规格类目名称
            v: [
              {
                id: "5", // skuValueId：规格值 id
                name: "5岁以上" // skuValueName：规格值名称
              },
              {
                id: "6",
                name: "3岁以下"
              }
            ],
            k_s: "s2" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "5", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "6", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "2", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "5", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "2", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "6", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "3", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "5", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "3", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "6", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "4", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "5", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "4", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "6", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "100.00", // 默认价格（单位元）
        stock_num: 9999, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 数据结构见下方文档
        // 默认商品 sku 缩略图
        picture:
          "http://img4.imgtn.bdimg.com/it/u=1320076474,223369944&fm=11&gp=0.jpg"
      }
    };
  },
  mounted() {},
  methods: {
    onBuyClicked() {},
    onAddCartClicked() {}
  }
};
</script>
<style lang="stylus" scoped>
@import '../assets/css/index.styl';

.active {
  color: red;
}
</style>
```

### 作业
* 再次完善电商项目（下周三之前必须交，要优化好，要完整）
* React 项目--模拟简书PC端（要求静态页，React完成）
需要完成首页和详情页(内容区域 简单写)的所有内容
作业 （周一晚上交）
* 背面试题