<template>
  <div class="login-box">
    <el-card class="login-card">
      <h2>后台管理系统</h2>
      <el-form v-model="loginForm" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="loginForm.username" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin" style="width: 100%">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()
const loginForm = ref({
  username: '',
  password: ''
})

// 登录方法（模拟接口 + 成功必跳转）
const handleLogin = () => {
  // 简单校验
  if (!loginForm.value.username || !loginForm.value.password) {
    ElMessage.warning('请输入账号密码')
    return
  }

  ElMessage.success('登录中...')

  // 模拟请求
  setTimeout(() => {
    // 模拟登录成功
    localStorage.setItem('isLogin', true)
    
    ElMessage.success('登录成功')
    
    // 强制跳转
    router.push('/home').catch(err => {})
  }, 500)
}
</script>

<style scoped>
.login-box {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f2f5;
}
.login-card {
  width: 400px;
  padding: 20px;
}
</style>