import { createRouter, createWebHashHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import TableList from '../views/TableList.vue'
import UserManager from '../views/UserManager.vue'
import SystemSet from '../views/SystemSet.vue'

// 1. 先定义路由表
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/table',
    name: 'TableList',
    component: TableList
  },
  {
    path: '/UserManager',
    name: 'UserManager',
    component: UserManager
  },
  {
    path: '/systemSet',
    name: 'SystemSet',
    component: SystemSet
  },
  // 404 页面（必须放在所有路由的最后）
  { 
    path: '/404', 
    component: () => import('../views/404.vue') 
  },
  { 
    path: '/:pathMatch(.*)*', 
    redirect: '/404' 
  }
]

// 2. 再创建 router
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// ========== 全局路由守卫 ==========
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('isLogin')

  // 访问登录页时
  if (to.path === '/login') {
    // 已登录则直接跳首页
    if (isLogin) {
      next('/home')
    } else {
      next()
    }
  } else {
    // 未登录则跳登录页
    if (!isLogin) {
      next('/login')
    } else {
      next()
    }
  }
})

export default router