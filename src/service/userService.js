import httpRequest from '~/http.js'

export const userService = {

    getLoginUser: () => httpRequest({ url: '/omgcms/api/current-user', method: 'get' }),

    getUserList: (params) => httpRequest({ url: '/omgcms/api/users', method: 'get', params }),

    //参数必须用data，使用params传递会转为queryString提交
    saveUser: (data) => httpRequest({ url: '/omgcms/api/user', method: 'post', data }),

    getUserById: (params) => httpRequest({ url: '/omgcms/api/user', method: 'get', params })
}