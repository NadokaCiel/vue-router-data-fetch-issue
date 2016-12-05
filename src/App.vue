<template>
  <div id="app">
    <div class="main-content">
      <router-view class="app-view"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
    }
  },
  created: function() {
    let vm = this;
  },
  components: {
  }
}
</script>

<style lang="sass">
html,body{
  height: 100%;
}
#app {
  font-family: "Microsoft YaHei","Verdana",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>