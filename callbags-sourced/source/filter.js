
import { greet, deliver, terminate } from './types.js'

export const filter = condition => source => (start, sink) => {
	
	if (start !== greet) return
	let talkback
	source(greet, (type, data) => {
		if (type === greet) {
			talkback = data
			sink(type, data)
		} else if (type === deliver) {
			if (condition(data)) sink(type, data)
			else talkback(deliver)
		}
		else sink(type, data)
	})
}
