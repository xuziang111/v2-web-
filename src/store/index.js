import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo:{
      username:'用户名',
      vipLv:1,
      email:'11111111111@qq.com',
      deposit:3,
      LvExp:2,
      accountExp:29,
      clientNum:6,
      rateLimiting:'无限制',
      usedData:1,
      remainingData:20,
    },
    linkInfo:{
      port:23333,
      password:'123456',
      security:'chacha20',
      xieyi:'auth_aes12',
      hunxiao:'plain',
      hunxiaocanshu:'wns.wwww',
    }

  },
  mutations: {

  },
  actions: {},
  modules: {}
});
