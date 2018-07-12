$('.shadow').mouseover(function(){
	$(this).css({
		'box-shadow': '3px 3px 3px  3px #cbcbe9',
	})
})
$('.shadow').mouseout(function(){
	$(this).css({
		'box-shadow': 'none'
	})
})
$('.nav').children('a').mouseover(function(){
	$(this).children('p').css({
		'display':'block'
	})	
})
$('.nav').children('a').mouseout(function(){
	$(this).children('p').css({
		'display':'none'
	})
	$('.pactive').css({
	    'display':'block'
    })
})