import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/codeplugin',
    name: 'codeplugin',
    meta: {
      icon: 'ios-code',
      title: '编码插件'
    },
    component: Main,
    children: [
      {
        path: 'dt/list',
        name: 'dt-list',
        meta: {
          icon: 'logo-tumblr',
          title: '数据库表'
        },
        component: () => import('@/view/com/pro/code/plugin/dt/dt-list/dt-list.vue')
      },
      {
        path: 'dt',
        name: 'dt',
        meta: {
          hideInMenu: true
        },
        component: parentView,
        children: [
          {
            path: 'edit/:dtId',
            name: 'dt-edit',
            meta: {
              icon: 'ios-brush-outline',
              title: '编辑数据库表',
            },
            component: () => import('@/view/com/pro/code/plugin/dt/dt-edit/dt-edit.vue')
          },
          {
            path: 'detail/:dtId',
            name: 'dt-detail',
            meta: {
              icon: 'md-bulb',
              title: '数据库表详情',
            },
            component: () => import('@/view/com/pro/code/plugin/dt/dt-detail/dt-detail.vue')
          }
        ]
      },
      {
        path: 'sort/list',
        name: 'sort-list',
        meta: {
          icon: 'ios-funnel',
          title: '排序'
        },
        component: () => import('@/view/com/pro/code/plugin/sort/sort-list/sort-list.vue')
      },
      {
        path: 'sort',
        name: 'sort',
        meta: {
          hideInMenu: true
        },
        component: parentView,
        children: [
          {
            path: 'edit/:sortId',
            name: 'sort-edit',
            meta: {
              icon: 'ios-brush-outline',
              title: '编辑排序',
            },
            component: () => import('@/view/com/pro/code/plugin/sort/sort-edit/sort-edit.vue')
          },
          {
            path: 'detail/:sortId',
            name: 'sort-detail',
            meta: {
              icon: 'md-bulb',
              title: '排序详情',
            },
            component: () => import('@/view/com/pro/code/plugin/sort/sort-detail/sort-detail.vue')
          }
        ]
      },
      {
        path: 'virtualColumns/list',
        name: 'virtualColumns-list',
        meta: {
          icon: 'logo-vimeo',
          title: '虚拟列'
        },
        component: () => import('@/view/com/pro/code/plugin/virtualColumns/virtualColumns-list/virtualColumns-list.vue')
      },
      {
        path: 'virtualColumns',
        name: 'virtualColumns',
        meta: {
          hideInMenu: true
        },
        component: parentView,
        children: [
          {
            path: 'edit/:virtualColumnsId',
            name: 'virtualColumns-edit',
            meta: {
              icon: 'ios-brush-outline',
              title: '编辑虚拟列',
            },
            component: () => import('@/view/com/pro/code/plugin/virtualColumns/virtualColumns-edit/virtualColumns-edit.vue')
          },
          {
            path: 'detail/:virtualColumnsId',
            name: 'virtualColumns-detail',
            meta: {
              icon: 'md-bulb',
              title: '虚拟列详情',
            },
            component: () => import('@/view/com/pro/code/plugin/virtualColumns/virtualColumns-detail/virtualColumns-detail.vue')
          }
        ]
      },
      {
        path: 'coding',
        name: 'coding',
        meta: {
          icon: 'ios-thunderstorm-outline',
          title: '编码'
        },
        component: () => import('@/view/com/pro/code/plugin/business/coding/coding.vue')
      },
      {
        path: 'columns/list',
        name: 'columns-list',
        meta: {
          icon: 'md-reorder',
          title: '列'
        },
        component: () => import('@/view/com/pro/code/plugin/columns/columns-list/columns-list.vue')
      },
      {
        path: 'columns',
        name: 'columns',
        meta: {
          hideInMenu: true
        },
        component: parentView,
        children: [
          {
            path: 'edit/:columnsId',
            name: 'columns-edit',
            meta: {
              icon: 'ios-brush-outline',
              title: '编辑列',
            },
            component: () => import('@/view/com/pro/code/plugin/columns/columns-edit/columns-edit.vue')
          },
          {
            path: 'detail/:columnsId',
            name: 'columns-detail',
            meta: {
              icon: 'md-bulb',
              title: '列详情',
            },
            component: () => import('@/view/com/pro/code/plugin/columns/columns-detail/columns-detail.vue')
          }
        ]
      },
      {
        path: 'pk/list',
        name: 'pk-list',
        meta: {
          icon: 'md-key',
          title: '主键'
        },
        component: () => import('@/view/com/pro/code/plugin/pk/pk-list/pk-list.vue')
      },
      {
        path: 'pk',
        name: 'pk',
        meta: {
          hideInMenu: true
        },
        component: parentView,
        children: [
          {
            path: 'edit/:pkId',
            name: 'pk-edit',
            meta: {
              icon: 'ios-brush-outline',
              title: '编辑主键',
            },
            component: () => import('@/view/com/pro/code/plugin/pk/pk-edit/pk-edit.vue')
          },
          {
            path: 'detail/:pkId',
            name: 'pk-detail',
            meta: {
              icon: 'md-bulb',
              title: '主键详情',
            },
            component: () => import('@/view/com/pro/code/plugin/pk/pk-detail/pk-detail.vue')
          }
        ]
      },
      {
        path: 'query/list',
        name: 'query-list',
        meta: {
          icon: 'md-search',
          title: '查询'
        },
        component: () => import('@/view/com/pro/code/plugin/query/query-list/query-list.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          hideInMenu: true
        },
        component: parentView,
        children: [
          {
            path: 'edit/:queryId',
            name: 'query-edit',
            meta: {
              icon: 'ios-brush-outline',
              title: '编辑查询',
            },
            component: () => import('@/view/com/pro/code/plugin/query/query-edit/query-edit.vue')
          },
          {
            path: 'detail/:queryId',
            name: 'query-detail',
            meta: {
              icon: 'md-bulb',
              title: '查询详情',
            },
            component: () => import('@/view/com/pro/code/plugin/query/query-detail/query-detail.vue')
          }
        ]
      }
    ]
  },
  {
    path: '',
    name: 'doc',
    meta: {
      title: '文档',
      href: 'https://lison16.github.io/iview-admin-doc/#/',
      icon: 'ios-book'
    }
  },
  {
    path: '/join',
    name: 'join',
    component: Main,
    children: [
      {
        path: 'join_page',
        name: 'join_page',
        meta: {
          icon: '_qq',
          title: 'QQ群'
        },
        component: () => import('@/view/join-page.vue')
      }
    ]
  },
  {
    path: '/components',
    name: 'components',
    meta: {
      icon: 'logo-buffer',
      title: '组件'
    },
    component: Main,
    children: [
      {
        path: 'count_to_page',
        name: 'count_to_page',
        meta: {
          icon: 'md-trending-up',
          title: '数字渐变'
        },
        component: () => import('@/view/components/count-to/count-to.vue')
      },
      {
        path: 'drag_list_page',
        name: 'drag_list_page',
        meta: {
          icon: 'ios-infinite',
          title: '拖拽列表'
        },
        component: () => import('@/view/components/drag-list/drag-list.vue')
      },
      {
        path: 'tables_page',
        name: 'tables_page',
        meta: {
          icon: 'md-grid',
          title: '多功能表格'
        },
        component: () => import('@/view/components/tables/tables.vue')
      },
      {
        path: 'split_pane_page',
        name: 'split_pane_page',
        meta: {
          icon: 'md-pause',
          title: '分割窗口'
        },
        component: () => import('@/view/components/split-pane/split-pane.vue')
      },
      {
        path: 'markdown_page',
        name: 'markdown_page',
        meta: {
          icon: 'logo-markdown',
          title: 'Markdown编辑器'
        },
        component: () => import('@/view/components/markdown/markdown.vue')
      },
      {
        path: 'editor_page',
        name: 'editor_page',
        meta: {
          icon: 'ios-create',
          title: '富文本编辑器'
        },
        component: () => import('@/view/components/editor/editor.vue')
      },
      {
        path: 'icons_page',
        name: 'icons_page',
        meta: {
          icon: '_bear',
          title: '自定义图标'
        },
        component: () => import('@/view/components/icons/icons.vue')
      }
    ]
  },
  {
    path: '/update',
    name: 'update',
    meta: {
      icon: 'md-cloud-upload',
      title: '数据上传'
    },
    component: Main,
    children: [
      {
        path: 'update_table_page',
        name: 'update_table_page',
        meta: {
          icon: 'ios-document',
          title: '上传Csv'
        },
        component: () => import('@/view/update/update-table.vue')
      },
      {
        path: 'update_paste_page',
        name: 'update_paste_page',
        meta: {
          icon: 'md-clipboard',
          title: '粘贴表格数据'
        },
        component: () => import('@/view/update/update-paste.vue')
      }
    ]
  },
  {
    path: '/excel',
    name: 'excel',
    meta: {
      icon: 'ios-stats',
      title: 'EXCEL导入导出'
    },
    component: Main,
    children: [
      {
        path: 'upload-excel',
        name: 'upload-excel',
        meta: {
          icon: 'md-add',
          title: '导入EXCEL'
        },
        component: () => import('@/view/excel/upload-excel.vue')
      },
      {
        path: 'export-excel',
        name: 'export-excel',
        meta: {
          icon: 'md-download',
          title: '导出EXCEL'
        },
        component: () => import('@/view/excel/export-excel.vue')
      }
    ]
  },
  {
    path: '/tools_methods',
    name: 'tools_methods',
    meta: {
      hide: true
    },
    component: Main,
    children: [
      {
        path: 'tools_methods_page',
        name: 'tools_methods_page',
        meta: {
          icon: 'ios-hammer',
          title: '工具方法',
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/tools-methods/tools-methods.vue')
      }
    ]
  },
  {
    path: '/i18n',
    name: 'i18n',
    meta: {
      hide: true
    },
    component: Main,
    children: [
      {
        path: 'i18n_page',
        name: 'i18n_page',
        meta: {
          icon: 'md-planet',
          title: '国际化'
        },
        component: () => import('@/view/i18n/i18n-page.vue')
      }
    ]
  },
  {
    path: '/directive',
    name: 'directive',
    meta: {
      hide: true
    },
    component: Main,
    children: [
      {
        path: 'directive_page',
        name: 'directive_page',
        meta: {
          icon: 'ios-navigate',
          title: '指令'
        },
        component: () => import('@/view/directive/directive.vue')
      }
    ]
  },
  {
    path: '/multilevel',
    name: 'multilevel',
    meta: {
      icon: 'md-menu',
      title: '多级菜单'
    },
    component: Main,
    children: [
      {
        path: 'level_2_1',
        name: 'level_2_1',
        meta: {
          icon: 'md-funnel',
          title: '二级-1'
        },
        component: () => import('@/view/multilevel/level-2-1.vue')
      },
      {
        path: 'level_2_2',
        name: 'level_2_2',
        meta: {
          access: ['super_admin'],
          icon: 'md-funnel',
          showAlways: true,
          title: '二级-2'
        },
        component: parentView,
        children: [
          {
            path: 'level_2_2_1',
            name: 'level_2_2_1',
            meta: {
              icon: 'md-funnel',
              title: '三级'
            },
            component: () => import('@/view/multilevel/level-2-2/level-3-1.vue')
          }
        ]
      },
      {
        path: 'level_2_3',
        name: 'level_2_3',
        meta: {
          icon: 'md-funnel',
          title: '二级-3'
        },
        component: () => import('@/view/multilevel/level-2-3.vue')
      },
    ]
  },
  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `动态路由-${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `带参路由-${route.query.id}`,
          notCache: true
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
