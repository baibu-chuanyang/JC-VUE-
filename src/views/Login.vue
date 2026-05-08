<template>
  <div class="login-page">
    <div class="login-card">
      <div class="logo-box">
        <h1>后台管理系统</h1>
        <p>Management System</p>
      </div>

      <el-form v-model="loginForm" class="login-form">
        <el-form-item>
          <el-input
            v-model="loginForm.username"
            placeholder="请输入账号"
            size="large"
            prefix-icon="user"
            round
          />
        </el-form-item>

        <el-form-item>
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
            size="large"
            prefix-icon="lock"
            round
          />
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            size="large"
            class="login-btn"
            @click="login"
          >
            登 录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const loginForm = ref({
  username: '',
  password: ''
})

const login = () => {
  if (!loginForm.value.username || !loginForm.value.password) {
    ElMessage.warning('请输入账号密码')
    return
  }
  localStorage.setItem('isLogin', 'true')
  ElMessage.success('登录成功')
  router.push('/home')
}
</script>

<style scoped>
/* 背景渐变更高级 */
.login-page {
  height: 100vh;
  background: linear-gradient(135deg, #5b86e5 0%, #36d1dc 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 卡片更精致 */
.login-card {
  width: 420px;
  background: #ffffff;
  border-radius: 20px;
  padding: 55px 45px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}
.login-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
}

/* LOGO 区域 */
.logo-box {
  text-align: center;
  margin-bottom: 40px;
}
.logo-box h1 {
  font-size: 26px;
  color: #2c3e50;
  margin: 0;
  font-weight: 600;
}
.logo-box p {
  font-size: 14px;
  color: #7f8c8d;
  margin-top: 6px;
}

/* 表单间距 */
.login-form {
  margin-top: 10px;
}

/* 登录按钮美化 */
.login-btn {
  width: 100%;
  height: 46px;
  font-size: 16px;
  border-radius: 8px;
  margin-top: 10px;
  transition: all 0.2s;
}
.login-btn:hover {
  transform: scale(1.02);
}
</style>