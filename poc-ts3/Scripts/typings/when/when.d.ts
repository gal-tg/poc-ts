// Type definitions for When 2.4.0
// Project: https://github.com/cujojs/when
// Definitions by: Derek Cicerone <https://github.com/derekcicerone>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "when" {

    /**
    * Calls f with the supplied arguments, returning a promise for the result. The arguments may be promises, in which case, f will be called after they have fulfilled. The returned promise will fulfill with the successful result of calling f. If any argument is a rejected promise, or if f fails by throwing or returning a rejected promise, the returned promise will also be rejected.
    * This can be a great way to kick off a promise chain when you want to return a promise, rather than creating a one manually.
    */
    function attempt<T>(f:any,arg1?:any): IPromise<T>;

    /**
     * Return a promise that will resolve only once all the supplied promisesOrValues
     * have resolved. The resolution value of the returned promise will be an array
     * containing the resolution values of each of the promisesOrValues.
     * @memberOf when
     *
     * @param promisesOrValues array of anything, may contain a mix
     *      of {@link IPromise}s and values
     */
    function all<T>(promisesOrValues: any[]): IPromise<T>;

    /**
     * Creates a {promise, resolver} pair, either or both of which
     * may be given out safely to consumers.
     * The resolver has resolve, reject, and progress.  The promise
     * has then plus extended promise API.
     */
    function defer<T>(): Deferred<T>;

    /**
     * Joins multiple promises into a single returned promise.
     * @return a promise that will fulfill when *all* the input promises
     * have fulfilled, or will reject when *any one* of the input promises rejects.
     */
    function join<T>(...promises: IPromise<T>[]): IPromise<T[]>;
    /**
     * Joins multiple promises into a single returned promise.
     * @return a promise that will fulfill when *all* the input promises
     * have fulfilled, or will reject when *any one* of the input promises rejects.
     */
    function join<T>(...promises: any[]): IPromise<T[]>;

    /**
     * Returns a resolved promise. The returned promise will be
     *  - fulfilled with promiseOrValue if it is a value, or
     *  - if promiseOrValue is a promise
     *    - fulfilled with promiseOrValue's value after it is fulfilled
     *    - rejected with promiseOrValue's reason after it is rejected
     */
    function resolve<T>(promise: IPromise<T>): IPromise<T>;
    function resolve<T>(value?: T): IPromise<T>;

    interface Deferred<T> {
        notify(update: any): void;
        promise: IPromise<T>;
        reject(reason: any): void;
        resolve(value?: T): void;
        resolve(value?: IPromise<T>): void;
    }
    function promise<T>(resolver: any): IPromise<T>
    interface IPromise<T> {
        catch<U>(onRejected?: (reason: any) => IPromise<U>): IPromise<U>;
        catch<U>(onRejected?: (reason: any) => U): IPromise<U>;

        ensure(onFulfilledOrRejected: Function): IPromise<T>;

        inspect(): Snapshot<T>;

        otherwise<U>(onRejected?: (reason: any) => IPromise<U>): IPromise<U>;
        otherwise<U>(onRejected?: (reason: any) => U): IPromise<U>;

        then<U>(onFulfilled: (value: T) => IPromise<U>, onRejected?: (reason: any) => IPromise<U>, onProgress?: (update: any) => void): IPromise<U>;
        then<U>(onFulfilled: (value: T) => IPromise<U>, onRejected?: (reason: any) => U, onProgress?: (update: any) => void): IPromise<U>;
        then<U>(onFulfilled: (value: T) => U, onRejected?: (reason: any) => IPromise<U>, onProgress?: (update: any) => void): IPromise<U>;
        then<U>(onFulfilled: (value: T) => U, onRejected?: (reason: any) => U, onProgress?: (update: any) => void): IPromise<U>;
    }

    interface Snapshot<T> {
        state: string;
        value?: T;
        reason?: any;
    }
}

//export = when;
