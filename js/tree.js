// Directed acyclic graphs only to make trees

function main () {

}

function Tree () {

    var _graph = [];
    var _values = {};

    function addNode () {

    }

    function children () {

    }

}


function graphToVisualization (graph) {

}

function addNode (graph, node) {

}

function flatten (array) {
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
