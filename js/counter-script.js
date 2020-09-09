$(document).ready(function(){

	var targetDate = new Date('December 31 2020 23:59:59').getTime();
	var days, hours, minutes, seconds;
	var $countdown = $('.count-down-timer');

	$daysField = $countdown.find('.days');
	$hoursField = $countdown.find('.hours');
	$minutesField = $countdown.find('.minutes');
	$secondsField = $countdown.find('.seconds');
 
	var clear = setInterval(function () {
		var currentDate = new Date().getTime();
	    var secondsLeft = (targetDate - currentDate) / 1000;
	 
	    days = parseInt(secondsLeft / 86400);
	    secondsLeft = secondsLeft % 86400;
	     
	    hours = parseInt(secondsLeft / 3600);
	    secondsLeft = secondsLeft % 3600;
	     
	    minutes = parseInt(secondsLeft / 60);
	    seconds = parseInt(secondsLeft % 60);
	    
	   
	    $daysField.html(days+'d');
	    $hoursField.html(hours+'h');
	    $minutesField.html(minutes+'m');
	    $secondsField.html(seconds+'s');

	    if (targetDate - currentDate < 0) {
	    	clearInterval(clear);
			$('.count-down-timer').css('display','none');
			$('.container').html('Count Down Expired!!!').css("font-size","40px");
		}
	 
	}, 1000);

});
