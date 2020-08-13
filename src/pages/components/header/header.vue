<template>
  <div class="header-wrapper">

  </div>
</template>

<script>
  export default {
    name: 'header',
    props:{
      selected:{
        type: Number,
        default:0
      }
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .header-wrapper {
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 86px;
  }
</style>
