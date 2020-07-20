//  Queues is a FIrst in First Out FIFO Data Structure.
// Where the data is removed from the front and inserted at the END.
// Very similar to a line at the store waiting for the iPhone to be released.

// ['A'] // A arrives in the queue
// ['A','B'] // B arrives next
// ['A','B','C'] // Then C arrives 
// ['B','C'] // A is dequeue first
// ['C']  // B is dequeued next 


// Lets build our Constructor function

function Queue() {
    // We will use a javascript array 
    this.dataStore = [];
    // create a function to handle the adding items
    this.enqueue = enqueue;
    // create a function to handle removing items
    this.dequeue = dequeue;
    // create a functio to check the back of the queue
    this.back = back;
    // create a function to check the front of the queue
    this.front = front;
    // create a function to return  all the items to in the queue
    this.displayAll = displayAll;
    // create a function to check if the Queue is empty
    this.empty = empty;
}


function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    let length = this.dataStore.length
    return this.dataStore[length-1]
}

function displayAll() {
    let returnString = "";
    for(let i = 0; i< this.dataStore.length; ++i) {
        returnString += this.dataStore[i] + "\n";
    }
    return returnString
}

function empty() {
    let length = this.dataStore.length;
    if(length === 0) {
        return true;

    } else {
        return false;
    }


}

function print(message) {
    return console.log(message)
}

// test out Queue function
let q = new Queue();
q.enqueue("Alan Watts");
q.enqueue("Jordan Peterson");
q.enqueue("Carl Jung");
print(q)
print(q.displayAll())
print(q.dequeue())
print(q.dequeue())
print(q.dequeue())

