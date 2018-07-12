$('.sec-main .mmd_int').click(function(e){
	$(this).next().css('display','block');
	e.stopPropagation();//关键在于阻止冒泡
	$('.sec-main .mmd_option li').click(function(){
		$(this).parent().prev().attr('placeholder',$(this).text());
	})	
})
//监听整个document的点击事件，如果能收到事件(说明点击源既不是“显示菜单”按钮，也不来自菜单内部)，就可以放心关闭菜单了
document.addEventListener('click', function(){
	$('.sec-main .mmd_option').css('display','none');
}, false);
$('.load-more').click(function(){
	$('.page-num').css({
		'display':'block',
		'max-width':'1230px',
		'width': '95%'
	});
	$(this).html('已加载全部内容');
})