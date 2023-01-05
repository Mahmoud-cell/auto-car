function mySecFunction(y){if(y.matches){$("li.dropdown").mouseenter(function(){$(this).find(".fade-down").fadeIn();});$("li.dropdown").mouseleave(function(){$(this).find(".fade-down").fadeOut();});}}
var y=window.matchMedia("(min-width: 768px)")
mySecFunction(y)
y.addListener(mySecFunction)