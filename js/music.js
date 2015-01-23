//     music.js
//     (c) 2015-1-23 yalay
//     music.js may be freely distributed under the MIT license.

// 增加音乐播放和暂停按钮
function PlayMusic(){
	var audio = document.getElementById('my_audio');
	var playmusic = document.getElementById('img_play_music');
	var pausemusic = document.getElementById('img_pause_music');
	
	if (audio.paused)
	{
		audio.play();
		$(playmusic).removeClass("hide");
		$(pausemusic).addClass("hide");
	}
	else
	{
		audio.pause();
		$(playmusic).addClass("hide");
		$(pausemusic).removeClass("hide");
	}
}
