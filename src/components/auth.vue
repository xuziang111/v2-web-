<template>
  <el-container id="auth-container">
        <el-aside width="200px" id="aside-container">
          <div>
            <div><router-link to="/auth/login">登录</router-link></div>
            <div><router-link to="/auth/register">注册</router-link></div>
            <div>重置</div>
          </div>
        </el-aside>
        <el-main>
          <div id="auth-router-container">
            <transition enter-active-class='animated fadeInDown'
                        animate-delay="1s">
              <router-view> </router-view>
            </transition>
          </div>
        </el-main>
  </el-container>
</template>

<script>
export default {};
</script>

<style scoped>
  .fade-enter-active,.fade-leave-active{
    transition: opacity 0.5s;
  }
  .fade-enter,.fade-leave-active{
    opacity:0;
  }
  #auth-router-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
  }
  #aside-container{
    display:flex;
    justify-content: center;
    align-items: center;
  }
  #aside-container a{
    color:white;
  }
</style>
