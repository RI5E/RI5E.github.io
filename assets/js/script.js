$(document).ready(function() {
    $("#scrolldown-dark").click(function(event){
        $('html, body').animate({scrollTop: $("#introduction").offset().top}, 800);
    });

    $("#introscroll").click(function(event){
    	$('html, body').animate({scrollTop: $("#introduction").offset().top}, 800);
    });

    $("#scrolldown").click(function(event){
        $('html, body').animate({scrollTop: $("#project-list").offset().top}, 800);
    });

    $("#projectscroll").click(function(event){
    	$('html, body').animate({scrollTop: $("#project-list").offset().top}, 800);
    });

    $("#scrolldown-two").click(function(event){
    	$('html, body').animate({scrollTop: $("#contact").offset().top}, 800);
    });

    $("#contactscroll").click(function(event){
    	$('html, body').animate({scrollTop: $("#contact").offset().top}, 800);
    });

    $("#scrollup-dark").click(function(event){
    	$('html, body').animate({scrollTop: 0}, 800);
    });

    $(".thumbnail-label").hide();


    $("#strailsthumb").hover(function(){
    	$("#strailsthumb").addClass('showname');
		}, function(){
    		$("#strailsthumb").removeClass('showname');
	});

	$('#strailsthumb').mouseenter(function() {
    	$("#strailslabel").slideDown('slow');  
	}).mouseleave(function() {      
    	if(!$('#strailsthumb').hasClass('showname')){
        	$('#strailslabel').hide();
    	}
	});

	$("#editorthumb").hover(function(){
    	$("#editorthumb").addClass('showname');
		}, function(){
    		$("#editorthumb").removeClass('showname');
	});

	$('#editorthumb').mouseenter(function() {
    	$("#editorlabel").slideDown('slow');  
	}).mouseleave(function() {      
    	if(!$('#editorthumb').hasClass('showname')){
        	$('#editorlabel').hide();
    	}
	});

	$("#pivotthumb").hover(function(){
    	$("#pivotthumb").addClass('showname');
		}, function(){
    		$("#pivotthumb").removeClass('showname');
	});

	$('#pivotthumb').mouseenter(function() {
    	$("#pivotframelabel").slideDown('slow');  
	}).mouseleave(function() {      
    	if(!$('#pivotthumb').hasClass('showname')){
        	$('#pivotframelabel').hide();
    	}
	});


	$('#header').hide();

	$('#header-button').click(function() {
		if ($('#header').hasClass('showheader')) {
			$('#header').removeClass('showheader');
			$('#header').fadeOut();
		} else {
			$('#header').addClass('showheader');
			$('#header').fadeIn();
		}
	});

});