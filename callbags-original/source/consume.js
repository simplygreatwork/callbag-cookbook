
import { greet, deliver, terminate } from './types.js'
const bust_cache_type = 11

let bust_cache = false

export function consume(source) {
	
	if (source) {
		process(source)
	} else {
		return function(source) {
			process(source)
		}
	}
}

function process(source) {
	
	let talkback
	source(greet, function(type, data) {
		if (type === greet) {
			talkback = data
			talkback(deliver)
			if (bust_cache === true) talkback(bust_cache_type)
		} else if (type === deliver) {
			talkback(deliver)
		} else if (type === terminate) {
			talkback(terminate)
		}
	})
}
