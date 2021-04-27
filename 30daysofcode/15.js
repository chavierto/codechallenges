this.insert = function (head, data) {
	//complete this method
	let node = new Node(data);

	if (!head) {
		head = node;
		tail = node;
	} else {
		tail.next = node;
		tail = tail.next;
	}

	return head;
};
