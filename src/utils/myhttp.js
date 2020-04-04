import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/app/v1_0'
})

// http request 请求拦截器
instance.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 响应拦截器
instance.interceptors.response.use(
  response => {
    return response
  },
  // 接口错误状态处理，也就是说无响应时的处理
  error => {
    return Promise.reject(error) // 返回接口返回的错误信息
  }
)

export default instance
