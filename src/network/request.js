import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  // axios的拦截器
  instance.interceptors.request.use(err => {
    return err
  }, err => {})
  // 返回拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {})
  return instance(config)
}
