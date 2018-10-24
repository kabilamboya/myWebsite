$('document').ready(function(){
	$('.active').css('border', '1px solid white')
   $('.main-nav').children('li').hover().mouseenter(function(){
   		$('.active').css('border', '0')
    	$(this).css('border', '1px solid white')
    }).mouseleave(function(){
    	$('.active').css('border','1px solid white')
    	$(this).css('border', '0')


    })
       
    
    
    
});