$(document).ready(function() {

	// Mobile Navigation
	
	$('.mainNav ul:first-child').clone().appendTo('.mobileNav');
	
	$('.navTrigger').click(function () {
		$('.mobileNav').slideToggle(600);
		$(this).toggleClass('navTrigger_close');
		return false;
	});
	
	$('.mobileNav ul li').has('ul').addClass('mobile_drop');
	
	$('.mobile_drop > a:first-child').append('<span class="more"></span>');
	
	// Mobile Nav Slide Down
	$('.mobileNav ul li').has('ul').click(function(event) {
		$(this).toggleClass('subnav_click');
		$('ul', this).slideToggle(500);
		$('.more').toggleClass('less');
		event.preventDefault();
	});

	// Main Nav Rollover
	
	$('.mainNav ul li').has("ul").hover(function() {
		$(this).toggleClass('nav_roll');
		$('ul', this).slideToggle('fast');
		return false;
	});
	
		
	var drop_nav = $('.mainNav ul li').has('ul');
	
	drop_nav.find('> a').click(function(event) {
		event.preventDefault();
	});
	
	// Contact Form Show...
	
	$('#contactTrigger').click(function(event) {
		$('.get_started .contact_form').slideToggle(500);
		event.preventDefault();
	});

	// Form Field Placeholders...
	
	$('input, textarea').each(function() {
	
	
		var set_value = $(this).val();
		
		$(this).focus(function() {
			if($(this).val() == set_value) {
				$(this).val('');
			}
		});
		
		$(this).blur(function() {
			if($(this).val() == "") {
				$(this).val(set_value);
			}
		});
		
	});

	var standard_message = "MESSAGE*";
	$('textarea#comment').focus(
	    function() {
	        if ($(this).val() == standard_message)
	            $(this).val("");
	    }
	);
	$('textarea#comment').blur(
	    function() {
	        if ($(this).val() == "")
	            $(this).val(standard_message);
	    }
	);
	
	// Semd to Top Mobile Function 
	
	$('.to_top a').click(function (){
		$("html, body").animate({scrollTop: 0}, 500);
		event.preventDefault();
	});
	    
    var $window = $(window);
     
    function checkWidth() {
	    
	    var windowsize = $window.width();
	    
	    if(windowsize > 769) {
		    	$('.mobileNav').hide();
				$('.mainNav').show();
	    }
	    
	    else {
			 $('.mainNav').hide();
			 $('.quick_links ul').hide();
	    }
        
        // IF window is Wide
        if (windowsize > 605) {        		
				$('.feature_left').removeClass('omega').remove().insertBefore($('.feature_right'));
				$('.footer_bottom .copyright').addClass('omega').remove().insertBefore($('.footer_bottom .social'));									$('.quick_links ul').show();
			}
			// IF Window is Narrow
			else {
				$('.feature_left').removeClass('omega').remove().insertAfter($('.feature_right'));
				$('.footer_bottom .copyright').removeClass('omega').remove().insertAfter($('.footer_bottom .social'));
			}
			
    }
    
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
    
    // Click Function for Footer Quick Links
    
    $('.quickTrigger').click(function(event) {
		 $('.quick_links ul').slideToggle(500);
		 event.preventDefault();
	});
    
});