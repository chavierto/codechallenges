function countConsecutiveOnes(n) {
	// convert number to binary and store in num variable
	let num = n.toString(2);
	let count = 0;
	let final = []; // loop through each digit to see if there are consecutive 1's. If num[i] is 1, count++, if not, push count into final array to keep track of current batch of 1's, reset count to 0
	for (let i = 0; i < num.length; i++) {
		// Use == instead of === since num[i] is a string and not a number
		if (num[i] == 1) {
			count++;
		} else {
			final.push(count);
			count = 0;
		}
	} // push count into final once more in case number ends in 1
	final.push(count); // go through final and print largest number in array
	console.log(Math.max.apply({}, final));
}
