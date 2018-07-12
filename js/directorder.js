var flag=true;
$('.order').click(function(){
	if(flag){
		$(this).next().css({
		   'display':'block'
	    })
	    $('.orderall').parent().css({
		   'display':'none'
	    })
	    $('.order1').css({
		   'display':'none'
	    })
	}else{
		$(this).next().css({
		   'display':'none'
	    })
	    $('.order1').css({
		   'display':'inline-block'
	    })
	}
	flag=!flag
})
$('.order1').click(function(){
	if(flag){
		$(this).parent().next().css({
		   'display':'block'
	    })
	    $('.orderall').parent().css({
		   'display':'none'
	    })
	    $('.order').css({
		   'display':'none'
	    })
	}else{
		$(this).parent().next().css({
		   'display':'none'
	    })
	    $('.order').css({
		   'display':'inline-block'
	    })
	}
	flag=!flag
})
$('.hotcity').click(function(){
	    $('.hotcity').css({
		    'color':'#666',
		   'background':'#efefef',
	    });
	    $(this).css({
		   'color':'white',
		   'background':'#5e5d97',
	    })
	    $('.orderall').parent().css({
		   'display':'block',
		   'height':'auto'
	    })
}) 












