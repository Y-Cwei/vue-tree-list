<template>
  <div id="app">
    <el-button type="text" @click="handleView('/vue-tree-list')">vue-tree-list组件【不支持tree】</el-button>
    <el-button type="text" @click="handleView('/vue-draggable')">vue-draggable组件【不支持tree】</el-button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleView (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="scss">
html{
  background-color: #fff;
}
html,
body{
  height: 100%;
}
#app{
  height: 100%;
  .el-button{
    margin: 0 14px 0px;
  }
  hr{
    margin-bottom: 14px;
  }
}
</style>
