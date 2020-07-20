// The Node Class

// [HEADER] -> [COFFEE] -> [RAMEN] -> [BEER] -> [CHEESE] -> [COOKIES] -> [NULL]
function Node(element) {
    this.element = element;
    this.next = null
}

//  To Create Nodes we use a constructor function to set values for the 2 properties
function LinkedList() {
    this.head = new Node("head");
    // a property to find a node
    this.find = find;
    // a property to insert a node
    this.insert = insert;
    // A property to delete/remove a node; 
    this.remove = remove;
    // We will need to find the node before the node we want to remove so we can link them together
    this.findPrevious = findPrevious
    // a property to display a node
    this.display = display;
}

// Inserting New Nodes
//  The first function we'll examine is the insert function
// to do this we will specify which node you want to insert 
//  you will also specify BEFORE or AFTER a current NODE in the Linked List


// Helper Function : find(item) where item is what we want to FIND
function find(item) {
    // this function searches through the Linked List  looking for 
    // specified data.
    // when the data is found it RETURNS the node storing the data.

    let current_node = this.head;
    while (current_node.element != item) {
        current_node = current_node.next;
    }
    return current_node;
}

/**
 * The FIND function demonstrates an approach we can use to move through a
 * LINKED LIST
 * returns the node STORING The data OR NULL
 */


//  Insert() function
function insert(newElement, item) {
    let new_node = new Node(newElement);
    let current = this.find(item) // we will call our newly defined function
    new_node.next = current.next;
    current.next = new_node;
}

// [HEADER] -> [COFFEE] -> [RAMEN] -> [BEER] -> [CHEESE] -> [COOKIES] -> [NULL]

function display() {
    let current_node = this.head;
    while (!(current_node.next == null)) {
        print(current_node.next.element);
        current_node = current_node.next;
    }
}

// In order to remove() the node from a list we need to find the node BEFORE the node we 
//  want to remove....
function findPrevious(item) {
    current_node = this.head;
    while (!(current_node.next == null) &&
        (current_node.next.element != item)) {
            current_node = current_node.next;
    }
    return current_node;
}

function remove(item) {
    let previous_node = this.findPrevious(item); 
    if (!(previous_node.next == null)) {
        previous_node.next = previous_node.next.next; 
    }
}

// previous_node.next = previous_node.next.next; 
// This just means make the previous_node.next and the node after that one
// become linked together


// [HEADER] -> [COFFEE] -> [RAMEN] -> [BEER] -> [CHEESE] -> [COOKIES] -> [NULL]
function print(message) {
    return console.log(message)
}


// Main Program

let cities = new LinkedList();
cities.insert("HEADER", "head")
cities.insert("COFFEE", "HEADER");
cities.insert("RAMEN", "COFFEE");
cities.insert("BEER", "RAMEN");
cities.display() // HEADER COFFEE  RAMEN BEER
print(' ') // Space
cities.remove("RAMEN") // removed RAMEN
cities.display() // HEADER COFFEE BEER

// print(cities)
// LinkedList {
//   head: Node { element: 'head', next: null },
//   find: [Function: find],
//   insert: [Function: insert],
//   display: [Function: display]
// }



