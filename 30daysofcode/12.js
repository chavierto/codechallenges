class Student extends Person {
	
	constructor(firstName, lastName, idNumber, scores) {
		super(firstName, lastName, idNumber);
		this.scores = scores;
	}

	calculate = function () {
		let average =
			this.scores.reduce(function (total, grade) {
				return total + grade;
			}, 0) / this.scores.length;

		if (average >= 90) {
			return 'O';
		} else if (average >= 80) {
			return 'E';
		} else if (average >= 70) {
			return 'A';
		} else if (average >= 55) {
			return 'P';
		} else if (average >= 40) {
			return 'D';
		} else {
			return 'T';
		}
	};
}
