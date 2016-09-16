'use strict';

const pify = require('pify');
const path = require('path');
const mkdirp = pify(require('mkdirp'));
const writeFile = pify(require('fs').writeFile);

function touch(file) {
    const dir = path.dirname(file);

    return mkdirp(dir)
    .then(() => writeFile(file, ''));
}

module.exports = touch;
