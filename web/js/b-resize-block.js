$(document).ready(function(){
	
	rw=$('.resize-block-hidden-col-left').width();

	$('.resize-block-block-1260').click(function(){
		$('#container, .footer').animate({ width: '1260px' }, 600);
		$('.resize-block-hidden-col-left').animate({ width: rw }, 600);
		$('.content-main-td-left-resize225').animate({ width: rw+20 }, 600);
		if ($('#best-persons').length) {
			$('.best-persons-block').animate({ width: '1260px' }, 600);
			$('.best-persons-head-pd').show();
		};
		/*$('.comment-mark-rate-item-ttl').removeClass('comment-mark-rate-item-ttl-small');
		$('.comment-mark-user-name-a').removeClass('comment-mark-user-name-a-small');
		$('.comment-mark-user-city-link').removeClass('comment-mark-user-city-link-small');
		$('.comment-mark-user-city').removeClass('comment-mark-user-city-small');*/
		
			
		return false;
	});

	$('.resize-block-block-1000').click(function(){
		$('#container, .footer').animate({ width: '1000px' }, 600);
		$('.resize-block-hidden-col-left, .content-main-td-left-resize225').animate({ width: '0' }, 600);
		if ($('#best-persons').length) {
			$('.best-persons-block').animate({ width: '1000px' }, 600);
			$('.best-persons-head-pd').hide();
		};
		/*$('.comment-mark-rate-item-ttl').addClass('comment-mark-rate-item-ttl-small');
		$('.comment-mark-user-name-a').addClass('comment-mark-user-name-a-small');
		$('.comment-mark-user-city-link').addClass('comment-mark-user-city-link-small');
		$('.comment-mark-user-city').addClass('comment-mark-user-city-small');*/
		return false;
	});
});
