
import { greet, deliver, terminate } from './types.js'

export const observe = fn => source => {
	
	source(greet, (type, data) => {
		if (type === deliver) {
			if (fn) fn(data) 
		}
	})
}
