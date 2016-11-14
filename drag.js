//create by xing at 2016/11/07
//function: drag the modal to move

//drag function, 'bar' is the mouse focus element, 'target' is the dragged element. 
function setDrag(bar, target){
	bar.onmousedown = function (event){
		event = event || window.event;  
		var disX = event.clientX - target.offsetLeft,
			disY = event.clientY - target.offsetTop;
		document.onmousemove = function(event){
			event = event || window.event;
			fnMove(bar, target, event, disX, disY);
		}
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;
		};
	};
};

//move function
function fnMove(bar, target, event, posX, posY){
	var l = event.clientX - posX,
		t = event.clientY - posY,
		winH = document.documentElement.clientHeight || document.body.clientHeight,
		winW = document.documentElement.clientWidth || document.body.clientWidth,
		maxW = winW - target.offsetWidth - 20;
		maxH = winH - target.offsetHeight;
	if(l<5){
		l = 5;
	}else if(l > maxW){
		l = maxW;
	}else{};
	if(t<5){
		t = 5;
	}else if(t > maxH){
		t = maxH;
	}else{};
	target.style.left = l + 'px';
	target.style.top = t + 'px';
};
