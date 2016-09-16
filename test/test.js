'use strict';

const expect = require('chai').expect;
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const detectRepoTestFiles = require('../');
const touch = require('./util/touch');
const sort = require('./util/sort');

const tmpDir = `${__dirname}/tmp`;

beforeEach(() => mkdirp.sync(tmpDir));
afterEach(() => rimraf.sync(tmpDir));

it('should detect a variety of test files', () => {
    const testFiles = [
        // Normal test & spec dir
        `${tmpDir}/test/foo.js`,
        `${tmpDir}/test/foo.json`,
        `${tmpDir}/test/foo/foo.js`,
        `${tmpDir}/tests/foo.js`,
        `${tmpDir}/tests/foo.json`,
        `${tmpDir}/tests/foo/foo.js`,
        `${tmpDir}/spec/foo.js`,
        `${tmpDir}/spec/foo.json`,
        `${tmpDir}/spec/foo/foo.js`,
        `${tmpDir}/specs/foo.js`,
        `${tmpDir}/specs/foo.json`,
        `${tmpDir}/specs/foo/foo.js`,
        // Root test & spec dir
        `${tmpDir}/lib/controllers/test/foo.js`,
        `${tmpDir}/lib/controllers/test/foo/foo.js`,
        `${tmpDir}/lib/controllers/tests/foo.js`,
        `${tmpDir}/lib/controllers/tests/foo/foo.js`,
        `${tmpDir}/lib/controllers/spec/foo.js`,
        `${tmpDir}/lib/controllers/spec/foo/foo.js`,
        `${tmpDir}/lib/controllers/specs/foo.js`,
        `${tmpDir}/lib/controllers/specs/foo/foo.js`,
        // Root test & spec file
        `${tmpDir}/test.js`,
        `${tmpDir}/tests.js`,
        `${tmpDir}/spec.js`,
        `${tmpDir}/specs.js`,
        // React/Jest convention
        `${tmpDir}/component/foo/__tests__/foo.js`,
        `${tmpDir}/component/foo/__test__/foo.js`,
        `${tmpDir}/component/foo/__specs__/foo.js`,
        `${tmpDir}/component/foo/__spec__/foo.js`,
        `${tmpDir}/component/foo/_test_/foo.js`,
        `${tmpDir}/component/foo/_spec_/foo.js`,
        `${tmpDir}/component/foo/_tests_/foo.js`,
        `${tmpDir}/component/foo/_specs_/foo.js`,
        `${tmpDir}/__tests__/foo.js`,
        // Case insensitive
        `${tmpDir}/TeSt/foo.js`,
        `${tmpDir}/lib/controllers/TeSt/foo.js`,
        `${tmpDir}/TeSt.js`,
        `${tmpDir}/component/foo/__TeStS__/foo.js`,
    ];

    const nonTestFiles = [
        `${tmpDir}/node_modules/test/foo.js`,
        `${tmpDir}/node_modules/test.js`,
        `${tmpDir}/component/foo/test__/foo.js`,
        `${tmpDir}/component/foo/__test/foo.js`,
        `${tmpDir}/component/foo/test_/foo.js`,
        `${tmpDir}/component/foo/_test/foo.js`,
    ];

    return Promise.all(testFiles.concat(nonTestFiles).map(touch))
    .then(() => detectRepoTestFiles(tmpDir))
    .then((detectedFiles) => expect(sort(detectedFiles)).to.eql(sort(testFiles)));
});