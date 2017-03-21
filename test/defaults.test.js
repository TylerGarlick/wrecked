import Test from 'ava';
import Wreckage from '../src';

Test(`defaults are set correctly`, t => {
  const defaults = Wreckage.defaults;

  t.is(defaults.request.redirects, 3);
  t.deepEqual(defaults.request.headers, {});
});

Test(`#create(options) overrides the defaults for it's instance`, t => {
  const config = {
    request: {
      headers: {},
      redirects: 3
    },
    read: {
      json: true
    }
  };

  const instance = Wreckage.create(config);

  t.is(instance.defaults.request, config.request);
  t.is(instance.defaults.read, config.read);
  t.is(typeof(instance.get), 'function');
  t.is(typeof(instance.post), 'function');
  t.is(typeof(instance.put), 'function');
  t.is(typeof(instance.delete), 'function');
  t.is(typeof(instance.patch), 'function');
  t.is(typeof(instance.defaults), 'object');
  
});
