app.slide.step1 = {
    onEnter: function (slideElement) {
        $('.s1btn1').removeClass('btnon');
        $('.s1btn2').removeClass('btnon');
        app.navigationToolbar.show();
        util.removeClass(window.mainmenu, 'hidden');
        app.navigationToolbar.show();
        //util.removeClass(footer, 'hide');
        util.removeClass(window.mainmenu, 'hidden');
        app.scroller.disableAll();
    },
    onExit: function () { }
};

app.slide.step2 = {
    onEnter: function (slideElement) {
        $('.s2btn1').removeClass('btnon');
        $('.s2btn2').removeClass('btnon');
        app.scroller.disableAll();

    },
    onExit: function () { }
};

app.slide.step3 = {
    onEnter: function (slideElement) {
        $('.s3btn1').removeClass('btnon');
        $('.s3btn2').removeClass('btnon');
        app.scroller.disableAll();

    },
    onExit: function () { }
};

app.slide.step4 = {
    onEnter: function (slideElement) {
        app.scroller.enableAll();

    },
    onExit: function () { }
};

app.slide.step5 = {
    onEnter: function (slideElement) {
        app.scroller.enableAll();

    },
    onExit: function () { }
};

app.slide.step6 = {
    onEnter: function (slideElement) {
        app.scroller.disableAll();
    },
    onExit: function () { }
};

app.slide.step7 = {
    onEnter: function (slideElement) {
        app.scroller.disableAll();
    },
    onExit: function () { }
};

app.slide.step8 = {
    onEnter: function (slideElement) {
        $('.s5btn1').removeClass('btnon');
        $('.s5btn2').removeClass('btnon');
        app.scroller.disableAll();

    },
    onExit: function () { }
};

app.slide.step9 = {
    onEnter: function (slideElement) {
        $('.s6btn1').removeClass('btnon');
        $('.s6btn2').removeClass('btnon');
        app.scroller.disableAll();

    },
    onExit: function () { }
};

app.slide.step10 = {
    onEnter: function (slideElement) {
        $('.s7btn1').removeClass('btnon');
        $('.s7btn2').removeClass('btnon');
        app.scroller.disableAll();

    },
    onExit: function () { }
};

app.slide.step11 = {
    onEnter: function (slideElement) {
        $('.s7btn1').removeClass('btnon');
        $('.s7btn2').removeClass('btnon');
        app.scroller.disableAll();

    },
    onExit: function () { }
};

app.slide.step12 = {
    onEnter: function (slideElement) {
        $('.s7btn1').removeClass('btnon');
        $('.s7btn2').removeClass('btnon');
        app.scroller.enableAll();

    },
    onExit: function () { }
};

app.slide.step13 = {
    onEnter: function (slideElement) {
        $('.s7btn1').removeClass('btnon');
        $('.s7btn2').removeClass('btnon');
        app.scroller.enableAll();

    },
    onExit: function () { }
};

app.slide.step14 = {
    onEnter: function (slideElement) {
        $('.s7btn1').removeClass('btnon');
        $('.s7btn2').removeClass('btnon');
        app.scroller.disableAll();

    },
    onExit: function () { }
};

app.slide.step15 = {
    onEnter: function (slideElement) {
        $('.s2btn1').removeClass('btnon');
        $('.s2btn2').removeClass('btnon');
        app.scroller.disableAll();

    },
    onExit: function () { }
};

app.slide.step16 = {
    onEnter: function (slideElement) {
        $('.s2btn1').removeClass('btnon');
        $('.s2btn2').removeClass('btnon');
        app.scroller.disableAll();

    },
    onExit: function () { }
};

app.slide.step17 = {
    onEnter: function (slideElement) {
        $('.s3btn1').removeClass('btnon');
        $('.s3btn2').removeClass('btnon');
        app.scroller.disableAll();

    },
    onExit: function () { }
};

app.slide.home = {
    onEnter: function (slideElement) {
        $('.homebtn1').removeClass('btnon');
        $('.homebtn2').removeClass('btnon');
    },
    onExit: function () { }
};

app.slide.storytree3 = {
    onEnter: function (slideElement) {
        app.scroller.disableAll();
    },
    onExit: function () { }
};

app.slide.storytree2 = {
    onEnter: function (slideElement) {
        app.scroller.disableAll();
    },
    onExit: function () { }
};

app.slide.story1_2 = {
    onEnter: function (slideElement) {
        $('.text1_0btn1').removeClass('btnon');
        $('.text1_1btn2').removeClass('btnon');
        app.scroller.disableAll();
    },
    onExit: function () {
    }
};

app.slide.story1_4 = {
    onEnter: function (slideElement) {
        app.scroller.disableAll();
    },
    onExit: function () {
        app.scroller.enableAll();
    }
};

app.slide.story2_1 = {
    onEnter: function (slideElement) {
        app.scroller.enableAll();
    },
    onExit: function () {

    }
};

app.slide.story2_2 = {
    onEnter: function (slideElement) {
        app.scroller.disableAll();
        $('.text24_0btn1').removeClass('btnon');
        $('.text25_1btn2').removeClass('btnon');
        $('.text26_1btn3').removeClass('btnon');
    },
    onExit: function () {
        app.scroller.enableAll();
    }
};

app.slide.story2_4 = {
    onEnter: function (slideElement) {
        app.scroller.disableAll();
    },
    onExit: function () {
        app.scroller.enableAll();

    }
};

app.slide.story3_1 = {
    onEnter: function (slideElement) {
        app.scroller.disableAll();
        $('.text26_0btn1').removeClass('btnon');
        $('.text27_1btn2').removeClass('btnon');

    },
    onExit: function () {
        app.scroller.enableAll();
    }
};

app.slide.story4_2 = {
    onEnter: function (slideElement) {
        app.scroller.disableAll();
        $('.text35_0btn1').removeClass('btnon');
        $('.text36_1btn2').removeClass('btnon');
        $('.text37_0btn3').removeClass('btnon');

    },
    onExit: function () {
        app.scroller.enableAll();
    }
};

app.slide.story4_6 = {
    onEnter: function (slideElement) {
        app.scroller.disableAll();
    },
    onExit: function () {
        app.scroller.enableAll();
    }
};

app.slide.storytree1 = {
    onEnter: function (slideElement) {
        $('.storytree1').removeClass('btnon');
        $('.storytree2').removeClass('btnon');
        app.navigationToolbar.show();
        util.removeClass(window.mainmenu, 'hidden');
        app.navigationToolbar.show();
        //util.removeClass(footer, 'hide');
        util.removeClass(window.mainmenu, 'hidden');

    },
    onExit: function () { }
};


app.slide.story4_3 = {
    onEnter: function (slideElement) {

    },
    onExit: function () {

        $(".bar_r").animate({
            width: "0px"
        });
        $(".qiyi").fadeOut();


        $(".bar_b").animate({
            width: "0px"
        });
        $(".jiusan").fadeOut(0,
        function () {
            $(".story4_circle").fadeOut();
        });
    }
};




function s18_btn1() {
    $('.step18_3btn2').removeClass('btnon');
    $('.step18_4btn3').removeClass('btnon');
    $('.step18_2btn1').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story500", "seek", "story5_home1");
}
function s18_btn2() {
    $('.step18_2btn1').removeClass('btnon');
    $('.step18_4btn3').removeClass('btnon');
    $('.step18_3btn2').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story90", "seek", "story9_home1");
}
function s18_btn3() {
    $('.step18_2btn1').removeClass('btnon');
    $('.step18_3btn2').removeClass('btnon');
    $('.step18_4btn3').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story100", "seek", "story10_home1");
}

function step7_4title2() {
    $('.step7_4title3').removeClass('btnon');
    $('.step7_4title4').removeClass('btnon');
    $('.step7_4title5').removeClass('btnon');
    $('.step7_4title6').removeClass('btnon');
    $('.step7_4title2').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story3", "seek", "story3");
}
function step7_4title3() {
    $('.step7_4title2').removeClass('btnon');
    $('.step7_4title4').removeClass('btnon');
    $('.step7_4title5').removeClass('btnon');
    $('.step7_4title6').removeClass('btnon');
    $('.step7_4title3').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story4", "seek", "story4_1");
}
function step7_4title4() {
    $('.step7_4title2').removeClass('btnon');
    $('.step7_4title3').removeClass('btnon');
    $('.step7_4title5').removeClass('btnon');
    $('.step7_4title6').removeClass('btnon');
    $('.step7_4title4').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story500", "seek", "story5_home1");
}
function step7_4title5() {
    $('.step7_4title3').removeClass('btnon');
    $('.step7_4title4').removeClass('btnon');
    $('.step7_4title2').removeClass('btnon');
    $('.step7_4title6').removeClass('btnon');
    $('.step7_4title5').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story90", "seek", "story9_home1");
}
function step7_4title6() {
    $('.step7_4title3').removeClass('btnon');
    $('.step7_4title4').removeClass('btnon');
    $('.step7_4title5').removeClass('btnon');
    $('.step7_4title2').removeClass('btnon');
    $('.step7_4title6').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story100", "seek", "story10_home1");
}

function step4_2title1() {
    $('.step4_2title2').removeClass('btnon');
    $('.step4_2title3').removeClass('btnon');
    $('.step4_2title1').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story500", "seek", "story5_home1");
}
function step4_2title2() {
    $('.step4_2title1').removeClass('btnon');
    $('.step4_2title2').removeClass('btnon');
    $('.step4_2title2').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story90", "seek", "story9_home1");
}
function step4_2title3() {
    $('.step4_2title1').removeClass('btnon');
    $('.step4_2title2').removeClass('btnon');
    $('.step4_2title3').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story100", "seek", "story10_home1");
}

function step3_2title1() {
    $('.step3_2title2').removeClass('btnon');
    $('.step3_2title3').removeClass('btnon');
    $('.step3_2title1').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story80", "seek", "story8_home1");
}
function step3_2title2() {
    $('.step3_2title1').removeClass('btnon');
    $('.step3_2title3').removeClass('btnon');
    $('.step3_2title2').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story90", "seek", "story9_home1");
}
function step3_2title3() {
    $('.step3_2title1').removeClass('btnon');
    $('.step3_2title2').removeClass('btnon');
    $('.step3_2title3').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story77", "seek", "story7_home1");
}

function step8_1title1() {
    $('.step8_1title2').removeClass('btnon');
    $('.step8_1title3').removeClass('btnon');
    $('.step8_1title1').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story1", "seek", "story1_1");
}
function step8_1title2() {
    $('.step8_1title1').removeClass('btnon');
    $('.step8_1title3').removeClass('btnon');
    $('.step8_1title2').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story2", "seek", "story2_1");
}
function step8_1title3() {
    $('.step8_1title1').removeClass('btnon');
    $('.step8_1title2').removeClass('btnon');
    $('.step8_1title3').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story66", "seek", "story6_home1");
}


var story1_2box1left = 0;
var story1_2box1top = 0;
var story1_2box2left = 0;
var story1_2box2top = 0;
var story1_2box3left = 0;
var story1_2box3top = 0;
var story1_2box4left = 0;
var story1_2box4top = 0;
var story1_2box5left = 0;
var story1_2box5top = 0;
var story1_2box6left = 0;
var story1_2box6top = 0;
var story1_2box7left = 0;
var story1_2box7top = 0;
var story3_5box1left = 0;
var story3_5box1top = 0;
var story3_5box2left = 0;
var story3_5box2top = 0;
var story3_5box3left = 0;
var story3_5box3top = 0;
var story3_5box4left = 0;
var story3_5box4top = 0;
var box1_status = 0;
var box2_status = 0;
var box3_status = 0;
var box4_status = 0;
var box5_status = 0;
var box6_status = 0;
var box7_status = 0;
var box8_status = 0;
var box9_status = 0;
var box10_status = 0;
var box11_status = 0;
var story1_2box1 = 0;
var story1_2box2 = 0;
var tx, x, ty, y;

function touchStart_story1_2box1(e) {
    if (box1_status == 0) {
        box1_status = 1;
        e.preventDefault();
        tx = parseInt($("#story1_2box1").css('left'));
        ty = parseInt($("#story1_2box1").css('top'));
        x = e.touches[0].pageX;
        y = e.touches[0].pageY;
    }

}

function touchMove_story1_2box1(e) {
    if (box1_status == 1) {
        e.preventDefault();
        var n = tx + e.touches[0].pageX - x;
        var ny = ty + e.touches[0].pageY - y;
        story1_2box1left = n;
        story1_2box1top = ny;
        $("#story1_2box1").css({
            "left": n,
            "top": ny
        });
    }
}

function touchStart_story1_2box2(e) {
    if (box2_status == 0) {
        box2_status = 1;
        e.preventDefault();
        tx = parseInt($("#story1_2box2").css('left'));
        ty = parseInt($("#story1_2box2").css('top'));
        x = e.touches[0].pageX;
        y = e.touches[0].pageY;
    }

}

function touchMove_story1_2box2(e) {
    if (box2_status == 1) {
        e.preventDefault();
        var n = tx + e.touches[0].pageX - x;
        var ny = ty + e.touches[0].pageY - y;
        story1_2box2left = n;
        story1_2box2top = ny;
        $("#story1_2box2").css({
            "left": n,
            "top": ny
        });
    }
}

function touchStart_story1_2box3(e) {
    if (box3_status == 0) {
        box3_status = 1;
        e.preventDefault();
        tx = parseInt($("#story1_2box3").css('left'));
        ty = parseInt($("#story1_2box3").css('top'));
        x = e.touches[0].pageX;
        y = e.touches[0].pageY;
    }

}

function touchMove_story1_2box3(e) {
    if (box3_status == 1) {
        e.preventDefault();
        var n = tx + e.touches[0].pageX - x;
        var ny = ty + e.touches[0].pageY - y;
        story1_2box3left = n;
        story1_2box3top = ny;
        $("#story1_2box3").css({
            "left": n,
            "top": ny
        });
    }
}

function touchStart_story1_2box4(e) {
    if (box4_status == 0) {
        box4_status = 1;
        e.preventDefault();
        tx = parseInt($("#story1_2box4").css('left'));
        ty = parseInt($("#story1_2box4").css('top'));
        x = e.touches[0].pageX;
        y = e.touches[0].pageY;
    }

}

function touchMove_story1_2box4(e) {
    if (box4_status == 1) {
        e.preventDefault();
        var n = tx + e.touches[0].pageX - x;
        var ny = ty + e.touches[0].pageY - y;
        story1_2box4left = n;
        story1_2box4top = ny;
        $("#story1_2box4").css({
            "left": n,
            "top": ny
        });
    }
}

function touchStart_story1_2box5(e) {
    if (box5_status == 0) {
        box5_status = 1;
        e.preventDefault();
        tx = parseInt($("#story1_2box5").css('left'));
        ty = parseInt($("#story1_2box5").css('top'));
        x = e.touches[0].pageX;
        y = e.touches[0].pageY;
    }

}

function touchMove_story1_2box5(e) {
    if (box5_status == 1) {
        e.preventDefault();
        var n = tx + e.touches[0].pageX - x;
        var ny = ty + e.touches[0].pageY - y;
        story1_2box5left = n;
        story1_2box5top = ny;
        $("#story1_2box5").css({
            "left": n,
            "top": ny
        });
    }
}

function touchStart_story1_2box6(e) {
    if (box6_status == 0) {
        box6_status = 1;
        e.preventDefault();
        tx = parseInt($("#story1_2box6").css('left'));
        ty = parseInt($("#story1_2box6").css('top'));
        x = e.touches[0].pageX;
        y = e.touches[0].pageY;
    }

}

function touchMove_story1_2box6(e) {
    if (box6_status == 1) {
        e.preventDefault();
        var n = tx + e.touches[0].pageX - x;
        var ny = ty + e.touches[0].pageY - y;
        story1_2box6left = n;
        story1_2box6top = ny;
        $("#story1_2box6").css({
            "left": n,
            "top": ny
        });
    }
}

function touchStart_story1_2box7(e) {
    if (box7_status == 0) {
        box7_status = 1;
        e.preventDefault();
        tx = parseInt($("#story1_2box7").css('left'));
        ty = parseInt($("#story1_2box7").css('top'));
        x = e.touches[0].pageX;
        y = e.touches[0].pageY;
    }

}

function touchMove_story1_2box7(e) {
    if (box7_status == 1) {
        e.preventDefault();
        var n = tx + e.touches[0].pageX - x;
        var ny = ty + e.touches[0].pageY - y;
        story1_2box7left = n;
        story1_2box7top = ny;
        $("#story1_2box7").css({
            "left": n,
            "top": ny
        });
    }
}

function touchStart_story3_5box1(e) {
    if (box8_status == 0) {
        box8_status = 1;
        e.preventDefault();
        tx = parseInt($("#story3_5box1").css('left'));
        ty = parseInt($("#story3_5box1").css('top'));
        x = e.touches[0].pageX;
        y = e.touches[0].pageY;
    }

}

function touchMove_story3_5box1(e) {
    if (box8_status == 1) {
        e.preventDefault();
        var n = tx + e.touches[0].pageX - x;
        var ny = ty + e.touches[0].pageY - y;
        story3_5box1left = n;
        story3_5box1top = ny;
        $("#story3_5box1").css({
            "left": n,
            "top": ny
        });
    }
}

function touchStart_story3_5box2(e) {
    if (box9_status == 0) {
        box9_status = 1;
        e.preventDefault();
        tx = parseInt($("#story3_5box2").css('left'));
        ty = parseInt($("#story3_5box2").css('top'));
        x = e.touches[0].pageX;
        y = e.touches[0].pageY;
    }

}

function touchMove_story3_5box2(e) {
    if (box9_status == 1) {
        e.preventDefault();
        var n = tx + e.touches[0].pageX - x;
        var ny = ty + e.touches[0].pageY - y;
        story3_5box2left = n;
        story3_5box2top = ny;
        $("#story3_5box2").css({
            "left": n,
            "top": ny
        });
    }
}

function touchStart_story3_5box3(e) {
    if (box10_status == 0) {
        box10_status = 1;
        e.preventDefault();
        tx = parseInt($("#story3_5box3").css('left'));
        ty = parseInt($("#story3_5box3").css('top'));
        x = e.touches[0].pageX;
        y = e.touches[0].pageY;
    }

}

function touchMove_story3_5box3(e) {
    if (box10_status == 1) {
        e.preventDefault();
        var n = tx + e.touches[0].pageX - x;
        var ny = ty + e.touches[0].pageY - y;
        story3_5box3left = n;
        story3_5box3top = ny;
        $("#story3_5box3").css({
            "left": n,
            "top": ny
        });
    }
}

function touchStart_story3_5box4(e) {
    if (box11_status == 0) {
        box11_status = 1;
        e.preventDefault();
        tx = parseInt($("#story3_5box4").css('left'));
        ty = parseInt($("#story3_5box4").css('top'));
        x = e.touches[0].pageX;
        y = e.touches[0].pageY;
    }

}

function touchMove_story3_5box4(e) {
    if (box11_status == 1) {
        e.preventDefault();
        var n = tx + e.touches[0].pageX - x;
        var ny = ty + e.touches[0].pageY - y;
        story3_5box4left = n;
        story3_5box4top = ny;
        $("#story3_5box4").css({
            "left": n,
            "top": ny
        });
    }
}

function funmove_story8_text() {

    document.getElementById("story1_2box1").addEventListener('touchstart', touchStart_story1_2box1);
    document.getElementById("story1_2box1").addEventListener('touchmove', touchMove_story1_2box1);
    document.getElementById("story1_2box1").addEventListener('touchend',
    function (e) {
        if ((story1_2box1left < 450 ) && (story1_2box1top < 550 )) {
            $(".story1_2box1").attr("style", "").removeClass("basket1 basket2 basket3").addClass("basket1");
            $(".story1_2box2, .story1_2box3, .story1_2box4, .story1_2box5, .story1_2box6, .story1_2box7").attr("style", "").removeClass("basket1");
            story1_2box1 = 1;

        } else if ((story1_2box1left < 635) && (story1_2box1top < 550 )) {
            $(".story1_2box1").attr("style", "").removeClass("basket1 basket2 basket3").addClass("basket2");
            $(".story1_2box2, .story1_2box3, .story1_2box4, .story1_2box5, .story1_2box6, .story1_2box7").attr("style", "").removeClass("basket2");
            story1_2box1 = 2;

        } else if ((story1_2box1left < 750 ) && (story1_2box1top < 550 )) {
            $(".story1_2box1").attr("style", "").removeClass("basket1 basket2 basket3").addClass("basket3");
            story1_2box1 = 3;
            $(".story1_2box2, .story1_2box3, .story1_2box4, .story1_2box5, .story1_2box6, .story1_2box7").attr("style", "").removeClass("basket3");

        } else {
            $(".story1_2box1").attr("style", "");
            box1_status = 0;
            story1_2box1 = 0;
        }


    });

    document.getElementById("story1_2box2").addEventListener('touchstart', touchStart_story1_2box2);
    document.getElementById("story1_2box2").addEventListener('touchmove', touchMove_story1_2box2);
    document.getElementById("story1_2box2").addEventListener('touchend',
    function (e) {
        if ((story1_2box2left <450) && (story1_2box2top < 550)) {
            $(".story1_2box2").attr("style", "").removeClass("basket1 basket2 basket3").addClass("basket1");
            $(".story1_2box1, .story1_2box3, .story1_2box4, .story1_2box5, .story1_2box6, .story1_2box7").attr("style", "").removeClass("basket1");
            story1_2box2 = 1;

        } else if ((story1_2box2left < 635) && (story1_2box2top < 550)) {
            $(".story1_2box2").attr("style", "").removeClass("basket1 basket2 basket3").addClass("basket2");
            $(".story1_2box1, .story1_2box3, .story1_2box4, .story1_2box5, .story1_2box6, .story1_2box7").attr("style", "").removeClass("basket2");
            story1_2box2 = 2;

        } else if ((story1_2box2left < 750) && (story1_2box2top < 550)) {
            $(".story1_2box2").attr("style", "").removeClass("basket1 basket2 basket3").addClass("basket3");
            $(".story1_2box1, .story1_2box3, .story1_2box4, .story1_2box5, .story1_2box6, .story1_2box7").attr("style", "").removeClass("basket3");
            story1_2box2 = 3;

        } else {
            $(".story1_2box2").attr("style", "");
            box2_status = 0;
            story1_2box2 = 0;
        }
    });

    document.getElementById("story1_2box3").addEventListener('touchstart', touchStart_story1_2box3);
    document.getElementById("story1_2box3").addEventListener('touchmove', touchMove_story1_2box3);
    document.getElementById("story1_2box3").addEventListener('touchend',
    function (e) {
        if ((story1_2box3left < 450) && (story1_2box3top < 550)) {
            $(".story1_2box3").attr("style", "").removeClass("basket1 basket2 basket3").addClass("basket1");
            $(".story1_2box1, .story1_2box2, .story1_2box4, .story1_2box5, .story1_2box6, .story1_2box7").attr("style", "").removeClass("basket1");
            story1_2box3 = 1;

        } else if ((story1_2box3left < 635) && (story1_2box3top < 550)) {
            $(".story1_2box3").attr("style", "").removeClass("basket1 basket2 basket3").addClass("basket2");
            $(".story1_2box1, .story1_2box2, .story1_2box4, .story1_2box5, .story1_2box6, .story1_2box7").attr("style", "").removeClass("basket2");
            story1_2box3 = 2;

        } else if ((story1_2box3left < 750) && (story1_2box3top < 550)) {
            $(".story1_2box3").attr("style", "").removeClass("basket1 basket2 basket3").addClass("basket3");
            $(".story1_2box1, .story1_2box2, .story1_2box4, .story1_2box5, .story1_2box6, .story1_2box7").attr("style", "").removeClass("basket3");
            story1_2box3 = 3;

        } else {
            $(".story1_2box3").attr("style", "");
            box3_status = 0;
            story1_2box3 = 0;
        }

    });

    document.getElementById("story1_2box4").addEventListener('touchstart', touchStart_story1_2box4);
    document.getElementById("story1_2box4").addEventListener('touchmove', touchMove_story1_2box4);
    document.getElementById("story1_2box4").addEventListener('touchend',
    function (e) {
        if ((story1_2box4left < 450) && (story1_2box4top < 550)) {
            $(".story1_2box4").attr("style", "").removeClass("basket1 basket2 basket3").addClass("basket1");
            $(".story1_2box1, .story1_2box2, .story1_2box3, .story1_2box5, .story1_2box6, .story1_2box7").attr("style", "").removeClass("basket1");
            story1_2box4 = 1;

        } else if ((story1_2box4left < 635) && (story1_2box4top < 550)) {
            $(".story1_2box4").attr("style", "").removeClass("basket1 basket2 basket3").addClass("basket2");
            $(".story1_2box1, .story1_2box2, .story1_2box3, .story1_2box5, .story1_2box6, .story1_2box7").attr("style", "").removeClass("basket2");
            story1_2box4 = 2;

        } else if ((story1_2box4left < 750) && (story1_2box4top < 550)) {
            $(".story1_2box4").attr("style", "").removeClass("basket1 basket2 basket3").addClass("basket3");
            $(".story1_2box1, .story1_2box2, .story1_2box3, .story1_2box5, .story1_2box6, .story1_2box7").attr("style", "").removeClass("basket3");
            story1_2box4 = 3;

        } else {
            $(".story1_2box4").attr("style", "");
            box4_status = 0;
            story1_2box4 = 0;
        }


    });

    document.getElementById("story1_2box5").addEventListener('touchstart', touchStart_story1_2box5);
    document.getElementById("story1_2box5").addEventListener('touchmove', touchMove_story1_2box5);
    document.getElementById("story1_2box5").addEventListener('touchend',
    function (e) {
        if ((story1_2box5left < 450) && (story1_2box5top < 550)) {
            $(".story1_2box5").attr("style", "").removeClass("basket1 basket2 basket3").addClass("basket1");
            $(".story1_2box1, .story1_2box2, .story1_2box3, .story1_2box4, .story1_2box6, .story1_2box7").attr("style", "").removeClass("basket1");
            story1_2box5 = 1;

        } else if ((story1_2box5left < 635) && (story1_2box5top < 550)) {
            $(".story1_2box5").attr("style", "").removeClass("basket1 basket2 basket3").addClass("basket2");
            $(".story1_2box1, .story1_2box2, .story1_2box3, .story1_2box4, .story1_2box6, .story1_2box7").attr("style", "").removeClass("basket2");
            story1_2box5 = 2;

        } else if ((story1_2box5left < 750) && (story1_2box5top < 550)) {
            $(".story1_2box5").attr("style", "").removeClass("basket1 basket2 basket3").addClass("basket3");
            $(".story1_2box1, .story1_2box2, .story1_2box3, .story1_2box4, .story1_2box6, .story1_2box7").attr("style", "").removeClass("basket3");
            story1_2box5 = 3;

        } else {
            $(".story1_2box5").attr("style", "");
            box5_status = 0;
            story1_2box5 = 0;
        }


    });

    document.getElementById("story1_2box6").addEventListener('touchstart', touchStart_story1_2box6);
    document.getElementById("story1_2box6").addEventListener('touchmove', touchMove_story1_2box6);
    document.getElementById("story1_2box6").addEventListener('touchend',
    function (e) {
        if ((story1_2box6left < 450) && (story1_2box6top < 550)) {
            $(".story1_2box6").attr("style", "").removeClass("basket1 basket2 basket3").addClass("basket1");
            $(".story1_2box1, .story1_2box2, .story1_2box3, .story1_2box4, .story1_2box5, .story1_2box7").attr("style", "").removeClass("basket1");
            story1_2box6 = 1;

        } else if ((story1_2box6left < 635) && (story1_2box6top < 550)) {
            $(".story1_2box6").attr("style", "").removeClass("basket1 basket2 basket3").addClass("basket2");
            $(".story1_2box1, .story1_2box2, .story1_2box3, .story1_2box4, .story1_2box5, .story1_2box7").attr("style", "").removeClass("basket2");
            story1_2box6 = 2;

        } else if ((story1_2box6left < 750) && (story1_2box6top < 550)) {
            $(".story1_2box6").attr("style", "").removeClass("basket1 basket2 basket3").addClass("basket3");
            $(".story1_2box1, .story1_2box2, .story1_2box3, .story1_2box4, .story1_2box5, .story1_2box7").attr("style", "").removeClass("basket3");
            story1_2box6 = 3;

        } else {
            $(".story1_2box6").attr("style", "");
            box6_status = 0;
            story1_2box6 = 0;
        }


    });

    document.getElementById("story1_2box7").addEventListener('touchstart', touchStart_story1_2box7);
    document.getElementById("story1_2box7").addEventListener('touchmove', touchMove_story1_2box7);
    document.getElementById("story1_2box7").addEventListener('touchend',
    function (e) {
        if ((story1_2box7left < 450) && (story1_2box7top < 550)) {
            $(".story1_2box7").attr("style", "").removeClass("basket1 basket2 basket3").addClass("basket1");
            $(".story1_2box1, .story1_2box2, .story1_2box3, .story1_2box4, .story1_2box5, .story1_2box6").attr("style", "").removeClass("basket1");
            story1_2box7 = 1;

        } else if ((story1_2box7left < 635) && (story1_2box7top < 550)) {
            $(".story1_2box7").attr("style", "").removeClass("basket1 basket2 basket3").addClass("basket2");
            $(".story1_2box1, .story1_2box2, .story1_2box3, .story1_2box4, .story1_2box5, .story1_2box6").attr("style", "").removeClass("basket2");
            story1_2box7 = 2;

        } else if ((story1_2box7left < 750) && (story1_2box7top < 550)) {
            $(".story1_2box7").attr("style", "").removeClass("basket1 basket2 basket3").addClass("basket3");
            $(".story1_2box1, .story1_2box2, .story1_2box3, .story1_2box4, .story1_2box5, .story1_2box6").attr("style", "").removeClass("basket3");
            story1_2box7 = 3;

        } else {
            $(".story1_2box7").attr("style", "");
            box7_status = 0;
            story1_2box7 = 0;
        }


    });

    document.getElementById("story3_5box1").addEventListener('touchstart', touchStart_story3_5box1);
    document.getElementById("story3_5box1").addEventListener('touchmove', touchMove_story3_5box1);
    document.getElementById("story3_5box1").addEventListener('touchend',
    function (e) {
        if ((story3_5box1left > 60 && story3_5box1left < 284) && (story3_5box1top > 180 && story3_5box1top < 366)) {
            $(".story3_5box1").css({
                left: "85px",
                top: "198px"
            });
            $(".story3_5box1").addClass('btnon');
            $(".box").addClass('btnon')
            $("#text2").fadeIn();

            $(".story3_5box2").css({
                left: "800px",
                top: "200px"
            });
            $(".story3_5box2").removeClass('btnon')
            $("#text3").fadeOut(0);

            $(".story3_5box3").css({
                left: "800px",
                top: "340px"
            });
            $(".story3_5box3").removeClass('btnon')
            $("#text4").fadeOut(0);

            $(".story3_5box4").css({
                left: "800px",
                top: "490px"
            });
            $(".story3_5box4").removeClass('btnon')
            $("#text1").fadeOut(0);

        } else {
            $(".story3_5box1").css({
                left: "800px",
                top: "60px"
            });
            $(".story3_5box1").removeClass('btnon')
            $("#text2").fadeOut(0);
            box8_status = 0;
        }
    });

    document.getElementById("story3_5box2").addEventListener('touchstart', touchStart_story3_5box2);
    document.getElementById("story3_5box2").addEventListener('touchmove', touchMove_story3_5box2);
    document.getElementById("story3_5box2").addEventListener('touchend',
    function (e) {
        if ((story3_5box2left > 60 && story3_5box2left < 284) && (story3_5box2top > 180 && story3_5box2top < 366)) {
            $(".story3_5box2").css({
                left: "85px",
                top: "198px"
            });
            $(".story3_5box2").addClass('btnon')
            $(".box").addClass('btnon')
            $("#text3").fadeIn();

            $(".story3_5box1").css({
                left: "800px",
                top: "60px"
            });
            $(".story3_5box1").removeClass('btnon')
            $("#text2").fadeOut(0);

            $(".story3_5box3").css({
                left: "800px",
                top: "340px"
            });
            $(".story3_5box3").removeClass('btnon')
            $("#text4").fadeOut(0);

            $(".story3_5box4").css({
                left: "800px",
                top: "490px"
            });
            $(".story3_5box4").removeClass('btnon')
            $("#text1").fadeOut(0);

        } else {
            $(".story3_5box2").css({
                left: "800px",
                top: "200px"
            });
            $(".story3_5box2").removeClass('btnon')
            $(".box").removeClass('btnon')
            $("#text3").fadeOut();
            box9_status = 0;
        }
    });

    document.getElementById("story3_5box3").addEventListener('touchstart', touchStart_story3_5box3);
    document.getElementById("story3_5box3").addEventListener('touchmove', touchMove_story3_5box3);
    document.getElementById("story3_5box3").addEventListener('touchend',
    function (e) {
        if ((story3_5box3left > 60 && story3_5box3left < 284) && (story3_5box3top > 180 && story3_5box3top < 366)) {
            $(".story3_5box3").css({
                left: "85px",
                top: "198px"
            });
            $(".story3_5box3").addClass('btnon')
            $(".box").addClass('btnon')
            $("#text4").fadeIn();

            $(".story3_5box1").css({
                left: "800px",
                top: "60px"
            });
            $(".story3_5box1").removeClass('btnon')
            $("#text2").fadeOut(0);

            $(".story3_5box2").css({
                left: "800px",
                top: "200px"
            });
            $(".story3_5box2").removeClass('btnon')
            $("#text3").fadeOut(0);

            $(".story3_5box4").css({
                left: "800px",
                top: "490px"
            });
            $(".story3_5box4").removeClass('btnon')
            $("#text1").fadeOut(0);

        } else {
            $(".story3_5box3").css({
                left: "800px",
                top: "340px"
            });
            $(".story3_5box3").removeClass('btnon')
            $(".box").removeClass('btnon')
            $("#text4").fadeOut();
            box10_status = 0;
        }
    });

    document.getElementById("story3_5box4").addEventListener('touchstart', touchStart_story3_5box4);
    document.getElementById("story3_5box4").addEventListener('touchmove', touchMove_story3_5box4);
    document.getElementById("story3_5box4").addEventListener('touchend',
    function (e) {
        if ((story3_5box4left > 60 && story3_5box4left < 284) && (story3_5box4top > 180 && story3_5box4top < 366)) {
            $(".story3_5box4").css({
                left: "85px",
                top: "198px"
            });
            $(".story3_5box4").addClass('btnon')
            $(".box").addClass('btnon')
            $("#text1").fadeIn();

            $(".story3_5box1").css({
                left: "800px",
                top: "60px"
            });
            $(".story3_5box1").removeClass('btnon')
            $("#text2").fadeOut(0);

            $(".story3_5box2").css({
                left: "800px",
                top: "200px"
            });
            $(".story3_5box2").removeClass('btnon')
            $("#text3").fadeOut(0);

            $(".story3_5box3").css({
                left: "800px",
                top: "340px"
            });
            $(".story3_5box3").removeClass('btnon')
            $("#text4").fadeOut(0);

        } else {
            $(".story3_5box4").css({
                left: "800px",
                top: "490px"
            });
            $(".story3_5box4").removeClass('btnon')
            $(".box").removeClass('btnon')
            $("#text1").fadeOut();
            box11_status = 0;
        }
    });
}

app.slide.story1_3 = {
    onEnter: function (slideElement) {
        funmove_story8_text();
    },
    onExit: function () {
        $(".story1_2box1").css({
            left: "339px",
            top: "280px"
        });
        $(".story1_2box2").css({
            left: "350px",
            top: "175px"
        });
        $(".story1_2box3").css({
            left: "520px",
            top: "150px"
        });
        $(".story1_2box4").css({
            left: "500px",
            top: "275px"
        });
        $(".story1_2box5").css({
            left: "630px",
            top: "203px"
        });
        $(".story1_2box6").css({
            left: "780px",
            top: "153px"
        });
        $(".story1_2box7").css({
            left: "730px",
            top: "293px"
        });
    }
};



app.slide.story3_5 = {
    onEnter: function (slideElement) {
        funmove_story8_text();
        app.scroller.disableAll();
    },
    onExit: function () {
        $(".story3_5box1").css({
            left: "800px",
            top: "60px"
        });
        $(".story3_5box2").css({
            left: "800px",
            top: "200px"
        });
        $(".story3_5box3").css({
            left: "800px",
            top: "340px"
        });
        $(".story3_5box4").css({
            left: "800px",
            top: "490px"
        });
        $(".story3_5box1").removeClass('btnon')
        $(".story3_5box2").removeClass('btnon')
        $(".story3_5box3").removeClass('btnon')
        $(".story3_5box4").removeClass('btnon')
        $(".box").removeClass('btnon')
        $("#text1").fadeOut();
        $("#text2").fadeOut();
        $("#text3").fadeOut();
        $("#text4").fadeOut();
        app.scroller.enableAll();

    }
};

















