window.onload=tab;
function tab(){
	//当前高亮显示的页签的索引
	var index=0;
	var timer=null;

	//获取所有的页签和要切换的内容
	var lis=$('title-two').getElementsByTagName('li');
	var divs=$('notice').getElementsByTagName('div');
	//添加定时器改变当时高亮的索引
	timer=setInterval(function(){
		index++;
		if (index>=lis.length) {
			index=0; 
		}
		for(var j=0;j<lis.length;j++){
			lis[j].className='';
			divs[j].style.display='none';
		}

		//高亮显示当前页签
		lis[index].className='select';
		divs[index].style.display='block';
	},2000);
}