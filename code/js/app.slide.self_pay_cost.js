document.addEventListener('presentationInit', function () {
	app.slide.self_pay_cost = {
			onEnter: function(slideElement) {
				
				$('#btn1').live('click',function(){
					var item1, item2, item3, item4, item5;
					item1 = $('#bleeding_count input').val();
					item2 = $('#use_dose input').val();
					item3 = $('#weight1 input').val();
					item4 = $('#injection_count input').val();
					item5 = $('#last_days input').val(); 
					if(item1 && item2 && item3 && item4 && item5){
						$('#factor_quantity1 input').val((item1*item2*item3*item4*item5).toFixed(1));
					}else{     
						$('#factor_quantity1 input').val('');	
					}
				});
				
				$('#btn2').live('click',function(){
					var item6, item7, item8, item9;
					item6 = $('#injection_dose input').val();
					item7 = $('#injection_time input').val();
					item8 = $('#week input').val();
					item9 = $('#weight2 input').val(); 
					if(item6 && item7 && item8 && item9){
						$('#factor_quantity2 input').val((item6*item7*item8*item9).toFixed(1));	
					}else{
						$('#factor_quantity2 input').val('');	
					}
				})
				/*app.scroller.disableAll();
				if (app.slideshow.scroller){
					app.slideshow.scroller.disableAll();
				}*/
			},
			
			onExit:function(){ 
				$('input').val('');
			}
			
	};
});