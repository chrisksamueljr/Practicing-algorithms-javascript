// A Stack Implementation



// Define the Stack Constructor

function Stack() {
    // We will use an Array for this implementation
    this.dataStore = [];
    // this variable keeps track of the top of the stack and is set to 0 by default
    this.top = 0;
    //  We use this functio to push a new element onto a stack
    this.push = push;
    // This does the opposite of the push fucntion returning the elementin the top position of the stac and then decrements the top variable
    this.pop = pop;
    // this function return the top element of the stack by accessing the element at the top-1  
    this.peek= peek;
    // get the length of the stack 
    this.length = length;
    // Clear the stack 
    this.clear = clear;

}


function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top-1];
}   

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}


function print(message) {
    return console.log(message)
}

let stack = new Stack();
stack.push("David")
stack.push("Raymond")
stack.push("Bryan")
print("Stack Length: " + stack.length());
print(stack.peek()); // Bryan
let popped = stack.pop();
print("The popped element is:  " + popped);
print(stack.peek());
stack.push("Cynthia");
print(stack.peek());
stack.clear();
print("length: " + stack.length());
print(stack.peek());
stack.push("Clayton");
print(stack.peek()); // Peeking into an empty stack return a UNDEFINED since you can not see NOTHING.
