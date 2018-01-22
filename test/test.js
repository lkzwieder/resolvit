const Practicum = require('../src/practicum');
const assert = require('assert');

describe('Result Object Structure', () => {
	let res = Practicum('this is a text').output();

	describe('Result', () => {
		it('the result must be an object', () => {
			assert.equal(Object.prototype.toString.call(res), '[object Object]');
		});
	});

	describe('Results property', () => {
		it('results must be an array', () => {
			assert.equal(Object.prototype.toString.call(res.results), '[object Array]');
		});
	});

	describe('Each item must have properties', () => {
		it('must have a "word" property', () => {
			assert.equal(!!res.results[0].word, true);
		});
		it('"word" must be an string', () => {
			assert.equal(Object.prototype.toString.call(res.results[0].word), '[object String]');
		});
		it('must have a "total-ocurrences" property', () => {
			assert.equal(!!res.results[0]["total-ocurrences"], true);
		});
		it('"total-ocurrences" must be a number', () => {
			assert.equal(Object.prototype.toString.call(res.results[0]['total-ocurrences']), '[object Number]');
		});
		it('must have a "sentence-indexes" property', () => {
			assert.equal(!!res.results[0]["sentence-indexes"], true);
		});
		it('"sentence-indexes" must be an array', () => {
			assert.equal(Object.prototype.toString.call(res.results[0]['sentence-indexes']), '[object Array]');
		})
	});
});