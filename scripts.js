document.addEventListener('scroll', function(){

	var ricePanels = document.getElementsByClassName('panel-rice');
	var navs = document.getElementsByClassName('about-link');
	var activePanel = -1;

	for(var i = 0; i < ricePanels.length; i++){

		var panelOffset = ricePanels[i].getBoundingClientRect().top;

		if(panelOffset < 85){

			activePanel = i;
		}

		navs[i].classList.remove('is-active');
	}

	if(activePanel > -1){

		navs[activePanel].classList.add('is-active');
	}
});

var links = document.getElementsByClassName('js-link');

for(var i = 0; i < links.length; i++){

	links[i].addEventListener('click', function(event){

		var text = event.target.textContent;

		var targetElement = document.getElementsByClassName('js-' + text.toLowerCase() + '-rice')[0];
		var elemOffset = targetElement.offsetTop - 90;

		var clientWidth = document.body.clientWidth;

		if(clientWidth < 769){

			elemOffset-= 50;
		}


		var scrollTop = document.body.scrollTop;


		animate(document.body, "scrollTop", "", scrollTop, elemOffset, 500, true);

	});
}

function animate(elem,style,unit,from,to,time,prop) {
	if( !elem) return;
	var start = new Date().getTime(),
		timer = setInterval(function() {
			var step = Math.min(1,(new Date().getTime()-start)/time);
			if (prop) {
				elem[style] = (from+step*(to-from))+unit;
			} else {
				elem.style[style] = (from+step*(to-from))+unit;
			}
			if( step == 1) clearInterval(timer);
		},25);
	elem.style[style] = from+unit;
}