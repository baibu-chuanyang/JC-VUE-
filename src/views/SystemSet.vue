<template>
  <div class="wrap">
    <el-card>
      <h3>系统设置</h3>
      <el-divider />

      <el-form :model="form" label-width="100px" style="max-width:500px">
        <el-form-item label="当前账号">
          <el-input v-model="form.username" disabled />
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="旧密码">
          <el-input v-model="form.oldPwd" show-password />
        </el-form-item>
        <el-form-item label="新密码">
          <el-input v-model="form.newPwd" show-password />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">保存设置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const form = ref({
  username: 'admin',
  name: '系统管理员',
  oldPwd: '',
  newPwd: ''
})

const save = () => {
  ElMessage.success('保存成功')
}
</script>

<style scoped>
.wrap { padding:20px; }
</style>