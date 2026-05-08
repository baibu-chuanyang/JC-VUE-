<template>
  <div v-if="$route.path !== '/login'">
    <el-container style="height: 100vh;">
      <el-aside width="220px" style="background: #2f4050;">
        <div style="color:white; text-align:center; line-height:60px; font-size:16px; font-weight:bold;">
          后台管理系统
        </div>
        <el-menu
          default-active="$route.path"
          background-color="#2f4050"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/home">
            <el-icon><house /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="/user">
            <el-icon><user /></el-icon>
            <span>用户管理</span>
          </el-menu-item>
          <!-- 这里给表格列表加上图标 -->
          <el-menu-item index="/table">
            <el-icon><document /></el-icon>
            <span>表格列表</span>
          </el-menu-item>
          <el-menu-item index="/system">
            <el-icon><setting /></el-icon>
            <span>系统设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="background:#fff; display:flex; justify-content:end; align-items:center; padding:0 20px; box-shadow:0 1px 4px #00000010;">
          <el-button type="danger" size="small" @click="logout">退出登录</el-button>
        </el-header>
        <el-main style="background:#f5f7fa;">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
  <router-view v-else />
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
// 引入 document 图标
import { House, User, Document, Setting } from '@element-plus/icons-vue'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('isLogin')
  ElMessage.success('退出成功')
  router.push('/login')
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>