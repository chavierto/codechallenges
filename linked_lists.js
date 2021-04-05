// Learning to implement linked lists from https://www.freecodecamp.org/news/a-gentle-introduction-to-data-structures-how-linked-lists-work-5adc793897dd/

class LinkedList {
	constructor() {
		this._head = null;
		this._tail = null;
		this._length = 0;
	}

	size() {
		return this._length;
	}

	add(value) {
		let node = new Node(value);
		// we create the node
		if (!this._head && !this._tail) {
			// if it's the first node, 1st node is head & tail
			this._head = node;
			this._tail = node;
		} else {
			this._tail.next = node;
			// add node to the back
			this._tail = this._tail.next;
			// reset tail to last node
		}
		this._length++;
	}
}

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

const AmazingRace = new LinkedList();
AmazingRace.add('Caracas,Venezuela');
console.log(AmazingRace);
AmazingRace.add('Miami,FL');
console.log(AmazingRace);
