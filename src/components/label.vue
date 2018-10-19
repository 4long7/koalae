<template>
  <aside>
    <h4><p><span>标签</span></p></h4>
    <div class="bloglist mgtop">
    <ul>
      <li v-for="label in labels">
        <router-link  :to="{ name: 'label', params: { name: 'label' },query: {type:label.label}}" v-bind:class="lable.lable">      
         {{ label.label }}
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
     labels: 
      [{"label":"javascript"},
        {"label":"node"},
        {"label":"css"},
        {"label":"nginx"},
        {"label":"ubuntu"},
        {"label":"html"},
        {"label":"other"},
        {"label":"markdown"}
      ]
      }
  }
}
</script>
