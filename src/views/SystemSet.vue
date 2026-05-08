<template>
  <div class="page">
    <div class="title">
      <h2>系统设置</h2>
    </div>
    <div class="card">
      <el-form label-width="100px">
        <el-form-item label="系统名称">
          <el-input value="后台管理系统" />
        </el-form-item>
        <el-form-item label="版本号">
          <el-input value="v1.0.0" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">保存设置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.page { padding: 10px; }
.title { margin-bottom: 20px; }
.card { background: white; padding: 20px; border-radius:12px; }
</style>