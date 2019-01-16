document.addEventListener('presentationInit', function() {
			var timeoutId = [];
			var video;
			var slide = app.slide.short_video = {
				onEnter : function(ele) {
					video = document.getElementById('video');
					if(video.readyState == 0){//第一次进入
						video.load();
					}
					$("#video").bind('loadedmetadata', function () {
						//进入全屏模式播放
						video.webkitEnterFullscreen();
						setTimeout(function(){
							video.play();
						}, 500);
		            });
		            
		            if(video.webkitSupportsFullscreen && video.webkitDisplayingFullscreen == false){
						setTimeout(function(){
							video.webkitEnterFullscreen();
							setTimeout(function(){
								video.play();
							}, 500);
						}, 100);
		            }
				},
				onExit : function() {
					setTimeout(function(){
						video.pause();
						video.currentTime = 0;
					}, 100)
				}
			};
		});