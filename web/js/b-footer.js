$(document).ready(function(){

	$('.footer-fav-a-img').hover(
		function(){
			var ttl=$(this).attr('title');
			var w=ttl.length*6;
			var l=getAbsolutePosition(this).x-(w/2)-1;
			var t=getAbsolutePosition(this).y-30
			$('<span />').text(ttl).css({width:w,textAlign:'center'}).appendTo(
				$('<span />').appendTo($('<span class="pp-hint" />').appendTo($('body')).css({left:l,top:t}))
			);
		}, 
		function(){
			$('body>shape').remove(); /* ie6 */
			$('.pp-hint').remove();
		}
	);
	
	$('#feedback_we').click(function(){
		$('#pp-feedback').overlay().centering().show();
		return false;
	});
	
}); 