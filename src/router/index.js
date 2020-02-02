import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import auth from "../components/auth.vue";
import user from "../components/user.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/auth",
    name: "auth",
    component: auth,
    children: [
      {
        path: "/auth/login",
        name: "login",
        meta:{
          requiresAuth: true,
          name:"登录"
        },
        component: () => import(/* webpackChunkName: "auth" */ "../views/auth/login.vue")
      },
      {
        path: "/auth/register",
        name: "register",
        meta:{
          requiresAuth: true,
          name:"注册"
        },
        component: () => import(/* webpackChunkName: "auth" */ "../views/auth/register.vue")
      }
    ]
  },
  {
    path: "/user",
    name: "user",
    component: user,
    children: [
      {
        path: "/user/panel",
        name: "panel",
        meta:{
          requiresAuth: true,
          name:"控制面板"
        },
        component: () => import(/* webpackChunkName: "user" */ "../views/user/panel.vue")
      },
      {
        path: "/user/node",
        name: "node",
        meta:{
          requiresAuth: true,
          name:"节点"
        },
        component: () => import(/* webpackChunkName: "user" */ "../views/user/node.vue")
      }
    ]
  },
  {
    path: "/",
    name: "home",
    component: Home
  }
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});




export default router;
