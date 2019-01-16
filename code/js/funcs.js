var cookie = {
    set: function (name, value, ttl) {
        this.remove(name);
        if (ttl == undefined) ttl = 1e3 * 3600 * 24 * 365;
        var expires = new Date();
        expires.setTime(expires.getTime() + ttl);
        document.cookie = [name + "=" + (value) + "; ", "expires=" + expires.toUTCString() + "; ", "path=/"].join("");
    },
    get: function (name) {
        var ret = new RegExp('(?:^|[^;])' + name + '=([^;]+)').exec(document.cookie);
        return ret ? (ret[1]) : null;
    },
    remove: function (name) {
        document.cookie = name + "=;expires=" + new Date(0).toUTCString();
        document.cookie = name + "=;path=/;expires=" + new Date(0).toUTCString();
    },
    clear: function () {
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
            for (var i = keys.length; i--;) {
                this.remove(keys[i]);
            }
        }
    }
};
var storage = window.localStorage ? {
    getItem: function (item) {
        try {
            return window.localStorage.getItem(item);
        } catch (e) {
            return null;
        }
    },
    setItem: function (item, value) {
        try {
            window.localStorage.setItem(item, value);
        } catch (e) {
            console.log("Local storage issue: " + e);
        }
    }
} : {
    getItem: function (item) {
        return cookie.get(item);
    },
    setItem: function (item, value) {
        cookie.set(item, value);
    }
}
var custObj = {};
var custSteptext = [['儿童', '成人'], ['按需治疗', '预防治疗'], ['血浆源性八因子', '多品牌重组八因子', '拜科奇®']];

function homebtn2() {
    $('.homebtn1').removeClass('btnon');
    $('.homebtn2').addClass('btnon');
}

//function h_btn1(e) {
//    utils.fastGoTo("play", "seek", "step1");
//}
//function h_btn2(e) {
//    utils.fastGoTo("play", "seek", "step1");
//}
function s1_btn1() {
    $('.s1btn2').removeClass('btnon');
    $('.s1btn1').addClass('btnon');
    custObj.step1 = 0;
    setTimeout(utils.fastGoTo, 500, "play", "seek", "step8");

}
function s1_btn2() {
    $('.s1btn1').removeClass('btnon');
    $('.s1btn2').addClass('btnon');
    custObj.step1 = 1;
    setTimeout(utils.fastGoTo, 500, "play", "seek", "step2");
}
function s2_btn1() {
    $('.s2btn2').removeClass('btnon');
    $('.s2btn1').addClass('btnon');
    custObj.step2 = 0;
    setTimeout(utils.fastGoTo, 500, "play", "seek", "step3");
}
function s2_btn2() {
    $('.s2btn1').removeClass('btnon');
    $('.s2btn2').addClass('btnon');
    custObj.step2 = 1;
    setTimeout(utils.fastGoTo, 500, "play", "seek", "step7");
    app.scroller.disableAll();

}
function s3_btn1() {
    $('.s3btn2,.s3btn3').removeClass('btnon');
    $('.s3btn1').addClass('btnon');
    custObj.step3 = 0;
    setTimeout(utils.fastGoTo, 500, "play", "seek", "step4");
    app.scroller.enableAll();
}
function s3_btn2() {
    $('.s3btn1,.s3btn3').removeClass('btnon');
    $('.s3btn2').addClass('btnon');
    custObj.step3 = 1;
    setTimeout(utils.fastGoTo, 500, "play", "seek", "step6");
    app.scroller.disableAll();
}
function s5_btn1() {
    $('.s5btn2').removeClass('btnon');
    $('.s5btn1').addClass('btnon');
    custObj.step5 = 0;
    setTimeout(utils.fastGoTo, 500, "play", "seek", "step9");
}
function s5_btn2() {
    $('.s5btn1').removeClass('btnon');
    $('.s5btn2').addClass('btnon');
    custObj.step5 = 1;
    setTimeout(utils.fastGoTo, 500, "play", "seek", "step15");
}
function s6_btn1() {
    $('.s6btn2').removeClass('btnon');
    $('.s6btn1').addClass('btnon');
    custObj.step6 = 0;
    setTimeout(utils.fastGoTo, 500, "play", "seek", "step10");
}
function s6_btn2() {
    $('.s6btn1').removeClass('btnon');
    $('.s6btn2').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "play", "seek", "step7");
}
function s7_btn1() {
    $('.s7btn2').removeClass('btnon');
    $('.s7btn1').addClass('btnon');
    custObj.step7 = 0;
    setTimeout(utils.fastGoTo, 500, "play", "seek", "step12");
    app.scroller.enableAll();
}
function s7_btn2() {
    $('.s7btn1').removeClass('btnon');
    $('.s7btn2').addClass('btnon');
    custObj.step7 = 1;
    setTimeout(utils.fastGoTo, 500, "play", "seek", "step14");
}

function s15_btn1() {
    $('.s2btn2').removeClass('btnon');
    $('.s2btn1').addClass('btnon');
    custObj.step15 = 0;
    setTimeout(utils.fastGoTo, 500, "play", "seek", "step17");
}
function s15_btn2() {
    $('.s2btn1').removeClass('btnon');
    $('.s2btn2').addClass('btnon');
    custObj.step15 = 1;
    setTimeout(utils.fastGoTo, 500, "play", "seek", "step16");
    app.scroller.disableAll();
}

function s17_btn1() {
    $('.s3btn2').removeClass('btnon');
    $('.s3btn1').addClass('btnon');
    custObj.step17 = 0;
    setTimeout(utils.fastGoTo, 500, "play", "seek", "step19");
}
function s17_btn2() {
    $('.s3btn1').removeClass('btnon');
    $('.s3btn2').addClass('btnon');
    custObj.step17 = 1;
    setTimeout(utils.fastGoTo, 500, "play", "seek", "step18");
}

function story1_1() {
    $('.text1_1btn2').removeClass('btnon');
    $('.text1_0btn1').addClass('btnon');
    utils.fastGoTo("story1", "seek", "story1_3");
}
function story1_3() {
    $('.text1_0btn1').removeClass('btnon');
    $('.text1_1btn2').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story1", "seek", "story1_4");
    app.scroller.disableAll();
}

function story2_1() {
    $('.text25_1btn2').removeClass('btnon');
    $('.text26_1btn3').removeClass('btnon');
    $('.text24_0btn1').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story2", "seek", "story2_3");
}
function story2_2() {
    $('.text24_0btn1').removeClass('btnon');
    $('.text26_1btn3').removeClass('btnon');
    $('.text25_1btn2').addClass('btnon');
    app.scroller.disableAll();
    setTimeout(utils.fastGoTo, 500, "story2", "seek", "story2_4");
}
function literature() {
    $('.text24_0btn1').removeClass('btnon');
    $('.text25_1btn2').removeClass('btnon');
    $('.text26_1btn3').addClass('btnon');
    ag.openPDF('content/pdf/guanjiechuxue.pdf', "中国次级预防减少患儿关节出血研究");
}

function story3_1() {
    $('.text27_1btn2').removeClass('btnon');
    $('.text26_0btn1').addClass('btnon');
    utils.fastGoTo("story3", "seek", "story3_2");
    $(".bone1").fadeIn(300, function () {
        $(".bone2").fadeIn(300, function () {
            $(".bone3").fadeIn(300, function () {
                $(".bone4").fadeIn(300, function () {
                    $(".bone5").fadeIn(300, function () {
                        $(".bone6").fadeIn(300);
                    });
                });
            });
        })
    });
}

function story3_5() {
    app.scroller.disableAll();
    $('.text26_0btn1').removeClass('btnon');
    $('.text27_1btn2').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story3", "seek", "story3_5")
}
function story4_3() {
    $('.text36_1btn2').removeClass('btnon');
    $('.text37_0btn3').removeClass('btnon');
    $('.text35_0btn1').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story4", "seek", "story4_3");
}
function JOS() {
    $('.text35_0btn1').removeClass('btnon');
    $('.text37_0btn3').removeClass('btnon');
    $('.text36_1btn2').addClass('btnon');
    ag.openPDF('content/pdf/JOS.pdf', "研究文献");
}
function literature2() {
    $('.text35_0btn1').removeClass('btnon');
    $('.text36_1btn2').removeClass('btnon');
    $('.text37_0btn3').addClass('btnon');
    ag.openPDF('content/pdf/guanjiebaohu.pdf', "关节保护科室会幻灯");
}
function story4_3btn1() {
    $('.story4_3btn2').removeClass('btnon');
    $('.story4_3btn1').addClass('btnon');
    $(".bar_r").animate({
        width: "439px",
        speed: "500"
    });
    $(".qiyi").fadeIn(1000);

}
function story4_3btn2() {
    $('.story4_3btn1').removeClass('btnon');
    $('.story4_3btn2').addClass('btnon');
    $(".bar_b").animate({
        width: "572px",
        speed: "500"
    });
    $(".jiusan").fadeIn(1000,
    function () {
        $(".story4_circle").fadeIn(1000);
    });

}

function one() {
    app.navigationToolbar.show();
    util.removeClass(window.mainmenu, 'hidden');
    utils.fastGoTo("story1", "seek", "story1_1");
    app.navigationToolbar.show();
    //util.removeClass(footer, 'hide');
    util.removeClass(window.mainmenu, 'hidden');
    //setTimeout(utils.fastGoTo, 500, "play", "seek", "story1_1");
}
function two() {
    app.navigationToolbar.show();
    util.removeClass(window.mainmenu, 'hidden');
    utils.fastGoTo("story2", "seek", "story2_1");
    app.navigationToolbar.show();
    //util.removeClass(footer, 'hide');
    util.removeClass(window.mainmenu, 'hidden');
    //setTimeout(utils.fastGoTo, 500, "play", "seek", "story2_1");
}
function three() {
    app.navigationToolbar.show();
    util.removeClass(window.mainmenu, 'hidden');
    utils.fastGoTo("story3", "seek", "story3");
    app.navigationToolbar.show();
    //util.removeClass(footer, 'hide');
    util.removeClass(window.mainmenu, 'hidden');
    //setTimeout(utils.fastGoTo, 500, "play", "seek", "story3");
}
function four() {
    app.navigationToolbar.show();
    util.removeClass(window.mainmenu, 'hidden');
    utils.fastGoTo("story4", "seek", "story4_1");
    app.navigationToolbar.show();
    //util.removeClass(footer, 'hide');
    util.removeClass(window.mainmenu, 'hidden');
    //setTimeout(utils.fastGoTo, 500, "play", "seek", "story4_1");
}

function five() {
    app.navigationToolbar.show();
    util.removeClass(window.mainmenu, 'hidden');
    utils.fastGoTo("story500", "seek", "story5_home1");
    app.navigationToolbar.show();
    //util.removeClass(footer, 'hide');
    util.removeClass(window.mainmenu, 'hidden');
    //setTimeout(utils.fastGoTo, 500, "play", "seek", "story5_home1");
}

function six() {
    app.navigationToolbar.show();
    util.removeClass(window.mainmenu, 'hidden');
    utils.fastGoTo("story66", "seek", "story6_home1");
    app.navigationToolbar.show();
    //util.removeClass(footer, 'hide');
    util.removeClass(window.mainmenu, 'hidden');
    //setTimeout(utils.fastGoTo, 500, "play", "seek", "story6_home1");
}
function seven() {
    app.navigationToolbar.show();
    util.removeClass(window.mainmenu, 'hidden');
    utils.fastGoTo("story77", "seek", "story7_home1");
    app.navigationToolbar.show();
    //util.removeClass(footer, 'hide');
    util.removeClass(window.mainmenu, 'hidden');
    //setTimeout(utils.fastGoTo, 500, "play", "seek", "story7_home1");
}
function eight() {
    app.navigationToolbar.show();
    util.removeClass(window.mainmenu, 'hidden');
    utils.fastGoTo("story80", "seek", "story8_home1");
    app.navigationToolbar.show();
    //util.removeClass(footer, 'hide');
    util.removeClass(window.mainmenu, 'hidden');
    //setTimeout(utils.fastGoTo, 500, "play", "seek", "story8_home1");
}
function nine() {
    app.navigationToolbar.show();
    util.removeClass(window.mainmenu, 'hidden');
    utils.fastGoTo("story90", "seek", "story9_home1");
    app.navigationToolbar.show();
    //util.removeClass(footer, 'hide');
    util.removeClass(window.mainmenu, 'hidden');
    //setTimeout(utils.fastGoTo, 500, "play", "seek", "story9_home1");
}
function ten() {
    app.navigationToolbar.show();
    util.removeClass(window.mainmenu, 'hidden');
    utils.fastGoTo("story100", "seek", "story10_home1");
    app.navigationToolbar.show();
    //util.removeClass(footer, 'hide');
    util.removeClass(window.mainmenu, 'hidden');
    //setTimeout(utils.fastGoTo, 500, "play", "seek", "story10_home1");
}

function storytree1() {
    $('.storytree2').removeClass('btnon');
    $('.storytree1').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "play", "story", "storytree3");
    app.scroller.disableAll();
}
function storytree2() {
    $('.storytree1').removeClass('btnon');
    $('.storytree2').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "play", "story", "storytree2");
    app.scroller.disableAll();
}

function part2() {
    $(".part2").show();
}

function part4() {
    $(".part4").show();
    $(".story2font").fadeIn(500);
}


    function donghua() {
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
    }

