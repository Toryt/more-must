import Must = require("must");

import {stringify} from "must/lib/index";

const isPromiseMsg = "be a promise (i.e., have a 'then' and a 'catch' function)";

function isPromise (p: Promise<any>) {
  return p && typeof p.then === 'function' && typeof p.catch === 'function';
}

interface Must<Actual> { // MUDO
  actual: Actual,
  assert(condition: boolean, message: string, opts: object): void
}

/**
 * Assert that an object is a promise, and returns it.
 *
 * The determination uses duck typing, i.e., it checks whether the object has
 * a `then` and a `catch` method.
 *
 * There are several implementations of promises in the wild, and a promise you
 * receive from a library might not be an `instanceof` _your_ `Promise` type,
 * although they can work together.
 *
 * ```javascript
 * promise.must.be.a(Promise)
 * ```
 *
 * might fail, while
 *
 * ```javascript
 * promise.must.be.a.promise
 * ```
 *
 * might be upheld.
 *
 * @example
 * Promise.resolve(42).must.be.a.promise()
 * Promise.reject(42).must.be.a.promise()
 *
 * @method promise
 */
Must.prototype.promise = function (): Must<Promise<any>> {
  this.assert(isPromise(this.actual), isPromiseMsg, { actual: this.actual });
  return this.actual;
};

/**
 * Assert that an object is a promise (see `promise`), that eventually resolves.
 * The assertion returns a promise that settles to the outcome (resolve result or
 * reject error) of `fulfilledCondition`. `fulfilledCondition` is called with the
 * resolution (resolve result) of the original promise when it resolves.
 * If the original promise is rejected, this assertion fails, and `fulfilledCondition`
 * is not called. `fulfilledCondition` is optional. If there is no `fulfilledCondition`,
 * the assertion settles to the outcome of the original promise if it resolves as expected.
 *
 * This approach makes it possible to immediate express assertions about the original
 * promise's resolve result.
 *
 * You should not use `not` to negate `fulfill`. Things will get weird. Use `betray`
 * to express that the promise should be rejected instead.
 *
 * @example
 * Promise.resolve(42).must.fulfill()
 * Promise.resolve(42).must.fulfill(function(result) {
 *   result.must.be.a.number()
 *   result.must.be.truthy()
 *   return result // the resulting promise will be fulfilled
 * })
 * Promise.resolve(42).must.fulfill(function(result) {
 *   result.must.be.a.number()
 *   result.must.be.truthy()
 *   throw result // the resulting promise will be rejected
 * })
 * Promise.resolve(42).must.fulfill(function(result) {
 *   result.must.not.be.a.number() // fails
 *   result.must.be.truthy()
 *   return result
 * })
 * Promise.reject(new Error()).must.fulfill(function(result) { // fulfill fails, callback is not executed
 *   result.must.not.be.a.number()
 *   result.must.be.truthy()
 *   return result
 * })
 *
 * @method fulfill
 * @param fulfilledCondition
 */
Must.prototype.fulfill = function fulfill<TResult>(this: Must<Promise<TResult>>, fulfilledCondition?: ((value: TResult) => void | Promise<void>)): Promise<void | TResult> {
  const must: Must<Promise<TResult>> = this;
  must.assert(isPromise(this.actual), isPromiseMsg, { actual: this.actual });
  const caught = must.actual.catch(function (err: any) {
    must.assert(false, "resolve, but got rejected with '" + (err && err.message ? err.message : err) + "'", {
      actual: must.actual
    })
  });
  return fulfilledCondition ? caught.then(fulfilledCondition) : caught;
};

/**
 * Assert that an object is a promise (see `promise`), that eventually rejects ("betrays" the promise).
 * The assertion returns a promise that settles to the outcome (resolve result or
 * reject error) of `catchCondition`. `catchCondition` is called with the
 * error (reject result) of the original promise when it rejects.
 * If the original promise is fulfilled (resolved), this assertion fails, and `catchCondition`
 * is not called. `catchCondition` is optional. If there is no `catchCondition`, the assertion settles to `undefined`
 * (`void`) when the original promise is rejected.
 *
 * This approach makes it possible to immediate express assertions about the original
 * promise's reject error.
 *
 * You should not use `not` to negate `betray`. Things will get weird. Use `fulfill`
 * to express that the promise should be resolved instead.
 *
 * @example
 * Promise.reject(new Error()).must.betray()
 * Promise.reject(42).must.betray(function(err) {
 *   err.must.be.a.number()
 *   err.must.be.truthy()
 *   return result // the resulting promise will be fulfilled
 * })
 * Promise.reject(42).must.betray(function(err) {
 *   err.must.be.a.number()
 *   err.must.be.truthy()
 *   throw result // the resulting promise will be rejected
 * })
 * Promise.reject(42).must.betray(function(err) {
 *   err.must.not.be.a.number() // fails
 *   err.must.be.truthy()
 *   return result
 * })
 * Promise.resolve(42).must.betray(function(err) { // betray fails, callback is not executed
 *   err.must.not.be.a.number()
 *   err.must.be.truthy()
 *   return result
 * })
 *
 * @method betray
 * @param catchCondition
 */
Must.prototype.betray = function betray<TResult>(this: Must<Promise<TResult>>, catchCondition?: (reason: any) => void | Promise<void>): Promise<void> {
  const must: Must<Promise<TResult>> = this;
  must.assert(isPromise(this.actual), isPromiseMsg, { actual: this.actual });
  return must.actual.then(
    function (result: TResult) {
      must.assert(false, "reject, but got fulfilled with '" + stringify(result) + "'", { actual: must.actual })
    },
    catchCondition ||
      function (ignore: any) {
        console.log(ignore);
        // NOP: error is expected
      }
  );
};

export = Must;
