var rootSlide = document.querySelector(".fadein");
var els = rootSlide.querySelectorAll(":not(:first-child)");

for(var i=0;i<els.length;i++){
	els[i].classList.add("is-hidden");
}

rootSlide.addEventListener("transitionend",function(){
	var node = rootSlide.querySelector(":first-child.is-hidden");
	if(node)rootSlide.insertBefore(node,null);
});

setInterval(function(){
	rootSlide.querySelector(':first-child').classList.add('is-hidden');
	rootSlide.querySelector(':nth-child(2)').classList.remove('is-hidden');
}, 3000);