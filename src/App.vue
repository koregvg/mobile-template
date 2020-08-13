<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import 'babel-polyfill'
  export default {
    name: 'App'
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import './common/lib/css/reset.less';

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Source Han Sans CN';
    background: transparent;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    & > div {
      box-sizing: border-box;
      height: 100%;
    }
  }
</style>
