// A binary search tree is made up of nodes, so the first object we need to create is a Node object, which
// is similar to the Node object we used with linked lists.


function print(message){
    return console.log(message)
}

function Node(data,left, right){
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

// used to display a data stored in a node.
function show() {
    return this.data;
}

function BST() { // BST(){}
    this.root = null;  // BST{ root: null}

    this.insert = insert;  // BST{ root: null, insert: [Function: insert]}
    this.inOrder = inOrder; // BST{ root: null, insert: [Function: insert],  inOrder: [Function: inOrder]
}



// to add new nodes to the tree.
function insert(data) {
    // Create a node object passing in the data the node will store
    let n = new Node(data, null, null);
    if(this.root == null) {
       this.root = n;
    } else {
        let current = this.root;
        let parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if(current == null) {
                    parent.left = n;
                    break;
                }
            }
            else {
                current = current.right;
                if (current == null) {
                     parent.right = n;
                     break;
            }
        }
    } 
}
}

function inOrder(node) {
    if(!(node == null)) {
        inOrder(node.left);
        putString(node.show() + " ");
        inOrder(node.right);
    }
}

// In order traversal of a BST (Binary Search Tree)
let trees = new BST();
trees.insert(23);

print(trees)