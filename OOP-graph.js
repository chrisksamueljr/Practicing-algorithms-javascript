// A Graph Implementation


function print(message) {
    return console.log(message)
}


function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (let i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdges = addEdges;
    this.showGraph = showGraph;
}


function addEdges(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}


function showGraph() {

    for (var i = 0; i < this.vertices; ++i) {
        vertex = []

        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                vertex.push(this.adj[i][j]);
                // print();
            }
            // print(this.adj[i][j]); push these values into an array and print them INLINE

        }
        if (typeof (vertex[2]) === 'number') {
            print(i + " -> " + vertex[1] + " " + vertex[2]);
        } else {
            print(i + " -> " + vertex[1])
        }
    }
}

function load(file) {
    return console.log(file + ' loaded!');
}

load('OOP-Graph.js');
graph = new Graph(5);

// Graph {
//     veritces: undefined,
//     edges: 0,
//     adj: [],
//     addEdges: [Function: addEdges],
//     showGraph: [Function: showGraph]
//   }

graph.addEdges(0, 1);
graph.addEdges(0, 2);
graph.addEdges(1, 3);
graph.addEdges(2, 4);


graph.showGraph();

        // 0 -> 1 2
        // 1 -> 0 3
        // 2 -> 0 4
        // 3 -> 1
        // 4 -> 2
    