<template>
  <div id="app">
  	<VHeader></VHeader>
    <router-view></router-view>
    <VFooter></VFooter> 
  </div>
</template>

<script>
import VHeader from './components/Header.vue'
import VFooter from './components/Footer.vue'
export default {
  name: 'app',
  components: {
    VFooter,
    VHeader
  }
}
</script>
