function PracticumResolvit(txt) {
	function _parse() {
		const nlp = require('wink-nlp-utils');

		let res = {};
		let pos = 0;

		txt
			.toLowerCase()
			.split(' ')
			.forEach((v) => {
				let stem = nlp.string.stem(v).replace(/\W/g, '');
				let tmp = res[stem] || {
					word: stem,
					'total-ocurrences': 0,
					'sentence-index': []
				};

				tmp['total-ocurrences'] += 1;
				tmp['sentence-index'].push(pos);
				pos += v.length + 1;
				if(["a", "the", "and", "of", "in", "be", "also", "as"].indexOf(stem) === -1) res[stem] = tmp;
			});

		return res;
	}

	function _output() {
		return {
			results: Object.values(_parse())
		};
	}

	return {
		output: _output
	};
}

const util = require('util');
let myRes = new PracticumResolvit('Take this paragraph of text and return an alphabetized list of ALL unique words.  A unique word is any form of a word often communicated with essentially the same meaning. For example, fish and fishes could be defined as a unique word by using their stem fish. For each unique word found in this entire paragraph, determine the how many times the word appears in total. Also, provide an analysis of what unique sentence index position or positions the word is found. The following words should not be included in your analysis or result set: "a", "the", "and", "of", "in", "be", "also" and "as".  Your final result MUST be displayed in a readable console output in the same format as the JSON sample object shown below.');
console.log(util.inspect(myRes.output(), false, null));