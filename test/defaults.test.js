import test from 'ava';
import Wreckage from '../src';

test.beforeEach(() => {
  Wreckage.defaults({}, true);
});

test('Wreckage.defaults', () => {
  assert(Wreckage.defaults, {});
});

test('Wreckage.defaults can be set', () => {
  assert(Wreckage.defaults, {});

  Wreckage.defaults({ hello: 'world' });
  assert(Wreckage.defaults, { hello: 'world' });
});

test('Wreckage.new merges with defaults', () => {
  const initialConfig = { json: true, force: true };
  assert(Wreckage.defaults(initialConfig), { json: true, force: true });

  const instance = new Wreckage({ force: false });
  assert.equal(instance.configuration.force, false);
  console.log(instance.configuration);
});
