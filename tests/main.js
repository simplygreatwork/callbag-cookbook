
import { test_suite_new, test_suite_run } from 'test-suite'

let suite = test_suite_new()
let { it } = suite

it('one', function() {
	return true
})

it('two', function() {
	return false
})

it('three', function() {
	return true
})

let result = test_suite_run(suite)
if (result) console.log(`All tests passed.`)
else console.log(`Some tests failed.`)
