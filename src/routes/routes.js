import Layout from '../components/Layout.vue'
import Home from '../components/home/Home.vue'
import UserList from '../components/user/UserList'
import Login from '../views/Login.vue'

let routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/layout',
        redirect: { name: 'home' },
        component: Layout,
        name: 'layout',
        meta: {label: '主页'},
        children: [
            { path: 'home', component: Home, name: 'home', iconClass: "fa-home", meta: {label: '主页'} },
            {
                path: "user",
                name: 'user',
                component: UserList,
                iconClass: "fa-user",
                meta: {label: '用户管理'}
            },
            {
                path: "role",
                name: 'role',
                component: UserList,
                iconClass: "fa-id-badge",
                meta: {label: '角色管理'}
            },
            {
                path: "/content",
                meta: {label: '内容管理'},
                iconClass: "fa-book",
                children: [
                    {
                        meta: {label: '模板管理'},
                        path: "/components"
                    },
                    {
                        meta: {label: '结构管理'},
                        path: "/components/permission"
                    },
                    {
                        meta: {label: '文章管理'},
                        path: "/components/permission"
                    }

                ]
            }
        ]
    },
    {
        //Login
        path: "/login",
        name: 'login',
        component: Login,
        meta: {label: '用户登录'}
    }

];

export default routes;