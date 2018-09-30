'use strict';

const globby = require('globby');
const path = require('path');

function detectRepoTestFiles(dir) {
    const globbyOptions = {
        cwd: dir,
        // Ignore node_modules
        ignore: ['node_modules/**'],
        // Only return files
        onlyFiles: true,
        // Case insensitive
        nocase: true,
        // Ignore symlinks to avoid loops
        followSymlinkedDirectories: false,
    };

    return globby([
        // Conventional test dirs (including deep)
        '**/{test,spec}?(s)/**/*',
        // Suffix-style test files (foo-test.*, foo.test.*, foo_test.*)
        '**/*[._-]{test,spec}?(s).*',
        // Conventional root test files
        '**/{test,spec}?(s).*',
        // React/Jest style test files
        '**/_?(_){test,spec}?(s)?(_)_/**/*',
    ], globbyOptions)
    .then((files) => files.map((file) => path.join(dir, file)));
}

module.exports = detectRepoTestFiles;
