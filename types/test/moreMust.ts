import "more-must";

const date: Date = new Date(1918, 11, 11, 11, 11, 11, 11);
const str = "a string";
const number = 42;
const strArray: string[] = ['a string in an array'];
const anyArray: any[] = [{}, 42];
const strPromise: Promise<string> = Promise.resolve(str);

// $ExpectType CallableMust
date.must.a;

// $ExpectType Must
date.must.above(date);
// $ExpectError
date.must.above();
// $ExpectError
date.must.above(date, date);

// $ExpectType Must
date.must.after(date);
// $ExpectError
date.must.after();

// $ExpectType CallableMust
date.must.an;

// $ExpectType Must
date.must.array();
// $ExpectError
date.must.array(date);

// $ExpectType Must
date.must.at;

// $ExpectType CallableMust
date.must.be;

// $ExpectType Must
date.must.before(date);
// $ExpectError
date.must.before();
// $ExpectError
date.must.before(date, date);

// $ExpectType Must
date.must.below(date);
// $ExpectError
date.must.below();
// $ExpectError
date.must.below(date, date);

// $ExpectType Must
date.must.between(date, date);
// $ExpectError
date.must.between();
// $ExpectError
date.must.between(date);
// $ExpectError
date.must.between(date, date, date);

// $ExpectType Must
date.must.boolean();
// $ExpectError
date.must.boolean(date);

// $ExpectType Must
date.must.contain(date);
// $ExpectError
date.must.contain();
// $ExpectError
date.must.contain(date, date);

// $ExpectType Must
date.must.date(date);
// $ExpectError
date.must.date();
// $ExpectError
date.must.date(date, date);

// $ExpectType Must
date.must.empty();
// $ExpectError
date.must.empty(date);

// $ExpectType Must
date.must.endWith(str);
// $ExpectError
date.must.endWith(date);
// $ExpectError
date.must.endWith();
// $ExpectError
date.must.endWith(str, str);

// $ExpectType Must
date.must.enumerable(str);
// $ExpectError
date.must.enumerable(date);
// $ExpectError
date.must.enumerable();
// $ExpectError
date.must.enumerable(str, str);

// $ExpectType Must
date.must.enumerableProperty(str);
// $ExpectError
date.must.enumerableProperty(date);
// $ExpectError
date.must.enumerableProperty();
// $ExpectError
date.must.enumerableProperty(str, str);

// $ExpectType Must
date.must.eql(date);
// $ExpectError
date.must.eql();
// $ExpectError
date.must.eql(date, date);

// $ExpectType Must
date.must.equal(date);
// $ExpectError
date.must.equal();
// $ExpectError
date.must.equal(date, date);

// $ExpectType Must
date.must.error();
// $ExpectType Must
date.must.error(date);
// $ExpectType Must
date.must.error(date, date);
// $ExpectError
date.must.error(date, date, date);

// $ExpectType Must
date.must.eventually;

// $ExpectType Must
date.must.exist();
// $ExpectError
date.must.exist(date);

// $ExpectType Must
date.must.false();
// $ExpectError
date.must.false(date);

// $ExpectType Must
date.must.falsy();
// $ExpectError
date.must.falsy(date);

// $ExpectType Must
date.must.frozen();
// $ExpectError
date.must.frozen(date);

// $ExpectType Must
date.must.function();
// $ExpectError
date.must.function(date);

// $ExpectType Must
date.must.gt(number);
// $ExpectError
date.must.gt(date);
// $ExpectError
date.must.gt();
// $ExpectError
date.must.gt(number, number);

// $ExpectType Must
date.must.gte(number);
// $ExpectError
date.must.gte(date);
// $ExpectError
date.must.gte();
// $ExpectError
date.must.gte(number, number);

// $ExpectType Must
date.must.have;

// $ExpectType Must
date.must.include(date);
// $ExpectError
date.must.include();
// $ExpectError
date.must.include(date, date);

// $ExpectType Must
date.must.instanceOf(date);
// $ExpectError
date.must.instanceOf();
// $ExpectError
date.must.instanceOf(date, date);

// $ExpectType Must
date.must.instanceof(date);
// $ExpectError
date.must.instanceof();
// $ExpectError
date.must.instanceof(date, date);

// $ExpectType Must
date.must.is(date);
// $ExpectError
date.must.is();
// $ExpectError
date.must.is(date, date);

// $ExpectType Must
date.must.keys(strArray);
// $ExpectError
date.must.keys(date);
// $ExpectError
date.must.keys();
// $ExpectError
date.must.keys(strArray, strArray);

// $ExpectType Must
date.must.least(date);
// $ExpectError
date.must.least();
// $ExpectError
date.must.least(date, date);

// $ExpectType Must
date.must.length(number);
// $ExpectError
date.must.length(date);
// $ExpectError
date.must.length();
// $ExpectError
date.must.length(number, number);

// $ExpectType Must
date.must.lt(number);
// $ExpectError
date.must.lt(date);
// $ExpectError
date.must.lt();
// $ExpectError
date.must.lt(number, number);

// $ExpectType Must
date.must.lte(number);
// $ExpectError
date.must.lte(date);
// $ExpectError
date.must.lte();
// $ExpectError
date.must.lte(number, number);

// $ExpectType Must
date.must.match(date);
// $ExpectError
date.must.match();
// $ExpectError
date.must.match(date, date);

// $ExpectType Must
date.must.most(number);
// $ExpectError
date.must.most(date);
// $ExpectError
date.must.most();
// $ExpectError
date.must.most(number, number);

// $ExpectType Must
date.must.must;

// $ExpectType Must
date.must.nan();
// $ExpectError
date.must.nan(date);

// $ExpectType Must
date.must.nonenumerable(str);
// $ExpectError
date.must.nonenumerable(date);
// $ExpectError
date.must.nonenumerable();
// $ExpectError
date.must.nonenumerable(str, str);

// $ExpectType Must
date.must.nonenumerableProperty(str);
// $ExpectError
date.must.nonenumerableProperty(date);
// $ExpectError
date.must.nonenumerableProperty();
// $ExpectError
date.must.nonenumerableProperty(str, str);

// $ExpectType Must
date.must.not;

// $ExpectType Must
date.must.null();
// $ExpectError
date.must.null(date);

// $ExpectType Must
date.must.number();
// $ExpectError
date.must.number(date);

// $ExpectType Must
date.must.object();
// $ExpectError
date.must.object(date);

// $ExpectType Must
date.must.own(str);
// $ExpectType Must
date.must.own(str, date);
// $ExpectError
date.must.own(date);
// $ExpectError
date.must.own(date, date);
// $ExpectError
date.must.own(str, date, date);

// $ExpectType Must
date.must.ownKeys(strArray);
// $ExpectError
date.must.ownKeys(date);
// $ExpectError
date.must.ownKeys();
// $ExpectError
date.must.ownKeys(strArray, strArray);

// $ExpectType Must
date.must.ownProperties(date);
// $ExpectError
date.must.ownProperties();
// $ExpectError
date.must.ownProperties(date, date);

// $ExpectType Must
date.must.ownProperty(str);
// $ExpectType Must
date.must.ownProperty(str, date);
// $ExpectError
date.must.ownProperty(date);
// $ExpectError
date.must.ownProperty(date, date);
// $ExpectError
date.must.ownProperty(str, date, date);

// $ExpectType Must
date.must.permutationOf(anyArray);
// $ExpectError
date.must.permutationOf(date);
// $ExpectError
date.must.permutationOf();
// $ExpectError
date.must.permutationOf(anyArray, anyArray);

// $ExpectType Must
date.must.properties(date);
// $ExpectError
date.must.properties();
// $ExpectError
date.must.properties(date, date);

// $ExpectType Must
date.must.property(str);
// $ExpectType Must
date.must.property(str, date);
// $ExpectError
date.must.property(date);
// $ExpectError
date.must.property(date, date);
// $ExpectError
date.must.property(str, date, date);

// $ExpectType Must
date.must.regexp();
// $ExpectError
date.must.regexp(date);

// $ExpectType Must
date.must.reject;

// $ExpectType Must
date.must.resolve;

// $ExpectType Must
date.must.startWith(str);
// $ExpectError
date.must.startWith(date);
// $ExpectError
date.must.startWith();
// $ExpectError
date.must.startWith(str, str);

// $ExpectType Must
date.must.string();
// $ExpectError
date.must.string(date);

// $ExpectType Must
date.must.symbol();
// $ExpectError
date.must.symbol(date);

// $ExpectType Must
date.must.the;

// $ExpectType Must
date.must.then;

// $ExpectType Must
date.must.throw();
// $ExpectType Must
date.must.throw(date);
// $ExpectType Must
date.must.throw(date, date);
// $ExpectError
date.must.throw(date, date, date);

// $ExpectType Must
date.must.to;

// $ExpectType Must
date.must.true();
// $ExpectError
date.must.true(date);

// $ExpectType Must
date.must.truthy();
// $ExpectError
date.must.truthy(date);

// $ExpectType Must
date.must.undefined();
// $ExpectError
date.must.undefined(date);

// $ExpectType Must
date.must.with;

// MORE MUST

// No more-must functions
// $ExpectType Must
date.must.promise();
// $ExpectError
date.must.promise(date);

// $ExpectType Promise<string>
strPromise.must.fulfill();
// $ExpectType Promise<void>
strPromise.must.fulfill((resolution: string) => {});
// $ExpectType Promise<void>
strPromise.must.fulfill((resolution: string) => Promise.resolve());
// should no be possible, but cannot be blocked with TypeScript types
// $ExpectType Promise<string>
strPromise.must.fulfill((resolution: string) => Promise.resolve(str));
// $ExpectType Promise<string>
strPromise.must.fulfill((resolution: string) => str);
// errors
// $ExpectError
strPromise.must.fulfill(date);
// $ExpectError
strPromise.must.fulfill((resolution: string) => number);
// $ExpectError
strPromise.must.fulfill(() => {});
// $ExpectError
strPromise.must.fulfill((resolution: number) => {});
// $ExpectError
strPromise.must.fulfill((resolution: string) => Promise.resolve(date));
// $ExpectError
strPromise.must.fulfill((resolution: string) => date);
// $ExpectError
strPromise.must.fulfill((resolution: string, resolution2: string) => {});

// $ExpectType Promise<void>
strPromise.must.betray();
// $ExpectType Promise<void>
strPromise.must.betray((err: Error) => {});
// $ExpectType Promise<void>
strPromise.must.betray((err: number) => {});
// $ExpectType Promise<void>
strPromise.must.betray((err: Error) => Promise.resolve());
// $ExpectType Promise<void>
date.must.betray((err: Error) => {});
// errors
// $ExpectError
strPromise.must.betray(date);
// $ExpectError
strPromise.must.betray((err: Error) => str);
// $ExpectError
strPromise.must.betray((err: Error) => Promise.resolve(str));
// $ExpectError
strPromise.must.betray(() => {});
// $ExpectError
strPromise.must.betray((err: Error, err2: Error) => {});
