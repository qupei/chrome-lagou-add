$('.con_list_item').each(function(){
	var currLi = $(this)
	var jobId = $(this).attr('data-positionid')
	var jobUrl = '/jobs/'+jobId + '.html';
	var localJobId = 'JOB_ID_'+jobId;
	if(window.localStorage[localJobId]) {
		currLi.prepend(" <div><span style='background: rgb(231, 220, 219);color: #00B38A;padding: 3px 6px'>"+window.localStorage[localJobId]+"</span></div>")
    } else {
		$.get(jobUrl, function(result){
		 //console.log(jobUrl+$('.job_company dd div',result).html())
			var address = $('.job_company dd div',result).html()
			//currLi.append('<div class="list_item_bot"><div class="li_b_l">'+address+'</div><div class="li_b_r"></div></div>')
			currLi.prepend(" <div><span style='background: #E0E5E7;color: #00B38A;padding: 6px 6px'>"+address+"</span></div>")
			window.localStorage[localJobId] = address;
		}); 
	}
});