<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
        <router-view id="views-container"></router-view>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {

  }

};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height:100%;
}
</style>
