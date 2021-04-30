// Assessment test for Hired.com

// return the number of primes included in the first n fibonacci numbers

// come up with fibo seq n long
function result(n){
	function fibo(n) {
		if (n <= 0) {
			return [];
		} else if (n == 1) {
			return [0];
		} else {
			let result = [0, 1];
			for (let i = 2; result.length < n; i++) {
				let temp = result[i - 1] + result[i - 2];
				result.push(temp);
			}
			return result;
		}
	}

	let set = fibo(n);
	console.log(set);
	// create function that tests each element in set is prime or not
}

result(19)