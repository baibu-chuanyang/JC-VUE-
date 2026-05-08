import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { requiresAuth: true }
  },
  {
  path: '/table',
  name: 'TableList',
  component: () => import('../views/TableList.vue'),
  meta: { requiresAuth: true }
  },
  {
    path: '/user',
    name: 'UserManager',
    component: () => import('../views/UserManager.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/system',
    name: 'SystemSet',
    component: () => import('../views/SystemSet.vue'), // 这里已修复！！！
    meta: { requiresAuth: true }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('isLogin') === 'true'
  if (to.meta.requiresAuth) {
    if (isLogin) next()
    else next('/login')
  } else {
    next()
  }
})

export default router