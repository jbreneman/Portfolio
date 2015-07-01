function changeSvgViewport(ref, args) {
	args = args || '30 0 130 230';

	ref.setAttribute('viewBox', args);
}

var teapot = document.querySelector('.page-header__tea');
var viewport = window.innerWidth;

if(viewport >= 1200) {
	changeSvgViewport(teapot, '0 0 195 230');
} else if(viewport >= 800) {
	
}
