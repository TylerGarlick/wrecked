import internals from './infrastructure';

const DEFAULT_GLOBALS = {

  request: {
    headers: {},
    redirects: 3
  },

  read: {
    json: true
  },

  /**
   * Validates the status code
   *
   * @param {Number} statusCode
   * @returns {boolean}
   */
  validateStatus(statusCode) {
    return statusCode >= 200 && statusCode < 300;
  }
};

const combine = (options, defaults) => Object.assign({}, defaults, options);

/**
 * Wreckage
 *
 * @public
 *
 */
export default {

  /**
   * Performs a 'GET' request
   *
   * @public
   *
   * @param {String} uri
   * @param {Object} [options]
   *
   * @returns {Promise<Object>|*}
   */
  async get(uri, options = {}) {
    return await internals.wreck.get(uri, combine(options, this.defaults));
  },

  /**
   *
   * Performs a 'POST' request
   *
   * @public
   *
   * @param {String} uri
   * @param {Object|Array|*} payload
   * @param {Object} [options]
   *
   * @returns {Promise.<*|Promise>}
   */
  async post(uri, payload, options = {}) {
    return await internals.wreck.post(uri, payload, combine(options, this.defaults));
  },

  /**
   * Performs a 'PUT' request
   *
   * @public
   *
   * @param {String} uri
   * @param {Object|Array|*} payload
   * @param {Object} [options]
   *
   * @returns {Promise.<*|Promise>}
   */
  async put(uri, payload, options = {}) {
    return await internals.wreck.put(uri, payload, combine(options, this.defaults));
  },

  /**
   * Performs a 'PATCH' request
   *
   * @public
   *
   * @param {String} uri
   * @param {Object|Array|*} payload
   * @param {Object} [options]
   *
   * @returns {Promise.<*|Promise>}
   */
  async patch(uri, payload, options = {}) {
    return await internals.wreck.patch(uri, payload, combine(options, this.defaults));
  },

  /**
   * Performs a 'DEETE' request
   *
   * @public
   *
   * @param {String} uri
   * @param {Object|Array|*} payload
   * @param {Object} [options]
   *
   * @returns {Promise.<*|Promise|boolean>}
   */
  async delete(uri, payload, options = {}) {
    return await internals.wreck.delete(uri, payload, combine(options, this.defaults));
  },

  /**
   * Performs a request
   * @public
   *
   * @param {String} method
   * @param {String} uri
   * @param {Object} [options]
   *
   * @returns {Promise.<*|Promise|{headers, redirects}>}
   */
  async request(method, uri, options = {}) {
    return await internals.wreck.request(method, uri, combine(options, this.defaults));
  },

  /**
   * Creates an instance of Wreckage with specified options overriding the default configuration
   *
   * @public
   *
   * @param [options]
   *
   * @returns {Object}
   */
  create(options = {}) {
    const defaults = combine(options, this.defaults);
    return Object.assign({}, this, { defaults });
  },

  defaults: DEFAULT_GLOBALS
};
