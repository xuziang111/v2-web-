<template>
    <div id="register-content">
      <h1>注册</h1>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="register-option">
          <label>昵称</label>
          <div>
            <input
                    type="text"
                    name="Emali"
                    v-model="user.name"
                    class="loginInput"
            />
          </div>
        </div>
        </el-col>
        <el-col :span="12">
          <div class="register-option">
            <label>邮箱</label>
            <div>
              <input
                      type="email"
                      name="Email"
                      v-model="user.email"
                      class="loginInput"
              />
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="register-option">
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
        </el-col>
        <el-col :span="12">
          <div class="register-option">
            <label>重复密码</label>
            <div>
              <input
                      type="password"
                      name="Password2"
                      v-model="password2"
                      class="loginInput"
              />
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="register-option">
            <label>联系方式</label>
            <div>
              <el-select v-model="user.contact" placeholder="请选择">
                <el-option
                        v-for="item in contact"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="register-option">
            <label>联系方式账号</label>
            <div>
              <input
                      type="text"
                      name="contactAccount"
                      v-model="user.contactAccount"
                      class="loginInput"
              />
            </div>
          </div>
        </el-col>
      </el-row>
      <el-button id="register" @click="userRegister">确认注册</el-button>
    </div>
</template>
<script>
export default {
  name: "register",
  data (){
    return {
      contact:[
        {
          value:'QQ',
          label:'QQ'
        },
        {
          value:'微信',
          label:'微信'
        },
        {
          value:'Telegram',
          label:'Telegram'
        }
        ,{
          value:'Facebook',
          label:'Facebook'
        }
      ],
      user:{
        name:'',
        email:'',
        password:'',
        contact:'',
        contactAccount:''
      },
      password2:'',
    }
  },
  methods:{
    userRegister:function (){
      if(this.user.password !== this.password2){
        this.open('','两次密码输入不一致')
        return
      }
      this.submitRegister()

    },
    open:function (title,content){
      this.$alert(content,title, {
        confirmButtonText: '确定',
      });
    },
    open2:function (title,content){
      let _this = this
      this.$alert(content,title, {
        confirmButtonText: '确定',
        callback: () => {
          _this.$router.push('/auth/login')
        }
      });
    },
    submitRegister: function(){
      let _this = this
      this.$axios
              .post("/user", this.user)
              .then(function(response) {
                console.log(response)
                _this.open2()
              })
              .catch(function(error) {
                // _this.$store.commit('LOGIN_IN','yyy')
                console.log(error);
                _this.open2('注册成功','点击确定跳转至登录')
              });
    }
  }
};
</script>

<style scoped>
  #register-container,.register-option input{
    color:#fff
  }
  #register-container h1 {
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
  #register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  }
  #register-content {
    width: 50%;
  }
  .register-option {
    width: 100%;
    margin-top: 30px;
  }
  #register {
    margin-top: 30px;
    width: 100%;
  }
</style>
