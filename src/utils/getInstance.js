// import plumbGather from "jsplumb";

export default function(options) {
	// let instance = plumbGather.jsPlumb.getInstance({
	//   Container: r
	// });

	let instance = options.jsPlumb.getInstance({
		Container: options.container
	});

	// let instance = options.jsPlumb.getInstance({});
	// instance.setContainer(options.container);

	// instance.bind('mousemove', function(c) {
	// 	console.log('instance.bind("mousemove", function(c) {', c);
	// });


	instance.bind('mouseover', function(c) {
		//console.log('instance.bind("mouseover", function(c) {', c.type);
		options.modifyOverConnectStatus(true);
	});

	instance.bind('mouseout', function(c) {
		options.modifyOverConnectStatus(false);
	});

	instance.bind('click', function(c) {
		// instance.deleteConnection(c); //instance
		options.delConnections(c, () => {
			options.modifyOverConnectStatus(false);
			instance.deleteConnection(c); //instance
			//instance.detach(c);
		});

		c.preventDefault();
	});

	instance.bind('connection', function(c) {
		//c.connection.canvas.classList.add('jtk-connector-path');
		options.modifyOverConnectStatus(false);
		options.completedConnect();
	});

	// 连接线删除时触发
	//instance.bind("connectionDetached", function(c) {});

	return instance;
}
