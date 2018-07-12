// form1
$('.zdtime1').datepicker({
},
$('.zdtime2').datepicker());
$('.adtime').datepicker("option",'dateFormat','yy-mm-dd');
$('.form1 .xuanze2').change(function(){
 	var options=$('.xuanze2 option:selected');//获取选中的项
 	if(options[0].index=='1'){
      $('.danjia').text('1780');
 	}else if(options[0].index=='2'){
 		$('.danjia').text('1890');
 	}
})
$('.form1 .surebtn').click(function(){
	if($('.xuanze2 option:selected')[0].index=='0'){
       alert('请输入房间类型！');
	}else if($('.xuanze3 option:selected')[0].index=='0'){
       alert('请输入房间数量！');
	}else if($('.zdtime1').val()==''){
		alert('请选择住店日期');
	}else if($('.zdtime2').val()==''){
        alert('请选择离店日期');
	}else{
		var room = $('.xuanze3 option:selected')[0].text.slice(0,1);
		var t1 = $('.zdtime1').val();
		var t2 = $('.zdtime2').val();
	    var t = t2.slice(3,5)-t1.slice(3,5);
	    $('.form1 .tianshu').text(t+'天');
	    var jine = ($('.danjia').text())*t*room;
	    $('.form1 .jine').text(jine);
	    $('.form1 .priceTotal').text(jine);
	    $('.form1 .roomNum').text(room+'间');
	}
	
})
$('.form1 .tijiao').click(function(){
	if($('.dwmc').val()==''){
       alert('请填写单位名称！');
	}else if($('.lxr').val()==''){
        alert('请填写联系人！');
	}else if($('.gddh').val()==''){
        alert('请填写固定电话！');
	}else if($('.yddh').val()==''){
        alert('请填写移动电话！');
	}else if($('.cz').val()==''){
        alert('请填写传真！');
	}else if($('.email').val()==''){
        alert('请填写邮箱！');
	}else if($('.xuanze2 option:selected')[0].index=='0'){
       alert('请输入房间类型！');
	}else if($('.xuanze3 option:selected')[0].index=='0'){
       alert('请输入房间数量！');
	}else if($('.zdtime1').val()==''){
		alert('请选择住店日期');
	}else if($('.zdtime2').val()==''){
        alert('请选择离店日期');
	}else{
		alert('预订成功！');
	}
})
// form2
$('.zdtime3').datepicker({
},
$('.zdtime4').datepicker());
$('.adtime').datepicker("option",'dateFormat','yy-mm-dd');
$('.form2 .xuanze4').change(function(){
 	var options=$('.xuanze4 option:selected');//获取选中的项
 	if(options[0].index=='1'){
      $('.danjia1').text('1780');
 	}else if(options[0].index=='2'){
 		$('.danjia1').text('1890');
 	}
})
$('.form2 .surebtn').click(function(){
	if($('.xuanze4 option:selected')[0].index=='0'){
       alert('请输入房间类型！');
	}else if($('.xuanze5 option:selected')[0].index=='0'){
       alert('请输入房间数量！');
	}else if($('.zdtime3').val()==''){
		alert('请选择住店日期');
	}else if($('.zdtime4').val()==''){
        alert('请选择离店日期');
	}else{
		var room = $('.xuanze5 option:selected')[0].text.slice(0,1);
		var t1 = $('.zdtime3').val();
		var t2 = $('.zdtime4').val();
	    var t = t2.slice(3,5)-t1.slice(3,5);
	    $('.form2 .tianshu').text(t+'天');
	    var jine = ($('.danjia1').text())*t*room;
	    $('.form2 .jine').text(jine);
	    $('.form2 .priceTotal').text(jine);
	    $('.form2 .roomNum').text(room+'间');
	}
})
$('.form2 .tijiao').click(function(){
	if($('.dwmc').val()==''){
       alert('请填写单位名称！');
	}else if($('.lxr').val()==''){
        alert('请填写联系人！');
	}else if($('.gddh').val()==''){
        alert('请填写固定电话！');
	}else if($('.yddh').val()==''){
        alert('请填写移动电话！');
	}else if($('.cz').val()==''){
        alert('请填写传真！');
	}else if($('.email').val()==''){
        alert('请填写邮箱！');
	}else if($('.xuanze4 option:selected')[0].index=='0'){
       alert('请输入房间类型！');
	}else if($('.xuanze5 option:selected')[0].index=='0'){
       alert('请输入房间数量！');
	}else if($('.zdtime3').val()==''){
		alert('请选择住店日期');
	}else if($('.zdtime4').val()==''){
        alert('请选择离店日期');
	}else{
		alert('预订成功！');
	}
})
// form3
$('.zdtime5').datepicker({
},
$('.zdtime6').datepicker());
$('.adtime').datepicker("option",'dateFormat','yy-mm-dd');
$('.form3 .xuanze6').change(function(){
 	var options=$('.xuanze6 option:selected');//获取选中的项
 	if(options[0].index=='1'){
      $('.danjia3').text('1780');
 	}else if(options[0].index=='2'){
 		$('.danjia3').text('1890');
 	}
})
$('.form3 .surebtn').click(function(){
	if($('.xuanze6 option:selected')[0].index=='0'){
       alert('请输入房间类型！');
	}else if($('.xuanze7 option:selected')[0].index=='0'){
       alert('请输入房间数量！');
	}else if($('.zdtime5').val()==''){
		alert('请选择住店日期');
	}else if($('.zdtime6').val()==''){
        alert('请选择离店日期');
	}else{
		var room = $('.xuanze7 option:selected')[0].text.slice(0,1);
		var t1 = $('.zdtime5').val();
		var t2 = $('.zdtime6').val();
	    var t = t2.slice(3,5)-t1.slice(3,5);
	    $('.form3 .tianshu').text(t+'天');
	    var jine = ($('.danjia3').text())*t*room;
	    $('.form3 .jine').text(jine);
	    $('.form3 .priceTotal').text(jine);
	    $('.form3 .roomNum').text(room+'间');
	}
	
})
$('.form3 .tijiao').click(function(){
	if($('.dwmc').val()==''){
       alert('请填写单位名称！');
	}else if($('.lxr').val()==''){
        alert('请填写联系人！');
	}else if($('.gddh').val()==''){
        alert('请填写固定电话！');
	}else if($('.yddh').val()==''){
        alert('请填写移动电话！');
	}else if($('.cz').val()==''){
        alert('请填写传真！');
	}else if($('.email').val()==''){
        alert('请填写邮箱！');
	}else if($('.xuanze6 option:selected')[0].index=='0'){
       alert('请输入房间类型！');
	}else if($('.xuanze7 option:selected')[0].index=='0'){
       alert('请输入房间数量！');
	}else if($('.zdtime5').val()==''){
		alert('请选择住店日期');
	}else if($('.zdtime6').val()==''){
        alert('请选择离店日期');
	}else{
		alert('预订成功！');
	}
})