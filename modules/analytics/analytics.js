(function () {
	'use strict';
	var trackTimeout,
		pName = 'ACS';

	function onEnter(event) {
		var slideElement = event.target,
			slideId, slideJSON, data, params = {};
		if (!slideElement.hasAttribute('data-ignore-tracking')) {
			slideId = slideElement.id;
			slideJSON = app.json.slides[slideId];

			if (slideJSON) {
				data = slideJSON.monitoring;
				if (data && app.json.structures[app.collection.id]) {
					save(getParams(slideId));
				} else {
					console.log('-----Slide: ' + slideId + ' doesn\'t has monitoring field!');
				}
			} else {
				console.log('-----Slide: ' + slideId + ' doesn\'t present in structure!');
			}
		}
	}

	function getParams(slideId) {
		var slideJSON = app.json.slides[slideId],
			data = slideJSON.monitoring,
			params = {};

		//params.name = data.name || slideJSON.name;
		//params.id = params.name.replace(/ /g, '_');
		//params.subChapter = data.subchapter || app.slideshow.id;
		//params.subChapterId = params.subChapter.replace(/ /g, '_');
		//params.chapter = data.chapter || pName;
		//params.chapterId = params.chapter.replace(/ /g, '_');
		try {
			//params.name = data.name || slideJSON.name;
			//params.id = data.id || slideJSON.id || slideId;
			//params.subChapter = data.subchapter || app.json.structures[app.slideshow.id].name || "";
			//params.subChapterId = data.subchapterid || app.slideshow.id;
			//params.chapter = data.chapter || app.json.structures[app.collection.id].name || "";
			//params.chapterId = data.chapterid || app.collection.id;
			//params.path = app.collection.id + '/' + app.slideshow.id + '/' + slideId;
			params.name = data.name || slideJSON.name;
			params.id = data.id || slideJSON.id || slideId;
			params.subChapter = data.subchapter || "";
			params.subChapterId = data.subchapterid || "";
			params.chapter = data.chapter || app.json.structures[app.collection.id].name || "";
			params.chapterId = data.chapterid || app.collection.id;
			params.path = app.collection.id + '/' + app.slideshow.id + '/' + slideId;
		} catch (e) {
			params = {};
			console.log(e);
		}
		return params;
	}

	function save(params) {
		if (topmenu) topmenu.hide();
		if (params != {}) {
			clearTimeout(trackTimeout);
			trackTimeout = setTimeout(function () {
				log(params);
				ag.submit.slide(params);
			}, 200);
		}
	}

	function log(params) {
		console.log("id:" + params.id + ", name:" + params.name +
			"\nchapterId:" + params.chapterId + ", chapter:" + params.chapter +
			"\nsubChapterId:" + params.subChapterId + ", subChapter:" + params.subChapter +
			"\npath:" + params.path);
		//console.log(app.collection);
		//console.log(app.slideshow);
		console.log("************************************************");
	}

	document.addEventListener('slideEnter', onEnter);
	document.addEventListener('slidePopupEnter', onEnter);

	document.addEventListener('presentationInit', function () {
		app.analytics = {
			getParams: getParams,
			save: save
		}
	});
})();