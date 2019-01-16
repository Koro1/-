document.addEventListener('presentationInit', function () {
	app.slide.asqare_game = {
			/**便签的初始位置*/
		    numOriginPos : {
		    	'num1' : {
		    		left: '740px',
		    		top:  '0px'
		    	},
		    	'num2' : {
		    		left: '740px',
		    		top:  '75px'
		    		
		    	},
		    	'num3' : {
		    		left: '740px',
		    		top:  '150px'
		    	},
		    	'num4' : {
		    		left: '740px',
		    		top:  '225px'
		    	},
		    	'num5' : {
		    		left: '740px',
		    		top:  '300px'
		    	},
		    	'num6' : {
		    		left: '740px',
		    		top:  '375px'
		    	}
		    },
			onEnter: function(ele) { 
				var that = this;
				
			    
			    /**便签的可拖拽范围*/
			    var numDragableRange = {
					'pos1' : {
			    		left : [245,325],
			    		top :  [-5,15],
			    		flag : false,
			    		id: 'pos1',
			    		answer: '7',
			    		result: false
					},
					'pos2' : {
			    		left : [225,305],
			    		top :  [65,90],
			    		flag : false,
			    		answer: '1亿',
			    		result: false
					},
					'pos3' : {
			    		left : [365,445],
			    		top :  [140,165],
			    		flag : false,
			    		answer: '1000',
			    		result: false
					},
					'pos4' : {
			    		left : [245,325],
			    		top :  [215,240],
			    		flag : false,
			    		answer: '25',
			    		result: false
					},
					'pos5' : {
			    		left : [220,300],
			    		top :  [290,315],
			    		flag : false,
			    		answer: '200亿',
			    		result: false
					},
					'pos6' : {
			    		left : [315,395],
			    		top :  [365,390],
			    		flag : false,
			    		answer: '0',
			    		result: false
					}
			    }
			    
			    /**得到元素的初始位置*/
			    var getOriginPos = function(id){
			        return that.numOriginPos[id];
			    }
			    
			    /**拖拽结束后判断位置是否在指定范围*/
			    var isInDragaleRange = function($el){ 
			    	var curLeft = $el.css('left').slice(0,-2);
			    	var curTop = $el.css('top').slice(0,-2);
			    	var text = $el.text();
			    	console.log(text);
			    	for(var i=1; i<7; i++){
			    		var range = numDragableRange['pos'+i];
			    		if(curLeft >= (range.left)[0] && curLeft <= (range.left)[1] &&
		    			curTop >= (range.top)[0] && curTop <= (range.top)[1] && !range.flag){ 
			    			range.flag = true;
			    			if(text == range.answer){
			    				range.result = true;
			    			}
			    			return [true, 'pos'+i];
			    		}
			    	}
			    	return [false];
			    }
			    
			    /**初始化标签状态：位置及可拖拽标记*/
			    var initNumStatus = function($el){
			    	$el.css(getOriginPos($el.attr('id')));
			    	numStickFlag[$el.attr('id')] = false;
			    }
			    
			    /**标签粘住标记*/
			    var numStickFlag = {
			    	'num1' : false,
			    	'num2' : false,
			    	'num3' : false,
			    	'num4' : false,
			    	'num5' : false,
			    	'num6' : false
			    }
			    
			    /**便签是否全部粘住*/
			    var isAllSticked = function(){
			    	return 	numStickFlag['num1'] && numStickFlag['num2'] && 
			    	numStickFlag['num3'] && numStickFlag['num4'] &&  
			    	numStickFlag['num5'] && numStickFlag['num6'];
			    }  
			    
				var $el;
				$('.game_content')
					.hammer({drag_min_distance: 0,prevent_default: true})
					.bind('dragstart drag dragend',function(ev){
						var touches = ev.originalEvent.touches || [ev.originalEvent];
						//dragend时没有touch对象
						if(touches.length != 0){
							$el = $(touches[0].target);
						}
						if(!$el.hasClass('num')|| numStickFlag[$el.attr('id')]){
							return;
						}

				        switch(ev.type) {
				            case 'dragstart' :
				                $el.css('zIndex',100);
				                //num.removeClass('trans');
				                break;
				            case 'drag' :
				                $el.css({
				                    left: ev.position.x - ($el.css('width').slice(0,-2) - 0) / 2 + 'px',
				                    top: ev.position.y - ($el.css('height').slice(0,-2) - 0) / 2 + 'px'
				                });
				                break;
				            case 'dragend' :
				            	var result = isInDragaleRange($el);
				            	if(!result[0]){
				            		//回到初始位置
				                    initNumStatus($el); 
				            	}else{ 
				            		//标签隐藏 
				            		$el.hide();
				            		$('#' + result[1]).text($el.text());
				            		numStickFlag[$el.attr('id')] = true;
				            		if(isAllSticked()){
				            			//判断是否正确，显示对错 
				            			for(var i=1; i<7; i++){ 
				            				var range = numDragableRange['pos' + i];
				            				if(range.result){
				            					$('.pos' + i + ' .right_icon').show();
				            				}else{
				            					$('.pos' + i + ' .wrong_icon').show();
				            				}
				            			}
				            		}
				            	}
				                $el.css('zIndex',0);
				                break;
				        }
				})
			},
			
			onExit:function(ele){ 
				for(var i=1; i<7; i++){
					$('#pos' + i).text('');
					$('.num' + i).css(this.numOriginPos['num'+i]).show();
				}
				$('.right_icon').hide();
				$('.wrong_icon').hide();
			} 	
	};
});