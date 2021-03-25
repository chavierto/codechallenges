function main() {
	let arr = Array(6);
	let sums = [];
	let k = 0;

	for (let i = 0; i < 6; i++) {
		arr[i] = readLine()
			.split(' ')
			.map((arrTemp) => parseInt(arrTemp, 10));
	}
	// Define pattern for hourglasses
	// Define how to go over hourglass patterns to add items to array.
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			// Each hourglass pattern will be pushed to an array.
			// Reduce arrays to their sum.
			sums[k] =
				arr[i][j] +
				arr[i][j + 1] +
				arr[i][j + 2] +
				arr[i + 1][j + 1] +
				arr[i + 2][j] +
				arr[i + 2][j + 1] +
				arr[i + 2][j + 2];
			k++;
		}
	}
	// Highest sum in array is printed
	console.log(Math.max(...sums));
}
