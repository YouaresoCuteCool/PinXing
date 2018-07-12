$('.container .btn').click(function(){
	var newAdd = $('\
        <div class="yuding">\
        		<div class="info">\
        			<div class="left">\
        				<img src="../images/yd2.png" alt="">\
        			</div>\
        			<div class="right">\
        				<div class="title">\
        					<span>上海浦东嘉里大酒店</span>\
        					<span></span>\
        				</div>\
        				<div class="brief">\
        					上海浦东嘉里大酒店地处浦东核心腹地——浦东嘉里城，毗邻地铁七号线，新国际博览中心和世纪公园。从浦东机场乘坐磁悬浮列车到达酒店只需15分钟，而且酒店提供酒店与磁悬浮车站之间的往返班车。酒店豪华优雅、舒适温馨的居住空间，客房设施包括有线和无线宽带上网，熨衣板等；房内的迷你吧所有食品，诸如小食、巧克力、手工自酿啤酒、汽水和果汁全都在你抵店当天提供。酒店还拥有上海最大的酒店健身俱乐部-嘉里健身6,000平方米面积横跨3层，包括24小时开放的健身中心、室内游泳池、训练教室、水疗中心、室外网球场、篮球场和儿童探险乐园，都是你和小朋友休闲、娱乐的好去处。\
        				</div>\
        				<div class="address">\
        					<img src="../images/jddw.jpg" alt="">\
        					&nbsp;&nbsp;地址：浦东新区花木路1388号 <br>电 话：021-61698888\
        				</div>\
        				<a href=""><input type="button" value="READ MORE" style="outline:none"></a>\
        			</div>\
        		</div>\
        	</div>\
            <table width="100%" height="140px" cellspacing="0" bgcolor="#F5F5F5" class="showTable">\
				<tr align="center" class="first-tr">\
					<td>房型</td>\
					<td>门市价</td>\
					<td>预订价</td>\
					<td>早餐</td>\
					<td>床型</td>\
					<td>上网</td>\
					<td>班车</td>\
					<td>在线预订</td>\
				</tr>\
				<tr align="center" class="tr">\
					<td>单人房</td>\
					<td>2122</td>\
					<td style="color:#CD2626">1780</td>\
					<td>含</td>\
					<td>大床</td>\
					<td>免费</td>\
					<td></td>\
					<td><a href="yudingdetail.html">在线预订</a></td>\
				</tr>\
				<tr align="center" class="tr">\
					<td>双人房</td>\
					<td>2355</td>\
					<td style="color:#CD2626">1980</td>\
					<td>含</td>\
					<td>双床</td>\
					<td>免费</td>\
					<td></td>\
					<td><a href="yudingdetail.html">在线预订</a></td>\
				</tr>\
			</table>\
			<table class="hiddenTable">\
				<tr align="center">\
					<td>房型:</td>\
					<td>单人房</td>\
				</tr>\
				<tr align="center">\
					<td>门市价:</td>\
					<td>2122</td>\
				</tr>\
				<tr align="center">\
					<td>预订价:</td>\
					<td style="color:#CD2626">1780</td>\
				</tr>\
				<tr align="center">\
					<td>早餐:</td>\
					<td>含</td>\
				</tr>\
				<tr align="center">\
					<td>床型:</td>\
					<td>大床</td>\
				</tr>\
				<tr align="center">\
					<td>上网:</td>\
					<td>免费</td>\
				</tr>\
				<tr align="center">\
					<td>班车:</td>\
					<td></td>\
				</tr>\
				<tr align="center">\
					<td>在线预订:</td>\
					<td><a href="yudingdetail.html">在线预订</a></td>\
				</tr>\
			</table>\
			<table class="hiddenTable">\
				<tr align="center">\
					<td>房型:</td>\
					<td>双人房</td>\
				</tr>\
				<tr align="center">\
					<td>门市价:</td>\
					<td>2355</td>\
				</tr>\
				<tr align="center">\
					<td>预订价:</td>\
					<td style="color:#CD2626">1980</td>\
				</tr>\
				<tr align="center">\
					<td>早餐:</td>\
					<td>含</td>\
				</tr>\
				<tr align="center">\
					<td>床型:</td>\
					<td>双床</td>\
				</tr>\
				<tr align="center">\
					<td>上网:</td>\
					<td>免费</td>\
				</tr>\
				<tr align="center">\
					<td>班车:</td>\
					<td></td>\
				</tr>\
				<tr align="center">\
					<td>在线预订:</td>\
					<td><a href="yudingdetail.html">在线预订</a></td>\
				</tr>\
			</table>\
		')
	$('.container .content').append(newAdd);
})