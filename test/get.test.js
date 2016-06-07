import test from 'ava';
import Wreckage from '../src';

test('#get(uri)', async() => {
  const instance = new Wreckage();
  const result = await instance.get('http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}');
  assert.equal(result.length, 10, 'Array has more or less than 10 items');
});
