<template>
  <section id="mddd" v-html="mm" >
  </section>
</template>
<script>
import axios from 'axios'
export default {
  name: 'hello',
 data () {
    return {
    mm:''
    }
  },components:{
  }, async mounted (){ 

      const res = await axios({
        url:'../api/md?type='+ this.$route.query.type+"&title="+this.$route.query.title
      })
      this.mm = res.data 

    }

}
</script>
<style type="text/css" scoped>
  @import '../assets/markdown.css'
</style>


