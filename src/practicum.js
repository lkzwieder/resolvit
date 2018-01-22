function PracticumResolvit(txt) {
	function _parse(filter) {
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
					'sentence-indexes': []
				};

				tmp['total-ocurrences'] += 1;
				tmp['sentence-indexes'].push(pos);
				pos += v.length + 1;
				if(filter.indexOf(stem) === -1) res[stem] = tmp;
			});

		return res;
	}

	function _output(filter = []) {
		return {
			results: Object.values(_parse(filter))
		};
	}

	return {
		output: _output
	};
}

module.exports = PracticumResolvit;