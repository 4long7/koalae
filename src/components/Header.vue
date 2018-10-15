<template>
<header>
	
		<input type="checkbox" id="toggle"/>
  		<label for="toggle" class="nav-toggle" >
		  <span class="icon-bar" ></span>
		  <span class="icon-bar"></span>
		  <span class="icon-bar"></span>
  		</label>
  		<br>
		<ul class="showbox">
			<li><router-link to="/?title=木子_MuZi">首页</router-link></li>
			<li><router-link to="/liuyan?title=留言">留言</router-link></li>
			<li><router-link to="/about?title=关于我&type=other">关于我</router-link></li>
			<li class="reg"><router-link to="/reg">注册</router-link></li>
			<li class="login"><router-link to="/login">登陆</router-link></li>
		</ul>
	<article>
		<h1 v-if="header">{{ decodeURI($route.query.title) }}</h1>
		<h1 v-else>木子_MuZi</h1>
	</article>		
</header>
</template>
<script>
export default {
  	name: 'headers',
  	data () {
  	return {
  		header : this.$route.query.title
  		}
	}
	
}
</script>
