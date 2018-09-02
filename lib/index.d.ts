import { must } from 'must'
must.

interface Must {
    betray<TResult>(catchCondition?: (reason: any) => TResult | PromiseLike<TResult>): Promise<TResult>;
    betray(catchCondition?: (reason: any) => void): Promise<any>;
    fulfill<TResult>(fulfilledCondition?: (value?: any) => TResult | PromiseLike<TResult>): Promise<TResult>;
    fulfill(fulfilledCondition?: (value?: any) => void): Promise<any>;
    promise(): Must;
}
interface CallableMust extends Must {
    (): Must;
}
declare function must(expected: any): Must;
declare namespace must {}

export = must;

declare global {
    // copied from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/es6-shim/index.d.ts
    interface PromiseLike<T> {
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => TResult | PromiseLike<TResult>): PromiseLike<TResult>;

        then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => void): PromiseLike<TResult>;
    }

    /**
     * Represents the completion of an asynchronous operation
     */
    interface Promise<T> {
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => TResult | PromiseLike<TResult>): Promise<TResult>;

        then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => void): Promise<TResult>;

        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch(onrejected?: (reason: any) => T | PromiseLike<T>): Promise<T>;

        catch(onrejected?: (reason: any) => void): Promise<T>;
    }
}
