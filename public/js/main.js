var techData = [
	{
		value: 256,
        color: '#048091',
        label: 'HTML5'
	},
	{
		value: 456,
        color: '#048091',
        label: 'CSS3'
	},
	{
		value: 288,
        color: '#048091',
        label: 'Javascript'
	},
	{
		value: 256,
        color: '#048091',
        label: 'Node.js'
	},
	{
		value: 256,
        color: '#048091',
        label: 'PHP'
	},
	{
		value: 256,
        color: '#048091',
        label: 'Mysql'
	},
];

var toolingData = [
	{
		value: 22,
        color: '#048091',
        label: 'Git'
	},
	{
		value: 25,
        color: '#048091',
        label: 'Gulp'
	},
	{
		value: 33,
        color: '#048091',
        label: 'Sass'
	},
	{
		value: 28,
        color: '#048091',
        label: 'Photoshop'
	}
];

var charJSPersonalDefaultOptionsDoughnut = { 
	inGraphDataShow: true,
    inGraphDataTmpl: '<%=v1%>',
    inGraphDataFontFamily: 'Open Sans',
    inGraphDataFontSize : 20,
    inGraphDataRadiusPosition: 2,
    inGraphDataFontColor: 'white',
    inGraphDataAlign : 'center',
    inGraphDataVAlign : 'to-center',
    startAngle: 0,
    percentageInnerCutout : 25
}

var options = {
	graphTitle: 'Things I\'m familiar with',  
}

var canvas = document.getElementById("tech"),
	ctx = canvas.getContext("2d");
fitToContainer(canvas);
var chart = new Chart(ctx).Doughnut(techData, {
	graphTitle: 'Things I\'m familiar with',  
});

var canvas = document.getElementById("tools"),
	ctx = canvas.getContext("2d");
fitToContainer(canvas);
var chart = new Chart(ctx).Doughnut(toolingData, {
	graphTitle: 'Tools I use',  
});

function fitToContainer(canvas){
  canvas.style.width='100%';
  canvas.style.height='100%';
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}