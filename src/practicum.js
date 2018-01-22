function PracticumResolvit(txt) {
	// private methods
	function _parse(filter) {
		const nlp = require('wink-nlp-utils');

		let res = {};
		let pos = 0; // to keep the position inside the foreach

		txt
			.toLowerCase() // is not case sensitive so, all to lowercase
			.split(' ') // we need all the words to work, is easy with arrays
			.forEach((v) => { // we are going to iterate the words
				let stem = nlp.string.stem(v).replace(/\W/g, ''); // remove punctuation with a simple regex
				let tmp = res[stem] || { // if already exist the stem ok, of not, we create the 'temporary stem object'
					word: stem,  // we use a npl library in order to have the stem of the word
					'total-ocurrences': 0,
					'sentence-indexes': []
				};

				tmp['total-ocurrences'] += 1; // we defaulted to zero, so we increase always the ocurrences
				tmp['sentence-indexes'].push(pos);
				pos += v.length + 1; // we now can update the position using the length of the value plus 1 (for the space we removed splitting before)
				if(filter.indexOf(stem) === -1) res[stem] = tmp; // we filter some words (or not)
			});

		return res;
	}

	function _output(filter = []) { // if no filter, defaults to []
		return { // this method only shows the result in a proper way
			results: Object.values(_parse(filter))
		};
	}

	// public methods
	return {
		output: _output
	};
}

module.exports = PracticumResolvit;