import httpRequest from '~/http.js'

export const userService = {
    
    getLoginUser: () => httpRequest({ url: '/omgcms/api/currentUser', method: 'get'})

}