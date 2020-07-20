
function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function DoubleLinkedList() {
    // Head is defined by defining the Node here
    this.head = new Node('head');
    // add a property to find a node
    this.find = find;
    // add a property to display a node
    this.insert = insert;
    // a property to remove a node
    this.display = display;
    // function to find the last node without passing it
    this.findLast = findLast;
    // create a function to remove a Node
    this.remove = remove;
    // create a function that displays the linked list in reverse
    this.displayReversed = displayReversed

}


function displayReversed() {
    //  let the currentNode be the head of the Double linked list
    let currentNode = this.head
    //  
    currentNode = this.findLast();
    //  while the previous node is Not null print the element of the current Node
    while (!(currentNode.previous == null)) {
        print(currentNode.element)
        currentNode = currentNode.previous
    }
}


function print(message) {
    return console.log(message)
}

function findLast() {
    let currentNode = this.head;
    while (!(currentNode.next == null)) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

fucntion remove(item) {
    let currentNode = this.find(item);
    if (!(currentNode.next == null)) {
        currentNode.previous.next = currentNode.next;
        currentNode..next.previous = currentNode.previous;
        currentNode.next = null;
        currentNode.previous = null;
    }

}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        print(currNode.next.element);
        currNode = currNode.next;
    }
}
function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}
function insert(newElement, item) {

    var newNode = new Node(newElement); var current = this.find(item); newNode.next = current.next; newNode.previous = current; current.next = newNode;
}


let cities = new LList();
 cities.insert("Conway", "head"); 
 cities.insert("Russellville", "Conway"); 
 cities.insert("Carlisle", "Russellville"); 
 cities.insert("Alma", "Carlisle");
 cities.display();
    print(); 
cities.remove("Carlisle");
 cities.display();