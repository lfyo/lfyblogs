$(function() {
	//tag
	(function() {
		$('.nav-tabs li ').each(function() {
			$(this).on('click', function() {
				$(this).siblings().removeClass('active').end().addClass('active');
				var attr = $(this).attr('date-controls');
				$('#' + attr + '').siblings().hide().end().show();
			})
		})
	})();
	
	// time 
	(function() {
		var date = getNowFormatDate().da;
		$('#time h4').html(date);
	})();
})

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var day = date.getDay();
    var arrWeek = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六'];
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    var currentda = date.getFullYear() + '年' + month + '月' + strDate
            + "日 " + arrWeek[day];
    return {
    	date: currentdate,
    	da: currentda
    }
}