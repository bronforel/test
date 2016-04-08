



// center element on screen  ----------------------------------------------
jQuery.fn.center = function () {
	
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 3) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +  $(window).scrollLeft()) + "px");
    return this;
}



// Check if string is valig emailaddress ----------------------------------
function isValidEmailAdress(sEmail)
{
	var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	return pattern.test(sEmail);    
}

// Check if string is valig password ----------------------------------
function isValidPassWord(sPassWord)
{
	var pattern =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!_@$%^&*-]*).{8,15}$/;
	return pattern.test(sPassWord); 
}


//Returns a random integer between min (inclusive) and max (inclusive)
function GetRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}