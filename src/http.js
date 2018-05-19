/**
 * http配置
 */
// 引入axios以及element ui中的loading和message组件
import axios from 'axios'
import QS from 'qs';
import { Loading, Message } from 'element-ui'

// 超时时间
axios.defaults.timeout = 5000
axios.defaults.withCredentials = true
// axios.defaults.baseURL = "http://47.106.167.5"
axios.defaults.baseURL = "http://127.0.0.1:8080"

// http请求拦截器
var loadinginstace
axios.interceptors.request.use(config => {
    // element ui Loading方法
    loadinginstace = Loading.service({ fullscreen: true })
    if(config.method=="post"){
        config.data = QS.stringify(config.data);
    }
    return config
}, error => {
    loadinginstace.close()
    Message.error({
        message: '加载超时'
    })
    return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading
    loadinginstace.close()
    return data
}, error => {
    
    if(error.response.data && error.response.data.message){
        Message.error({
            message: error.response.data.message
        })
    }
    
    loadinginstace.close()
    return Promise.reject(error)
})


export default axios

