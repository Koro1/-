(function () {
    "use strict";
    var playButton, showButton, buildButton;

    function openPage(event) {
        app.navigationToolbar.goTo('builder', event.target.className, true);
    }

    function onEnter(element) {
        if (!element.isInit) {
            playButton = element.getElementsByClassName('play')[0];
            showButton = element.getElementsByClassName('showplaylist')[0];
            buildButton = element.getElementsByClassName('builder')[0];
            element.isInit = true;
            playButton.addEventListener('click', function () {
                app.navigationToolbar.show();
                app.loader.show();
                app.load('play');
                utils.fastGoTo('play', 'home', 'starters_home');
                //app.load('da1');
                //utils.fastGoTo('personcoll1', 'home', 'overall');
                ////utils.fastGoTo('scenario1', 'doctor_feedback', 'doctor_detailer_helpfull');
            }, false);

            showButton.addEventListener('click', openPage, false);
            buildButton.addEventListener('click', openPage, false);
        }

        app.scroller.disableAll();
        if (app.slideshow.scroller) {
            app.slideshow.scroller.disableAll();
        }
    }

    document.addEventListener('presentationInit', function () {
        app.slide.start_index.onEnter = onEnter;
        ImagePreload([
			'content/img/agenda/Checkbox.png',
			'content/img/agenda/Checkbox_flagged.png'
        ]);
    });
})();