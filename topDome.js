// window.onload=function(){
// 	var obtn=document.getElementById("btn");
// 	obtn.onclick=function(){
// 		alert('我被点击了')
// 	}
// }
window.onload=function{
	//获取我的按钮
	var obtn=document.getElementById('btn');
	// obtn.onclick=function(){
	// 	obtn.style.textDecoration="none";
	// 	obtn.style.color="#fff";
	// }
	//获取页面可视区域的高度
	var clientHeight=document.ducumentElemnt.clientHeight;
	var timer=null;
	var isTop=true;
	//滚动条滚动时出发
	window.onscroll=function(){
		var osTop=document.documentElement.scrollTop||document.body.scrollTop;
		if(osTop>=clientHeight){
			obtn.style.display='block';
		}else{
			obtn.style.display='none';
		}
		if (!isTop){
			clearInterval(times);
		}
		isTop=false;
	}
	obtn.onclick=function(){
		//设置定时器
		timer = setInterval(function(){
			//scrollTop() 方法返回或设置匹配元素的滚动条的垂直位置
			//前面是兼容IE后面是谷歌
			var osTop=document.documentElement.scrollTop||document.body.scrollTop;
			//为了到顶部这个也加了-
			//希望滚动条 到顶部时是快到慢 但是除数可能会是小数所以用math.floor小数会向下摄入比如10.9是10
			var ispeed=Math.floor(-osTop/5);
			//每次滚动条减去200距离 因为达不到顶部所以现在-改为+
			document.documentElement.scrollTop||document.body.scrollTop=osTop+ispeed;
			isTop=ture;
			//不知道为什么这个操作大佬说的 为了到达顶部
			console.log(osTop-ispeed);
			if (osTop==0) {
				clearInterval(timer);
			}
		},80);
	}
}