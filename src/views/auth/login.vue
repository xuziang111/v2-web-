<template>
    <div id="login-content">
      <h1>登录</h1>
      <div class="login-option">
        <label>邮箱</label>
        <div>
          <input
            type="text"
            name="Emali"
            v-model="user.email"
            class="loginInput"
          />
        </div>
      </div>
      <div class="login-option">
        <label>密码</label>
        <div>
          <input
            type="password"
            name="Password"
            v-model="user.password"
            class="loginInput"
          />
        </div>
      </div>
      <el-button id="login" @click="userLogin">确认登陆</el-button>
    </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    userLogin: function() {
      let _this = this
      this.$axios
        .post("/user", {
          email: this.user.email,
          password: this.user.password
        })
        .then(function(response) {
          console.log(response)
          _this.$store.commit('LOGIN_IN','yyy')
          _this.$router.push('/user/panel')
        })
        .catch(function(error) {
          // _this.$store.commit('LOGIN_IN','yyy')
          console.log(error);
          _this.$store.commit('LOGIN_IN','yyy')
          _this.$router.push('/user/panel')
        });
    }
  }
};
</script>

<style scoped>
  #login-container,.login-option input{
    color:#fff
  }
#login-container h1 {
  font-size: 3.5rem;
  text-align: center;
}
.loginInput {
  border: none;
  border-bottom: 2px solid #fff;
  background: none;
  outline: none;
  height: 42px;
  font-size: 16px;
  width: 100%;
}
#login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}
#login-content {
  width: 51%;
}
.login-option {
  width: 100%;
  margin-top: 30px;
}
#login {
  margin-top: 30px;
  width: 100%;
}
</style>
