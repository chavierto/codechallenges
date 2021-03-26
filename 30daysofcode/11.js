function main() {
	let arr = Array(6);
	let sums = [];
	

	for (let i = 0; i < 6; i++) {
		arr[i] = readLine()
			.split(' ')
			.map((arrTemp) => parseInt(arrTemp, 10));
	}
	// Define pattern for hourglasses
	// Define how to go over hourglass patterns to add items to array.
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			// Each hourglass sum will be pushed to an array.
            
			sums.push(arr[i][j] +
				arr[i][j + 1] +
				arr[i][j + 2] +
				arr[i + 1][j + 1] +
				arr[i + 2][j] +
				arr[i + 2][j + 1] +
				arr[i + 2][j + 2]);
			
		}
	}
	// Highest sum in array is printed
	console.log(Math.max(...sums));
}
