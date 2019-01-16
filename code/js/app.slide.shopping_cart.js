document.addEventListener('presentationInit', function () {
	var addressFiles = "http://vatspace.com/download/SPAF/";
	var addr = "medicalinformation@bayer.com";
	var title, doctorName, eMail, telephoneNumber, hospitalName, departmentName, delegateName, delegateTelephone;
	function monitorResource(type, name, isOpened) {
		var element = document.createElement('p'), monitoringBuilder = {
			"unique": true,
			"category": "Selected Resources",
			"categoryId": "Selected_Resources",
			"valueType": "true/false",
			"value": isOpened || false
		}, objects = {
			"link": {
				"valueId": name,
				"label": "Resources Documents",
				"labelId": "Resources_Documents"
			},
			"pdf": {
				"valueId": name,
				"label": "Resources Links",
				"labelId": "Resources_Links"
			},
			"mail": {
				"valueId": "Resources_Mail_button_tapped",
				"label": "Resources Mail button",
				"labelId": "Resources_Mail_button"
			}
		};

		element.innerHTML = objects[type]["valueId"];

		monitoringBuilder["valueId"] = element.innerText + '_' + monitoringBuilder["value"].toString();
		monitoringBuilder["valueId"] = monitoringBuilder["valueId"].replace(/\s+/gi, '_');
		monitoringBuilder["label"] = objects[type]["label"];
		monitoringBuilder["labelId"] = objects[type]["labelId"];

		ag.submit.event(monitoringBuilder);
	}

	HTMLCollection.prototype["forEach"] = Array.prototype["forEach"];
	NodeList.prototype["forEach"] = Array.prototype["forEach"];

	var shoppingCartModel = app.shoppingCartModel = [],
	mailData = {},
	refreshShoppingCart;

	// Saves ids of references, that user has selected
	app.shoppingCart = {};

	(function formModelByHTMLFile(slideId) {
		var element = document.createElement('div');
		console.log(slideId);
		app.getHtml(slideId, null, function (text) {
			var refs, links;
			element.innerHTML = text;
			links = element.getElementsByClassName('video-list')[0];
			links.children.forEach(function (liElem, index) {
				shoppingCartModel.push({
					"id": "link-" + index,
					"type": "link",
					"innerHTML": '<b>' + liElem.children[0].innerHTML + '</b> &nbsp;' + liElem.children[1].innerHTML,
					"link": liElem.children[1].innerHTML
				});
			});
		});
	})('download_references');
	//(function (slideId) {
	//var element = document.createElement('div');
	//console.log(slideId);
	//app.getHtml(slideId, null, function (text) {
	//element.innerHTML = text;
	//element.querySelectorAll('#references li a[data-pdf]').forEach(function (el) {
	//var span = el.getElementsByTagName("span")[0],
	//num = parseInt(span.innerText),
	//pdfName = el.getAttribute("data-pdf");
	//shoppingCartModel.push({
	//"id": "pdf-" + num,
	//"type": "pdf",
	//"innerHTML": el.innerHTML,
	//"innerText": el.innerText.replace(/^\s+|\s+$/g, ''),
	//"pdfPath": pdfName,
	//"link": addressFiles + pdfName
	//});
	//});
	//});
	//})('references_references');
	/*  (function(slideId) {
	var element = document.createElement('div');
	app.getHtml(slideId, null, function (text) {
	element.innerHTML = text;
	element.querySelectorAll('.references li a[data-ag-pdf]').forEach(function (el) {
	var span = el.getElementsByTagName("span")[0],
	num = parseInt(span.innerText),
	pdfName = el.getAttribute("data-ag-pdf");
	shoppingCartModel.push({
	"id":"pdf-" + num,
	"type":"pdf",
	"innerHTML":el.innerHTML,
	"pdfPath":pdfName,
	"link":addressFiles + pdfName
	});
	});
	});
	})('references');*/

	var pdfs1 = [[]];
//	var pdfs1 = [['1|2010|2010年版中国2型糖尿病防治指南',
//'2|2005|2005年IDF全球指南',
//'3|2006|2006年EASD-ADA专家共识',
//'4|2007|2007年IDF 2型糖尿病预防指南',
//'5|2008|2008年ACE-AACE糖尿病前期治疗共识',
//'6|Blood glucose guide|2007年版IDF餐后血糖管理指南',
//'7|Lancet. 2002 Jun 15|Chiasson JL, et al. Lancet. 2002 Jun 15;359(9323):2072-7.',
//'8|Clin Ther. 2010 Aug|Koyasu M, et al. Clin Ther. 2010 Aug;32(9):1610-7.',
//'9|Eur J Clin Invest. 1994 Aug|Lefebvre PJ, et al. Eur J Clin Invest. 1994 Aug;24 Suppl 3:40-4.',
//'10|JAMA. 2003 Jul 23|Chiasson JL, et al. JAMA. 2003 Jul 23;290(4):486-94.',
//'11|Eur Heart J. 2004 Jan|Hanefeld M, et al. Eur Heart J. 2004 Jan;25(1):10-6.',
//'12|Glucophage500mg|格华止®盐酸二甲双胍片说明书',
//'13|N Engl J Med. 2010 Apr 22|NAVIGATOR Study Group. N Engl J Med. 2010 Apr 22;362(16):1463-76.',

//'14|N Engl J Med. 2008 Jun 12|ADVANCE Collaborative Group. N Engl J Med. 2008 Jun 12;358(24):2560-72.',
//'15|Diabetes Res Clin Pract. 2000 Sep|Halimi S, et al. Diabetes Res Clin Pract. 2000 Sep;50(1):49-56.',
//'16|Curr Med Res Opin. 2001|Salman S, et al. Curr Med Res Opin. 2001;16(4):296-306.',
//'17|Lancet. 1998 Sep 12|UKPDS Group. Lancet. 1998 Sep 12;352(9131):854-65.',
//'18|Diabetes Nutr Metab. 2002 Jun|Rosak C, et al. Diabetes Nutr Metab. 2002 Jun;15(3):143-51.',
//'19|International Journal of Endocrinology and metabolism2009|冯凭. 国际内分泌代谢杂志. 2009;29(2):77-81.',
//'20|J Atheroscler Thromb. 2008 Jun|Oyama T, et al. J Atheroscler Thromb. 2008 Jun;15(3):154-9.',
//'21|Cardiovasc Diabetol. 2010 Mar 24|Kato T, et al. Cardiovasc Diabetol. 2010 Mar 24;9:12.',
//'22|Lancet. 2005 Oct 8|PROactive investigators. Lancet. 2005 Oct 8;366(9493):1279-89.',
//'23|J Natl Cancer Inst. 2012 Sep 19|Mamtani R, et al. J Natl Cancer Inst. 2012 Sep 19;104(18):1411-21.',
//'24|Am J Ophthalmol. 2009 Apr|Fong DS, et al. Am J Ophthalmol. 2009 Apr;147(4):583-586.e1.',

//'25|Standards of Medical Care in Diabetes-2010. Diabetes Care. 2010 Jan|ADA. Standards of Medical Care in Diabetes—2010. Diabetes Care. 2010 Jan;33 Suppl 1:S11-61.',
//'26|Expert consensus of HbA1C control target for Chineses adult with type 2 diabetes 2011|中国成人2型糖尿病HbA1c控制目标的专家共识.中华内分泌代谢杂志.2011,27(5):371-374',
//'27|Chin Med J (Engl). 2011 Jan|Su JB, et al. Chin Med J (Engl). 2011 Jan;124(1):144-7.',
//'28|Chinese Journal of Endocrinology and metabolism 2009|马艳荣等. 中华内分泌代谢杂志. 2009;25(5):512-4.',
//'29|Diabetes Care. 1995 Jul|Coniff RF, et al. Diabetes Care. 1995 Jul;18(7):928-32.',
//'30|Diabetes Obes Metab. 2007 Nov|Schnell O, et al. Diabetes Obes Metab. 2007 Nov;9(6):853-8.',
//'31|Lancet. 1998 Sep 12 837-53|UKPDS Group. Lancet. 1998 Sep 12;352(9131):837-53.',

//'32|CHINESE JOURNAL OF INTERNAL MEDICINE 2012|心血管内科糖代谢异常早期筛查及管理专家共识. 中华内科杂志. 2012;51(7):574-8.',
//'33|Eur Heart J. 2004 Nov|Bartnik M, et al. Eur Heart J. 2004 Nov;25(21):1880-90.',
//'34|Eur Heart J. 2006 Nov|Hu DY, et al. Eur Heart J. 2006 Nov;27(21):2573-9.',
//'35|Diabetologia. 2004 Mar|Nakagami T. Diabetologia. 2004 Mar;47(3):385-94.',
//'36|Diabetes Care. 2009 Jan|ADA/EASD. Diabetes Care. 2009 Jan;32(1):193-203.',
//'37|Clin Drug Invest 2007|Pan CY, et al. Clin Drug Invest 2007;27(6):397-405.',
//'38|Diabetes Complications. 2011|Lin SD, et al. J Diabetes Complications. 2011 Sep-Oct;25(5):332-8.'
//]];

	for (var i = 0; i < pdfs1[0].length; i++) {
		var infos = pdfs1[0][i].split('|');
		shoppingCartModel.push({
			"id": "pdf-" + infos[0],
			"type": "pdf",
			"innerHTML": "<span>" + infos[0] + ".</span> " + infos[2],
			"innerText": (infos[0] + ". " + infos[2]).replace(/^\s+|\s+$/g, ''),
			"pdfPath": infos[1],
			"link": addressFiles + infos[1]
		});
	}
	function formContentByModel(element) {

		var selectedItemsElement, liElement, pElement, y, dy = 5,
			refsElement, linksElement,
			rebuildSelectedWindow,
			iScrollOptions,
			refreshDataWindow,
			sendMailBtn;

		selectedItemsElement = element.getElementsByClassName('selected-items')[0].getElementsByTagName('ol')[0];
		refsElement = element.getElementsByClassName('references')[0].getElementsByTagName('ol')[0];
		linksElement = element.getElementsByClassName('links')[0].getElementsByTagName('ol')[0];

		iScrollOptions = { momentum: false, vScroll: true, hScroll: false, hScrollbar: false, vScrollbar: true, bounce: false, desktopCompatibility: true };

		element.refsiScroll = new iScroll(refsElement.parentNode, iScrollOptions);
		element.linksiScroll = new iScroll(linksElement.parentNode, iScrollOptions);
		element.selectediScroll = new iScroll(selectedItemsElement.parentNode, iScrollOptions);

		rebuildSelectedWindow = function () {
			var key, liElement, pElement, y;
			selectedItemsElement.innerHTML = '';

			for (key in app.shoppingCart) {
				(function (key) {
					var obj = app.shoppingCart[key];
					liElement = document.createElement('li');
					pElement = document.createElement('p');
					liElement.className = "type-" + obj.type;
					pElement.innerHTML = obj.innerHTML;
					liElement.appendChild(pElement);
					selectedItemsElement.appendChild(liElement);
					liElement.addEventListener(touchy.events.start, function () {
						y = element.selectediScroll.y;
					});
					/*liElement.addEventListener(touchy.events.end, function(){
					if(Math.abs(element.selectediScroll.y - y) < dy){
					if(obj["pdfPath"]){
					try{
					ag.openPDF('content/pdf/' + obj["pdfPath"], obj["innerHTML"]);
					}catch(e){
					try{
					util.openPDF(obj["pdfPath"], obj["innerHTML"]);
					}catch(e){

					}
					}

					}
					}
					});*/
				})(key);
			}

			setTimeout(function () {
				element.selectediScroll.refresh();
				element.linksiScroll.refresh();
				element.refsiScroll.refresh();

				if (element.selectediScroll.scrollerH > element.selectediScroll.wrapperH) {
					element.selectediScroll.scrollToElement(liElement);
				}
			}, 100);

		};

		shoppingCartModel.forEach(function (obj, index) {
			var iScroll;
			liElement = document.createElement('li');
			pElement = document.createElement('p');

			pElement.innerHTML = obj.innerHTML;

			liElement.objectIndexSP = index;

			if (app.shoppingCart[obj.id]) {
				liElement.addClass('active');
			}

			liElement.appendChild(pElement);
			switch (obj.type) {
				case 'pdf':
					refsElement.appendChild(liElement);
					iScroll = element.refsiScroll;
					break;
				case 'link':
					linksElement.appendChild(liElement);
					iScroll = element.linksiScroll;
					break;
			}

			liElement.addEventListener(touchy.events.start, function () {
				y = iScroll.y;
			});
			liElement.addEventListener(touchy.events.end, function () {
				if (Math.abs(iScroll.y - y) < dy) {
					if (this.hasClass('active')) {
						this.removeClass('active');

						monitorResource(shoppingCartModel[this.objectIndexSP]["type"],
							shoppingCartModel[this.objectIndexSP]["innerHTML"], false);

						delete app.shoppingCart[shoppingCartModel[this.objectIndexSP].id];
					} else {
						this.addClass('active');

						monitorResource(shoppingCartModel[this.objectIndexSP]["type"],
							shoppingCartModel[this.objectIndexSP]["innerHTML"], true);

						app.shoppingCart[shoppingCartModel[this.objectIndexSP].id] = shoppingCartModel[this.objectIndexSP];
					}
					rebuildSelectedWindow();
				}
			});
		});

		// Documents
		while (refsElement.children.length < 5) {
			liElement = document.createElement('li');
			liElement.style.opacity = '0';
			refsElement.appendChild(liElement);
		}

		// Links
		while (linksElement.children.length < 4) {
			liElement = document.createElement('li');
			liElement.style.opacity = '0';
			linksElement.appendChild(liElement);
		}

		element.refsiScroll.refresh();
		element.linksiScroll.refresh();

		refreshDataWindow = function () {
			[refsElement, linksElement].forEach(function (wrapper) {
				wrapper.children.forEach(function (liElement) {
					var obj;
					if (liElement.objectIndexSP) {
						obj = shoppingCartModel[liElement.objectIndexSP];
						if (obj && app.shoppingCart[obj.id]) {
							liElement.addClass('active');
						}
					}
				});
			})
		};

		refreshShoppingCart = function () {
			rebuildSelectedWindow();
			refreshDataWindow();
		};


		/******************choose doctor*******************************/
		var selectDoctor, createDoctorList, popup, selectBtn;
		//var addr;

		popup = element.getElementsByClassName('popupw')[0];

		selectBtn = element.getElementsByClassName('choose_button')[0];
		selectBtn.addEventListener("click", function () {

			selectDoctor();
		});

		selectDoctor = function (element) {
			popup.style.display = "block";
		}

		createDoctorList = function (element) {
			var that = this;

			try {
				//alert("aaa");
				ag.data.getCallContacts();
				this.localContact = ag.data.call_contacts;

				if (!localContact) {
					this.localContact = [];
				}
				//this.localContact = [];
			}
			catch (err) {
				console.log(err);
			}

			var listOfDoctors = element.getElementsByClassName('doctorInfo')[0];
			element.getElementsByClassName('popupModule')[0].addEventListener("click", function () {
				popup.style.display = "none";
			});
			element.getElementsByClassName('closeBtn')[0].addEventListener("click", function () {
				popup.style.display = "none";
			});

			this.localContact.forEach(function (item) {
				var li = util.createElement("li");
				var firstName = item.firstName;

				var eMailAddress = item.email;
				var cellPhoneNumber = item.cellPhone;
				var hospitalName = item.address;
				var specialty = item.specialty;
				var nameNode = document.createElement("div");
				nameNode.className = "doctorInfoTitle";
				nameNode.innerHTML = firstName;

				var infoNode = document.createElement("div");
				infoNode.className = "doctorInfoDiv";
				infoNode.innerHTML = hospitalName + "   &nbsp;&nbsp;&nbsp;" + specialty + "   &nbsp;&nbsp;&nbsp;" + cellPhoneNumber + "   &nbsp;&nbsp;&nbsp;" + eMailAddress;

				li.appendChild(nameNode);
				li.appendChild(infoNode);
				li.addEventListener("click", function () {

					element.querySelectorAll("input.doctor_name")[0].value = firstName;
					element.querySelectorAll("input.e-mail")[0].value = eMailAddress;
					element.querySelectorAll("input.telephone")[0].value = cellPhoneNumber;
					element.querySelectorAll("input.hospital")[0].value = hospitalName;
					element.querySelectorAll("input.department")[0].value = specialty;

					popup.style.display = "none";
				});
				listOfDoctors.appendChild(li);
			});
		};

		createDoctorList(element);

		/******************choose doctor end*******************************/

		sendMailBtn = element.getElementsByClassName('send-mail')[0];

		sendMailBtn.addEventListener(touchy.events.start, function (event) {
			var body, pdfs, links, key, obj;

			//address = element.querySelectorAll("input.e-mail")[0].value;

			doctorName = element.querySelectorAll("input.doctor_name")[0].value;
			eMail = element.querySelectorAll("input.e-mail")[0].value;
			telephoneNumber = element.querySelectorAll("input.telephone")[0].value;
			hospitalName = element.querySelectorAll("input.hospital")[0].value;
			departmentName = element.querySelectorAll("input.department")[0].value;

			delegateName = element.querySelectorAll("input.delegate_name")[0].value;
			delegateTelephone = element.querySelectorAll("input.delegate_phone")[0].value;

			localStorage.setItem('delegate_name', delegateName);
			localStorage.setItem('delegate_phone', delegateTelephone);
			title = "文献检索申请";
			touchy.stop(event);

			monitorResource("mail", null, false);

			pdfs = '';
			links = '';

			body = '<p>医学信息部同事：<br/>' +
					'你好!<br/><br/>' +
					'我收到医生所需信息如下：<br/><br/>' +
					'参考文献：<br/></p>';

			body = body + '<table style="font-family: Tahoma, sans-serif; font-size: 20px; color: black;">';

			for (key in app.shoppingCart) {
				obj = app.shoppingCart[key];
				switch (obj.type) {
					case 'pdf':
						//pdfs += '<tr><td><a style="color: black; text-decoration: none;" href="' + obj.link + '">' + obj.innerHTML + '</a></td></tr>';
						pdfs += '<tr><td>' + obj.innerHTML + '</td></tr>';
						break;
					case 'link':
						links += '<tr><td><a style="color: black; text-decoration: none;" href="' + obj.link + '">' + obj.innerHTML + '</a></td></tr>';
						break;
				}
			}

			body += pdfs;
			body += '</table>';
			body += '<br/>网站链接：<br/><br/>' + '<table style="font-family: Tahoma, sans-serif; font-size: 20px; color: black;">' + links;
			body += '</table><br/>';

			body += "<p>提交需求的医生相关信息如下：<br/>姓名：" + doctorName + "<br/>邮箱：" + eMail + "<br/>电话：" + telephoneNumber + "<br/>医院名称：" + hospitalName + "<br/>科室：" + departmentName + "<br/><br/>发件人姓名：" + delegateName + "<br/>发件人手机：" + delegateTelephone + "</p>";

			try {
				ag.sendMail(addr, title, body);
			}
			catch (e) {
				try {
					sendMail(addr, title, body);
				}
				catch (e) { }
			}
		});


	}

	app.slide.shopping_cart.onEnter = function (element) {
		var key;
		var selectBtn = element.getElementsByClassName('choose_button')[0];
		if (!element.isInited) {

			formContentByModel(element);
			element.isInited = true;

			element.querySelectorAll("input.delegate_name")[0].value = localStorage.getItem("delegate_name");
			element.querySelectorAll("input.delegate_phone")[0].value = localStorage.getItem("delegate_phone");
		}

		if (!this.isInited) {
			for (key in shoppingCartModel) {
				if (shoppingCartModel[key]["type"]) {
					monitorResource(shoppingCartModel[key]["type"], shoppingCartModel[key]["innerHTML"], false);
				}
			}
			this.isInited = true;
		}

		refreshShoppingCart();
	};
	app.slide.shopping_cart.onExit = function (element) {

	}

});
