document.addEventListener('presentationInit', function () {
	var surveyArray = [
				["CN.uce.Patient Portrait", "NA"],
				["CN.uce.Virtual Lab", "NA"],
				["CN.uce.Treatment Target", "NA"],
				["CN.uce.Treatment Thoice", "NA"],
				["CN.uce.Patient Benefits", "NA"],
				["CN.uce.References", "NA"]
				];
	var agree = ["VeryHelpful", "Helpful", "Neutral", "NotHelpful", "NotHelpfulAtAll"];
	var surveyArrayCN = [
				["CN.uce.患者描述", "NA"],
				["CN.uce.试验室检查", "NA"],
				["CN.uce.治疗目标", "NA"],
				["CN.uce.治疗方案", "NA"],
				["CN.uce.患者获益", "NA"],
				["CN.uce.参考文献", "NA"]
				];
	var agreeCN = ["非常有用", "有用", "一般", "不是很有用", "非常没有用"];

	app.slide.doctor_detailer_helpfull = {
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
			var theSlide = document.getElementById("doctor_detailer_helpfull");
			var formElements = theSlide.getElementsByTagName("input");

			for (i = 0; i < formElements.length; i++) {
				formElements[i].addEventListener("click", this.checkboxClick, false);
			}

		},
		checkboxClick: function (e) {
			var theSlide = document.getElementById("doctor_detailer_helpfull");




			var target = e.target;
			var inputs = app.slide.doctor_detailer_helpfull;


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
							surveyArray[row][1] = "NA";
							surveyArrayCN[row][1] = "NA";
						}
					}


				});

				submitUniqueCustomEvent("Doctor survey 2", //Category
			surveyArrayCN[0][0], //Label
			surveyArrayCN[0][1], //Value
			'Text', //Value type
			"Doctor survey 2", //categoryId
			surveyArray[0][0], //labelId
			surveyArray[0][1]//valueId
			);
				submitUniqueCustomEvent("Doctor survey 2", //Category
			surveyArrayCN[1][0], //Label
			surveyArrayCN[1][1], //Value
			'Text', //Value type
			"Doctor survey 2", //categoryId
			surveyArray[1][0], //labelId
			surveyArray[1][1]//valueId
			);
				submitUniqueCustomEvent("Doctor survey 2", //Category
			surveyArrayCN[2][0], //Label
			surveyArrayCN[2][1], //Value
			'Text', //Value type
			"Doctor survey 2", //categoryId
			surveyArray[2][0], //labelId
			surveyArray[2][1]//valueId
			);
				submitUniqueCustomEvent("Doctor survey 2", //Category
			surveyArrayCN[3][0], //Label
			surveyArrayCN[3][1], //Value
			'Text', //Value type
			"Doctor survey 2", //categoryId
			surveyArray[3][0], //labelId
			surveyArray[3][1]//valueId
			);
				submitUniqueCustomEvent("Doctor survey 2", //Category
			surveyArrayCN[4][0], //Label
			surveyArrayCN[4][1], //Value
			'Text', //Value type
			"Doctor survey 2", //categoryId
			surveyArray[4][0], //labelId
			surveyArray[4][1]//valueId
			);
				submitUniqueCustomEvent("Doctor survey 2", //Category
			surveyArrayCN[5][0], //Label
			surveyArrayCN[5][1], //Value
			'Text', //Value type
			"Doctor survey 2", //categoryId
			surveyArray[5][0], //labelId
			surveyArray[5][1]//valueId
			);

			}, 50);

		}

	};

});