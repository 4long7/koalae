<template>
<div>

<section>
   <div id="mddd" v-html="mm">
  </div>
</section>
</div>
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

      setTimeout(() => {
          //     mermaid.init({noteMargin: 10}, ".lang-mermaid")
          //     mermaid.initialize({startOnLoad:true})
         var div = document.querySelector('code')
        div.setAttribute("class", "sql");
          hljs.initHighlightingOnLoad();
           }, 1000)
    }

}
</script>
<style type="text/css" scoped>
  @import '../assets/markdown.css'
</style>
<style type="text/css">
 section{
  margin-top:20px;
  margin-bottom: 20px;
 }
</style>

