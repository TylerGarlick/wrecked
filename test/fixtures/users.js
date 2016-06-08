import nock from 'nock';

const BASE_URL = 'http://api.fake';
const USERS = [
  {
    id: 1,
    firstName: 'Bob',
    lastName: 'Smith',
    isActive: true
  },
  {
    id: 2,
    firstName: 'Sam',
    lastName: 'Smith',
    isActive: true
  },
  {
    id: 3,
    firstName: 'Ricky',
    lastName: 'Bobby',
    isActive: true
  }
];

nock.disableNetConnect();

const server = nock(BASE_URL);

server
  .get('/users')
  .reply(200, USERS);

server
  .get('/users/bogus')
  .reply(404);

server
  .get('/users/1')
  .reply(200, USERS[0]);

server
  .get('/users/search')
  .query({ isActive: true })
  .reply(200, USERS);

server
  .post('/users', (body) => true)
  .reply(201, USERS[0]);

server
  .put('/users/2', () => true)
  .reply(200, USERS[1]);

export default server;

export { USERS, BASE_URL };
