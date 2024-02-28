console.log('hello world');
this.addEventListener('message', (e) => {
	console.log('jscore收到消息:', e.data);
});

setTimeout(() => {
	this.postMessage('我是来自jscore的消息');
}, 3000);