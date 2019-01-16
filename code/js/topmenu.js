var topmenu = {
    currentPerson: 1,
    lastPerson: 0,
    hidden: true,
    setRightmenu: function (img, imgon, evt) {
        var mright = $('#topmenuright');
        if (img && evt) {
            util.removeClass($('#topmenu')[0], 'hidden');
            mright.attr('src', img);
            if (imgon) {
                mright.attr('class', 'mover');
                mright.attr('srcon', imgon);
            }
            else {
                mright.attr('class', '');
                mright.attr('srcon', '');
            }
            mright.off('click');
            mright.on('click', evt);
        } else {
            util.addClass($('#topmenu')[0], 'hidden');
            mright.attr('class', 'hidden');
        }
    },
    show: function () {
        $('#menuitems').animate({ height: "522px" }, 200);
        this.hidden = false;
    },
    hide: function () {
        $('#menuitems').animate({ height: "0" }, 200);
        this.hidden = true;
    },
    switchmenu: function () {
        if (this.hidden)
            this.show();
        else
            this.hide();
    }
}
$('#topmenuleft').on('click', function () {
    topmenu.switchmenu();
});
$('#menuitems .mitem').on('click', function () {
    var num = parseInt($(this).attr('data-matter'));
    var cslide = app.slideshow.current;
    var tslide = "";
    switch (num) {
        case 0: tslide = "overall"; topmenu.setRightmenu(); break;
        case 1: tslide = "person" + topmenu.currentPerson + "_patient_portrait"; break;
        case 2: tslide = "person" + topmenu.currentPerson + "_virtual_lab_s1"; break;
        case 3: tslide = "person" + topmenu.currentPerson + "_treatment_target_s1"; break;
        case 4: tslide = "person" + topmenu.currentPerson + "_treatment_choice_s1"; break;
        case 5: tslide = "person" + topmenu.currentPerson + "_patient_benefits"; break;
    }
    topmenu.switchmenu();
    if (num == 0) {
        if (tslide != cslide) {
            app.load('play');
            utils.fastGoTo("play", "home", tslide);
        }
    }
    else {// if (cslide != tslide)
        if (cslide == "overall")
            app.load('personcoll' + topmenu.currentPerson);
        utils.fastGoTo("personcoll" + topmenu.currentPerson, tslide, tslide);
    }
    //else if (cslide != tslide) {
    //app.load('person' + topmenu.currentPerson);
    //utils.fastGoTo("person" + topmenu.currentPerson, tslide, tslide);
    //}
});

$('.mover').live('touchstart', function () {
    var tsrc = $(this).attr('src');
    $(this).attr('src', $(this).attr('srcon'));
    $(this).attr('srcon', tsrc);
});
$('.mover').live('touchend touchcancel', function () {
    var tsrc = $(this).attr('src');
    $(this).attr('src', $(this).attr('srcon'));
    $(this).attr('srcon', tsrc);
});


//Drag = {
//	obj: null,
//	init: function (options) {
//		options.handler.onmousedown = options.handler.ontouchstart = this.start;
//		options.handler.root = options.root || options.handler;
//		var root = options.handler.root;
//		root.onDragStart = options.dragStart || new Function();
//		root.onDrag = options.onDrag || new Function();
//		root.onDragEnd = options.onDragEnd || new Function();
//	},
//	start: function (e) {//此时的this是handler 
//		var obj = Drag.obj = this;
//		obj.style.cursor = 'move';
//		e = e || Drag.fixEvent(window.event);
//		ex = e.pageX;
//		ey = e.pageY;
//		obj.lastMouseX = ex;
//		obj.lastMouseY = ey;
//		var x = obj.root.offsetLeft;
//		var y = obj.root.offsetTop;
//		obj.root.style.left = x + "px";
//		obj.root.style.top = y + "px";
//		document.onmouseup = document.ontouchend = Drag.end;
//		document.onmousemove = document.ontouchmove = Drag.drag;
//		obj.root.onDragStart(x, y);
//	},
//	drag: function (e) {
//		e = e || Drag.fixEvent(window.event);
//		ex = e.pageX;
//		ey = e.pageY;
//		var root = Drag.obj.root;
//		var x = root.style.left ? parseInt(root.style.left) : 0;
//		var y = root.style.top ? parseInt(root.style.top) : 0;
//		var nx = ex - Drag.obj.lastMouseX + x;
//		var ny = ey - Drag.obj.lastMouseY + y;
//		root.style.left = nx + "px";
//		root.style.top = ny + "px";
//		Drag.obj.root.onDrag(nx, ny);
//		Drag.obj.lastMouseX = ex;
//		Drag.obj.lastMouseY = ey;
//	},
//	end: function (e) {
//		var x = Drag.obj.root.style.left ? parseInt(Drag.obj.root.style.left) : 0;
//		var y = Drag.obj.root.style.top ? parseInt(Drag.obj.root.style.top) : 0;
//		Drag.obj.root.onDragEnd(x, y);
//		document.onmouseup = document.ontouchend = null;
//		document.onmousemove = document.ontouchmove = null;
//		Drag.obj = null;
//	},
//	fixEvent: function (e) {
//		e.pageX = e.clientX + document.documentElement.scrollLeft;
//		e.pageY = e.clientY + document.documentElement.scrollTop;
//		return e;
//	}
//}


//var Drag = {
//	//当前被drag的对象 
//	obj: null,
//	//初始化 
//	init: function (id) {
//		var o = document.getElementById(id);
//		//当onmousedown开始拖拽 
//		o.onmousedown = Drag.start;
//	},
//	start: function (e) {
//		var o = Drag.obj = this;
//		//lastMouseX，lastMouseY记录上次鼠标的位置 
//		o.lastMouseX = Drag.getEvent(e).x;
//		o.lastMouseY = Drag.getEvent(e).y;
//		//当onmousemove开始移动 
//		document.onmousemove = Drag.move;
//		//当onmouseup终止拖拽 
//		document.onmouseup = Drag.end;
//	},
//	move: function (e) {
//		var o = Drag.obj;
//		//dx, dy表示鼠标移动的距离 
//		var dx = Drag.getEvent(e).x - o.lastMouseX;
//		var dy = Drag.getEvent(e).y - o.lastMouseY;
//		//因为element.style.left通常返回的结果是'200px'的形式，所以要用parseInt转化 
//		var left = parseInt(o.style.left) + dx;
//		var top = parseInt(o.style.top) + dy;
//		o.style.left = left;
//		o.style.top = top;
//		o.lastMouseX = Drag.getEvent(e).x;
//		o.lastMouseY = Drag.getEvent(e).y;
//	},
//	end: function (e) {
//		document.onmousemove = null;
//		document.onMouseup = null;
//		Drag.obj = null;
//	},
//	//辅助函数，处理IE和FF不同的event模型 
//	getEvent: function (e) {
//		if (typeof e == 'undefined') {
//			e = window.event;
//		}
//		//alert(e.x?e.x : e.layerX); 
//		if (typeof e.x == 'undefined') {
//			e.x = e.layerX; //复制了n遍，到了csdn就变成ee.x了 
//		}
//		if (typeof e.y == 'undefined') {
//			e.y = e.layerY; //复制了n遍，到了csdn就变成ee.x了 
//		}
//		return e;
//	}
//}; 

