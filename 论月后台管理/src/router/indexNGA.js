import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/* Layout */
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
  {
    path: '/product',
    component: Layout,
    redirect: '/product/recommend',
    name: 'product',
    meta: {
      title: '产品库',
      icon: 'all',
      role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop', 
      'ebay_operation', 'ebay_develop' ,'shuke_operation','shuke_develop', 'administrator','atom_develop','atom_operation','flow_operation','flow_develop']
    },
    children: [{
      path: 'recommend',
      component: () => import('@/views/product/recommend'),
      name: 'recommend',
      meta: {
        title: '推荐',
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
          'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation','flow_develop']
      }
    },
    {
      path: 'shop_mall',
      component: () => import('@/views/product/product_shop'),
      name: 'shop_mall',
      hidden: true,
      meta: {
        title: '产品商城',
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
          'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop']
      }
    },
    {
      path: 'productdesc',
      hidden: true,
      component: () => import('@/views/product/recommend/product_desc/index'),
      name: 'productdesc',
      meta: {
        title: '产品详情',
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
          'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop']
      }
    },
    {
      path: 'toorder',
      hidden: true,
      component: () => import('@/views/product/placetoorder/index'),
      name: 'toorder',
      meta: {
        title: '立即下单',
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop', 
        'ebay_operation', 'ebay_develop' ,'shuke_operation','shuke_develop', 'administrator','atom_develop','atom_operation','flow_operation', 'flow_develop']

      }
    },

    {
      path: 'shuke',
      name: 'shuke',
      component: () => import('@/views/product/shuke'),
      meta: {
        title: '数客星球',
        role: ['shuke_operation', 'shuke_develop', 'administrator','admin']
      }
    },

    {
      path: 'shopily',
      name: 'shopily',
      component: () => import('@/views/product/shopily'),
      meta: {
        title: '量子星球',

        role: ['shopify_operation', 'shopify_develop', 'shuke_operation',  'administrator']
      }
    },
    {
      path: 'amazon',
      name: 'amazon',
      component: () => import('@/views/product/amazon'),
      meta: {
        title: '跨客星球',
        role: ['amazon_operation', 'amazon_develop', 'shuke_operation', , 'administrator']
      }
    },
    {
      path: 'atom',
      name: 'atom',
      component: () => import('@/views/product/atom'),
      meta: {
        title: '原子星球',
        role: ['atom_develop', 'atom_operation', 'shuke_operation', 'administrator']
      }
    },
    {
      path: 'ebay',
      name: 'ebay',
      component: () => import('@/views/product/ebay'),
      meta: {
        title: '零壹星球',
        role: ['ebay_operation', 'ebay_develop', 'shuke_operation',  'administrator']
      }
    },
    {
      path: 'flow',
      name: 'flow',
      component: () => import('@/views/product/flow'),
      meta: {
        title: '流量星球',
        role: ['flow_operation', 'flow_develop', 'shuke_operation',  'administrator']
      }
    }


    ]
  },

  {
    path: '/management',
    component: Layout,
    redirect: '/management/edit',
    name: 'management',
    meta: {
      title: '商品管理', icon: 'zone',
      role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
        'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator',
         'atom_develop', 'atom_operation','flow_operation', 'flow_develop']
    },
    children: [
      {
        path: 'edit',
        name: 'edit',
        component: () => import('@/views/management/edit'),
        meta: {
          title: '商品编辑',
          role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
            'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator',
             'atom_develop', 'atom_operation','flow_operation', 'flow_develop']
        }
      },
      {
        path: 'drafts',
        name: 'drafts',
        component: () => import('@/views/management/drafts'),
        meta: {
          title: '商品草稿箱',
          role: ['shopify_develop',  'amazon_develop',
           'ebay_develop', 'shuke_develop', 'administrator', 'atom_develop', 'flow_develop']
        }
      },
      {
        path: 'audit',
        name: 'audit',
        component: () => import('@/views/management/audit'),
        meta: {
          title: '商品审核',
          role: ['shuke_operation', 'administrator']
        }
      },
      {
        path: 'auditChange',
        name: 'audit_change',
        component: () => import('@/views/management/audit_change'),
        meta: { title: '变更审核', 
        role: ['shuke_operation', 'administrator'] }
      },
      {
        path: 'auditRecord',
        name: 'audit_record',
        component: () => import('@/views/management/audit_record'),
        meta: { title: '审核记录', 
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
        'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop'] }
      },
      {
        path: 'auditChangeLog',
        name: 'audit_change_log',
        hidden: true,
        component: () => import('@/views/management/audit_change/audit_change_log'),
        meta: { title: '变更详情', 
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
        'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop'] }
      },
      {
        path: 'editDetail',
        name: 'edit-detail',
        hidden: true,
        component: () => import('@/views/management/edit/editDetails'),
        meta: {
          title: '商品详情',
          role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
            'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop']
        }
      },
      {
        path: 'testingWares',
        name: 'testing_wares',
        component: () => import('@/views/management/testing_wares/index'),
        meta: {
          title: '测品管理',
          role: ['shopify_operation', 'shopify_develop', 'administrator','shuke_operation']
        },
      },
      {
        path: 'lookDetail',
        name: 'look-detail',
        hidden: true,
        component: () => import('@/views/management/testing_wares/lookDetail'),
        meta: {
          title: '查看详情',
          role: ['shopify_operation', 'shopify_develop', 'administrator','shuke_operation']
        }
      },
      {
        path: 'waresForm',
        name: 'wares-form',
        hidden: true,
        component: () => import('@/views/management/testing_wares/formDetail'),
        meta: {
          title: '测品表单',
          role: ['shopify_operation', 'shopify_develop', 'administrator','shuke_operation']
        }
      },

    ]
  },

  {
    path: '/seller_center',
    component: Layout,
    redirect: '/seller_center/order_management',
    name: 'seller_center',
    meta: {
      title: '卖家中心',
      icon: 'seller',
      role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
        'ebay_operation', 'ebay_develop',  'shuke_develop','shuke_operation', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop']
    },
    children: [
      {
      path: 'order_management',
      name: 'order_management',
      component: () => import('@/views/seller_center/order_management'),
      meta: {
        title: '订单管理',
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
          'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop']
      }
    },
    {
      path: 'account_income',
      name: 'account_income',
      component: () => import('@/views/seller_center/account_income'),
      meta: {
        title: '账户收益',
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
          'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop']

      }
    },
    // {
    //   path: 'audit_feedback',
    //   name: 'audit_feedback',
    //   component: () => import('@/views/seller_center/audit_feedback'),
    //   meta: {
    //     title: '审核反馈',
    //     role: ['shopify_develop', 'amazon_develop', 'ebay_develop', 'shuke_develop', 'administrator', 'atom_develop']

    //   }
    // },
    {
      path: 'seller_orderdesc',
      name: 'seller_orderdesc',
      hidden: true,
      component: () => import('@/views/buyer_center/order_desc'),
      meta: {
        title: '订单详情',
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
          'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop']

      }
    },
    {
      path: 'order_sales_data',
      name: 'order_sales_data',
   
      component: () => import('@/views/seller_center/order_sales_data'),
      meta: {
        title: '订单销量数据',
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
          'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop']

      }
    }                                             
    ]
  },
  // {
  //   path: '/user',
  //   component: Layout,
  //   hidden: true,
  //   children: [{                                                                
  //     path: '/user',
  //     name: '个人中心',
  //     component: () => import('@/views/user/index'),
  //     meta: { title: '个人中心', icon: 'dashboard' }
  //   }]
  // },
  {
    path: '/amendpsd',
    component: Layout,
    hidden: true,
    children: [{                                                                
      path: '/amendpsd',
      name: '修改密码',
      component: () => import('@/views/user/amendpassword'),
      meta: { title: '修改密码', icon: 'dashboard' }
    }]
  },
  {
    path: '/buyer_center',
    component: Layout,
    redirect: '/buyer_center/order',
    name: 'buyer_center',
    meta: {
      title: '买家中心',
      icon: 'buyer',
      role: ['shopify_operation',  'amazon_operation','ebay_operation','atom_operation','administrator', 'flow_operation']
    },
    children: [
      {
      path: 'order',
      name: 'order',
      component: () => import('@/views/buyer_center/order'),
      meta: {
        title: '我的订单',

        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
          'ebay_operation', 'ebay_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop']
      }
    },
    {
      path: 'buyer_orderdesc',
      name: 'buyer_orderdesc',
      hidden: true,
      component: () => import('@/views/buyer_center/order_desc'),
      meta: {
        title: '订单详情',
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
          'ebay_operation', 'ebay_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop']
      }
    },
    {
      path: 'collection',
      name: 'collection',
      component: () => import('@/views/buyer_center/collection'),
      meta: {
        title: '我的收藏',
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
          'ebay_operation', 'ebay_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop']
      }
    },
    {
      path: 'shopping_cart',
      name: 'shopping_cart',
      component: () => import('@/views/buyer_center/shopping_cart'),
      meta: {
        title: '我的购物车',

        role: ['shopify_operation', 'amazon_operation', 'ebay_operation', 'administrator', 'atom_operation','flow_operation']
      }
    },
    {
      path: 'shopping_cart_toorder',
      name: 'shopping_cart_toorder',
      hidden: true,
      component: () => import('@/views/buyer_center/toorder'),
      meta: {
        title: '下单',
        role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
          'ebay_operation', 'ebay_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop']
      }
    },
    {
      path: 'payment_record',
      name: 'payment_record',
      component: () => import('@/views/buyer_center/payment_record'),
      meta: {
        title: '我的付款记录',

        role: ['shopify_operation', 'amazon_operation',
          'ebay_operation', 'administrator',  'atom_operation','flow_operation']
      }
    }
    ]
  },
  {
    path: '/authority',
    component: Layout,
    // redirect: '/authority/role',
    name: 'authority',
    meta: { title: '权限管理', icon: 'authority', role: ['shuke_operation', 'administrator'] },
    children: [

      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/authority/index'),
        meta: {
          title: '用户管理', icon: 'authority',
          role: ['shuke_operation', 'administrator']
        }
      }
    ]
  },
  {
    path: '/setting',
    component: Layout,
    redirect: '/setting/types_set',
    name: 'setting',
    meta: { title: '系统设置', icon: 'set', role: ['shuke_operation', 'administrator'] },
    children: [

      {
        path: 'types_set',
        name: 'types_set',
        component: () => import('@/views/systemsettings/types_set'),
        meta: {
          title: '类型设置',
          role: ['shuke_operation', 'administrator']
        }
      },
      
      {
        path: 'related',
        name: 'related',
        hidden: true,
        component: () => import('@/views/systemsettings/related'),
        meta: {
          title: '关联商品',
          role: ['shuke_operation', 'administrator']
        }
      },
      {
        path: 'banner_set',
        name: 'banner_set',
        component: () => import('@/views/systemsettings/banner_set'),
        meta: {
          title: 'banner设置',
          role: ['shuke_operation', 'administrator']
        }
      },
      {
        path: 'proportion_set',
        name: 'proportion_set',
        hidden: true,
        component: () => import('@/views/systemsettings/proportion_set'),
        meta: {
          title: '提成占比设置',
          role: ['shuke_operation', 'administrator']
        }
      },
      {
        path: 'class_set',
        name: 'class_set',
        
        component: () => import('@/views/systemsettings/class_set'),
        meta: {
          title: '分类设置',
          role: ['shuke_operation', 'administrator']
        }
      },
      {
        path: 'class_edit_set',
        name: 'class_edit_set',
        hidden: true,
        component: () => import('@/views/systemsettings/class_set/edit'),
        meta: {
          title: '分类编辑',
          role: ['shuke_operation', 'administrator']
        }
      }
    ]
  },
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
