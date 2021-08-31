// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem

function insertNodeAtPosition(llist, data, position) {
    const arr = new SinglyLinkedListNode(data)
    let current = llist

    for (let i = 0; i < position - 1; i++) {
        if (current.next) current = current.next
    }

    arr.next = current.next
    current.next = arr

    return llist
}

