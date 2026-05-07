<template>
  <div class="table-wrap">
    <!-- 搜索 + 按钮 -->
    <el-row :gutter="10" style="margin-bottom: 20px;">
      <el-col :span="8">
        <el-input v-model="searchName" placeholder="请输入姓名搜索" clearable />
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="search">搜索</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="success" @click="openAddDialog">新增</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="danger" @click="handleBatchDelete">批量删除</el-button>
      </el-col>
    </el-row>

    <!-- 表格 -->
    <el-table
      :data="tableData"
      border
      @selection-change="handleSelectionChange"
      style="width: 100%; margin-top: 10px"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="age" label="年龄" />
      <el-table-column prop="phone" label="手机号" />
      <el-table-column label="操作" width="180">
        <template #default="scope">
          <el-button size="small" @click="openEditDialog(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      v-model:current-page="page"
      v-model:page-size="limit"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
      style="margin-top: 20px; text-align: right"
    />

    <!-- 新增/编辑弹窗 -->
    <el-dialog v-model="dialogVisible" title="用户信息" width="400px">
      <el-form :model="form" :rules="rules" label-width="80px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="form.age"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

// 原始数据
const originData = ref([
  { id: 1, name: '张三', age: 20, phone: '13800138000' },
  { id: 2, name: '李四', age: 22, phone: '13900139000' },
  { id: 3, name: '王五', age: 25, phone: '13700137000' }
])

// 搜索
const searchName = ref('')
const tableData = computed(() => {
  return originData.value.filter(item => {
    if (!searchName.value) return true
    return item.name.includes(searchName.value)
  })
})

// 分页
const page = ref(1)
const limit = ref(5)
const total = ref(originData.value.length)

// 弹窗 & 表单
const dialogVisible = ref(false)
const form = ref({ id: '', name: '', age: '', phone: '' })
const isEdit = ref(false)

// 表单校验
const rules = ref({
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  age: [{ required: true, message: '请输入年龄', trigger: 'blur' }],
  phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }]
})

// 多选批量删除
const multipleSelection = ref([])
const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

// 打开新增
const openAddDialog = () => {
  dialogVisible.value = true
  isEdit.value = false
  form.value = { id: '', name: '', age: '', phone: '' }
}

// 打开编辑
const openEditDialog = (row) => {
  dialogVisible.value = true
  isEdit.value = true
  form.value = { ...row }
}

// 提交保存
const submitForm = () => {
  if (isEdit.value) {
    const index = originData.value.findIndex(item => item.id === form.value.id)
    if (index !== -1) {
      originData.value[index] = { ...form.value }
      ElMessage.success('编辑成功')
    }
  } else {
    const newId = Math.max(...originData.value.map(item => item.id)) + 1
    originData.value.push({ id: newId, ...form.value })
    total.value = originData.value.length
    ElMessage.success('新增成功')
  }
  dialogVisible.value = false
}

// 单条删除
const handleDelete = (row) => {
  ElMessageBox.confirm('确定要删除这条数据吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    originData.value = originData.value.filter(item => item.id !== row.id)
    total.value = originData.value.length
    ElMessage.success('删除成功')
  }).catch(() => {
    ElMessage.info('已取消删除')
  })
}

// 批量删除
const handleBatchDelete = () => {
  if (multipleSelection.value.length === 0) {
    ElMessage.warning('请选择要删除的数据')
    return
  }
  ElMessageBox.confirm('确定删除选中的数据吗？', '提示').then(() => {
    const ids = multipleSelection.value.map(item => item.id)
    originData.value = originData.value.filter(item => !ids.includes(item.id))
    total.value = originData.value.length
    ElMessage.success('批量删除成功')
  })
}

// 搜索
const search = () => {
  page.value = 1
}

// 分页事件
const handleSizeChange = (val) => { limit.value = val }
const handleCurrentChange = (val) => { page.value = val }
</script>

<style scoped>
.table-wrap {
  padding: 20px;
}
</style>