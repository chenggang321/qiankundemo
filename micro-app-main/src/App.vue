<template>
  <div id="app">
    <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
    <router-view v-show="$route.name" />

    <!-- 子应用渲染区，用于挂载子应用节点 -->
    <section v-show="!$route.name" id="frame"></section>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
