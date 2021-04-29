// Page 56, chapter 3
// Minimum
function min(a, b) {
	console.log(Math.min(a, b));
	return Math.min(a, b);
}

min(525, 3);

// Recursion

function isOdd(n) {
	if (n === 0) {
		console.log('even');
		return 'even';
	} else if (n === 1) {
		console.log('odd');
		return 'odd';
	} else {
		return isOdd(n - 2);
	}
}

isOdd(4456);

// Bean counting

function isOddTwo(n) {
	console.log(n % 2 === 0 ? 'even' : 'odd');
	return n % 2 === 0 ? 'even' : 'odd';
}

isOddTwo(343);

function countBs(text) {
	let count = 0;
	for (let i = 0; i < text.length; i++) {
		if (text[i] === 'B') {
			count++;
		}
	}
	console.log(count);
	return count;
}

countBs('BravoBb');

function countChar(text, x) {
	let count = 0;
	for (let i = 0; i < text.length; i++) {
		if (text[i] === x) {
			count++;
		}
	}
	console.log(count);
	return count;
}

countChar('hola hello chola', 'e');
