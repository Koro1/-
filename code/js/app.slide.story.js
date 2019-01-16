document.addEventListener('presentationInit',
function () {
    app.slide.story6_opt1_3 = {
        onEnter: function (slideElement) {
            var step = 0;
            var cantouch = true;
            $(".story6_opt1_pop1").css({
                "opacity": 0
            });
            $(".story6_opt1_content4").css({
                "opacity": 0
            });
            $(".story6_opt1_pop2").css({
                "opacity": 0
            });
            $(".story6_opt1_pop1").animate({
                "opacity": 1
            },
            200, '',
            function () {
                $(".story6_opt1_content4").animate({
                    "opacity": 1
                },
                400, '',
                function () {
                    $(".story6_opt1_pop2").animate({
                        "opacity": 1
                    },
                    200, '',
                    function () {
                        cantouch = true;
                        step = 2;
                    });
                });
            });
        },
        onExit: function () { }
    };
    app.slide.story5_opt1_1 = {
        onEnter: function (slideElement) {
            var step = 0;
            var cantouch = false;
            $(".story5_opt1_content1").css({
                "opacity": 0
            });
            $(".story5_opt1_content2").css({
                left: "83px",
                "opacity": 0
            });
            $(".story5_opt1_content3").css({
                top: "140px",
                "opacity": 0
            });
            $(".story5_opt1_content4").css({
                left: "103px",
                "opacity": 0
            });
            $(".story5_opt1_content1").animate({
                "opacity": 1
            },
            200, '',
            function () {
                $(".story5_opt1_content2").animate({
                    left: "93px",
                    "opacity": 1
                },
                200, '',
                function () {
                    cantouch = false;
                    $(".story5_opt1_content3").animate({
                        top: "150px",
                        "opacity": 1
                    },
                    200, '',
                    function () {
                        $(".story5_opt1_content4").animate({
                            left: "93px",
                            "opacity": 1
                        },
                        200, '',
                        function () {
                            //step = 3;
                            //cantouch = true;
                        });
                    });
                });
            });
            //$("#story5_opt1_1").swipe(function () {
            //    if (cantouch == true) {
            //        switch (step) {
            //            case 3:
            //                utils.fastGoTo("play", "seek", "story5_opt1_2");
            //                break;

            //        }
            //    }
            //});
        },
        onExit: function () { }
    };

    app.slide.story1_1 = {
        onEnter: function (slideElement) {
            app.scroller.enableAll();
        },
        onExit: function () {
           
        }
    }


    app.slide.story3_3 = {
        onEnter: function (slideElement) {
            $('.content3').fadeIn(500, function () {
                $('.content4').fadeIn(500);
            })
        },
        onExit: function () {
            $('.content3').fadeOut(0, function () {
                $('.content4').fadeOut(0);
            })
        }
    }

    app.slide.story3_2 = {
        onEnter: function (slideElement) {
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
        },
        onExit: function () {
            $(".bone1").fadeOut(0, function () {
                $(".bone2").fadeOut(0, function () {
                    $(".bone3").fadeOut(0, function () {
                        $(".bone4").fadeOut(0, function () {
                            $(".bone5").fadeOut(0, function () {
                                $(".bone6").fadeOut(0);
                            });
                        });
                    });
                })
            });
        }
    }

    app.slide.story4_4 = {
        isFirst: true,
        onEnter: function (slideElement) {
            new scale('btn0', 'bar0', 'title0');
            app.scroller.disableAll();
            /*����*/
            if (app.slide.story4_4.isFirst) {
                app.slide.story4_4.isFirst = false;
                $("#story4_4 .contentbg").swipeUp(function () {
                    clearTimeout(scaleTimeout);
                    app.slideshow.next();
                    app.scroller.enable('up');
                    app.scroller.enable('down');
                });
                $("#story4_4 .contentbg").swipeDown(function () {
                    clearTimeout(scaleTimeout);
                    app.slideshow.previous();
                    app.scroller.enable('up');
                    app.scroller.enable('down');
                });
            }
        },
        onExit: function () { }
    }
    /*����*/
    var scaleTimeout = null;
    scale = function (btn, bar, title) {
        this.btn = document.getElementById(btn);
        this.bar = document.getElementById(bar);
        this.title = document.getElementById(title);
        this.step = this.bar.getElementsByTagName("DIV")[0];
        this.init();
    };

    scale.prototype = {
        init: function () {
            var f = this, g = document, b = window, m = Math;
            var max, l, y;
            f.btn.addEventListener("touchstart", function (e) {
                console.log(e);
                y = event.touches[0].clientY;
                l = this.offsetTop;
                max = f.bar.offsetHeight - this.offsetHeight;
                g.addEventListener("touchmove", onmove);
                g.addEventListener("touchend", function () { this.removeEventListener("touchmove", onmove) });
                g.addEventListener("touchcancel", function () { this.removeEventListener("touchmove", onmove) });
            });

            function onmove(e) {
                var thisY = event.touches[0].clientY;
                var to = m.min(max, m.max(0, l + (thisY - y)));
                f.btn.style.top = to + 'px';
                f.ondrag(m.round(m.max(0, (max - to) / max) * 100), max - to);
                b.getSelection ? b.getSelection().removeAllRanges() : g.selection.empty();
            }
        },
        ondrag: function (pos, y) {
            this.step.style.height = Math.max(0, y) + 'px';
            this.title.innerHTML = pos + '';
            clearTimeout(scaleTimeout);
            scaleTimeout = setTimeout(function () {
                clearTimeout(scaleTimeout);
                app.slideshow.next();
                app.scroller.enable('up');
                app.scroller.enable('down');
            }, 1500);
        }
    }


    app.slide.story5_opt1_3 = {
        onEnter: function (slideElement) {
            $('.blue').fadeIn(500, function () {
                $('.red').fadeIn(500, function () {
                    $('.green').fadeIn(500);
                })
            })
        },
        onExit: function () {
            $('.blue').fadeOut(0, function () {
                $('.red').fadeOut(0, function () {
                    $('.green').fadeOut();
                })
            })
        }
    };

    app.slide.story8_opt2_6 = {
        onEnter: function (slideElement) {
            $('.blue').fadeIn(500, function () {
                $('.red').fadeIn(500, function () {
                    $('.green').fadeIn(500);
                })
            })
        },
        onExit: function () {
            $('.blue').fadeOut(0, function () {
                $('.red').fadeOut(0, function () {
                    $('.green').fadeOut();
                })
            })
        }
    };

    app.slide.story7_opt1_1 = {
        isinit: false,
        onEnter: function (slideElement) {
            app.scroller.disableAll();
            if (this.isinit == false) {
                this.isinit = true;
                $('#story7_opt1_1 #btn1').live('click', function () {
                    var item1, item2, item3, item4, item5;
                    item1 = $('#story7_opt1_1 #bleeding_count input').val();
                    item2 = $('#story7_opt1_1 #use_dose input').val();
                    item3 = $('#story7_opt1_1 #weight1 input').val();
                    item4 = $('#story7_opt1_1 #injection_count input').val();
                    item5 = $('#story7_opt1_1 #last_days input').val();
                    if (item1 && item2 && item3 && item4 && item5) {
                       $('#story7_opt1_1 #factor_quantity1 input').val((item1 * item2 * item3 * item4 * item5).toFixed(1));
                    } else {
                        $('#story7_opt1_1 #factor_quantity1 input').val('');
                     
                    }
                });

                $('#story7_opt1_1 #btn2').live('click', function () {
                    var item6, item7, item8, item9;
                    item6 = $('#story7_opt1_1 #injection_dose input').val();
                    item7 = $('#story7_opt1_1 #injection_time input').val();
                    item8 = $('#story7_opt1_1 #week input').val();
                    item9 = $('#story7_opt1_1 #weight2 input').val();
                    if (item6 && item7 && item8 && item9) {
                        $('#story7_opt1_1 #factor_quantity2 input').val((item6 * item7 * item8 * item9).toFixed(1));
                    } else {
                        $('#story7_opt1_1 #factor_quantity2 input').val('');
                    }
                })
            }


        },

        onExit: function () {
            $('input').val('');
        }

    };

    app.slide.story6_opt1_1 = {
        onEnter: function (slideElement) {
            $('.quan3').animate({ height: "138px" },500)
            $('.quan4').animate({ height: "131px" },500)
            $('.quan5').animate({ height: "131px" },500)
            $('.quan6').animate({ height: "77px" },500)
        },
        onExit: function () {
            $('.quan3').animate({ height: "0" })
            $('.quan4').animate({ height: "0" })
            $('.quan5').animate({ height: "0" })
            $('.quan6').animate({ height: "0" })
        }
    };


    app.slide.story6_opt3_2 = {
        onEnter: function (slideElement) {
            app.scroller.disableAll();
            $('.people1').fadeIn(500, function () {
                $('.people2').fadeIn(500, function () {
                    $('.zhuzi1').fadeIn(500);
                })
            })
        },
        onExit: function () {
            app.scroller.enableAll();
            $('.people1').fadeOut(0, function () {
                $('.people2').fadeOut(0, function () {
                    $('.zhuzi1').fadeOut(0);
                })
            })
        }
    };

    app.slide.story6_opt2_1 = {
        isinit: false,
        onEnter: function (slideElement) {
            if (this.isinit == false) {
                this.isinit = true;
                $('#story6_opt2_1 #btn1').live('click', function () {
                         console.log(1);
                    var item1, item2, item3, item4, item5;
                    item1 = $('#story6_opt2_1 #bleeding_count input').val();
                    item2 = $('#story6_opt2_1 #use_dose input').val();
                    item3 = $('#story6_opt2_1 #weight1 input').val();
                    item4 = $('#story6_opt2_1 #injection_count input').val();
                    item5 = $('#story6_opt2_1 #last_days input').val();
                    console.log(item1)
                    if (item1 && item2 && item3 && item4 && item5) {
                        $('#story6_opt2_1 #factor_quantity1 input').val((item1 * item2 * item3 * item4 * item5).toFixed(1));
                    } else {
                        $('#story6_opt2_1 #factor_quantity1 input').val('');
                    
                    }
                });

                $('#story6_opt2_1 #btn2').live('click', function () {
                    var item6, item7, item8, item9;
                    item6 = $('#story6_opt2_1 #injection_dose input').val();
                    item7 = $('#story6_opt2_1 #injection_time input').val();
                    item8 = $('#story6_opt2_1 #week input').val();
                    item9 = $('#story6_opt2_1 #weight2 input').val();
                    if (item6 && item7 && item8 && item9) {
                        $('#story6_opt2_1 #factor_quantity2 input').val((item6 * item7 * item8 * item9).toFixed(1));
                    } else {
                        $('#story6_opt2_1 #factor_quantity2 input').val('');
                    }
                })
            }


        },

        onExit: function () {
            $('input').val('');
        }

    };
    app.slide.story9_opt1_1 = {
        onEnter: function (slideElement) {
            $(".story9_content1").css({
                "opacity": 0
            });
            $(".story9_content2").css({
                "opacity": 0
            });
            $(".story9_content3").css({
                "opacity": 0
            });
        },
        onExit: function () { }
    };
    app.slide.story9_opt1_2 = {
        onEnter: function (slideElement) {
            $(".story9_bar1_img").css({
                left: "-168px"
            });
            $(".story9_bar2_img").css({
                left: "-216px"
            });
            $(".story9_bar3_img").css({
                left: "-143px"
            });
            $(".story9_bar4_img").css({
                left: "-176px"
            });
            $(".story9_data1").css({
                "opacity": 0
            });
            $(".story9_data2").css({
                "opacity": 0
            });
            $(".story9_data3").css({
                "opacity": 0
            });
            $(".story9_data4").css({
                "opacity": 0
            });
            $(".story9_data5").css({
                "opacity": 0
            });

            $(".story9_bar1_img").animate({
                left: "0px"
            },
            200, '',
            function () {

            });
            $(".story9_bar2_img").animate({
                left: "0px"
            },
            200, '',
            function () {

            });
            $(".story9_bar3_img").animate({
                left: "0px"
            },
            200, '',
            function () {

            });
            $(".story9_bar4_img").animate({
                left: "0px"
            },
            200, '',
            function () {
                $(".story9_data1").animate({
                    "opacity": 1
                },
                200, '',
                function () { });
                $(".story9_data2").animate({
                    "opacity": 1
                },
                200, '',
                function () { });
                $(".story9_data3").animate({
                    "opacity": 1
                },
                200, '',
                function () { });
                $(".story9_data4").animate({
                    "opacity": 1
                },
                200, '',
                function () {
                    $(".story9_data5").animate({
                        "opacity": 1
                    },
                    200, '',
                    function () {
                        //$("#story9_opt1_2").swipe(function () {
                        //    utils.fastGoTo("play", "seek", "story9_opt1_3");
                        //});
                    });
                });
            });

        },
        onExit: function () { }
    };
    app.slide.story9_opt1_3 = {
        onEnter: function (slideElement) {
            var step = 0;
            $(".story9_arr1").css({
                "opacity": 1
            });
            $(".story9_arr2").css({
                "opacity": 0
            });
            $(".story9_text1").css({
                "opacity": 0
            });
            $("#story9_opt1_3").swipe(function () {
                switch (step) {
                    case 0:
                        $(".story9_arr1").animate({
                            "opacity":
                            0
                        },
                        150, '',
                        function () {
                            $(".story9_arr2").animate({
                                "opacity": 1
                            },
                            150, '',
                            function () {
                                $(".story9_text1").animate({
                                    "opacity": 1
                                },
                                150, '',
                                function () {
                                    step = 1;
                                });
                            });
                        });
                        break;
                    case 1:
                        //utils.fastGoTo("play", "seek", "story9_opt1_4");
                        break;
                }

            });
        },
        onExit: function () { }
    };

    app.slide.story9_opt1_4 = {
        onEnter: function (slideElement) {
            app.scroller.disableAll();
        },
        onExit: function () {
            app.scroller.enableAll();
        }
    };

    //app.slide.story8_home2 = {
    //    onEnter: function (slideElement) {
    //        $("#story8_home2").swipe(function () {
    //            pop13_btn();
    //        });
    //    },
    //    onExit: function () {
    //    }
    //};
    //app.slide.story8_home1 = {
    //    onEnter: function (slideElement) {
    //        $("#story8_home1").swipe(function () {
    //            pop12_btn();
    //        });
    //    },
    //    onExit: function () { }
    //};
    app.slide.story8_opt1_1 = {
        onEnter: function (slideElement) {
            story5_select = 0;
            $('.story8_content0').removeClass('btnon');
            //$("#story8_opt1_1").swipe(function () {
            //    if (story5_select == 1) utils.fastGoTo("play", "seek", "story8_opt1_2");
            //});

        },
        onExit: function () { }
    };
    var story8_text1left = 0;
    var story8_text1top = 0;
    var story8_text2left = 0;
    var story8_text2top = 0;
    var story8_text3left = 0;
    var story8_text3top = 0;
    var story8_text4left = 0;
    var story8_text4top = 0;
    var story8_text5left = 0;
    var story8_text5top = 0;
    var text1_status = 0;
    var text2_status = 0;
    var text3_status = 0;
    var text4_status = 0;
    var text5_status = 0;

    var tx, x, ty, y;

    function touchStart_story8_text1(e) {
        if (text1_status == 0) {
            text1_status = 1;
            e.preventDefault();
            tx = parseInt($("#story8_text1").css('left'));
            ty = parseInt($("#story8_text1").css('top'));
            x = e.touches[0].pageX;
            y = e.touches[0].pageY;
        }

    }

    function touchMove_story8_text1(e) {
        if (text1_status == 1) {
            e.preventDefault();
            var n = tx + e.touches[0].pageX - x;
            var ny = ty + e.touches[0].pageY - y;
            story8_text1left = n;
            story8_text1top = ny;
            $("#story8_text1").css({
                "left": n,
                "top": ny
            });
        }
    }
    function touchStart_story8_text2(e) {
        if (text2_status == 0) {
            text2_status = 1;
            e.preventDefault();
            tx = parseInt($("#story8_text2").css('left'));
            ty = parseInt($("#story8_text2").css('top'));
            x = e.touches[0].pageX;
            y = e.touches[0].pageY;
        }

    }

    function touchMove_story8_text2(e) {
        if (text2_status == 1) {
            e.preventDefault();
            var n = tx + e.touches[0].pageX - x;
            var ny = ty + e.touches[0].pageY - y;
            story8_text2left = n;
            story8_text2top = ny;
            $("#story8_text2").css({
                "left": n,
                "top": ny
            });
        }
    }
    function touchStart_story8_text3(e) {
        if (text3_status == 0) {
            text3_status = 1;
            e.preventDefault();
            tx = parseInt($("#story8_text3").css('left'));
            ty = parseInt($("#story8_text3").css('top'));
            x = e.touches[0].pageX;
            y = e.touches[0].pageY;
        }

    }

    function touchMove_story8_text3(e) {
        if (text3_status == 1) {
            e.preventDefault();
            var n = tx + e.touches[0].pageX - x;
            var ny = ty + e.touches[0].pageY - y;
            story8_text3left = n;
            story8_text3top = ny;
            $("#story8_text3").css({
                "left": n,
                "top": ny
            });
        }
    }
    function touchStart_story8_text4(e) {
        if (text4_status == 0) {
            text4_status = 1;
            e.preventDefault();
            tx = parseInt($("#story8_text4").css('left'));
            ty = parseInt($("#story8_text4").css('top'));
            x = e.touches[0].pageX;
            y = e.touches[0].pageY;
        }

    }

    function touchMove_story8_text4(e) {
        if (text4_status == 1) {
            e.preventDefault();
            var n = tx + e.touches[0].pageX - x;
            var ny = ty + e.touches[0].pageY - y;
            story8_text4left = n;
            story8_text4top = ny;
            $("#story8_text4").css({
                "left": n,
                "top": ny
            });
        }
    }
    function touchStart_story8_text5(e) {
        if (text5_status == 0) {
            text5_status = 1;
            e.preventDefault();
            tx = parseInt($("#story8_text5").css('left'));
            ty = parseInt($("#story8_text5").css('top'));
            x = e.touches[0].pageX;
            y = e.touches[0].pageY;
        }

    }

    function touchMove_story8_text5(e) {
        if (text5_status == 1) {
            e.preventDefault();
            var n = tx + e.touches[0].pageX - x;
            var ny = ty + e.touches[0].pageY - y;
            story8_text5left = n;
            story8_text5top = ny;
            $("#story8_text5").css({
                "left": n,
                "top": ny
            });
        }
    }
    function funmove_story8_text1() {
        document.getElementById("story8_text1").addEventListener('touchstart', touchStart_story8_text1);
        document.getElementById("story8_text1").addEventListener('touchmove', touchMove_story8_text1);
        document.getElementById("story8_text1").addEventListener('touchend',
        function (e) {
            if ((story8_text1left > 128 && story8_text1left < 254) && (story8_text1top > 163 && story8_text1top < 334)) {
                $(".story8_text1").css({
                    left: "147px",
                    top: "212px"
                });
                $(".story8_text1_bg").animate({
                    "opacity": 0
                },
                200, '',
                function () {
                    text1_status = 2;
                });

            } else {
                $(".story8_text1").css({
                    left: "135px",
                    top: "538px"
                });
                text1_status = 0;
            }
        });
        document.getElementById("story8_text2").addEventListener('touchstart', touchStart_story8_text2);
        document.getElementById("story8_text2").addEventListener('touchmove', touchMove_story8_text2);
        document.getElementById("story8_text2").addEventListener('touchend',
        function (e) {
            if ((story8_text2left > 275 && story8_text2left < 401) && (story8_text2top > 163 && story8_text2top < 334)) {
                $(".story8_text2").css({
                    left: "302px",
                    top: "220px"
                });
                $(".story8_text2_bg").animate({
                    "opacity": 0
                },
                200, '',
                function () {
                    text2_status = 2;
                });
            } else {
                $(".story8_text2").css({
                    left: "307px",
                    top: "546px"
                });
                text2_status = 0;
            }
        });
        document.getElementById("story8_text3").addEventListener('touchstart', touchStart_story8_text3);
        document.getElementById("story8_text3").addEventListener('touchmove', touchMove_story8_text3);
        document.getElementById("story8_text3").addEventListener('touchend',
        function (e) {
            if ((story8_text3left > 422 && story8_text3left < 548) && (story8_text3top > 163 && story8_text3top < 334)) {
                $(".story8_text3").css({
                    left: "436px",
                    top: "211px"
                });
                $(".story8_text3_bg").animate({
                    "opacity": 0
                },
                200, '',
                function () {
                    text3_status = 2;
                });
            } else {
                $(".story8_text3").css({
                    left: "464px",
                    top: "537px"
                });
                text3_status = 0;
            }
        });
        document.getElementById("story8_text4").addEventListener('touchstart', touchStart_story8_text4);
        document.getElementById("story8_text4").addEventListener('touchmove', touchMove_story8_text4);
        document.getElementById("story8_text4").addEventListener('touchend',
        function (e) {
            if ((story8_text4left > 569 && story8_text4left < 695) && (story8_text4top > 163 && story8_text4top < 334)) {
                $(".story8_text4").css({
                    left: "582px",
                    top: "211px"
                });
                $(".story8_text4_bg").animate({
                    "opacity": 0
                },
                200, '',
                function () {
                    text4_status = 2;
                });
            } else {
                $(".story8_text4").css({
                    left: "633px",
                    top: "537px"
                });
                text4_status = 0;
            }
        });
        document.getElementById("story8_text5").addEventListener('touchstart', touchStart_story8_text5);
        document.getElementById("story8_text5").addEventListener('touchmove', touchMove_story8_text5);
        document.getElementById("story8_text5").addEventListener('touchend',
        function (e) {
            if ((story8_text5left > 715 && story8_text5left < 841) && (story8_text5top > 163 && story8_text5top < 334)) {
                $(".story8_text5").css({
                    left: "737px",
                    top: "211px"
                });
                $(".story8_text5_bg").animate({
                    "opacity": 0
                },
                200, '',
                function () {
                    text5_status = 2;
                });
            } else {
                $(".story8_text5").css({
                    left: "802px",
                    top: "537px"
                });
                text5_status = 0;
            }
        });

    }
    app.slide.story8_opt2_1 = {
        onEnter: function (slideElement) {
            funmove_story8_text1();
            //$("#story8_opt2_1").swipe(function () {
            //    if (text1_status == 2 && text2_status == 2 && text3_status == 2 && text4_status == 2 && text5_status == 2)

            //        utils.fastGoTo("story80", "DA_SJK_List_8", "story8_opt2_2");

            //});

        },
        onExit: function () {
            $(".story8_text1").css({
                left: "135px",
                top: "538px"
            });
            $(".story8_text2").css({
                left: "307px",
                top: "546px"
            });
            $(".story8_text3").css({
                left: "464px",
                top: "537px"
            });
            $(".story8_text4").css({
                left: "633px",
                top: "537px"
            });
            $(".story8_text5").css({
                left: "802px",
                top: "537px"
            });
            $(".story8_text1_bg").css({
                "opacity": 1
            });
            $(".story8_text2_bg").css({
                "opacity": 1
            });
            $(".story8_text3_bg").css({
                "opacity": 1
            });
            $(".story8_text4_bg").css({
                "opacity": 1
            });
            $(".story8_text5_bg").css({
                "opacity": 1
            });
        }
    };
    app.slide.story8_opt2_2 = {
        onEnter: function (slideElement) {
            $('.story8_tick1').removeClass('btnon');
            $('.story8_tick2').removeClass('btnon');
            $('.story8_tick3').removeClass('btnon');
            $('.story8_tick4').removeClass('btnon');
            $('.story8_tick5').removeClass('btnon');

        },
        onExit: function () { }
    };

    app.slide.story8_opt2_5 = {
        onEnter: function (slideElement) {
            var step = 0;
            var cantouch = false;
            $(".story5_opt1_content1").css({
                "opacity": 0
            });
            $(".story5_opt1_content2").css({
                left: "83px",
                "opacity": 0
            });
            $(".story5_opt1_content3").css({
                top: "140px",
                "opacity": 0
            });
            $(".story5_opt1_content4").css({
                left: "103px",
                "opacity": 0
            });
            $(".story5_opt1_content1").animate({
                "opacity": 1
            },
            200, '',
            function () {
                $(".story5_opt1_content2").animate({
                    left: "93px",
                    "opacity": 1
                },
                200, '',
                function () {
                    $(".story5_opt1_content3").animate({
                        top: "150px",
                        "opacity": 1
                    },
                    200, '',
                    function () {
                        $(".story5_opt1_content4").animate({
                            left: "93px",
                            "opacity": 1
                        },
                        200, '',
                        function () {
                            step = 3;
                            cantouch = true;
                        });
                    });
                });
            });
            //$("#story8_opt2_5").swipe(function () {
            //    if (cantouch == true) {
            //        switch (step) {
            //            case 3:
            //                utils.fastGoTo("play", "seek", "story8_opt2_6");
            //                break;

            //        }
            //    }
            //});
        },
        onExit: function () { }
    };
    app.slide.story5_home = {
        onEnter: function (slideElement) {
            app.scroller.disableAll();
            $('.story5btn1').removeClass('btnon');
            $('.story5btn2').removeClass('btnon');
            $('.story5text1').removeClass('btnon');
            $('.story5text2').removeClass('btnon');
        },
        onExit: function () {
            app.scroller.enableAll();
        }
    };

    app.slide.story5_opt2_2 = {
        onEnter: function (slideElement) {
            app.scroller.disableAll();
        },
        onExit: function () {
            app.scroller.enableAll();
        }
    }

    app.slide.story6_home = {
        onEnter: function (slideElement) {
            app.scroller.disableAll();
            $('.story6btn1').removeClass('btnon');
            $('.story6btn2').removeClass('btnon');
            $('.story6btn3').removeClass('btnon');
            $('.story6btn4').removeClass('btnon');
            $('.story6text1').removeClass('btnon');
            $('.story6text2').removeClass('btnon');
            $('.story6text3').removeClass('btnon');
            $('.story6text4').removeClass('btnon');
        },
        onExit: function () {
            app.scroller.enableAll();
        }
    };
    app.slide.story7_home = {
        onEnter: function (slideElement) {
            app.scroller.disableAll();
            $('.story7btn1').removeClass('btnon');
            $('.story7text1').removeClass('btnon');
        },
        onExit: function () {
            app.scroller.enableAll();
        }
    };
    app.slide.story8_home = {
        onEnter: function (slideElement) {
            app.scroller.disableAll();
            $('.story8btn1').removeClass('btnon');
            $('.story8btn2').removeClass('btnon');
            $('.story8btn3').removeClass('btnon');
            $('.story8btn4').removeClass('btnon');
            $('.story8text1').removeClass('btnon');
            $('.story8text2').removeClass('btnon');
            $('.story8text3').removeClass('btnon');
            $('.story8text4').removeClass('btnon');
        },
        onExit: function () {
            app.scroller.enableAll();
        }
    };
    app.slide.story10_opt1_1 = {
        onEnter: function (slideElement) {
            $(".story10_part3_1").css({
                top: "-190px",
                "opacity": 0
            });
            $(".story10_part4_1").css({
                top: "-190px",
                "opacity": 0
            });
            $(".story10_part5_1").css({
                top: "-190px",
                "opacity": 0
            });

        },
        onExit: function () { }
    };
    app.slide.story9_home = {
        onEnter: function (slideElement) {
            app.scroller.disableAll();
            $('.story9btn1').removeClass('btnon');
            $('.story9btn2').removeClass('btnon');
            $('.story9text1').removeClass('btnon');
            $('.story9text2').removeClass('btnon');

        },
        onExit: function () {
            app.scroller.enableAll();
        }
    };
    app.slide.story10_home = {
        onEnter: function (slideElement) {
            app.scroller.disableAll();
            $('.story10btn1').removeClass('btnon');
            $('.story10text1').removeClass('btnon');

        },
        onExit: function () {
            app.scroller.enableAll();
        }
    };
    app.slide.story8_opt3_1 = {
        onEnter: function (slideElement) {
            app.scroller.disableAll();
            $(".story8_box200_1").css({
                "opacity": 0
            });
            $(".story8_box26_1").css({
                "opacity": 0
            });
            $(".story8_box150_1").css({
                "opacity": 0
            });
        },
        onExit: function () {
            app.scroller.enableAll();
        }
    };

    app.slide.story5_opt2_1 = {
        onEnter: function (slideElement) {
            var cantouch = true;
            $(".story5_dice").css({
                "-webkit-transform": "scale(1)",
                "-moz-transform": "scale(1)",
                "-o-transform": "scale(1)",
                "-ms-transform": "scale(1)",
                "transform": "scale(1)"
            });
            $("#story5_opt2_1").live("click touchstart",
            function () {
                if (cantouch == true) {
                    cantouch = false;
                    $(".story5_dice").animate({
                        "-webkit-transform": "scale(0.75)",
                        "-moz-transform": "scale(0.75)",
                        "-o-transform": "scale(0.75)",
                        "-ms-transform": "scale(0.75)",
                        "transform": "scale(0.75)"
                    },
                    200, '',
                    function () {
                        utils.fastGoTo("story500", "seek", "story5_opt2_2");
                    });
                }
            });
        },
        onExit: function () { }
    };
    app.navigationToolbar.show();
    ////util.removeClass(footer, 'hide');
    util.removeClass(window.mainmenu, 'hidden');

    app.slide.story3_5 = {
        onEnter: function (slideElement) {
            $('.content3').fadeIn(1000, function () {
                $('.content4').fadeIn(1000);
            })
        },
        onExit: function () { }
    }
    

});

var story5_select = 0;
var content3_1_select = false;
var content3_2_select = false;
var content3_3_select = false;
var content3_4_select = false;
var content3_5_select = false;
var content3_6_select = false;

function story5_btn1() {
    $('.story5btn1').addClass('btnon');
    $('.story5text1').addClass('btnon');
    story5_select = 1;
    setTimeout(utils.fastGoTo, 500, "story500", "seek", "story5_opt1_1");
}
function story5_btn2() {
    $('.story5btn2').addClass('btnon');
    $('.story5text2').addClass('btnon');
    story5_select = 2;
    setTimeout(utils.fastGoTo, 500, "story500", "seek", "story5_opt2_1");
}
function story6_btn1() {
    $('.story6btn1').addClass('btnon');
    $('.story6text1').addClass('btnon');
    story5_select = 1;
    setTimeout(utils.fastGoTo, 500, "story66", "seek", "story6_opt1_1");
    app.slide.story6_opt1_1 = {
        onEnter: function (slideElement) {
            $('.quan3').animate({ height: "138px" })
            $('.quan4').animate({ height: "131px" })
            $('.quan5').animate({ height: "131px" })
            $('.quan6').animate({ height: "77px" })
        },
        onExit: function () {
            $('.quan3').animate({ height: "0" })
            $('.quan4').animate({ height: "0" })
            $('.quan5').animate({ height: "0" })
            $('.quan6').animate({ height: "0" })
        }
    };

}
function story6_btn2() {
    $('.story6btn2').addClass('btnon');
    $('.story6text2').addClass('btnon');
    story5_select = 2;
    setTimeout(utils.fastGoTo, 500, "story66", "seek", "story6_opt2_1");
}
function story6_btn3() {
    $('.story6btn3').addClass('btnon');
    $('.story6text3').addClass('btnon');
    story5_select = 3;
    setTimeout(utils.fastGoTo, 500, "story66", "seek", "story6_opt3_1");
}
function story6_btn4() {
    $('.story6btn4').addClass('btnon');
    $('.story6text4').addClass('btnon');
    story5_select = 4;
    ag.openPDF('content/pdf/kexue.pdf', "药物经济学科室会幻灯");
}
function story7_btn1() {
    $('.story7btn1').addClass('btnon');
    $('.story7text1').addClass('btnon');
    story5_select = 1;
    setTimeout(utils.fastGoTo, 500, "story77", "seek", "story7_opt1_1");
}
function story10_btn1() {
    $('.story10btn1').addClass('btnon');
    $('.story10text1').addClass('btnon');
    story5_select = 1;
    setTimeout(utils.fastGoTo, 500, "story100", "DA_SJK_List_10", "story10_opt1_1");
}
function story8_btn1() {
    $('.story8btn1').addClass('btnon');
    $('.story8text1').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story80", "seek", "story8_opt1_1");
}
function story8_btn2() {
    $('.story8btn2').addClass('btnon');
    $('.story8text2').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story80", "seek", "story8_opt2_1");

}
function story8_btn3() {
    app.scroller.disableAll();
    $('.story8btn3').addClass('btnon');
    $('.story8text3').addClass('btnon');
    setTimeout(utils.fastGoTo, 500, "story80", "seek", "story8_opt3_1");
}
function story8_btn4() {
    $('.story8btn4').addClass('btnon');
    $('.story8text4').addClass('btnon');
    ag.openPDF('content/pdf/xuye.pdf', "血源与重组比较科室会幻灯");
}
function story9_btn1() {
    $('.story9btn1').addClass('btnon');
    $('.story9text1').addClass('btnon');
    story5_select = 1;
    setTimeout(utils.fastGoTo, 500, "story90", "seek", "story9_opt1_1");
}
function story9_btn2() {
    $('.story9btn2').addClass('btnon');
    $('.story9text2').addClass('btnon');
    story5_select = 2;
    ag.openPDF('content/pdf/guanjiechuxue.pdf', "中国次级预防减少患儿关节出血研究");
    //setTimeout(utils.fastGoTo, 500, "story90", "DA_SJK_List_9", "story9_opt2_1");
}
function story9_content1_click() {
    var cantouch1 = true;
    if (cantouch1 == true) {
        $(".story9_content1").animate({
            "opacity": 1
        },
        200, '',
        function () {
            cantouch1 = false;
        });
    }
}
function story9_content2_click() {
    var cantouch1 = true;
    if (cantouch1 == true) {
        $(".story9_content2").animate({
            "opacity": 1
        },
        200, '',
        function () {
            cantouch1 = false;
        });
    }
}
function story9_content3_click() {
    var cantouch1 = true;
    if (cantouch1 == true) {
        $(".story9_content3").animate({
            "opacity": 1
        },
        200, '',
        function () {
            cantouch1 = false;
        });
    }
}
function story8_content0() {
    $('.story8_content0').addClass('btnon');
    story5_select = 1;

}
function story8_box200_btn() {
    var cantouch1 = true;
    if (cantouch1 == true) {
        $(".story8_box200_1").animate({
            "opacity": 1
        },
        200, '',
        function () {
            cantouch1 = false;
        });
    }
}
function story8_box26_btn() {
    var cantouch2 = true;
    if (cantouch2 == true) {
        $(".story8_box26_1").animate({
            "opacity": 1
        },
        200, '',
        function () {
            cantouch2 = false;
        });
    }
}
function story8_box150_btn() {
    var cantouch3 = true;
    if (cantouch3 == true) {
        $(".story8_box150_1").animate({
            "opacity": 1
        },
        200, '',
        function () {
            cantouch3 = false;
        });
    }
}
function story8_content3_1_btn() {
    if (content3_1_select == false) {
        $('.story8_tick1').addClass('btnon');
        content3_1_select = true;
    } else {
        $('.story8_tick1').removeClass('btnon');
        content3_1_select = false;
    }
}
function story8_content3_2_btn() {
    if (content3_2_select == false) {
        $('.story8_tick2').addClass('btnon');
        content3_2_select = true;
    } else {
        $('.story8_tick2').removeClass('btnon');
        content3_2_select = false;
    }
}
function story8_content3_3_btn() {
    if (content3_3_select == false) {
        $('.story8_tick3').addClass('btnon');
        content3_3_select = true;
    } else {
        $('.story8_tick3').removeClass('btnon');
        content3_3_select = false;
    }
}
function story8_content3_4_btn() {
    if (content3_4_select == false) {
        $('.story8_tick4').addClass('btnon');
        content3_4_select = true;
    } else {
        $('.story8_tick4').removeClass('btnon');
        content3_4_select = false;
    }
}
function story8_content3_5_btn() {
    if (content3_5_select == false) {
        $('.story8_tick5').addClass('btnon');
        content3_5_select = true;
    } else {
        $('.story8_tick5').removeClass('btnon');
        content3_5_select = false;
    }
}

function story8_content3_6_btn() {
    if (content3_6_select == false) {
        $('.story8_tick6').addClass('btnon');
        content3_6_select = true;
    } else {
        $('.story8_tick6').removeClass('btnon');
        content3_6_select = false;
    }
}

function story8_opt2_2_btn() {
    if (content3_6_select == true || content3_5_select == true || content3_4_select == true || content3_3_select == true || content3_2_select == true || content3_1_select == true) {
        utils.fastGoTo("story80", "seek", "story8_opt2_3");
    }
}

function story10_part3_btn1() {

    $(".story10_part3_1").animate({
        top: "0px",
        "opacity": 1
    },
    200, '',
    function () {

    });

}
function story10_part4_btn1() {

    $(".story10_part4_1").animate({
        top: "0px",
        "opacity": 1
    },
    200, '',
    function () {

    });

}
function story10_part5_btn1() {

    $(".story10_part5_1").animate({
        top: "0px",
        "opacity": 1
    },
    200, '',
    function () {

    });

}
