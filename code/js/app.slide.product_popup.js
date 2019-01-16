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
			//if (ele.id == "product1") ag.openPDF('content/pdf/�й��μ�Ԥ�����ٻ����ؽڳ�Ѫ�о�.pdf', "�й��μ�Ԥ�����ٻ����ؽڳ�Ѫ�о�");
			//else ag.openPDF('content/pdf/�ؽڱ������һ�õ�.tmp', "�ؽڱ������һ�õ�");
			//ag.openPDF('content/pdf/ҩ�ﾭ��ѧ���һ�õ�.pdf', "ҩ�ﾭ��ѧ���һ�õ�");
			//ag.openPDF('content/pdf/ѪԴ������ȽϿ��һ�õ�.pdf', "ѪԴ������ȽϿ��һ�õ�");
			
		}
	};
});