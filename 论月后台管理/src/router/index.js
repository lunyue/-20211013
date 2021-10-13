import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Layout from '@/layout'
export const constantRouterMap = [{
  path: '/login',
  component: () => import('@/views/login/index'),
  hidden: true
},

{
  path: '/404',
  component: () => import('@/views/404'),
  hidden: true
},

{
  path: '/',
  component: Layout,
  redirect: '/product'
 
},
]
export const asyncRouterMap = [
  //  product
  {
    path: '/product',
    component: Layout,
    redirect: '/product/recommend',//此处一级路由为何不和上面的dashboard一级路由相同呢？还加了一个二级路由的标题是因为它有真正的子路由
    name: 'product',
    meta: { title: '产品库', icon: 'el-icon-menu',
    role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop', 
    'ebay_operation', 'ebay_develop' ,'shuke_operation','shuke_develop', 'administrator','atom_develop','atom_operation','flow_operation','flow_develop']
   },
    children: [
      {
        path: 'recommend',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'recommend',
        component: () => import('@/views/product/recommend'),
        meta: { title: '推荐', 
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
        'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation','flow_develop']
    
      }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
      {
        path: 'ball',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'ball',
        component: () => import('@/views/product/ball'),
        meta: { title: '球类',
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
        'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop']
    
      }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
      {
        path: 'shoe',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'shoe',
        component: () => import('@/views/product/shoe'),
        meta: { title: '鞋子',
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
        'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop']
    
      }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
      {
        path: 'short',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'short',
        component: () => import('@/views/product/short'),
        meta: { title: '衣服',
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop', 
        'ebay_operation', 'ebay_develop' ,'shuke_operation','shuke_develop', 'administrator','atom_develop','atom_operation','flow_operation', 'flow_develop']
      }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
      {
        path: 'trousers',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'trousers',
        component: () => import('@/views/product/trousers'),
        meta: { title: '裤子',
        role: ['shuke_operation', 'shuke_develop', 'administrator','admin']
      
      }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
      {
        path: 'productdesc',
        hidden: true,// hidden: true就是将路由隐藏不出现在导航栏中，形成单独的页面
        component: () => import('@/views/product/recommend/productdesc/index'),
        name: 'productdesc',
        meta: { title: '产品详情',
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
        'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop']
    
      }
      },
    ]
  },
  // management
  {
    path: '/management',
    component: Layout,
    redirect: '/management/edit',//此处一级路由为何不和上面的dashboard一级路由相同呢？还加了一个二级路由的标题是因为它有真正的子路由
    name: 'management',
    meta: { title: '商品管理', 
    icon: 'el-icon-s-finance',
    role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
    'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator',
     'atom_develop', 'atom_operation','flow_operation', 'flow_develop']

  },
    children: [
      {
        path: 'edit',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'edit',
        component: () => import('@/views/management/edit'),
        meta: { title: '商品编辑',
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
        'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator',
         'atom_develop', 'atom_operation','flow_operation', 'flow_develop']
    
      }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
      {
        path: 'audit',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'audit',
        component: () => import('@/views/management/audit'),
        meta: { title: '商品审核' ,
        role: ['shuke_operation', 'administrator']
      }
      },
      {
        path: 'audit_change',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'auditChange',
        component: () => import('@/views/management/auditChange'),
        meta: { title: '变更审核', role: ['shuke_operation', 'administrator'] }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
      {
        path: 'auditRecord',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'auditRecord',
        component: () => import('@/views/management/auditRecord'),
        meta: { title: '审核记录',
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
        'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop'] }
      //不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
      {
        path: 'testingWares',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'testingWares',
        component: () => import('@/views/management/testingWares'),
        meta: { title: '测品管理',
        role: ['shopify_operation', 'shopify_develop', 'administrator','shuke_operation']
      
      }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },

    ]
  },
  // seller_center
  {
    path: '/seller_center',
    component: Layout,
    redirect: '/seller_center/order_management',//此处一级路由为何不和上面的dashboard一级路由相同呢？还加了一个二级路由的标题是因为它有真正的子路由
    name: 'seller_center',
    meta: { title: '卖家中心', icon: 'el-icon-s-shop',
    role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
    'ebay_operation', 'ebay_develop',  'shuke_develop','shuke_operation', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop']

  },
    children: [
      {
        path: 'order_management',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'order_management',
        component: () => import('@/views/seller_center/order_management'),
        meta: { title: '订单管理',
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
        'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop']
      }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
      {
        path: 'account_income',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'account_income',
        component: () => import('@/views/seller_center/account_income'),
        meta: { title: '账户收益',
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
        'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop']

      }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
      {
        path: 'order_sales_data',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'order_sales_data',
        component: () => import('@/views/seller_center/order_sales_data'),
        meta: { title: '订单销售数据',
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
        'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop']
      }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
    ]
  },
  // 用户管理
  {
    path: '/authority',
    component: Layout,
    name: "authority",
    redirect: '/authority/role',
    meta: { title: '权限管理',
    role: ['shuke_operation', 'administrator']
  },// title: '权限管理'不会显示到导航栏中而是会显示到标题栏中
    children: [{
      path: 'role',//子路有中都不需要加斜杠
      name: 'role',
      component: () => import('@/views/authority/role/index'),//所以一级路由最终来源还是这里
      meta: { title: '用户管理', icon: 'el-icon-user-solid',
      role: ['shuke_operation', 'administrator']
    }//title: '用户管理'才是显示到导航栏中且没有下拉框除非有多个子路由
    }]
  },
  // setting
  {
    path: '/setting',
    component: Layout,
    redirect: '/setting/types_set',//此处一级路由为何不和上面的dashboard一级路由相同呢？还加了一个二级路由的标题是因为它有真正的子路由
    name: 'setting',
    meta: { title: '系统设置', icon: 'el-icon-s-shop',role: ['shuke_operation', 'administrator'] },
    children: [
      {
        path: 'types_set',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'types_set',
        component: () => import('@/views/setting/types_set'),
        meta: { title: '类型设置',role: ['shuke_operation', 'administrator'] }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
      {
        path: 'banner_set',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'banner_set',
        component: () => import('@/views/setting/banner_set'),
        meta: { title: 'banner设置',
        role: ['shuke_operation', 'administrator'] 
      }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧

      },
      {
        path: 'class_set',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'class_set',
        component: () => import('@/views/setting/class_set'),
        meta: { title: '分类设置',role: ['shuke_operation', 'administrator'] }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧,role是权限的意思
      },
    ]
  },
  // home
  {
    path: '/homeland',
    component: Layout,
    redirect: '/home/watemelon',//此处一级路由为何不和上面的dashboard一级路由相同呢？还加了一个二级路由的标题是因为它有真正的子路由
    name: 'homeland',
    meta: { title: '家乡特产', icon: 'el-icon-s-shop',role: ['shuke_operation', 'administrator'] },
    children: [
      {
        path: 'watemelon',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'watemelon',
        component: () => import('@/views/homeland/watemelon'),
        meta: { title: '西瓜',role: ['shuke_operation', 'administrator'] }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
      {
        path: 'chilli',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'chilli',
        component: () => import('@/views/homeland/chilli'),
        meta: { title: '星宫',
        role: ['shuke_operation', 'administrator'] 
      }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
      {
        path: ' Resume',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'Resume',
        component: () => import('@/views/homeland/Resume'),
        meta: { title: '个人简历',
        role: ['shuke_operation', 'administrator'] 
      }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
      {
        path: ' tool',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'tool',
        component: () => import('@/views/homeland/tool'),
        meta: { title: '工具',
        role: ['shuke_operation', 'administrator'] 
      }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
    ]
  },
  // phone
  {
    path: '/phone',
    component: Layout,
    redirect: '/phone/home',//此处一级路由为何不和上面的dashboard一级路由相同呢？还加了一个二级路由的标题是因为它有真正的子路由
    name: 'phone',
    meta: { title: '手机端', icon: 'el-icon-s-shop',role: ['shuke_operation', 'administrator'] },
    children: [
      {
        path: 'home',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'home',
        component: () => import('@/views/phone/home'),
        meta: { title: '首页',role: ['shuke_operation', 'administrator'] }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
      {
        path: 'car',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'car',
        component: () => import('@/views/phone/car'),
        meta: { title: '购物车',
        role: ['shuke_operation', 'administrator'] 
      }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
      {
        path: 'mine',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'mine',
        component: () => import('@/views/phone/mine'),
        meta: { title: '个人中心',
        role: ['shuke_operation', 'administrator'] 
      }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
      {
        path: 'ziliao',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'ziliao',
        component: () => import('@/views/phone/ziliao'),
        meta: { title: '资料',
        role: ['shuke_operation', 'administrator'] 
      }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
    ]
  },
  //个人提升
  {
    path: '/promotion',
    component: Layout,
    redirect: '/promotion/practise',//此处一级路由为何不和上面的dashboard一级路由相同呢？还加了一个二级路由的标题是因为它有真正的子路由
    name: 'promotion',
    meta: { title: '本人练习', icon: 'el-icon-s-shop',role: ['shuke_operation', 'administrator'] },
    children: [
      {
        path: 'practise',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'practise',
        component: () => import('@/views/promotion/practise'),
        meta: { title: '本人练习',role: ['shuke_operation', 'administrator'] }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
      {
        path: 'table',//二级路由无需写斜杠且且是和上面的 path: '/example'相衔接所以路由会是/example/table
        name: 'table',
        component: () => import('@/views/promotion/table'),
        meta: { title: '表格练习',role: ['shuke_operation', 'administrator'] }//不管怎样吧  name: 'Table',和title: 'Table'保持一致吧
      },
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ 
    y: 0
   }),
  routes: constantRouterMap
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
