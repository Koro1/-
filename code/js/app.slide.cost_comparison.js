document.addEventListener('presentationInit', function () {
	app.slide.cost_comparison = {
			onEnter: function(slideElement) { 
				
				$('#total').blur(function(){
					var totalVal = $(this).val() - 0;
					if(totalVal && totalVal > 0){
						var count2Val = $('#count2').val();
						if(count2Val && count2Val > 0 && count2Val < totalVal){
							$('#count1').val(totalVal - count2Val);
						}
					}
				})
				
				$('#count2').blur(function(){
					var count2Val = $(this).val() - 0;
					if(count2Val && count2Val > 0){
						var totalVal = $('#total').val();
						if(totalVal && totalVal > 0 && count2Val < totalVal){
							$('#count1').val(totalVal - count2Val);
						}
					}
				})
				
				$('#total2').blur(function(){
					var totalVal = $(this).val() - 0;
					if(totalVal && totalVal > 0){
						var count2Val = $('#count22').val();
						if(count2Val && count2Val > 0 && count2Val < totalVal){
							$('#count21').val(totalVal - count2Val);
						}
					}
				})
				
				$('#count22').blur(function(){
					var count2Val = $(this).val() - 0;
					if(count2Val && count2Val > 0){
						var totalVal = $('#total2').val();
						if(totalVal && totalVal > 0 && count2Val < totalVal){
							$('#count21').val(totalVal - count2Val);
						}
					}
				})
				
				$('#btn1').live('click',function(){ 	
					var item1, item2, item3, item4, item5, item6;
					item1 = $('#use_count1 input').val();
					item2 = $('#purchase_count1 input').val();
					item3 = $('#ratio1 input').val();
					item4 = $('#ceiling1 input').val();
					item5 = $('#aid_count1 input').val();
					item6 = $('#income1 input').val();  
					if(item1 && item2 && item3 && item4 && item5 && item6){
						var test1 = item2 * 1122 * 0.01 * item3;
						if(test1 > item4){
							$('#year_cost1 input').val((item2 * 1122 - item4).toFixed(1));
						}else{
							$('#year_cost1 input').val((item2 * 1122 * (1 - 0.01 * item3)).toFixed(1));
						} 
						var item7 = $('#year_cost1 input').val();
						$('#pay_income_share1 input').val( Math.ceil((item7 / item6) * 100));
					}else{
						$('#year_cost1 input').val('');
						$('#pay_income_share1 input').val('');	
					}
				});
				
				$('#btn2').live('click',function(){
					var line1, line2, line3, line4, line5, line6;
					line1 = $('#use_count2 input').val();
					line2 = $('#purchase_count2 input').val();
					line3 = $('#ratio2 input').val();
					line4 = $('#ceiling2 input').val();
					line5 = $('#aid_count2 input').val();
					line6 = $('#income2 input').val(); 
					if(line1 && line2 && line3 && line4 && line5 && line6){
						var test2 = line2 * 1907 * 0.01 * line3;
						if(test2 > line4){
							$('#year_cost2 input').val((line2 * 1907 - line4).toFixed(1));
						}else{
							$('#year_cost2 input').val((line2 * 1907 * (1 - line3 * 0.01)).toFixed(1));
						} 
						var line7 = $('#year_cost2 input').val();
						$('#pay_income_share2 input').val( Math.ceil((line7 / line6) * 100));
					}else{
						$('#year_cost2 input').val('');
						$('#pay_income_share2 input').val('');	
					} 
				})
			},
			
			onExit:function(){
				$('input').val('');
			}
			
	};
});