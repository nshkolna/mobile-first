var dropToggle = $('.menu_right > li').has('ul').children('a');
	dropToggle.on('click', function() {
	dropToggle.not(this).closest('li').find('ul').slideUp(200);
	$(this).closest('li').children('ul').slideToggle(200);
	return false;
});

$( ".toggle_icon" ).on('click', function() {
	$( 'body' ).toggleClass( "open" );
});
