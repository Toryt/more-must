/* eslint-env mocha */

const Must = require('must')
require('../../lib/index')
const failingPromiseTests = require('./_failing_promise_tests')
const assert = require('must/test/must/assert')

describe('Must.prototype.promise', function () {
  failingPromiseTests(function (must) {
    must.promise()
  })

  it('must pass given an object with a catch and a then function', function () {
    assert.pass(function () {
      Must(failingPromiseTests.catchAndThen).be.promise()
    })
  })

  it('must pass given a Promise implementation, with a resolved promise', function () {
    assert.pass(function () {
      Must(Promise.resolve(42)).be.promise()
    })
  })

  it('must pass given a Promise implementation, with a rejected promise (and passes it through)', function (done) {
    const p = Promise.reject(new Error())
    assert.pass(function () {
      Must(p).be.promise()
    })
    p.catch(function () {
      done()
    }) // deal with UnhandledPromiseRejectionWarning
  })

  it('passes through a resolved promise', function () {
    const p = Promise.resolve(42)
    assert(Must(p).be.promise() === p)
  })

  it('passes through a rejected promise', function (done) {
    const rejection = new Error()
    const p = Promise.reject(rejection)
    const outcome = Must(p).be.promise()
    assert(outcome === p)
    p.catch(function (err) {
      // deal with UnhandledPromiseRejectionWarning
      assert(err === rejection)
      done()
    })
  })
})
