<template>
<div>
	<section>
		<article>
		<h4 ><p><span>写文章</span></p></h4>
		<form method="get" class="bloglist mgtop sub-article" action="/api/article" >
			<ul>
				<li>标题</li>
				<textarea name="title"  placeholder="文章标题"></textarea>
				<li>介绍</li>
				<textarea name="content" placeholder="文章内容介绍"></textarea>
				<li>article</li>
				<textarea name="article" placeholder="article"></textarea>
				<li>标签</li>
					<select name="type">
						<option value="css">css</option>
						<option value="javascript" >javascript</option>
						<option value="html" >html</option>
						<option value="node" >node</option>
						<option value="ubuntu" >ubuntu</option>
						<option value="mysql" >mysql</option>
						<option value="html" >html</option>
						<option value="nginx" >nginx</option>
						<option value="markdown" >markdown</option>
					</select>
				<li>文件</li>
				<li class="sub-file">上传<input type="file" name="file" id="male"></li>
				<dt></dt>
				<input type="submit" name="submit" value="提交" >
				<label for="male"></label>
			</ul>
		</form>
	</article>
	<VLable></VLable>
	</section>
</div>
</template>
<script>
import VLable from './lable.vue'
export default {
  name: 'Article',
 data () {
    return {
    mm: ""
    }
  },components:{
    VHeader,
    VLable
  }
}
</script>
<style type="text/css">
.sub-article textarea[name="content"]{
	height:100px;
	width:100%;
}
.sub-article textarea[name="article"]{
	width: 100%;
	height:300px;
}
.sub-article select,.sub-article input[type="submit"]{
	width:60px;
	background:#fff;
	border:1px solid #008000;
	height: 30px;
	color:#008000;
}
.sub-article li{
	font-size:18px;
	width:40px;
	color:#008000;
	margin-bottom:10px;
}
.sub-file{
	width: 70px;
	height: 28px;
	background-color: #fff;
	display: block;
	overflow: hidden;
	position: relative;
	top:20px; 
	border:1px solid;
	
}
.sub-file input{
	  font-size: 118px;cursor: pointer;position: absolute;right: 0;top: 0;opacity: 0;filter:alpha(opacity=0);
}
dt{
	clear:both;
}

</style>