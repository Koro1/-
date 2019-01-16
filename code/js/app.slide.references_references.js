document.addEventListener('presentationInit', function () {
	app.slide.references_references = {
		onEnter: function (slideElement) {
			if (!slideElement.isInit) {
				slideElement.isInit = true;
				this.init(slideElement);
			}
			util.addClass($('#topmenu')[0], 'hidden');
		},
		init: function (slideElement) {
			var referencesList = slideElement.querySelector('.wrapper'),
                scrollIndicator = slideElement.getElementsByClassName("scroll-indicator")[0];

			var arr = "";
			for (var m = 0; m < pdfs.length; m++) {
				for (var n = 0; n < pdfs[m].length; n++) {
					var infos = pdfs[m][n].split('|');
					arr += "<li><a data-ag-editable=\"" + infos[1] + "\"><span>" + infos[0] + ".</span> " + infos[2] + "</a></li>"; // data-pdf=\"" + infos[1] + ".pdf\"
				}
			}
			$('#references ul').html(arr);
			this.scroll = new iScroll(referencesList, {
				hScrollbar: false,
				vScrollbar: false,
				desktopCompatibility: true,
				bounce: false,
				onScrollMove: function () {
					switch (this.y) {
						case 0:
							scrollIndicator.removeClass("scrolled");
							break;
						case this.maxScrollY:
							scrollIndicator.removeClass("scrolled");
							scrollIndicator.addClass("end-scrolled");
							break;
						default:
							scrollIndicator.addClass("scrolled");
							scrollIndicator.removeClass("end-scrolled");
					}
				},
				onScrollEnd: function () {
					switch (this.y) {
						case 0:
							scrollIndicator.removeClass("scrolled");
							break;
						case this.maxScrollY:
							scrollIndicator.removeClass("scrolled");
							scrollIndicator.addClass("end-scrolled");
							break;
					}
				}
			});
			referencesList.getElementsByTagName('a').forEach(function (item) {
				item.addEventListener("click", function () {
					var pdf = item.getAttribute('data-pdf'),
                        pdfFullName = item.innerText.replace(/\n\s+/g, ' ');
					if (pdf) {
						ag.openPDF('content/pdf/' + pdf, pdfFullName);
					}
				});
			});
		},
		onExit: function () { }
	};
});