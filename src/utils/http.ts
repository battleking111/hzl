import axios from 'axios'
import { ElLoading } from 'element-plus'

const http = axios.create({
    baseURL: 'http://back.9yuecloud.com/'
})

http.interceptors.request.use(config => {
    const loading = ElLoading.service({
        text: '加载中...'
    })
    // console.log(loading);

    return config
}, err => {
    Promise.reject(err)
})

http.interceptors.response.use(ruselt => {
    const loading = ElLoading.service({
        text: '加载中...'
    })
    loading.close()
    return ruselt
}, err => {
    const loading = ElLoading.service({
        text: '加载中...'
    })
    loading.close()
    Promise.reject(err)
})

export default http