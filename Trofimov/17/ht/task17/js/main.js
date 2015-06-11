$(function(){
	accordionHide();
	
	function accordionHide(){
//		var accordion = $('.accordion').children();
		var accordionLI = $('.accordion > li > a');
		var slider = $('.slider');
		console.log(accordion);
		accordion.each(function(i, el){
            accordion.removeClass('active');
			
//			accordion.find('.slider').css("display", "none");
			$(el).on('click', function(e){
                e.preventDefault();
                accordion.removeClass('active');
                $(this).addClass('active');
				$(this).find('.slider').css("display", "inline");
            })
        })

	}
})