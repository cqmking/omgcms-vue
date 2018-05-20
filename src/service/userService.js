import httpRequest from '~/http.js'

export const userService = {

    getLoginUser: () => httpRequest({ url: '/omgcms/api/current-user', method: 'get' }),

    getUserList: () => httpRequest({ url: '/omgcms/api/users', method: 'get' })

}