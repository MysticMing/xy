//文档就绪
$(function() {
	
	//回到顶部按钮
	var topcontrol = $('#topcontrol');
	
	//导航条对象
	var nav = $('.nav-wrap');
	
	//导航条相对于网页原点的垂直位置
	var navPos = nav.offset().top;
	
	//导航条的高度
	var navHeight = nav.outerHeight();
	
	$(window).scroll(function() {
//		document.title = $(window).scrollTop();
		//获得滚动条的位置
		var sTop = $(window).scrollTop();
		
		//判断滚动条位置，动态显示隐藏回到顶部按钮
		if (sTop >= 200) {
			topcontrol.fadeIn('normal');
		} else {
			topcontrol.fadeOut('normal');
		}
		
		//自动给导航条加fixed样式
		if (sTop >= navPos) {
			if (!nav.hasClass('fix')) {
				nav.addClass('fix');//给导航条增加定位
				$('.banner').css('margin-bottom',navHeight);//占位
				
			}
		} else {
			if(nav.hasClass('fix')) {
				nav.removeClass('fix');
				$('.banner').css('margin-bottom',0);//取消占位,不然第一部分会直接下滑，显示不完整
			}
		}
		
		//判断是否进入了海量正版免费下区域
		var introPos = {
			start:$('#post-intro').offset().top - navHeight,
			//结束位置为视口高度加上此时模块高度减去nav导航条的高度
			end:$('#post-intro').offset().top + $('#post-intro').outerHeight() - navHeight
		}
		
		if (sTop >= introPos.start && sTop < introPos.end) {
			$('.intro').addClass('active');
			
			
		} else  {
			$('.intro').removeClass('active');
		}
	})
	
	
	//回到顶部按钮单击
	topcontrol.click(function () {
		$('html,body').animate({scrollTop:0},1000);//为终点值坐标
	})
})
