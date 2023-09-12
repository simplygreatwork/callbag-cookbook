
import { greet, deliver, terminate } from './types.js'

export const first = () => source => (start, sink) => {
	
	if (start !== greet) return
	let talkback
	let firsted = false
	source(greet, (type, data) => {
		if (type === greet) {
			talkback = data
			sink(type, data)
		} else if (type === deliver) {
			if (firsted) return
			firsted = true
			talkback(terminate)
			sink(type, data)
			sink(terminate)
			talkback(deliver)
		} else {
			sink(type, data)
		}
	})
}

// simplified from callbag-first
