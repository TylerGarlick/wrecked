import Wreck from 'wreck';
import Boom from 'boom';
import Util from 'util';
import { Stream } from 'stream';

const read = async(response, options) => {
  return await new Promise((resolve, reject) => {
    Wreck.read(response, options, (err, payload) => {
      if (err) return reject(err);
      return resolve(payload);
    });
  });
};

const basicRequest = async(method, uri, options = {}) => {
  return await new Promise((resolve, reject) => {
    Wreck.request(method, uri, options, (err, response) => {
      if (err) return reject(err);
      return resolve(response);
    });
  });
};

const request = async(method, uri, options = {}) => {
  const requestOptions = options.request || {};
  const readOptions = options.read || {};
  const validateStatus = options.validateStatus || function() { return true; };

  const response = await basicRequest(method, uri, requestOptions);

  const {statusCode, statusMessage} = response;

  if (validateStatus(statusCode)) {
    const payload = await read(response, readOptions);
    return Promise.resolve({ response, payload });
  } else {
    throw Boom.create(statusCode, statusMessage, {response});
  }
};

const requestWithPayload = async(method, uri, payload, options = {}) => {
  options.request = options.request || {};

  options.request.payload = payload;
  if (!Buffer.isBuffer(payload) && !(payload instanceof Stream)) {
    options.request.payload = Util.inspect(payload, { depth: null });
  }
  return await request(method, uri, options);
};

export default {

  async post(uri, payload, options = {}) {
    return await requestWithPayload('POST', uri, payload, options);
  },

  async put(uri, payload, options = {}) {
    return await requestWithPayload('PUT', uri, payload, options);
  },

  async get(uri, options = {}) {
    return await request('GET', uri, options);
  },

  async patch(uri, payload, options = {}) {
    return await requestWithPayload('PATCH', uri, payload, options);
  },

  async delete(uri, payload, options = {}) {
    return await requestWithPayload('DELETE', uri, payload, options);
  },

  request
};
