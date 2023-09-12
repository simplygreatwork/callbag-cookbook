
import { greet, deliver, terminate } from './types.js'

export function skip(max) {
	
	return function(source) {
		return function(start, sink) {
			
			if (start !== greet) return
			let skipped = 0
			let talkback
			source(greet, (type, data) => {
				if (type === greet) {
					talkback = data
					sink(type, data)
				} else if (type === deliver) {
					if (skipped < max) {
						skipped++
						talkback(deliver)
					} else sink(type, data)
				} else {
					sink(type, data)
				}
			})
		}
	}
}
