const log = console.log;

const map = curry((f, iter) => {
  let res = [];
  for (const a of iter) res.push(f(a));
  return res;
});

const filter = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
});

const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});

const curry = (f) => (a, ..._) =>
  _.length ? f(a, ..._) : (..._) => f(a, ..._);

const go = (...args) => reduce((a, f) => f(a));

const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

const range = (l) => {
  let = -1;
  const res = [];
  while (++i < l) {
    res.push(i);
  }
  return res;
};

const take = curry((l, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length == l) return res;
  }
});

const L = {};

L.range = function* (l) {
  let i = -1;
  while (++i < l) {
    yield i;
  }
};

L.map = function* (f, iter) {
  for (const a of iter) yield f(a);
};

L.filter = function* (f, iter) {
  for (const a of iter) {
    if (f(a)) yield a;
  }
};
