/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
	// code goes here
	if (nums.length < 2) return nums;

	return merge(
		mergeSort(nums.slice(0, nums.length / 2)),
		mergeSort(nums.slice(nums.length / 2))
	);
};

const merge = (a, b) => {
	const array = [];

	while (a.length && b.length) {
		if (a[0] < b[0]) {
			array.push(a.shift());
		} else {
			array.push(b.shift());
		}
	}

	return array.concat(a, b);
};

// unit tests
// do not modify the below code
test('merge sort', function () {
	const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
	const ans = mergeSort(nums);
	expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
