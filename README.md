# detect-repo-test-files

[![Greenkeeper badge](https://badges.greenkeeper.io/IndigoUnited/node-detect-repo-test-files.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/detect-repo-test-files
[downloads-image]:http://img.shields.io/npm/dm/detect-repo-test-files.svg
[npm-image]:http://img.shields.io/npm/v/detect-repo-test-files.svg
[travis-url]:https://travis-ci.org/IndigoUnited/node-detect-repo-test-files
[travis-image]:http://img.shields.io/travis/IndigoUnited/node-detect-repo-test-files/master.svg
[coveralls-url]:https://coveralls.io/r/IndigoUnited/node-detect-repo-test-files
[coveralls-image]:https://img.shields.io/coveralls/IndigoUnited/node-detect-repo-test-files/master.svg
[david-dm-url]:https://david-dm.org/IndigoUnited/node-detect-repo-test-files
[david-dm-image]:https://img.shields.io/david/IndigoUnited/node-detect-repo-test-files.svg
[david-dm-dev-url]:https://david-dm.org/IndigoUnited/node-detect-repo-test-files?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/IndigoUnited/node-detect-repo-test-files.svg

Scans a repository directory, searching for a test files.

All files present in test folders will be returned, including non-javascript files. You may filter those files afterwards with `Array#filter`.


## Installation

`$ npm install detect-repo-test-files`


## Usage

`detectRepoTestFiles(dir) -> Promise`

```js
const detectRepoTestFiles = require('detect-repo-test-files');

detectRepoTestFiles('./some-repository-directory')
.then((files) => {
    console.log(`detected ${files.length} test file(s)`);
    console.log(files);
});
```


## Tests

`$ npm test`   
`$ npm test-cov` to get coverage report


## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
