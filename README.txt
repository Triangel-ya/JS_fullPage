全屏滚动插件说明文档：（打开slide.html可观看效果，user这个文件夹是用户自己定义的文件夹）

插件功能：实现不同页面的全屏切换。

用法：1.在html代码中引入本文件所在文件夹中的 slide.js 文件，
        引入本文件所在文件夹中的 slide.css  文件，
	引入本文件所在文件夹中的 images  文件。

      2.html代码格式：
	<div class="slide">//外层div,用于包裹所有页面以及所有页面的父包裹层
	    <div class="slideContainer">//父层div，包裹所有页面的内容
	        <div class="slidePage">
			//第一个页面，页面内可以直接添加内容
	        </div>
	        <div class="slidePage">
	            	//第二个页面，页面内可以直接添加自定义内容
	        </div>

	        .......

		<div class="slidePage">
	            	//第n个页面，页面内可以直接添加自定义内容
	        </div>
	    </div>
	    <div class="slideLeft"></div>//左箭头
	    <div class="slideRight"></div>//右箭头
	</div>

        3.js代码格式：
	  window.onload = function(){
		var slide = new Slide(); //对象实例化
		slide.initialize(80,20);
		//初始化函数，第一个参数是每次移动的距离，为大于0的数，以像素为单位；
		//第二个参数为每次移动的时间，也为大于0的数，以毫秒为单位；	
	   }
