let modal = null;

function showModalWindow(){
	const target = $(this).attr('href');
	modal = target;
	$(target).fadeToggle(400);
	console.log(modal);
}

function hideModalWindow(){
	$(modal).fadeToggle(400);
	console.log('click');
}

$(document).ready(function() {

	$('.js_modal').click(showModalWindow);
	$('.modal_window').click(hideModalWindow);
	$('.modal_wrapper').click(function(event){
		event.stopPropagation();
	})
});