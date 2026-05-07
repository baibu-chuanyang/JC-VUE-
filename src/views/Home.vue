<template>
  <el-container style="height:100vh">
    <!-- 顶部 -->
    <el-header style="background:#fff;line-height:60px;border-bottom:1px solid #eee">
      <div style="display:flex;justify-content:space-between">
        <div><strong>企业级后台管理系统</strong></div>
        <div>
          欢迎你，管理员
          <el-button type="text" @click="logout">退出登录</el-button>
        </div>
      </div>
    </el-header>

    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px" background="#fff">
        <el-menu
          default-active="$route.path"
          router
          background="#fff"
          text-color="#000"
          active-text-color="#409EFF"
        > 
          <el-menu-item index="/home">首页概览</el-menu-item>
          <el-menu-item index="/table">表格CRUD</el-menu-item>
          <el-menu-item index="UserManager">用户管理</el-menu-item>
          <el-menu-item index="/systemSet">系统设置</el-menu-item>
        </el-menu>
      </el-aside>

      <!-- 主内容 -->
      <el-main style="background:#f5f5f5;overflow:auto">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const logout = () => {
  localStorage.clear()
  router.push('/login')
}
</script>

<style>
* { margin:0; padding:0; box-sizing:border-box; }
.el-header { padding:0 20px; }
</style>