		$(document).ready(function() {
		  $('#categories li a').click(function() {
		    // fetch the class of the clicked item
		    var ourClass = $(this).attr('class');
		
		    // reset the active class on all the buttons
		    $('#categories li').removeClass('active');
		    // update the active state on our clicked button
		    $(this).parent().addClass('active');
		
		    if(ourClass == 'all') {
		      // show all our items
		      $('#events').children('dl').show();
		    }
		    else {
		      // hide all elements that don't share ourClass
		      $('#events').children('dl:not(.' + ourClass + ')').hide();
		      // show all elements that do share ourClass
		      $('#events').children('dl.' + ourClass).show();
		    }
		    return false;
		  });
		});
	