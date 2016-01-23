$.fn.overlay=function() {
	var el=$(this);
	$('body').prepend('<div id="overlay"></div>');
	$('#overlay').click(function(){
		el.hide();
		/*$('tr').removeClass('gr_tr');*/
		$('#overlay').remove();
		$('#pp-place').hide();
		$('#pp-opinion').hide();
		$('.place-travelers-view').css('visibility','visible');
	});
	$('#overlay').show('slow');
	return this;
}
$.fn.overlay_dbl=function() {
	var el=$(this);
	$('body').prepend('<div id="overlay_dbl"></div>');
	$('#overlay_dbl').click(function(){
		el.hide();
		$('#overlay_dbl').remove();
	});
	$('#overlay_dbl').show('slow');
	return this;
}
$.fn.overlay_filter=function() {
	var el=$(this);
	$('body').prepend('<div id="overlay"></div>');
	$('#overlay').click(function(){
		el.hide();
		$('.filter14-li').removeClass('filter14-li-act');
		$('#overlay').remove();
		$('.filter14-li-menu').hide();
	});
	$('#overlay').show('slow');
	return this;
}
$.fn.overlay_white=function() {
	var el=$(this);
	$('body').prepend('<div id="overlay_white"></div>');
	$('#overlay_white').click(function(){
		el.hide();
		$('#overlay_white').remove();
	});
	$('#overlay_white').show('slow');
	return this;
}
$.fn.overlay_status=function() {
	var el=$(this);
	$('body').prepend('<div id="overlay_status"></div>');
	$('#overlay_status').click(function(){
		$('#overlay_status').remove();
		$('div.lenta-status div.status-submit').removeClass('block').siblings('.status-edit').removeClass('block');
		$('div.lenta-status .info').removeClass('info-edit');
		$('div.lenta-status div.status').removeClass('none');
	});
	$('#overlay_status').show('slow');
	return this;
}
$.fn.centering=function() {
	this.css("position","absolute");
	this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
	this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
	return this;
}
if ($.fn.bgIframe == undefined) {
	$.fn.bgIframe = function() {return this; };
};
function getAbsolutePosition(el) {
	var r = { x: el.offsetLeft, y: el.offsetTop };
	if (el.offsetParent) {
		var tmp = getAbsolutePosition(el.offsetParent);
		r.x += tmp.x;
		r.y += tmp.y;
	}
	return r;
}

$(document).ready(function(){

	/* all swithers */
	$('.filter span').click(function(){
		$(this).siblings().removeClass('active').end().addClass('active');
	}); 
	$('.filters .submenu li').click(function(){
		$(this).siblings().removeClass('active').end().addClass('active');
		$('.filters-tab').hide().eq($('.submenu li').index(this)).show();
	});
	$('.subfilters .filter span').click(function(){
		$('.subfilters-tab').hide().eq($('.filter span').index(this)).show();
		$('#upload-button, .photo-album-add-incomm').show();
	});
	$('.inyan').click(function(){
		$(this).siblings().removeClass('minus-active plus-active inyan-active').end().addClass('inyan-active');
	});
	$('.user-side-inyan').click(function(){
		$(this).siblings().removeClass('user-side-minus-active user-side-plus-active user-side-inyan-active').end().addClass('user-side-inyan-active');
	});
	$('ul.tabs li:has(span)').click(function(){
		$(this).siblings().removeClass('active').end().addClass('active');
		$('div.tab').hide().eq($('ul.tabs li').index(this)).show();
	});
	$('ul.tabs li:has(a)').click(function(){
		window.location=$('a',this).attr('href');
	});
	$('.pm').click(function(){
		$(this).siblings().removeClass('minus-active plus-active inyan-active');
		if ($(this).hasClass('minus')) $(this).addClass('minus-active');
		if ($(this).hasClass('plus')) $(this).addClass('plus-active');
	});
	$('.user-side-pm').click(function(){
		$(this).siblings().removeClass('user-side-minus-active user-side-plus-active user-side-inyan-active');
		if ($(this).hasClass('user-side-minus')) $(this).addClass('user-side-minus-active');
		if ($(this).hasClass('user-side-plus')) $(this).addClass('user-side-plus-active');
	});
	$('.question-lenta-pm').click(function(){
		$(this).siblings().removeClass('question-lenta-minus-active question-lenta-plus-active');
		if ($(this).hasClass('question-lenta-minus')) $(this).addClass('question-lenta-minus-active');
		if ($(this).hasClass('question-lenta-plus')) $(this).addClass('question-lenta-plus-active');
	});
	$('.user-profile .avatars span').click(function(){
		$(this).siblings().removeClass('active').end().addClass('active');
		$('.user-profile .avatars .photo').hide().eq($('.user-profile .avatars span').index(this)).show();
	});
	$('.showhidden').click(function(){
		$(this).hide().next('.hidden').show();
	});
	$('.toggle').click(function(){
		$(this).find('a').toggleClass('active').end().next('.hidden').toggle();
		return false;
	});
	$('.favor').click(function(){
		$(this).toggleClass('favor_active');
		var txt=$('span',this).text();
		if (txt=='Добавить в избранное') {$('span',this).text('В избранном');}
		if (txt=='В избранном') {$('span',this).text('Добавить в избранное');}
		return false;
	});
	$('span.spam').click(function(){
		$(this).toggleClass('spam_active');
	});

	$('.topbar .preview a').click(function(){
		$(this).siblings().removeClass('active').end().addClass('active');
		$('div.albums').hide().eq($('.topbar .preview a').index(this)).show();
		return false;
	});
	$('.user-photos-type a').click(function(){
		$(this).siblings().removeClass('active').end().addClass('active');
		$('.user-photos').hide().eq($('.user-photos-type a').index(this)).show();
		return false;
	});
	$('.switch span:not(.link-photos)').click(function(){
		$(this).siblings().removeClass('active').end().addClass('active');
	});
	$('.user-photo .sel').click(function(){
		$(this).parents('.user-photo').toggleClass('user-photo-active');
		$('#multiedit').slideDown();
	});
	$('.user-multiedit h2').click(function(){
		$('#multiedit').slideToggle();
		return false;
	});
	$('#multiedit .reset').click(function(){
		$('.user-photo').removeClass('user-photo-active');
		$('.user-photo .sel,#sel0').attr('checked','');
		$('#multiedit').slideUp();
	});
	$('#multiedit #sel0').click(function(){
		if (!$(this).attr('checked')) {$('.user-photo').removeClass('user-photo-active');$('.user-photo .sel').attr('checked','');}
		else {$('.user-photo').addClass('user-photo-active'); $('.user-photo .sel').attr('checked','checked');}
	});
	$('#multiedit .cancel').click(function(){
		$('#multiedit').slideUp();
		return false;
	});
	$('#pp-add-photo .switch span').click(function(){
		$('#pp-add-photo .addphoto').hide().eq($('#pp-add-photo .switch span').index(this)).show();
		return false;
	});
	
	$('#tab1 .switch span:not(.link-photos)').click(function(){
		$('#tab1 .addphoto').hide().eq($('#tab1 .switch span').index(this)).show();
		return false;
	});
	$('#tab2 .switch span:not(.link-photos)').click(function(){
		$('#tab2 .addphoto').hide().eq($('#tab2 .switch span').index(this)).show();
		return false;
	});
	
	
	/* all hints */
	$('.zakladki img,.like img').hover(
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
	$('.users-stat .graf .vbar').hover(
		function(){
			var ttl=$(this).attr('date')+'<br />'+$(this).attr('val');
			var l=getAbsolutePosition(this).x-34;
			var t=getAbsolutePosition(this).y-51;
			$('<span />').html(ttl).appendTo($('<span class="pp-bhint" />').appendTo($('body')).css({left:l,top:t}));
		}, 
		function(){
			$('body>shape').remove(); /* ie6 */
			$('.pp-bhint').remove();
		}
	);
	$('#vtotal').hover(
	  function(){$('#pp-rate').css({left:getAbsolutePosition(this).x-29,top:getAbsolutePosition(this).y+30}).show();}, 
	  function(){$('#pp-rate').hide();}
	);
	$('#rtotal').click(function(){
		$('#pp-rep').css({left:getAbsolutePosition(this).x-97,top:getAbsolutePosition(this).y+18}).overlay().show();
		return false;
	});
	
	
	/* all close */
	$('#message .close').click(function(){
		$('#message').slideUp();
	});
	$('.questions .remove').click(function(){
		$(this).parent().hide();
	});
	$('.popup .close, .popup .x').click(function(){
		$(this).parents('.popup').hide();
		$('#overlay').remove();
		return false;
	});
	$('#header .nolog .close').click(function(){
		$('#header .nolog .close').hide().next('.open').show();
		$('#header .nolog,#header .nolog .leftinfo,#header .nolog .reg,#header .nolog .feat').animate({'height':48},'slow',function(){
			$('#header .nolog .leftinfo h2 span').addClass('dashed-white');
		});
	});
	$('#header .nolog .open,#header .nolog .leftinfo h2 span').click(function(){
		$('#header .nolog .open').hide().prev('.close').show();
		$('#header .nolog,#header .nolog .leftinfo,#header .nolog .reg,#header .nolog .feat').animate({'height':153},'slow',function(){
			$('#header .nolog .leftinfo h2 span').removeClass('dashed-white');
		});
	});
	
	
	/* photos */
	$('.carousel-out .prevblock').css({opacity:.5});
	$('.carousel-out .nextblock').css({opacity:.5});
	$('.carousel-out .next').click(function() {
		if (!animat){
			$('.carousel-out .nextblock').animate({opacity:0},500);
		}
	});
	$('.carousel-out .prev').click(function() {
		if (!animat){
			$('.carousel-out .prevblock').animate({opacity:0},500);
		}
	});
	animat=false;
	if ($('.carousel-out .carousel').length) {
		$('.carousel-out .carousel').jCarouselLite({
			visible: 3,
			pause: 100,
			speed: 800,
			btnNext: '.carousel-out .next,.carousel-out .nextblock',
			btnPrev: '.carousel-out .prev,.carousel-out .prevblock',
			beforeStart: function() {animat=true;},
			afterEnd: function() {
				animat=false;
				$('.carousel-out .prevblock,.carousel-out .nextblock').animate({opacity:.5},500);
			}
		});
	}
	$('.blog-block .photo,.photos li,.lenta-block .photo-block').hover(
		function(){$(this).find('.descript').show();},
		function(){$(this).find('.descript').hide();}
	);
	gala=$('.thumbs-top li');
	p_cura=gala.index($('li.active'));
	p_enda=gala.size()-1;
	//p_enda=$('.photo-block .frame img').size()-1;
	if ($('.thumbs-top .carousel').length) {
		$('.thumbs-top .carousel').jCarouselLite({
			visible: 11,
			btnNext: '.thumbs-top .next, .thumbs .next',
			btnPrev: '.thumbs-top .prev, .thumbs .prev',
			circular: true,
			mouseWheel: true,
			scroll: 5,
			speed: 1000
		});
	}
	gal=$('.thumbs li');
	p_cur=gal.index($('li.active'));
	p_end=gal.size()-1;
	vgal_size=$('.thumbs li').size()-1;
	if ($('.thumbs .carousel').length) {
		$('.thumbs .carousel').jCarouselLite({
			visible: 5,
			btnNext: '.photo .next, .thumbs-top .next, .thumbs .next',
			btnPrev: '.photo .prev, .thumbs-top .prev, .thumbs .prev',
			circular: true,
			vertical: true,
			mouseWheel: true
		});
	}
	
	$('.thumbs .next,.thumbs .prev').hover(
		function() { if (!$(this).hasClass('disabled')) {$(this).css({'background-position':'center -10px'});} },
		function() { $(this).css({'background-position':'center 0'}); }
	);
	$('.thumbs li a, .thumbs-top li a').click(function() {
		$(this).parent().siblings().removeClass('active').end().addClass('active');
		if (!$(this).hasClass('end')) {
			//$('#bigimg').attr('src', $(this).attr('href'));
		} else {
			window.location='photo_end.html';
		}
		return false;
	});
	/*
	$('.photo-block .photo').hover(
		function() {if ($(this).hasClass('fullscreen-act')) {$(this).children('div.fullscreen').show();}}, 
		function() {if ($(this).hasClass('fullscreen-act')) {$(this).children('div.fullscreen').hide();}}
    );
	*/
	mpi = 0;
	$('.fullscreen-act .frame div').height($('.fullscreen-act .frame img').eq(mpi).height());
	$('.fullscreen-act').height($('.fullscreen-act .frame img').eq(mpi).height()+10);
	//alert(p_enda);
	$('.photo-block .photo .prev').click(function() {
		if ($(this).parents('div.photo').hasClass('fullscreen-act')) {
			p_enda=$('.fullscreen-act .frame img').size()-1;
			p_cura = p_cura==0 ? 0 : p_cura-1;
			$('.thumbs-top li').removeClass('active').eq(p_cura).addClass('active');
			//$('#bigimg').attr('src', $('.thumbs-top li a').eq(p_cura).attr('href'));
			$('.fullscreen-act .frame img').eq(mpi).fadeOut(250);
			mpi--;
			if (mpi<=0) {mpi = p_enda; }
			var ci = $('.fullscreen-act .frame img').eq(mpi);
			ci.fadeIn(250);
			$('.fullscreen-act .frame div').animate({
				height: ci.height()
			},250);
			$('.fullscreen-act').animate({
				height: ci.height()+10
			},250);
		} else {
			p_cur = p_cur==0 ? 0 : p_cur-1;
			$('.thumbs li').removeClass('active').eq(p_cur).addClass('active');
			//$('#bigimg').attr('src', $('.thumbs li a').eq(p_cur).attr('href'));
			$('.photo-block .frame img').eq(mpi).fadeOut(250);
			mpi--;
			if (mpi<=0) {mpi = vgal_size;}
			var ci = $('.photo-block .frame img').eq(mpi);
			ci.fadeIn(250);
		}
		return false;
	});
	$('.photo-block .photo .next').click(function() {
		if ($(this).parents('div.photo').hasClass('fullscreen-act')) {
			p_enda=$('.fullscreen-act .frame img').size()-1;
			p_cura = p_cura==0 ? 0 : p_cura+1;
			$('.thumbs-top li').removeClass('active').eq(p_cura).addClass('active');
			//$('#bigimg').attr('src', $('.thumbs-top li a').eq(p_cura).attr('href'));
			$('.fullscreen-act .frame img').eq(mpi).fadeOut(250);
			mpi++;
			if (mpi>=p_enda) {mpi = 0;}
			var ci = $('.fullscreen-act .frame img').eq(mpi);
			ci.fadeIn(250);
			$('.fullscreen-act .frame div').animate({
				height: ci.height()
			},250);
			$('.fullscreen-act').animate({
				height: ci.height()+10
			},250);
		} else {
			p_cur = p_cur==0 ? 0 : p_cur+1;
			$('.thumbs li').removeClass('active').eq(p_cur).addClass('active');
			//$('#bigimg').attr('src', $('.thumbs li a').eq(p_cur).attr('href'));
			$('.photo-block .frame img').eq(mpi).fadeOut(250);
			mpi++;
			if (mpi>=vgal_size) {mpi = 0;}
			var ci = $('.photo-block .frame img').eq(mpi);
			ci.fadeIn(250);
		}
		return false;
	});
	$('.photo-week .dates .prev').click(function() {
		p_enda=$('.fullscreen-act .frame img').size()-1;
		p_cura = p_cura==0 ? 0 : p_cura-1;
		$('.fullscreen-act .frame img').eq(mpi).fadeOut(250);
		mpi--;
		if (mpi<=0) {mpi = p_enda; }
		var ci = $('.fullscreen-act .frame img').eq(mpi);
		ci.fadeIn(250);
		$('.fullscreen-act .frame div').animate({
			height: ci.height()
		},250);
		return false;
	});
	$('.photo-week .dates .next').click(function() {
		p_enda=$('.fullscreen-act .frame img').size()-1;
		p_cura = p_cura==0 ? 0 : p_cura+1;
		$('.fullscreen-act .frame img').eq(mpi).fadeOut(250);
		mpi++;
		if (mpi>=p_enda) {mpi = 0;}
		var ci = $('.fullscreen-act .frame img').eq(mpi);
		ci.fadeIn(250);
		$('.fullscreen-act .frame div').animate({
			height: ci.height()
		},250);
		return false;
	});
	$('#pp-photo .photo-block .frame img, .photo-block .fullscreen-act .frame img').each(function(){
		$(this).css({'marginLeft':-$(this).width()/2});
		$(this).css({'marginTop':-$(this).height()/2});
	});
	
	$('.thumbs li.noframe, .thumbs-top li.noframe').css({'border':0,'padding':0,'width':70,'height':70});
	
	if ($('.related_carousel').length) {
		$('.related_carousel').jCarouselLite({
			visible: 1,
			speed: 800,
			btnNext: '.outer-photo-related .arr_next',
			btnPrev: '.outer-photo-related .arr_prev',
			circular: false
		});
	}
	$('.user-photo-thumb .preview').hover(
		function(){$(this).find('.actions').show();},
		function(){$(this).find('.actions').hide();}
	);
	
	
	/* hover frame */
	$('.hovered a, .place-visited-hovered a').hover(
		function() {
			var image=$('img',this)[0];
			if (image != undefined){
				$('<span class="ihover" />').prependTo(this)
				.css({'height':image.height,'width':image.width,'background-image':'url(i/frame'+image.width+'x'+image.height+'.png)'});
			}
		},
		function() {
			$('.ihover',this).remove();
		}
	);
	
	/* underline */
	$('td.title a').mouseenter(function() {$(this).parents('td').eq(0).prev().find('a').mouseenter();});
	$('td.title a').mouseleave(function() {$(this).parents('td').eq(0).prev().find('a').mouseleave();});
	$('td a.preview').mouseenter(function() {$(this).parent('td').next().find('a').addClass('hover');});
	$('td a.preview').mouseleave(function() {$(this).parent('td').next().find('a').removeClass('hover');});
	
	$('.username a').mouseenter(function() {$(this).parent().prev('.avatar').find('a').mouseenter();});
	$('.username a').mouseleave(function() {$(this).parent().prev('.avatar').find('a').mouseleave();});
	$('.avatar a').mouseenter(function() {$(this).parent().next('.username').find('a').css('text-decoration','none');});
	$('.avatar a').mouseleave(function() {$(this).parent().next('.username').find('a').css('text-decoration','underline');});
	
	$('.user p a:first-child').mouseenter(function() {$(this).parent().prev('a.ava').mouseenter();});
	$('.user p a:first-child').mouseleave(function() {$(this).parent().prev('a.ava').mouseleave();});
	$('a.ava').mouseenter(function() {$(this).next('p').find('a').eq(0).css('text-decoration','none');});
	$('a.ava').mouseleave(function() {$(this).next('p').find('a').eq(0).css('text-decoration','underline');});
		
	/* search */
	$('.countries-search input').addClass('countries-field-input-blank');
	$('#search .search .add').click(function(){
		$('#search .search .add-menu').fadeIn();
		return false;
	});
	$('#footer .search .add').click(function(){
		$('#footer .search .add-menu').fadeIn();
		return false;
	});
	$('.countries-search input').focus(function(){
		$(this).removeClass('countries-field-input-blank').val('').unbind('focus');
	});
	$('.search .add-menu').mouseleave(function(){
		$(this).fadeOut();
	});
	
	$('#feedback_we').click(function(){
		$('#pp-feedback').overlay().centering().show();
		return false;
	});
	
	/*upload*/
	$('input.blank').focus(function(){
		$(this).removeClass('blank').val('').unbind('focus');
	});
	$('.photos-list .remove').click(function(){
		$(this).parents('tr').remove();
	});
	$('.photos-list .scrollable tr').hover(
		function(){$(this).addClass('hover');},
		function(){$(this).removeClass('hover');}
	);
	$('#photo-album-info .edit,.user-album .edit').click(function(){
		$(this).parents('.info').hide().next().show();
		return false;
	});
	$('#photo-album-info .cancel,.user-album .cancel').click(function(){
		$(this).parents('.info').hide().prev().show();
		return false;
	});
	$('.user-photo .edit').click(function(){
		$(this).hide().parents('.user-photo').find('.info').hide().eq(1).show();
		$(this).next('input').hide().next('label').hide();
		return false;
	});
	$('.user-photo .cancel').click(function(){
		$(this).parents('.user-photo').find('.info').hide().eq(0).show();
		$(this).parents('.user-photo').find('.edit').show();
		$(this).parents('.user-photo').find('input').show();
		$(this).parents('.user-photo').find('label').show();
		return false;
	});
	$('#upload-button input').click(function(){
		$('.photo-upload:lt(2)').hide();
		$('.photo-upload-process').show();
		$('.photo-upload-process .progress div').css({width:0}).animate({width:'100%'}, 5000, function() {
			$('.photo-upload-process').hide();
			$('.photo-upload-ok').show();
			$('#helptext-3d').hide();
			$('#helptext-3').show();
		});
	});
	
	/*city*/
	$('form .place').click(function(){
		$('#pp-reg-city').overlay().centering().show();
	});
	$('#pp-city div p').click(function() {
		$(this).siblings('.active').removeClass('active').end().toggleClass('active');
		$('#pp-city .hint').hide();
		$('#pp-city .city').show();
		$('#selected-co').text($('#pp-city .country p.active').text());
		$('#selected-city').text($('#pp-city .city p.active').text());
	});
	$('#pp-city input').click(function() {
		$(this).parents('.popup').hide();
		$('#overlay').remove();
		return false;
	});
	
	$('.reg-tab .place span,#link-city').click(function(){
		$('#pp-reg-city').overlay().centering().show();
	});
	$('#pp-reg-city div p').click(function(){
		$(this).siblings('.active').removeClass('active').end().toggleClass('active');
		$('#selected-co').text($('#pp-reg-city .country p.active').text());
		$('#selected-city').text($('#pp-reg-city .city p.active').text());
	});
	$('#pp-reg-city .place input').click(function(){
		$('#pp-reg-city div p').removeClass('active');
		$('#selected-co').text('');
		$('#selected-city').text('');
		return false;
	});
	$('#link-place').click(function(){
		$('#pp-place').overlay().centering().show();
	});
	$('#link-country-city').click(function(){
		$('#pp-place').overlay().css({left:getAbsolutePosition(this).x-47,top:getAbsolutePosition(this).y-19}).show();
		return false;
	});
	$('#pp-place div p[class!=tt]').click(function(){
		$(this).siblings('.active').removeClass('active').end().toggleClass('active');
		$('#selected-co').text($('#pp-place .country p.active').text());
		$('#pp-place').hide();
		$('#overlay').remove();
	});
	
	$('.add-photo').click(function(){
		$('#pp-add-photo').overlay().centering().show();
	});	
	
	/* comments */
	$('.comment-block .photo').hover(function(){$(this).find('.descript').show();}, function(){$(this).find('.descript').hide();});
	$('.comment-block .actions .reply').click(function() {
		$(this).find('span').toggleClass('act');
		$(this).parents('.comment-block').find('.outer_reply').toggle();
		return false;
	});
	$('.comment-block .remove').click(function() {
		$(this).toggleClass('remove_act');
		return false;
	});
	$('.comment-block .spam').click(function() {
		$(this).toggleClass('spam-act');
		$(this).next('.spamtext').toggleClass('spamtext-act');
		return false;
	});
	$('.comment-block .spamtext').click(function() {
		$(this).toggleClass('spamtext-act');
		$(this).prev('.spam').toggleClass('spam-act');
		return false;
	});
	$('.comments-track').click(function() {
		$(this).toggleClass('comments-track-act');
		return false;
	});
	$('.lenta-track').click(function() {
		$(this).toggleClass('lenta-track-act');
		return false;
	});
	$('.comment-block').hover(
		function() {
			$(this).find('.spamtext').fadeIn(200);
			$(this).find('.spam').addClass('spam-hover');
			//$(this).find('.spam-act').addClass('spam-act-hover');
		},
		function() {
			$(this).find('.spamtext').fadeOut(200);
			$(this).find('.spam').removeClass('spam-hover');
			//$(this).find('.spam,.spam-act').removeClass('spam-hover').removeClass('spam-act-hover');
		}
	);
	
	
	/* photo popups */
	$('.gallery .cont .imgs ul li').hover(
		function(){$(this).addClass('act')}, 
		function(){if (!($(this).find('input[type=checkbox]').attr('checked'))) {$(this).removeClass('act')}}
	);
	$('.gallery .cont .imgs ul li div').click(function(){
		$(this).parent().find('input[type=checkbox]').click();
	});
	
	$('.link-photos,.user-multiedit .change').click(function() {
		$('#pp-photos').overlay().centering().show();
		$('#pp-photos .nav .carousel').jCarouselLite({
			visible: 2,
			speed: 800,
			btnNext: '.pp-photos .nav .next',
			btnPrev: '.pp-photos .nav .prev',
			circular: false
		});
		return false;
	});
	$('.user-photo .del,.user-multiedit .del').click(function() {
		$('#pp-photo-del').overlay().centering().show();
		return false;
	});
	
	/* input hint */
	/*if (!$.browser.webkit) {*/
		$('INPUT[placeholder], TEXTAREA[placeholder]').blur(function(){ 
			if ($(this).val()=='') {
				$(this).val($(this).attr('placeholder'));
				$(this).addClass('m-placeholder');
			}
		}).focus(function(){
			$(this).removeClass('m-placeholder');
			if ($(this).val()==$(this).attr('placeholder'))
				$(this).val('');
		}).each(function(){
			if ( ($(this).val()=='') || ($(this).val()==$(this).attr('placeholder')) ) {
				$(this).val( $(this).attr('placeholder') );
				$(this).addClass('m-placeholder');
			}
			var form = $(this).closest('FORM');
			if (form.length)
				form.submit(function(){
					if ($(this).val()==$(this).attr('placeholder'))
						$(this).val('');
				});
		});
	/*}*/
	
	/* go top */
	$('#footer .gotop').click(function(){
		window.scroll(0,0);
		return false;
	});
	
	
	/* calendar */
	if ($.fn.datePicker == undefined) {
		$.fn.datePicker = function() {return this; };
	};
	if (!Date.prototype['asString']) {
		Date.prototype['asString'] = function() {return null; };
	};
	$('.btn-cal').next('.value').text(new Date().asString());
	$('.btn-cal').datePicker({createButton:false})
		.bind('click',function(){$(this).dpDisplay();this.blur();return false;})
		.bind('dateSelected',function(e, selectedDate, $td){$(this).next('.value').text(selectedDate.asString());}
	);
	
	/* registration */
	$('.freenicks input').click(function(){
		$(this).parent().parent().hide().prevAll('.login').find('input').val($(this).next().text());
		return false;
	});
	
	$('.see_more_photo .dashed-grey-dark').click(function(){
		$('.user-photos .more_photo').show();
		return false;
	});
	
	/* country2.html */
	$('#link-residents').click(function(){
		$('#pp-residents').overlay().centering().show();
		return false;
	});
	$('#link-country').click(function(){
		$('#pp-country').overlay().css({left:getAbsolutePosition(this).x-47,top:getAbsolutePosition(this).y-19}).show();
		return false;
	});
	
	
	/* user-lenta.html */
	$('div.lenta-status .info .show').click(function(){
		$(this).parent().addClass('none').siblings('.history').addClass('block');
		$('div.lenta-status div.status').addClass('history-act status-act');
	});
	$('div.lenta-status .history .hide').click(function(){
		$(this).parent().parent().removeClass('block').siblings('.info').removeClass('none');
		$('div.lenta-status div.status').removeClass('history-act status-act');
	});
	$('div.user-auth div.status').click(function(){
		$(this).removeClass('history-act status-act').addClass('none').siblings('.history').removeClass('block');
		$('div.lenta-status .info').removeClass('none').addClass('info-edit');
		$('div.lenta-status div.status-submit, div.lenta-status div.status-edit').addClass('block').overlay_status();
		$('div.lenta-status .status-edit input').select();
		return false;
	});
	$('div.lenta-status div.status-submit input').click(function(){
		$(this).parent().removeClass('block').siblings('.status-edit').removeClass('block');
		$('div.lenta-status .info').removeClass('info-edit');
		$('div.lenta-status div.status').removeClass('none');
		$('#overlay_status').remove();
	});
	$('.lenta-status .info .cancel').click(function(){
		$(this).parent().siblings('.block').removeClass('block');
		$(this).parent().removeClass('info-edit');
		$('div.lenta-status div.status').removeClass('none');
		$('#overlay_status').remove();
	});
	$('div.user-auth div.status').hover(
		function() {
			if (!$(this).hasClass('history-act') && !$(this).hasClass('none')) {
				$(this).toggleClass('status-act');
				$(this).next().toggleClass('none');
			}
		}, 
		function() {
			if (!$(this).hasClass('history-act') && !$(this).hasClass('none')) {
				$(this).toggleClass('status-act');
				$(this).next().toggleClass('none');
			}
		}
    );
	$('.history .status-info').hover(
		function(){$(this).find('del').fadeIn();},
		function(){$(this).find('del').fadeOut();}
	);
	$('.history .status-info del, .history .status-question .yes').click(function(){
		$(this).parent().hide().next().show();
	});
	$('.history .status-question .no').click(function(){
		$(this).parent().hide().prev().show();
	});
	$('.history .status-delete .restore').click(function(){
		$(this).parent().hide().prev().prev().show();
	});
	
	/* country_photo.html */
	$('div.country-photos div.photo').hover(
		function() {
			$(this).children('div.tt').show();
		}, 
		function() {
			$(this).children('div.tt').hide();
		}
    );
	
	/* user-wall.html */
	$('.comment-block .del').click(function(){
		$(this).parents('.comment-block').find('.message').eq(0).hide().next().show();
		$(this).parents('.comment-block').find('.outer_reply').hide();
		$(this).parents('.actions').find('.reply span').removeClass('act');
		return false;
	});
	$('.comment-block .restore').click(function(){
		$(this).parent().hide().prev().show();
	});
	
	/* main.html */
	$('.show_more').click(function(){
		$(this).hide();
		$(this).next('.block_show_more').show();
		return false;
	});
	$('.mainmenu .countries, .header-menu-link-js').click(function() {
		$('#countries').slideToggle(600);
		return false;
	});
	$('#countries ins').click(function() {
		$('#countries').slideToggle(600);
		return false;
	});
	$('.countries-letters a').click(function() {
		$(this).siblings().removeClass('countries-letter-active').end().addClass('countries-letter-active');
		$('.countries-items').hide().eq($('#countries .countries-letters a').index(this)).show();
		return false;
	});
	$('.countries-items a').click(function() {
		$('#countries').slideToggle(600);
		return false;
	});
	
	$('.photo-week .thumbs a:even').addClass('even');
	
	var gal=$('.photo-week .thumbs a');
	var p_cur=gal.index($('.photo-week .thumbs a.active'));
	var p_end=gal.size()-1;
	$('.photo-week .photo .prev,.dates .prev').click(function() {
		p_cur = p_cur==0 ? p_end : p_cur-1;
		$('.photo-week .thumbs a').removeClass('active').eq(p_cur).addClass('active');
		$('#curimg').attr('src', $('.photo-week .thumbs a').eq(p_cur).attr('href'));
		return false;
	});
	$('.photo-week .photo .next,.dates .next').click(function() {
		p_cur = p_cur==p_end ? 0 : p_cur+1;
		$('.photo-week .thumbs a').removeClass('active').eq(p_cur).addClass('active');
		$('#curimg').attr('src', $('.photo-week .thumbs a').eq(p_cur).attr('href'));
		return false;
	});
	$('.photo-week .photo').hover(
		function(){$(this).children('.fullscreen').show();}, 
		function(){$(this).children('.fullscreen').hide();}
    );
	
	/* */
	$('.soc_likebox .vkl li').click(function(){
		$(this).siblings().removeClass('active').end().addClass('active');
		$('.soc_likebox .tab').hide().eq($('.soc_likebox .vkl li').index(this)).show();
		return false;
	});
	
	/* notice */
	$('#link-notice,#link-notice-new').click(function(){
		var nt=$('#link-notice')[0];
		$('#pp-notice').css({left:getAbsolutePosition(nt).x+5,top:getAbsolutePosition(nt).y+16}).overlay().show();
		return false;
	});
	
	/* init */
	button_to_up();
	setH();
	
	var count_slide = $('.slides .pc .img').size();
	var cur_slide = 0;
	$('.slides .top .nav em').text(count_slide);
	$('.slides .prev').click(function(){
		$(this).parent().find('.img').eq(cur_slide).removeClass('active').fadeOut(500);
		cur_slide--;
		if (cur_slide<0) {
			cur_slide = count_slide-1;
		}
		$('.slides .top .nav strong').text(cur_slide+1);
		cur_obj = $(this).parents('.slides').find('.pc .img').eq(cur_slide);
		cur_obj.addClass('active').fadeIn(500,function(){
			cur_obj.find('.next, .prev').height(cur_obj.find('img').height());
		});
		//$(this).parent('.v').next('.pt').find('div').hide().eq(cur_slide).show();
		var po = $(this).parent('.v');
		po.height(po.find('.active').height());
		po.find('.prev, .next').height(po.find('.active').height());
		return false;
	});	
	$('.slides .next').click(function(){
		$(this).parent().find('.img').eq(cur_slide).removeClass('active').fadeOut(500);
		cur_slide++;
		if (cur_slide==count_slide) {
			cur_slide = 0;
		}
		$('.slides .top .nav strong').text(cur_slide+1);
		cur_obj = $(this).parents('.slides').find('.pc .img').eq(cur_slide);
		cur_obj.addClass('active').fadeIn(500,function(){
			cur_obj.find('.next, .prev').height(cur_obj.find('img').height());
		});
		//$(this).parent('.v').next('.pt').find('div').hide().eq(cur_slide).show();
		var po = $(this).parent('.v');
		po.height(po.find('.active').height());
		po.find('.prev, .next').height(po.find('.active').height());
		return false;
	});	
	
	$('.slides').each(function(){
		var cur_height = $(this).find('.active').height();
		$(this).find('.pc .v').height(cur_height);
	});

	$('.nf .bottom .f .fv a').click(function(){
		$(this).parent().toggleClass('fv_act');
		return false;
	});
	
	$('.nf .bottom .f .bd a').click(function(){
		$(this).parent().toggleClass('bd_act');
		return false;
	});
	
	$('.pc .v').hover(function(){
		$(this).find('.hover, .fullscreen').show();
	},function(){
		$(this).find('.hover, .fullscreen').hide();
	});
	
	if ($('.nf input:radio').length) {
	$('.nf input:radio').checkbox({cls:'jquery-radio'});
	}
	
	$('.nf .rates .item').click(function() {
		$('.for-jquery-radio',this).click();
	});
	
	
	$('#header .mainmenu .add, .auth .add_material').click(function(){
		$('#add_material').overlay().centering().show();
		return false;
	});
	
	var cu_size = $('.choose_edition .in_2 .cu .item').size()-1;
	var cu_index = 0;
	$('.choose_edition .cu_line .prev').click(function(){
		$('.choose_edition .cu .item').eq(cu_index).fadeOut(500);
		cu_index--;
		if (cu_index<=0) {
			cu_index = cu_size;
		}
		$('.choose_edition .cu .item').eq(cu_index).fadeIn(500);
		$('.choose_edition .cu').animate({
		    height: $('.choose_edition .cu .item').eq(cu_index).height()
		  }, 500);
		//$('.choose_edition .cu').height($('.choose_edition .cu .item').eq(cu_index).height());
		return false;
	});
	$('.choose_edition .cu_line .next').click(function(){
		$('.choose_edition .cu .item').eq(cu_index).fadeOut(500);
		cu_index++;
		if (cu_index>cu_size) {
			cu_index = 0;
		}
		$('.choose_edition .cu .item').eq(cu_index).fadeIn(500);
		$('.choose_edition .cu').animate({
		    height: $('.choose_edition .cu .item').eq(cu_index).height()
		  }, 500);
		//$('.choose_edition .cu').height($('.choose_edition .cu .item').eq(cu_index).height());
		return false;
	});
	
	$('#personal_data').centering(1,1);
	
	$('#personal_data .close').click(function(){
		$('#personal_data').hide();
		$('#personal_data2').show().centering(1,1);
		return false;
	});
	
	$('#personal_data2 .close').click(function(){
		$('#overlay_white').remove();
		$('#personal_data2').hide();
		return false;
	});
	
	
	$('.attractions .add_geo a, .user-photo p a.add_geo').click(function(){
		$('#add_attractions').overlay().centering().show();
		return false;
	});
		
	if ($('.attr_by_note .list').length) {
		$('.attr_by_note .list').jCarouselLite({
			visible: 3,
			speed: 500,
			btnNext: '.attr_by_note .next',
			circular: true
		});
	}
	
	$('.nf .bottom .b .plus').click(function(){
		$(this).next().removeClass('c_red');
		$(this).addClass('c_green');
		$(this).parent().prev().find('.bgpr').removeClass('c_red').addClass('c_green');
		return false;
	});
	
	$('.nf .bottom .b .minus').click(function(){
		$(this).prev().removeClass('c_green');
		$(this).addClass('c_red');
		$(this).parent().prev().find('.bgpr').removeClass('c_green').addClass('c_red');
		return false;
	});
	
	$('.proc_save').click(function(){
		$('#pp_load').overlay_white().centering().show();
		return false;
	});
	
	$('.open_like_friends').click(function(){
		$('#pp-friends').overlay().centering().show();
		return false;
	});
	
	/* user_profile_agent_edit.html */
	$('.user-side-edit .edit').click(function(){
		var $parent=$(this).parents('.user-side-edit');
		$parent.find('.editable,.actions').hide();
		$parent.find('.editing').show();
		return false;
	});
	$('.user-side-edit .cancel,.user-side-edit .save').click(function(){
		var $parent=$(this).parents('.user-side-edit');
		$parent.find('.editable,.actions').show();
		$parent.find('.editing').hide();
		return false;
	});
	
	/* country_questions.html */
	if ($('.side-experts .items').length) {
		$('.side-experts .items').jCarouselLite({
			visible: 3,
			speed: 500,
			btnNext: '.side-experts .next',
			btnPrev: '.side-experts .prev',
			circular: true
		});
	}
	$('.country-quest .reply').click(function(){
		$(this).parents('.country-quest').find('.your').fadeToggle();
		return false;
	});
	$('#quest-best-nav .next').click(function(){
		var items=$('.country-quest-best');
		var index = items.filter(':visible').prevAll().length;
		var size=items.length-1;
		items.eq(index).fadeOut(500, function() {
			index++;
			if (index>size) {index = 0;}
			items.eq(index).fadeIn(500);
		});
		return false;
	});
	$('#quest-best-nav .prev').click(function(){
		var items=$('.country-quest-best');
		var index = items.filter(':visible').prevAll().length;
		var size=items.length-1;
		items.eq(index).fadeOut(500, function() {
			index--;
			if (index<0) {index = size;}
			items.eq(index).fadeIn(500);
		});
		return false;
	});
	
	/* user_note_cat.html */
	$('#link-subscribers').click(function(){
		$('#pp-subscribers').overlay().centering().show();
		return false;
	});
	
	$('ul.scriptovoe li').click(function(){
		$(this).siblings().removeClass('active').end().addClass('active');
		$('ul.norm-link').hide().eq($('ul.scriptovoe li').index(this)).show();
	});
	
	$('table.userslist .ta-line').hover(
		function() { $(this).siblings('div.hint').show(); }, 
		function() { $(this).siblings('div.hint').hide(); }
    );
	
	/* user_my_quest_one.html */
	$('.hint-best del').click(function(){
		$(this).parent().hide();
	});
	$('.user-answer .del').click(function(){
		$(this).parents('.user-answer').find('.message').hide().next().show();
		$(this).parents('.user-answer').find('.actions').hide();
		return false;
	});
	$('.user-answer .restore').click(function(){
		$(this).parent().hide().prev().show();
		$(this).parents('.user-answer').find('.actions').show();
	});
	$('.user-answer .best span').click(function(){
		$(this).parent().hide().next().show();
	});
	$('.user-answer textarea,.country-quest textarea').keydown(function(){
		var lineHeight = 14;
		var minHeight = 35;
		if (this.clientHeight>minHeight) while (this.clientHeight == this.scrollHeight) {this.style.height = this.clientHeight - lineHeight + 'px';}
		while (this.clientHeight < this.scrollHeight) {this.style.height = this.clientHeight + lineHeight + 'px';}
	});
	/* */
	$('.auth .user-name a').click(function(){
		$('#user_menu').css({left:getAbsolutePosition(this).x-7,top:getAbsolutePosition(this).y-7}).overlay().show();
		return false;
	});
	$('#link-notice-pp').click(function(){
		$('#user_notices').css({left:getAbsolutePosition(this).x-9,top:getAbsolutePosition(this).y-9}).overlay().show();
		return false;
	});
	$('#user_menu .name').click(function(){
		$('#user_menu').hide();
		$('#overlay').remove();
		return false;
	});
	$('#user_notices .name').click(function(){
		$('#user_notices').hide();
		$('#overlay').remove();
		return false;
	});
	$('#user_notices .list .item').hover(function(){
		$(this).addClass('act');
	},function(){
		$(this).removeClass('act');
	});
	
	$('.user-quest .actions .reply').click(function(){
		$(this).toggleClass('reply-active').parents('.user-quest').find('.your').fadeToggle();
		return false;
	});
	
	
	if (document.all && !window.performance) { /* IE6-IE8 */
		$('.aft').each(function(){
			$(this).append('<span class="after" />');
		});
	}
	
	$('.link-recom').hover(
		function(){$(this).not('.link-recom-active').addClass('link-recom-hover').html('Рекомендую!');},
		function(){$(this).not('.link-recom-active').removeClass('link-recom-hover').html('Рекоменовать');}
	);
	$('.link-recom').click(function(){
		$('#pp-recom').overlay().css({left:getAbsolutePosition(this).x-206,top:getAbsolutePosition(this).y-26}).show();
        $(this).addClass('link-recom-active').html('Рекомендую!');        
		return false;
	});
	$('.link-here').click(function(){
		$('#pp-here').overlay().css({left:getAbsolutePosition(this).x-125,top:getAbsolutePosition(this).y-135}).show(); 
		$('#visited-nobody').hide();
		$('#visited-somebody').show();
		return false;
	});

	
	
	$('.popup_light .close, .popup_light .cancel, .popup_light .next').click(function(){
		$(this).parents('.popup_light').hide();
		$('#overlay,#overlay_black').remove();
		return false;
	});
	
	$('.advice-buttons .advice-buttons-ask').click(function(){
		$('#ask_question').overlay().show().centering(1,1);
		return false;
	});
	
	$('.advice-buttons .advice-buttons-advise').click(function(){
		$('#give_advice').overlay().show().centering(1,1);
		return false;
	});
	
	$('.popup-blue .close').click(function(){
		$(this).parents('.popup-blue').hide();
		$('#overlay,#overlay_black').remove();
		return false;
	});
	
	$('.popup-gray .close').click(function(){
		$(this).parents('.popup-gray').hide();
		$('#overlay,#overlay_black').remove();
		return false;
	});
	
	$('.advice-tabs-table .advice-tabs-item a').click(function(){
		$(this).parent().siblings().removeClass('advice-tabs-item-act').end().addClass('advice-tabs-item-act');
		$('.advice-tabs-block').hide().eq($('.advice-tabs-table .advice-tabs-item a').index(this)).show();
		/*if (!$(this).hasClass('advice-tabs-item-act') && $(this).text() == 'Советы') {
			$(this).text('Последние советы').parent().siblings().find('a').text('Вопросы');
		} else if (!$(this).hasClass('advice-tabs-item-act') && $(this).text() == 'Вопросы') {
			$(this).text('Последние вопросы').parent().siblings().find('a').text('Советы');
		}*/
		return false;
	});
	
	$('.header-search-input').focus(function() {
   		$('.header-autocomplete14').show();
	});
	$('.header-search-input').focusout(function() {
			$('.header-autocomplete14').hide();
	});

	$('.filter_user .h td.flt a').click(function(){
		$(this).siblings().removeClass('act').end().addClass('act');
	});
	
	
	$('.page-title-hint-img').hover(
		function() {
			$(this).siblings('.page-title-hint').show();
		}, 
		function() {
			$(this).siblings('.page-title-hint').hide();
		}
	 );
	
});

function button_to_up(){
	$('.link-to-up').css('margin-left',-$('#content').width()/2+4);
	if ($('#content').width() == 1260) {
		$('.link-to-up').css('margin-left',-$('#content').width()/2-30);
	}
	if ($(window).scrollTop()>($(window).height()+100)) {
		$('.link-to-up').show().css('top',$(window).scrollTop()+10);
	} else {
		$('.link-to-up').hide();
	}
}
function setH(){
	var h=$(window).height();
	$('#pp-photo .photo,#pp-photo .navigation').height(h-105);
	$('#pp-photo .photo .frame,#pp-photo .photo .frame div').height(h-115);
}
$(window).resize(function(){
	setH();
	button_to_up();
});
$(window).scroll(function () {
	button_to_up();
});



