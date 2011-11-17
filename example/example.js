(function($) {
	var obj = {
		firstname: 'John',
		lastname: 'Doe'
	};

	// using the standard syntax: 
	var tmpl = "Hi there {firstname}! Your last name is {lastname}",
		stdout = $.interpolate(tmpl, obj);
		
	$('#stdout').text(stdout);

	// using a custom syntax:
	var tmpl2 = "Hi there <%= firstname %>! Your last name is <%= lastname %>",
		syntax = /<%=\s*(\w+)\s*%\>/g,
		customout = $.interpolate(tmpl2, obj, syntax);
		
	$('#customout').text(customout);
})(jQuery);