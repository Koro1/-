document.addEventListener('presentationInit', function () {

	var surveyArray = [
				["CN.uce.e-detailing is better than paper detail aids", "NA"],
				["CN.uce.e-detailing helps you communicating with the rep", "NA"],
	//["CN.uce.e-detailing helps you to enhance the relationship with the rep", "NA"],
				["CN.uce.you spend more time with the rep when using e-detailing on the iPad", "NA"],
				["CN.uce.e-detailing on the iPad helps you understand Glucobay better", "NA"], ];
	var agree = ["HighlyAgree", "Agree", "Same", "Disagree", "HighlyDisagree"];
	var surveyArrayCN = [
				["CN.uce.您是否认同基于iPad的电子版推广资料优于传统的纸质资料？", "NA"],
				["CN.uce.您是否认同基于iPad的电子版推广资料有助于和代表的沟通？", "NA"],
	//["CN.uce.您是否认同基于iPad的电子版推广资料有助于增进您和代表之间的关系？", "NA"],
				["CN.uce.您是否认同当使用电子资料的时候，您和代表之间的交流时间更长了？", "NA"],
				["CN.uce.您是否认同基于iPad的电子版推广资料能够帮助您更好的了解拜唐苹？", "NA"], ];
	var agreeCN = ["非常有用", "有用", "一般", "不是很有用", "非常没有用"];
	app.slide.doctor_survey = {
		isInit: false,
		onEnter: function (ele) {
			util.addClass($('#topmenu')[0], 'hidden');
			//if (!this.isInit) {
			//this.isInit = true;
			this.chooseVTEProtection();
			//}
		},
		onExit: function (ele) { },
		chooseVTEProtection: function () {
			var theSlide = document.getElementById("doctor_survey");
			var formElements = theSlide.getElementsByTagName("input");
			for (i = 0; i < formElements.length; i++) {
				formElements[i].addEventListener("click", this.checkboxClick, false);
			}
		},
		inputs: {},


		checkboxClick: function (e) {
			var target = e.target;
			var theSlide = document.getElementById("doctor_survey");


			var inputs = app.slide.doctor_survey;


			if (inputs[target.name] == target) {
				setTimeout(function () { inputs[target.name].checked = false; inputs[target.name] = null }, 10);
			}
			else {
				inputs[target.name] = target;
			}

			setTimeout(function () {
				theSlide.querySelectorAll("input").forEach(function (input, i) {

					//console.log("i: "+i+"  checked: "+input.checked);
					if (input == target) {

						console.log("i: " + i + "  checked: " + input.checked);
						if (input.checked) {
							var col = i % 5;
							var row = Math.floor(i / 5);
							surveyArray[row][1] = agree[col];
							surveyArrayCN[row][1] = agreeCN[col];
						}
						else {
							var col = i % 5;
							var row = Math.floor(i / 5);
							surveyArrayCN[row][1] = "NA";
							surveyArray[row][1] = "NA";
						}
					}


				});

				submitUniqueCustomEvent("Doctor survey 1", //Category
			surveyArrayCN[0][0], //Label
			surveyArrayCN[0][1], //Value
			'Text', //Value type
			"Doctor survey 1", //categoryId
			surveyArray[0][0], //labelId
			surveyArray[0][1]//valueId
			);
				submitUniqueCustomEvent("Doctor survey 1", //Category
			surveyArrayCN[1][0], //Label
			surveyArrayCN[1][1], //Value
			'Text', //Value type
			"Doctor survey 1", //categoryId
			surveyArray[1][0], //labelId
			surveyArray[1][1]//valueId
			);
				submitUniqueCustomEvent("Doctor survey 1", //Category
			surveyArrayCN[2][0], //Label
			surveyArrayCN[2][1], //Value
			'Text', //Value type
			"Doctor survey 1", //categoryId
			surveyArray[2][0], //labelId
			surveyArray[2][1]//valueId
			);
				submitUniqueCustomEvent("Doctor survey 1", //Category
			surveyArrayCN[3][0], //Label
			surveyArrayCN[3][1], //Value
			'Text', //Value type
			"Doctor survey 1", //categoryId
			surveyArray[3][0], //labelId
			surveyArray[3][1]//valueId
			);
				//submitUniqueCustomEvent("Doctor survey 1", //Category
				//surveyArrayCN[4][0], //Label
				//surveyArrayCN[4][1], //Value
				//'Text', //Value type
				//"Doctor survey 1", //categoryId
				//surveyArray[4][0], //labelId
				//surveyArray[4][1]//valueId
				//);

			}, 50);
		}
	};
});