function setHeight() {

return Math.floor(Math.random() * 100);
}


function randomVal(){
	return Math.floor(Math.random() * 256);
}





function resizeBars (){
	const BARS = document.querySelectorAll('.bars');


	BARS.forEach(bar => {
		bar.style.height = `${setHeight()}%`;
		//bar.style.background = `rgb(${randomVal()},${randomVal()},${randomVal()})`;
	})
};

setInterval(resizeBars, 2500)

