/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

const getDigit = (number, place) => {
	const digit = number.toString();

	if (place >= digit.length) return 0;

	return parseInt(digit[digit.length - place - 1]);
};

const getlongestNumber = (array) => {
	let longest = 0;

	for (let i = 0; i < array.length; i++) {
		const length = array[i].toString().length;
		if (length > longest) {
			longest = length;
		}
	}

	return longest;
};

function radixSort(array) {
	// code goes here
	const longestNumber = getlongestNumber(array);

	const bucket = new Array(10).fill().map(() => []);

	for (let i = 0; i < longestNumber; i++) {
		while (array.length) {
			const current = array.shift();
			const digit = getDigit(current, i);
			bucket[digit].push(current);
		}

		for (let j = 0; j < bucket.length; j++) {
			while (bucket[j].length) {
				array.push(bucket[j].shift());
			}
		}
	}

	return array;
}

// unit tests
// do not modify the below code
describe('radix sort', function () {
	it('should sort correctly', () => {
		const nums = [
			20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
			3000, 3001, 1200, 633
		];
		const ans = radixSort(nums);
		expect(ans).toEqual([
			1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
			1200, 1244, 3000, 3001
		]);
	});
	it('should sort 99 random numbers correctly', () => {
		const fill = 99;
		const nums = new Array(fill)
			.fill()
			.map(() => Math.floor(Math.random() * 500000));
		const ans = radixSort(nums);
		expect(ans).toEqual(nums.sort());
	});
});
