<template>
<div>

<section > 
  <article >
     <h4 ><p><span>{{ $route.query.type }}文章</span></p></h4>
      <div class="bloglist" v-for="mm in mm">
      <h2><router-link :to="{ name: 'foo', params: { name: 'foo' },query: {title:mm.title,type:mm.type}}">{{ mm.title }}</router-link></h2>
      <p><router-link  class='content' :to="{ name: 'foo', params: { name: 'foo' },query: {title:mm.title,type:mm.type}}">{{ mm.content }}</router-link></p>
      <ul>
      <li>{{ mm.date }}</li>
      <li>
        <router-link  :to="{ name: '', params: { name:'' },query: {type:mm.type}}" v-bind:class=" mm.type ">      
         {{ mm.type }}
        </router-link>
      </li>
      </ul>
    </div>
  </article>
  
</section>
</div>
</template>
<script>
import axios from 'axios'
import VLable from './lable.vue'
export default {
  name: 'main',
  data () {
    return {
    mm: [] 
    }
  },components:{
    VLable
  }, async mounted (){
        const res = await axios({
        url:'../api/lable?type='+ this.$route.query.type
        })
      this.mm = res.data
    }
}
</script>
