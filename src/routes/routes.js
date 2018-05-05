import Layout from '../components/Layout.vue'

let routes = [
    {
        path: '/',
        redirect: 'layout'
    },
    {
        path: '/layout',
        component: Layout,
        name: 'layout'
    }
];

export default routes;