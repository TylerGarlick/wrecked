import test from 'ava';
import Wreckage from '../src';

test(`defaults are set correctly`, t => {
  const defaults = Wreckage.defaults;

  t.is(defaults.redirects, 3);
  t.deepEqual(defaults.headers, {});
});

test(`#create(options) overrides the defaults for it's instance`, t => {
  const config = { redirects: 4 };
  const instance = Wreckage.create(config);

  t.is(instance.defaults.redirects, config.redirects);
  t.is(typeof(instance.get), 'function');
  t.is(typeof(instance.post), 'function');
  t.is(typeof(instance.put), 'function');
  t.is(typeof(instance.delete), 'function');
  t.is(typeof(instance.patch), 'function');
  t.is(typeof(instance.defaults), 'object');
});
