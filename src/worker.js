
import x from './x.js'

console.log('Worker loaded.')

onmessage = m => {
	console.log('Worker received message', x(m))
}
