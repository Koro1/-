document.addEventListener('presentationInit', function(){
	app.slide.starters_home = {
	    onInit: function (slideElement) {
		},
		onEnter: function (slideElement) {

		    $(".homebtn1").live("click touchstart", function () {
		        var footer = document.getElementById('mainfooter');
		        $('.homebtn2').removeClass('btnon');
		        $('.homebtn1').addClass('btnon');
		        app.navigationToolbar.show();
		        //utils.fastGoTo('entry');
		        //app.goTo('play', 'seek', 'step1');
		        app.navigationToolbar.show();
		        ////util.removeClass(footer, 'hide');
		        util.removeClass(window.mainmenu, 'hidden');
		        setTimeout(function () {
		            app.goTo('play', 'seek', 'step1');
		            app.navigationToolbar.show();
		            util.removeClass(footer, 'hide');
		            util.removeClass(window.mainmenu, 'hidden');
		        }, 100);
		    });
		    $(".homebtn2").live("click touchstart", function () {
		        var footer = document.getElementById('mainfooter');
		        $('.homebtn1').removeClass('btnon');
		        $('.homebtn2').addClass('btnon');
		        app.navigationToolbar.show();
		        //utils.fastGoTo('entry');
		        app.navigationToolbar.show();
		        util.removeClass(window.mainmenu, 'hidden');
		        setTimeout(function () {
		            app.goTo('play', 'story', 'storytree1');
		            app.navigationToolbar.show();
		            util.removeClass(footer, 'hide');
		            util.removeClass(window.mainmenu, 'hidden');
		        }, 100);
		    });
		    console.log(1);
		    $(".shouyetitile").fadeOut(500);
		    $(".homebox").fadeOut(500,
            function () {
                $(".homebox2").fadeIn(500,
                function () {
                    $(".homebox2").fadeOut(500,
                    function () {
                        $(".animate_city").fadeIn(500,
                        function () {
                            $(".shouyebg1").fadeIn(500);
                            $(".shouyebg2").fadeIn(500);
                            $(".shouyebg3").fadeIn(500,
                            function () {
                                $(".football").fadeIn(500,
                                function () {
                                    $(".shouyebg1").animate({
                                        left: "500px"
                                    });
                                    $(".shouyebg3").animate({
                                        left: "895px"
                                    });
                                    $(".football").animate({
                                        left: "230px",
                                        top: "115px",
                                        scale: "0.3"
                                    },
                                    1000, "linear",
                                    function () {
                                        $(".shouyebg1").animate({
                                            scale: "0.7"
                                        });
                                        $(".football").fadeOut(500);
                                        $(".shouyebg2").fadeOut(500);
                                        $(".shouyebg3").fadeOut(500);
                                        $(".shouyebg4").fadeIn(500);
                                        $(".football1").fadeIn(500);
                                        $(".homeleg1").fadeIn(500,
                                        function () {
                                            $(".bg").fadeOut(500);
                                            $(".shouye").fadeIn(500);
                                        });
                                    });

                                });
                            });
                        });
                    });
                })
            });
		},
		onExit:function(){
		}
	}
});