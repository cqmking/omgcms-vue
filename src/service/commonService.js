import httpRequest from '~/http.js'

export const commonService = {
    getServerInfo: () => httpRequest({ url: '/omgcms/api/server-info', method: 'get'})
}