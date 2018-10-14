<template>
<section > 
  <article >
     <h4 ><p><span>留言版</span></p></h4>
    <div class="liuyan" v-for="mm in mm">
      <img src="./header.png">
      <p>{{ mm.user}}</p>
      <p>{{ mm.content}}</p>
      <p>{{ mm.date }}</p>
    </div>
    <div class="button-ly">
      <input type="text" name="user" v-model="user.user" placeholder="名字"><p> {{ tishi }}</p>
      <textarea  v-model="user.content" placeholder="内容"></textarea>
      <a href="javascript:void(0)" v-on:click="submit">发表</a> 
    </div>
  </article>
   <VLable></VLable>  
</section>
</template>
<script>
import VLable from './lable.vue'
import axios from 'axios'
export default {
  name: 'liuyan',
  data () {
    return {
    tishi:"",
    mm: [],
    user:{
            user:'',
            content:'',
            date: new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+ new Date().getDate()
          }  
    }
  },components:{
      VLable
    }, methods: { 
       
                submit: async function() {
                 if (this.user.content && this.user.user) {

                     const sub = await axios({
                      url:'../api/liuyan?message='+JSON.stringify(this.user)
                    })
                    this.mm.unshift(sub.data);
                    this.tishi = " "
                  }else{
                      this.tishi = "内容和用户名不能为空"
                  }
                 
                }  
    }, async mounted (){
      const sub = await axios({
        url:'../api/liuyan'
      })
      this.mm = sub.data;
    }
   
}
</script>
