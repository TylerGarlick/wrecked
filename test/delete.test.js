import Test from 'ava';
import Wreckage from '../src';
import { BASE_URL } from './fixtures/users';

Test.beforeEach(t => {
  t.context = Wreckage.create();
});

Test('#put(uri, payload) that returns 200 with an object', async t => {
  const { payload, response } = await t.context.delete(`${BASE_URL}/users/2`);
  t.is(response.statusCode, 200);
  t.deepEqual(payload, {});
});
