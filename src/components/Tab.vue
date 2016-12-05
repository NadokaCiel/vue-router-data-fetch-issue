<template>
  <div class="tab">
      <router-link :to="{name:'tab',params:{id:1}}">Get Id 1</router-link>
      <router-link :to="{name:'tab',params:{id:2}}">Get Id 2</router-link>
      <router-link :to="{name:'tab',params:{id:3}}">Get Id 3</router-link>
  </div>
</template>
<script>
export default {
  name: 'tab',
  created: function() {
    let vm = this;
  },
  data() {
    return {
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      let vm = this;
      console.log(vm.$route.fullPath);
    }
  }
}
</script>