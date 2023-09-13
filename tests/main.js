
import { test_suite_new, test_suite_run } from 'test-suite'

let suite = test_suite_new()
let { it } = suite

it('first', function() {
	return true
})

it('second', function() {
	return true
})

it('third', function() {
	return true
})

test_suite_run(suite, function(result) {
	if (result) console.log(`All tests passed.`)
	else console.log(`Some tests failed.`)
})
