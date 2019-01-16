document.addEventListener('presentationInit', function () {
	var slide = app.slide.scenario_popup = {
		onEnter: function (ele) {
			var sectionList = '';
			//for (obj in app.json.structures) {
			//if (app.json.structures[obj].custom === 'scenario') {
			//ele.querySelectorAll("#scenarioSelection")[0].innerHTML += '<li id="' + app.json.structures[obj].id + '">' + app.json.structures[obj].name + '</li>';
			//}
			//}
			sectionList = ele.querySelectorAll("#scenarioSelection li");
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
			topmenu.currentPerson = parseInt(ele.id.replace('personcoll', ''));
			if (topmenu.currentPerson != topmenu.lastPerson) {
				topmenu.lastPerson = topmenu.currentPerson;
				app.loader.show(2000);
				app.load(ele.id);
			}
			utils.fastGoTo(ele.id, 'person' + (topmenu.currentPerson) + '_patient_portrait', 'person' + (topmenu.currentPerson) + '_patient_portrait');
		}
	};
});