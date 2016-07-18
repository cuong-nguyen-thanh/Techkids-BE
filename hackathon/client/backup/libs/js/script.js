$(document).ready(function(){
	$('body').on('click', '#dropdown-button', function(e){
		e.preventDefault();
		$('#dropdown-menu').toggleClass('active');
	});
});