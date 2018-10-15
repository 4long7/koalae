<template>
  <aside>
    <h4><p><span>标签</span></p></h4>
    <div class="bloglist mgtop">
    <ul>
      <li v-for="lable in lables">
        <router-link  :to="{ name: 'lable', params: { name: 'lable' },query: {type:lable.lable}}" v-bind:class="lable.lable">      
         {{ lable.lable }}
        </router-link>
      </li>
    </ul>
    </div>
    </aside>
</template>
<script>
export default {
  name: 'lable',
  data () {
    return {
     lables: 
      [{"lable":"javascript"},
        {"lable":"node"},
        {"lable":"css"},
        {"lable":"nginx"},
        {"lable":"ubuntu"},
        {"lable":"html"},
        {"lable":"other"},
        {"lable":"markdown"}
      ]
      }
  }
}
</script>
