import 'must'

interface Must {
    promise(): Must;
    fulfill<TResult>(this: PromiseLike<TResult>, fulfilledCondition?: ((value: TResult) => void | Promise<void>)): Promise<void> | PromiseLike<TResult>;
    betray<TResult, ErrorType>(this: Promise<TResult>, catchCondition?: (reason: ErrorType) => void | Promise<void>): Promise<void>;
}
