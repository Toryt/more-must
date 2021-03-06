/* eslint-env mocha */

const Must = require('must')
require('../../lib/index')
const failingPromiseTests = require('./_failing_promise_tests')
const assert = require('must/test/must/assert')
const stringify = require('must/lib/index').stringify

const promiseOutcome = 42

describe('Must.prototype.betray', function () {
  failingPromiseTests(function (must) {
    must.betray()
  })

  it('must pass given a Promise that rejects, and eventually pass, and reject itself', function (done) {
    const rejection = new Error()
    assert.pass(function () {
      Must(Promise.reject(rejection))
        .betray()
        .then(assertStrictEqual(done, undefined), raise(done))
    })
  })

  it('must pass given a Promise that resolves, and eventually fail', function (done) {
    assert.pass(function () {
      Must(Promise.resolve(42))
        .betray()
        .then(raise(done), assertThrown(done))
    })
  })

  it(
    'must pass given a Promise that rejects and a catchCondition that returns, ' +
      'and eventually pass, and resolve to the result of the catchCondition',
    function (done) {
      let called = false
      assert.pass(function () {
        Must(Promise.reject(promiseOutcome))
          .betray(function (result) {
            called = true
            result.must.be.a.number()
            result.must.be.truthy()
            return result // the resulting promise will be fulfilled
          })
          .then(
            assertStrictEqual(done, promiseOutcome, function () {
              return called
            }),
            raise(done)
          )
      })
    }
  )

  it(
    'must pass given a Promise that rejects and a catchCondition that throws, ' +
      'and eventually pass, and reject to the rejection of the catchCondition',
    function (done) {
      let called = false
      assert.pass(function () {
        Must(Promise.reject(promiseOutcome))
          .betray(function (err) {
            called = true
            err.must.be.a.number()
            err.must.be.truthy()
            throw err // the resulting promise will be rejected
          })
          .then(
            raise(done),
            assertStrictEqual(done, promiseOutcome, function () {
              return called
            })
          )
      })
    }
  )

  it('must pass given a Promise that rejects and a catchCondition that fails, and eventually fail', function (done) {
    let called = false
    assert.pass(function () {
      Must(Promise.reject(promiseOutcome))
        .betray(function (result) {
          called = true
          result.must.not.be.a.number() // fails
          result.must.be.truthy()
          return result
        })
        .then(
          raise(done),
          assertThrown(done, function () {
            return called
          })
        )
    })
  })

  it('must pass given a Promise that resolves, and eventually fail, without calling the catchCondition', function (done) {
    let called = false
    assert.pass(function () {
      Must(Promise.resolve(promiseOutcome))
        .betray(function () {
          // betray fails, callback is not executed
          called = true
        })
        .then(
          raise(done),
          assertThrown(done, function () {
            return !called
          })
        )
    })
  })

  it('AssertionError must have all properties when it fails because of a resolution', function (done) {
    const rejection = 42
    const subject = Promise.resolve(rejection)
    Must(subject)
      .betray()
      .then(raise(done), function (err) {
        try {
          assert(err instanceof Must.AssertionError)
          assert.deepEqual(err, {
            actual: subject,
            message: stringify(subject) + " must reject, but got fulfilled with '" + stringify(rejection) + "'"
          })
          done()
        } catch (assertErr) {
          done(assertErr)
        }
      })
  })
})

function assertStrictEqual (done, expected, called) {
  return function (value) {
    if (called) {
      assert(called())
    }
    assert.strictEqual(value, expected)
    done()
  }
}
function assertThrown (done, called) {
  return function (err) {
    if (called) {
      assert(called())
    }
    if (err instanceof Must.AssertionError) {
      done()
    } else {
      done(new Error('not a Must.AssertionError: ' + err.message))
    }
  }
}
function raise (done) {
  return function () {
    done(new Error('Must fail'))
  }
}
