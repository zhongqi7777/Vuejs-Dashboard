// import instance from './instance';

const panzoom = require('panzoom');

// 初始化panzoom插件
function init(instance) {
	//console.log("function init(instance) {", instance);
	const mainContainer = instance.getContainer();
	const mainContainerWrap = mainContainer.parentNode;
	const pan = panzoom(mainContainer, {
		smoothScroll: false,
		bounds: true,
		autocenter: true,
		zoomDoubleClickSpeed: 1,
		minZoom: 0.5,
		maxZoom: 2,
		// beforeWheel: function(e) {
		// 	// allow wheel-zoom only if altKey is down. Otherwise - ignore
		// 	var shouldIgnore = !e.altKey;
		// 	return shouldIgnore;
		// }
	});
	instance.mainContainerWrap = mainContainerWrap;
	instance.pan = pan;

	//let style = window.getComputedStyle(mainContainer);

	// 缩放时设置jsPlumb的缩放比率
	pan.on('zoom', (e) => {
		const { scale } = e.getTransform();
		// console.log("scale", scale);
		instance.setZoom(scale);
	});

	pan.on('panend', function(e, x, y) {
		// let values = style.transform.split('(')[1].split(')')[0].split(',');
		// console.log('style.transform', style.transform); //matrix
		// console.log('水平移动距离', parseFloat(values[4]));
		// console.log('垂直移动距离', parseFloat(values[5]));
		// console.log('坐标', {
		// 	x: parseFloat(values[4]) * parseFloat(values[0]),
		// 	y: parseFloat(values[5]) * parseFloat(values[3])
		// });
		//console.log('Fired when pan ended', e, x, y);
		// const containerRect = instance.getContainer().getBoundingClientRect();
		// console.log("containerRect",containerRect);
		//console.log('坐标', { x: containerRect.left, y: containerRect.top });
		// console.log("containerRect pand", containerRect);
		// let jsplumbchart = document.getElementById("jsplumb-chart");
		// jsplumbchart.style.left = containerRect.left + "px";
		// jsplumbchart.style.top = containerRect.top + "px";
	});

	// 平移时设置鼠标样式
	mainContainerWrap.style.cursor = 'grab';
	mainContainerWrap.addEventListener('mousedown', function wrapMousedown() {
		this.style.cursor = 'grabbing';
		mainContainerWrap.addEventListener('mouseout', function wrapMouseout() {
			this.style.cursor = 'grab';
		});
	});
	mainContainerWrap.addEventListener('mouseup', function wrapMouseup() {
		this.style.cursor = 'grab';
	});

	return pan;
}
const panZoom = {
	init
};

/**
 * @description 获取缩放比率
 * @returns {number} 缩放比率
 */
const getScale = (instance) => {
	// let container = instance.getContainer();
	// let scale1;
	// if (instance.pan) {
	//   const { scale } = instance.pan.getTransform();
	//   scale1 = scale;
	// } else {
	//   const matrix = window.getComputedStyle(container).transform;
	//   scale1 = matrix.split(", ")[3] * 1;
	// }
	// instance.setZoom(scale1);
	// return scale1;

	let container = this.jsplumbInstance.getContainer();
	let scale1;
	if (this.jsplumbInstance.pan) {
		const { scale } = this.jsplumbInstance.pan.getTransform();
		scale1 = scale;
	} else {
		const matrix = window.getComputedStyle(container).transform;
		scale1 = matrix.split(', ')[3] * 1;
	}
	this.jsplumbInstance.setZoom(scale1);
	return scale1;
};

export default panZoom;

export { getScale };
