//js code from davidguerreiro.com Written by David Guerreiro

/*
* Shows or hide the option ul link for every work example
* @param {Number} work example ul id
* @return Void
*/
function info_display(id){

	//Variables
	var element_name = 'ul_' + id;
	var element = $('#' + element_name);

	//animation

	if(element.css('display') == 'none')
		element.slideDown();
	else
		element.slideUp();
}