/* eslint-env mocha */

import must = require("../../lib/index");

import failingPromiseTests = require('./_failing_promise_tests');
import assert = require('must/test/must/assert');

describe('Must.prototype.promise', function () {
  failingPromiseTests(function (must) {
    must.promise();
  });

  it('must pass given an object with a catch and a then function', function () {
    assert.pass(function () {
      must(failingPromiseTests.catchAndThen).be.promise();
    })
  });

  it('let a resolved promise pass', function () {
    assert.pass(function () {
      must(Promise.resolve(42)).be.promise();
    });
  });

  it('let a rejected promise pass', function () {
    assert.pass(function () {
      must(Promise.reject(new Error())).be.promise();
    });
  });
});
