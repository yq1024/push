
$(function() {
	var vm = {};

	// 初始化
	vm.init = function() {
		vm.clcikEvent();
	};

	vm.clcikEvent = function() {
		$('body')
		.on('click', '#btn', vm.bindEvent.goTop)	//点击返回顶部
		.on('click', '#titleTwo ul li', vm.bindEvent.tabSwitch)	//tab切换
	};

	// 绑定事件
	vm.bindEvent = {

        //返回顶部
        goTop: function() {
            $("html,body").animate({scrollTop:0}, 500);
            return false;
        },

        // tab切换
        tabSwitch: function(e) {
        	// currentTarget 事件属性返回其监听器触发事件的节点，即当前处理该事件的元素、文档或窗口
        	var _this = $(e.currentTarget);
        	var _index = _this.index();
        	console.log(_index);
        	//sibling 查找标签
        	_this.addClass('select').siblings().removeClass('select');
        	//eq()JQ的选择器  选取指定某元素的选择器  fadeIn淡入 fadeOut淡出   
        	$('.notice .mod:eq('+ _index +')').fadeIn(200).siblings().fadeOut(2000);

        }
	};
   
	vm.init();
});