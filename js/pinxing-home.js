$('.nav li').click(function(){
    $('.active').removeClass('active');
	$(this).addClass('active');
})
$('.content .btn').click(function(){
	$('.content .btn').text('');
	$('.content .btn').text('已经加载全部内容');
})