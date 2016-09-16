'use strict';

function sort(arr) {
    return arr.sort((a, b) => a.localeCompare(b));
}

module.exports = sort;
