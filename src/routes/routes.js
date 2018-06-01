import Layout from '../components/Layout.vue'

import SysInfo from '../components/workspace/SysInfo'
import Dashboard from '../components/workspace/Dashboard'

import ArticleList from '../components/contents/ArticleList'

import UserList from '../components/user/UserList'
import UserEdit from '../components/user/UserEdit'

import RoleList from '../components/user/RoleList'
import RoleEdit from '../components/user/RoleEdit'
import RolePermDefine from '../components/user/RolePermDefine'
import RoleUserAssign from '../components/user/RoleUserAssign'


import Login from '../components/views/Login.vue'

let routes = [
    {
        path: '/',
        redirect: '/login',
        hidden: true
    },
    {
        path: '/workspace',
        redirect: { name: 'dashboard' },
        component: Layout,
        name: 'workspace',
        iconClass: "fa-tachometer",
        meta: { label: '工作台' },
        children: [
            {
                path: "/workspace/dashboard",
                component: Dashboard,
                name: "dashboard",
                meta: { label: '管理首页' }
            },
            {
                path: "/workspace/sysinfo",
                component: SysInfo,
                name: "sysinfo",
                meta: { label: '系统信息' }
            }
        ]
    },
    {
        path: '/contents',
        redirect: { name: 'articles' },
        component: Layout,
        name: 'contents',
        iconClass: "fa-book",
        meta: { label: '内容管理' },
        children: [
            {
                meta: { label: '文章管理' },
                path: "/contents/articles",
                component: ArticleList,
                name: "articles",
            },
            {
                meta: { label: '模板管理' },
                path: "/contents/templates",
            },
            {
                meta: { label: '结构管理' },
                path: "/contents/structure",
            }
        ]
    },
    {
        path: '/system',
        redirect: { name: 'userList' },
        component: Layout,
        name: 'system',
        iconClass: "fa-cog",
        meta: { label: '用户管理' },
        children: [
            {
                path: "/system/userList",
                name: 'userList',
                component: UserList,
                meta: { label: '成员管理' }
            },
            {
                path: "/system/userAdd",
                name: 'userAdd',
                component: UserEdit,
                hidden: true,
                meta: { label: '添加用户' }
            },
            {
                path: "/system/userEdit",
                name: 'userEdit',
                component: UserEdit,
                hidden: true,
                meta: { label: '修改用户' }
            },
            {
                path: "/system/roleList",
                name: 'roleList',
                component: RoleList,
                meta: { label: '角色管理' }
            },
            {
                path: "/system/roleAdd",
                name: 'roleAdd',
                component: RoleEdit,
                hidden: true,
                meta: { label: '添加角色' }
            },
            {
                path: "/system/roleEdit",
                name: 'roleEdit',
                component: RoleEdit,
                hidden: true,
                meta: { label: '修改角色' }
            },
            {
                path: "/system/rolePermDefine",
                name: 'rolePermDefine',
                component: RolePermDefine,
                hidden: true,
                meta: { label: '权限定义' }
            },
            {
                path: "/system/roleUserAssign",
                name: 'roleUserAssign',
                component: RoleUserAssign,
                hidden: true,
                meta: { label: '分配用户' }
            }
        ]
    },
    {
        //Login
        path: "/login",
        name: 'login',
        component: Login,
        meta: { label: '用户登录' },
        hidden: true
    }

];

export default routes;