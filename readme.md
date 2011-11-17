# jQuery String interpolator

  jQuery String interpolator is a small extension to the jQuery framework allowing you to do string interpolation.

## Example
    
	var obj = {
		firstname: 'John',
		lastname: 'Doe'
	};
	
	// the old, not so pretty way:
	var string = 'Hi there ' + obj['firstname'] + '! Your last name is ' + obj['lastname'];
	
	console.log(string) // outputs "Hi there John! Your last name is Doe"
	
	// using $.interpolate(): 
	var template = "Hi there {firstname}! Your last name is {lastname}",
		interpolated = $.interpolate(template, obj);
	
	console.log(interpolated) // outputs "Hi there John! Your last name is Doe"
	
  This extension also allows you to insert custom syntax, if you want to match some other kind of syntax than the normal {var}-syntax:

	var template = "Hi there <%= firstname %>! Your last name is <%= lastname %>",
		syntax = /<%=\s*(\w+)\s*%\>/g,
		interpolated = $.interpolate(template, obj, syntax);
	
	console.log(interpolated) // outputs "Hi there John! Your last name is Doe"