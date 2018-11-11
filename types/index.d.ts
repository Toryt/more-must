declare module "must" {
  interface Must {
    promise(): Must;
    fulfill<TResult, This extends PromiseLike<TResult>>(this: This, fulfilledCondition?: ((value: TResult) => void | Promise<void>)): Promise<void> | This;
    betray<TResult>(this: Promise<TResult>, catchCondition?: (reason: any) => void | Promise<void>): Promise<void>;
  }
}
