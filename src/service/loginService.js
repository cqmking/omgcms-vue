import httpRequest from '~/http.js'

export const loginService = {

    loginByScreenName: (data) => httpRequest({ url: '/omgcms/api/login', method: 'post', data }),

    logout: () => httpRequest({ url: '/omgcms/api/logout', method: 'get'})


}