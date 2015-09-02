// Directed acyclic graphs only to make trees

function main () {

}

function Tree () {

    var _graph = [];
    var _values = {};

    function addNeighbor (neighbor, key) {
        if (!key) {
            _graph.push(key);
            return this;
        }
        var node = findNode(key, _graph);
        if (node.length > 0) {
            node.push(key);
        } else {
            _graph.push(key);
        }

        return this;
    }

    function children () {

    }

    function findNode (key, graph) {
        if (graph.length > 0) {
            var guess = member(key, graph);
            if (guess.length > 0) {
                return guess;
            } else {
                return head(graph.filter(function (d) { return d instanceof Array; })
                    .map(function (d) { return node(key, d); }));
            }
        } else {
            return [];
        }
    }

    function keys () {
        return flatten(_graph);
    }

    this.addNeighbor = addNeighbor;
    this.keys = keys;

}


function graphToVisualization (graph) {

}


function flatten (array) {
    if (array instanceof Array) {
        return array.map(flatten).reduce(function (a, b) { return a.concat(b);});
    } else {
        return [array];
    }
}

function head (array) { return array[0] || []; }

function tail (array) { return array.slice(1) || []; }

function member (key, array) {
    if (array.length > 0) {
        if (head(array) === key) {
            return array;
        } else {
            return member(key, tail(array));
        }
    } else {
        return [];
    }
}
