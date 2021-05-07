function sockMerchant(ar) {
	let socks = {};

	for (let i = 0; i < ar.length; i++) {
		let type = ar[i];
		socks[type] ? socks[type]++ : (socks[type] = 1);
	}

	let pairs = 0;
	function count(key) {
		pairs += Math.floor(socks[key] / 2);
	}
	Object.keys(socks).forEach(count);
	console.log(pairs);
	return pairs;
}

sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]);
