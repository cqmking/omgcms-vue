import httpRequest from '~/http.js'

export const roleService = {

    getRoleList: (params) => httpRequest({ url: '/omgcms/api/roles', method: 'get', params }),

    getRoleById: (params) => httpRequest({ url: '/omgcms/api/role', method: 'get', params }),
   
    saveRole: (data) => httpRequest({ url: '/omgcms/api/role', method: 'post', data }),
    
}