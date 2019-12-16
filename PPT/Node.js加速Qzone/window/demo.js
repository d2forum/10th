var Window = require('./Window');

var win1 = new Window();
var win2 = new Window();

win1.request = 'request-1';
win2.request = 'request-2';

win1.run(api);
win2.run(api);


function api(){
	console.log(window.request);
	
	setTimeout(function(){
		console.log(window.request);	
	},500);
}



