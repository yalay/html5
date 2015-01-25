(function(){

var now = { row:1, col:1 }, last = { row:0, col:0};
const towards = { up:1, right:2, down:3, left:4};
var isAnimating = false;

s=window.innerHeight/500;
ss=250*(1-s);

$('.wrap').css('-webkit-transform','scale('+s+','+s+') translate(0px,-'+ss+'px)');

document.addEventListener('touchmove',function(event){
	event.preventDefault(); },false);
   
$(document).swipeUp(function(){
	return swipeUp();
})

function swipeUp(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	
	var willberow = last.row+1;
	var willbepage = ".page-"+willberow+"-"+1;
	if ($(willbepage).length == 0) return;
	
	now.row = last.row+1; 
	now.col = 1; 
	pageMove(towards.up);
}

$(document).swipeDown(function(){
	return swipeDown();
})

function swipeDown(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	
	if (last.row == 1) return;
	now.row = last.row-1; 
	now.col = 1; 
	pageMove(towards.down);	
}

$(document).swipeLeft(function(){
	return swipeLeft();
})

function swipeLeft(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	
	var willbecol = last.col+1;
	var willbepage = ".page-"+now.row+"-"+willbecol;
	if ($(willbepage).length == 0) return;
	
	now.row = last.row; 
	now.col = last.col+1; 
	pageMove(towards.left);
}

$(document).swipeRight(function(){
	return swipeRight();
})

function swipeRight(){
	if (isAnimating) return;
	last.row = now.row;
	last.col = now.col;
	
	var willbecol = last.col-1;
	var willbepage = ".page-"+last.row+"-"+willbecol;
	if ($(willbepage).length == 0) return;
	
	now.row = last.row; 
	now.col =last.col-1; 
	pageMove(towards.right);
}

function pageMove(tw){
	var lastPage = ".page-"+last.row+"-"+last.col,
		nowPage = ".page-"+now.row+"-"+now.col;
	
	switch(tw) {
		case towards.up:
			outClass = 'pt-page-moveToTop';
			inClass = 'pt-page-moveFromBottom';
			break;
		case towards.right:
			outClass = 'pt-page-moveToRight';
			inClass = 'pt-page-moveFromLeft';
			break;
		case towards.down:
			outClass = 'pt-page-moveToBottom';
			inClass = 'pt-page-moveFromTop';
			break;
		case towards.left:
			outClass = 'pt-page-moveToLeft';
			inClass = 'pt-page-moveFromRight';
			break;
	}
	isAnimating = true;
	$(nowPage).removeClass("hide");
	
	$(lastPage).addClass(outClass);
	$(nowPage).addClass(inClass);
	
	setTimeout(function(){
		$(lastPage).removeClass('page-current');
		$(lastPage).removeClass(outClass);
		$(lastPage).addClass("hide");
		$(lastPage).find("img").addClass("hide");
		
		$(nowPage).addClass('page-current');
		$(nowPage).removeClass(inClass);
		$(nowPage).find("img").removeClass("hide");
		
		isAnimating = false;
	},600);
	
	RefreshMusicImg();
}

// 键盘操作的方向和触摸屏拨动是反的
document.onkeydown = keyDown;
function keyDown(){
	switch (event.keyCode){
		case 37:
			swipeRight();			
			break;
			
		case 38:
			swipeDown();
			break;
		case 39:
			swipeLeft();
			break;
			
		case 40:
			swipeUp();
			break;
			
		default:
			break;	
	}	
}

})();
