import Test from 'ava';
import Wreckage from '../src';
import { BASE_URL } from './fixtures/users';

Test.beforeEach(t => {
  t.context = Wreckage.create();
});

Test('#post(uri, payload) that returns 201 with an object', async t => {
  const { payload, response } = await t.context.post(`${BASE_URL}/users`, {});
  t.is(response.statusCode, 201);
  t.is(payload.firstName, 'Bob');
});
