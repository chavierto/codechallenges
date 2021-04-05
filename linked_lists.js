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

	remove(value) {
		// Check if value exists in list
		if (this.contains(value)) {
			// begin at start of the list (head)
			let current = this._head;
			let previous = this._head;
			while (current) {
				if (current.value === value) {
					if (this._head === current) {
						// if it's the head
						this._head = this._head.next;
						// reset the head
						this._length--;
						// update length
						return;
					}

					if (this._tail === current) {
						// if it's the tail
						this._tail = previous;
						// reset tail
					}

					previous.next = current.next;
					// unlink
					this._length--;
					// update length
					return;
				}
				previous = current;
				// look at the next node
				current = current.next;
			}
		}
	}

	contains(value) {
		let node = this._head;
		while (node) {
			if (node.value === value) {
				return true;
			}
			node = node.next;
		}
		return false;
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
console.log(AmazingRace.contains('Miami,FL'));
AmazingRace.remove('Caracas,Venezuela');
console.log(AmazingRace);
