document.addEventListener('presentationInit', function () {
	var slide = app.slide.product_popup = {
		onEnter: function (ele) {
			var sectionList = '';
			sectionList = ele.querySelectorAll("#productSelection li");
			for (var i = 0; i < sectionList.length; i++) {
				app.addEvent('click', slide.loadPresentation, sectionList[i]);
			};
		},
		onExit: function (ele) {
		},
		loadPresentation: function (e) {
			touchy.stop(e);
			var ele = e.target;
			if (ele.nodeType === 3) {
				ele = ele.parentNode;
			}
			//if (ele.id == "product1") ag.openPDF('content/pdf/中国次级预防减少患儿关节出血研究.pdf', "中国次级预防减少患儿关节出血研究");
			//else ag.openPDF('content/pdf/关节保护科室会幻灯.tmp', "关节保护科室会幻灯");
			//ag.openPDF('content/pdf/药物经济学科室会幻灯.pdf', "药物经济学科室会幻灯");
			//ag.openPDF('content/pdf/血源与重组比较科室会幻灯.pdf', "血源与重组比较科室会幻灯");
			
		}
	};
});