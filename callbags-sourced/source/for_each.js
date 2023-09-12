
import { greet, deliver, terminate } from './types.js'

export const for_each = operation => source => {
	
	let talkback
	source(greet, (type, data) => {
		if (type === greet) talkback = data
		if (type === deliver) operation(data)
		if (type === greet || type === deliver) talkback(deliver)
	})
}
