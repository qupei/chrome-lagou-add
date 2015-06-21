function loadAddress(clickType) {

	setTimeout(function(){
		if ($('.job-address').length >= Number(1) ) return;
		console.log('------do lagou address clickType:'+clickType)
		$('.con_list_item').each(function(){
			var currLi = $(this)
			var jobId = $(this).attr('data-positionid')
			var jobUrl = '/jobs/'+jobId + '.html';
			var localJobId = 'JOB_ID_'+jobId;
			if(window.localStorage[localJobId]) {
				currLi.prepend(" <div class='job-address'><span style='background: rgb(231, 220, 219);color: #00B38A;padding: 3px 6px'>"+window.localStorage[localJobId]+"</span></div>")
		    } else {
				$.get(jobUrl, function(result){
				 //console.log(jobUrl+$('.job_company dd div',result).html())
					var address = $('.job_company dd div',result).html()
					//currLi.append('<div class="list_item_bot"><div class="li_b_l">'+address+'</div><div class="li_b_r"></div></div>')
					currLi.prepend(" <div class='job-address'><span style='background: #E0E5E7;color: #00B38A;padding: 6px 6px'>"+address+"</span></div>")
					window.localStorage[localJobId] = address;
				}); 
			}
		});
	},500);
}

$('div.next,div.prev').bind('mousedown',function(){
 	loadAddress('top');
})

var ucrrentPage = 1;
var title = $(".item_con_list");
title.bind('DOMNodeInserted', function(e) {
    if(ucrrentPage != $('.pager_is_current').attr('page') ) {
    	ucrrentPage  = $('.pager_is_current').attr('page') ; 
    	$('.pager_not_current,.pager_next,.pager_prev').bind('mousedown',function(){
		 	loadAddress('bottom');
		})
    }

});

loadAddress('init')
