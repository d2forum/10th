var domain = require('domain');

function Window(){
	this.domain			= domain.create();
	this.domain.window	= this;
}

Window.prototype.run = function(fn){
	this.domain.run(fn);
}

module.exports = Window;

Object.defineProperty(global, 'window', {
    get : function(){
        return process.domain && process.domain.window;
    }
});







