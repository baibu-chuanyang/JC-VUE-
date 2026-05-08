<template>
  <div class="page">
    <div class="title">
      <h2>用户管理</h2>
    </div>
    <div class="card">
      <el-table :data="tableData" border>
        <el-table-column prop="id" label="ID" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="age" label="年龄" />
        <el-table-column prop="phone" label="手机号" />
      </el-table>
    </div>
  </div>
</template>

<script setup>
const tableData = [
  { id: 1, name: '张三', age: 20, phone: '13800138000' },
  { id: 2, name: '李四', age: 24, phone: '13900139000' },
  { id: 3, name: '王五', age: 25, phone: '13700137000' }
]
</script>

<style scoped>
.page { padding: 10px; }
.title { margin-bottom: 20px; }
.card { background: white; padding: 20px; border-radius: 12px; }
</style>