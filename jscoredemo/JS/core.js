const str = 'hello world!!!';

function receiveNativeMessage(msg) {
    console.log('jscore收到消息:', msg);
}

bridge.sendMessage('我是来自jscore的消息');
