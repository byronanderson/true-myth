/**
 * Flowtype definitions for maybe-class
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.2.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */
declare module 'maybe' {
  declare type Variant = 'Some' | 'Nothing';
  declare export type Maybe<T> = Some<T> | Nothing<T>;
  declare export type MapFn<T, U> = (t: T) => U;
  declare export interface IMaybe<T> {
    variant: Variant,
    map<U>(mapFn: MapFn<T, U>): Maybe<U>,
    mapOr<U>(orU: U, mapFn: MapFn<T, U>): U,
    mapOrElse<U>(orElseFn: (...args: any[]) => U, mapFn: MapFn<T, U>): U,
    or(mOr: Maybe<T>): Maybe<T>,
    orElse(orElseFn: (...args: any[]) => Maybe<T>): Maybe<T>,
    and<U>(mAnd: Maybe<U>): Maybe<U>,
    andThen<U>(andThenFn: (t: T) => Maybe<U>): Maybe<U>,
    unwrap(): T,
    unwrapOrElse(elseFn: (...args: any[]) => T): T,
  }
  declare export class Some<T> {
    variant: Variant,
    constructor(value: T | null | void): this,
    map<U>(mapFn: MapFn<T, U>): Maybe<U>,
    mapOr<U>(orU: U, mapFn: MapFn<T, U>): U,
    mapOrElse<U>(orElseFn: (...args: any[]) => U, mapFn: MapFn<T, U>): U,
    or(mOr: Maybe<T>): Maybe<T>,
    orElse(orElseFn: (...args: any[]) => Maybe<T>): Maybe<T>,
    and<U>(mAnd: Maybe<U>): Maybe<U>,
    andThen<U>(andThenFn: (t: T) => Maybe<U>): Maybe<U>,
    unwrap(): T,
    unwrapOrElse(elseFn: (...args: any[]) => T): T,
  }
  declare export class Nothing<T> {
    variant: Variant,
    map<U>(mapFn: MapFn<T, U>): Maybe<U>,
    mapOr<U>(orU: U, mapFn: MapFn<T, U>): U,
    mapOrElse<U>(orElseFn: (...args: any[]) => U, mapFn: MapFn<T, U>): U,
    or(mOr: Maybe<T>): Maybe<T>,
    orElse(orElseFn: (...args: any[]) => Maybe<T>): Maybe<T>,
    and<U>(mAnd: Maybe<U>): Maybe<U>,
    andThen<U>(andThenFn: (t: T) => Maybe<U>): Maybe<U>,
    unwrap(): T,
    unwrapOrElse(elseFn: (...args: any[]) => T): T,
  }
  declare export var isSome: <T>(m: Maybe<T>) => boolean;
  declare export var isNothing: <T>(m: Maybe<T>) => boolean;
  declare export var some: <T>(value: T) => Some<T>;
  declare export var nothing: <T>() => Nothing<T>;
  declare export var of: <T>(value: T | null | void) => Maybe<T>;
  declare export var map: <T, U>(mapFn: MapFn<T, U>, mt: Maybe<T>) => Maybe<U>;
  declare export var mapOr: <T, U>(orU: U, mapFn: MapFn<T, U>, mt: Maybe<T>) => U;
  declare export var mapOrElse: <T, U>(
    orElseFn: (...args: any[]) => U,
    mapFn: MapFn<T, U>,
    mt: Maybe<T>
  ) => U;
  declare export var and: <T, U>(mu: Maybe<U>, mt: Maybe<T>) => Maybe<U>;
  declare export var andThen: <T, U>(thenFn: (t: T) => Maybe<U>, mt: Maybe<T>) => Maybe<U>;
  declare export var or: <T>(mDef: Maybe<T>, mt: Maybe<T>) => Maybe<T>;
  declare export var orElse: <T>(elseFn: (...args: any[]) => Maybe<T>, mt: Maybe<T>) => Maybe<T>;
  declare export var unwrap: <T>(mt: Maybe<T>) => T;
  declare export var unwrapOrElse: <T>(orElseFn: (...args: any[]) => T, mt: Maybe<T>) => T;
}