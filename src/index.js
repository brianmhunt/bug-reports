console.log('index.js')
const w = new Worker('worker.js')
w.postMessage('Hello.')