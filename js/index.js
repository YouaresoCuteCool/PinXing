var flag2=true;
$('.fr_login').click(function(){
	if(flag2){
		$('.login_modal').css('display','block');
	}else{
		$('.login_modal').css('display','none');
	}
	flag2=!flag2;
})
$('.destination').mouseover(function(){
	$('.mnavMenu').css('display','block');
}).mouseout(function(){
	$('.mnavMenu').css('display','none');
})
var flag=true;
$('.navbar').click(function(){
	if(flag){
		$('.navbar img.lg').css('display','none');
		$('.navbar img.sm').css('display','block');
		$('#bar').css({
			'left':'0',
			'transition':'transform 200ms linear',
			'transform':'translate(0%)'
		});
		$('.main-bar').css({
			'background-color':'rgba(0,0,0,.5)',
			'z-index':'100'
		});
	}else{
		$('.navbar img.lg').css('display','block');
		$('.navbar img.sm').css('display','none');
		$('#bar').css({
			'left':'0',
			'transition':'transform 200ms linear',
			'transform':'translate(-100%)'
		});
		$('.main-bar').css({
			'background-color':'rgba(0,0,0,0)',
			'z-index':'-1'
		});
	}
	flag=!flag;
})
$('.carousel-caption a').click(function(){
	if($(this).prev().val()==''){
		alert('请输入搜索内容');
	}
})