(function(){
	"use strict";
	var button1, button2, button3, button4;

	function openPage(event){
		app.navigationToolbar.goTo('tools', event.target.className, true);
	}

	function onEnter(element){
		if (!element.isInit){
			button1 = element.getElementsByClassName('cost_comparison')[0];
			button2 = element.getElementsByClassName('self_pay_cost')[0];
			button3 = element.getElementsByClassName('asqare_game')[0];
			button4 = element.getElementsByClassName('short_video')[0];
			element.isInit = true;
			button1.addEventListener('click', openPage, false);
			button2.addEventListener('click', openPage, false);
			button3.addEventListener('click', openPage, false);
			button4.addEventListener('click', openPage, false);
		}
	
		app.scroller.disableAll();
		if (app.slideshow.scroller){
			app.slideshow.scroller.disableAll();
		}
	}

	document.addEventListener('presentationInit', function(){
		app.slide.start_tools.onEnter = onEnter;
		ImagePreload([
			'content/img/agenda/Checkbox.png',
			'content/img/agenda/Checkbox_flagged.png'
		]);
	});
})();