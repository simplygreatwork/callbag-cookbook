
import { greet, deliver, terminate } from './types.js'

export function header(fn) {
	
	return function(source) {
		return function(start, sink) {
			if (start !== greet) return
			let first = true
			source(greet, function(type, data) {
				if (type === deliver && first) {
					fn(data)
					first = false
				} else {
					sink(type, data)
				}
			})
		}
	}
}
