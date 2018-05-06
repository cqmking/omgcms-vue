<template>
    <!-- 增加ref字段，直接访问子组件方法。同时注册select事件，当菜单点击时触发 -->
    <el-menu router unique-opened ref="navbar" :default-active="onRoutes" @select="selectMenu" :collapse="isCollapse">
        <nav-item v-for="(item, n) in navList" :item="item" :navIndex="String(n)" :key="n"></nav-item>
    </el-menu>
</template>

<script>
import NavItem from "./NavItem";

export default {
  props: ["isCollapse"],
  data: function() {
    var menuData = [
      {
        path: "/",
        iconClass: "fa-home",
        name: "主页"
      },
      {
        path: "/home",
        iconClass: "fa-user",
        name: "用户管理"
      },
      {
        path: "/home",
        iconClass: "fa-id-badge",
        name: "角色管理"
      },
      {
        name: "内容管理",
        iconClass: "fa-book",
        child: [
          {
            name: "模板管理",
            path: "/components"
          },
          {
            name: "结构管理",
            path: "/components/permission"
          },
          {
            name: "文章管理",
            path: "/components/permission"
          }

        ]
      }
    ];

    return {
      navList: menuData
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path;
    }
  },
  methods: {
    selectMenu(index, indexPath) {
      console.log("============>");
      let openMenu = this.$refs.navbar.openedMenus.concat([]);
      openMenu = openMenu.reverse();
      openMenu.forEach(ele => {
        this.$refs.navbar.closeMenu(ele);
      });
    }
  },
  components: { NavItem }
};
</script>
