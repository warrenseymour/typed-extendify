import test = require('blue-tape');

import extendify = require('extendify');

test('extendify shape', t => {
  t.assert(extendify(), 'extendify is callable');
  t.assert(extendify()(), 'extendify result is callable');

  var extend = extendify();
  var merge = extendify({
    inPlace: false
  });

  var src = {foo: 'bar'};
  var dst = {baz: 'quux'};
  var exp = {foo: 'bar', baz: 'quux'};

  t.looseEqual(merge(src, dst), exp, '`inPlace: false` returns merged result');
  t.looseEqual(src, {foo: 'bar'}, '`inPlace: false` does not mutate source');

  t.looseEqual(extend(src, dst), exp, '`inPlace: true` returns merged result');
  t.looseEqual(src, exp, '`inPlace: true` mutates source');

  t.end();
});
