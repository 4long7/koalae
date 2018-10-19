<template>
<section > 
  <article >
     <h4 ><p><span>最新文章</span></p></h4>
      <div class="bloglist" v-for="mm in mm">
      <p>
        <router-link :to="{ name: 'foo', params: { name: 'foo' },query: {title:encodeURI(mm.title),type:mm.type}}">{{ mm.title }}</router-link>
      </p>
      <p>
        <router-link  class='content' 
        :to="{ name: 'foo', params: { name: 'foo' },
        query: {title:encodeURI(mm.title),type:mm.type}}">{{ mm.content }}</router-link>
      </p>

      <ul>
        <li>{{ mm.date }}</li>
        <li>
          <router-link  :to="{ name: 'lable', params: { name:'lable' },query: {type:mm.type}}"
          v-bind:class=" mm.type ">      
           {{ mm.type }}
          </router-link>
        </li>
      </ul>
    </div>
  <p v-on:click="incrementTotal" class="page">点击更多</p> 
  </article>
  <VLabel></VLabel>  
</section>

</template>
<script>
import axios from 'axios'
import VLabel from './label.vue'
export default {
  name: 'mains',
  data () {
    return {
    mm: [],
    total: 1 
    }
  },components:{
    VLable
  }, async mounted (){
        const res = await axios({    
        url:'../api/app',
        })
      this.mm = res.data
      
      this.$nextTick(() => {
        window.scrollTo(0, 1)
        window.scrollTo(0, 0)
        })
    }, methods:{
        incrementTotal: async function () {
        const res = await axios({    
        url:'../api/page?page='+this.total,
        })
       this.mm=this.mm.concat(res.data)
       this.total += 1

      }
    }
}
</script>
<style type="text/css">
  .page{
    text-align: center;
    cursor: pointer;
    color: #4682B4;
    padding:10px;
  }
</style>