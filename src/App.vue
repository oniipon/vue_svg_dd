<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    position: absolute;
    margin:100px;
  }
</style>
