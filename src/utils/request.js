import axios from 'axios'
import { ElMessage } from 'element-plus'
import { ElLoading } from 'element-plus'

// 创建axios实例
const service = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // 测试接口地址
  timeout: 5000
})

let loading

const startLoading = () => {
  loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0,0,0,0.5)'
  })
}

const endLoading = () => loading.close()

// 请求时
request.interceptors.request.use(config=>{
  startLoading()
  return config
})

// 响应时
response.interceptors.response.use(res=>{
  endLoading()
  return res
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 可以在这里加token
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    ElMessage.error('接口请求失败')
    return Promise.reject(error)
  }
)

export default service