var flag=true;	
$('th').css({
	'cursor': 'pointer'
});
$('th').click(function(){
   // console.log($(this).parent().next());
   if(flag){
   	$(this).parent().next().css({
   	    'display':'table-row'
      })
   	$(this).css({
   	    'border-bottom': '1px solid #f0f0f0'
      })
   }else{
   	$(this).parent().next().css({
   	    'display':'none'
      })
   	$(this).css({
   	    'border-bottom': 'none'
      })
   }
   flag=!flag;
   
})