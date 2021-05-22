class Calculator {
	constructor(n, p) {
		this.n = n;
		this.p = p;
	}

	power(n, p) {
		return p < 0 || n < 0 ? 'n and p should be non-negative' : n ** p;
	}
}
