import internals from './infrastructure';

let defaultGlobals = {
  // baseUrl: '',
  headers: {},
  redirects: 3,
  // beforeRedirect: (redirectMethod, statusCode, location, resHeaders, redirectOptions, next) => next(),
  // redirected: (statusCode, location, req) => {},
  // timeoute
  // maxBytes
  // rejectUnnauthorized,
  // json,
  //agent: null,
  //secureProtocol: 'SSLv3_method'
};

const combine = (options, defaults) => Object.assign({}, defaults, options);

/**
 * Wreckage
 *
 * @public
 * @class
 */
export default {

  /**
   * Helper for 'GET'
   *
   * @public
   *
   * @param {String} uri
   * @param {Object} [options]
   * @returns {Promise<Object>|*}
   */
  async get(uri, options = {}) {
    return await internals.wreck.get(uri, combine(options, this.defaults));
  },

  async post(uri, payload, options = {}) {
    return await internals.wreck.post(uri, payload, combine(options, this.defaults));
  },

  async put(uri, payload, options = {}) {
    return await internals.wreck.put(uri, payload, combine(options, this.defaults));
  },

  async patch(uri, payload, options = {}) {
    return await internals.wreck.patch(uri, payload, combine(options, this.defaults));
  },

  async delete(uri, payload, options = {}) {
    return await internals.wreck.delete(uri, payload, combine(options, this.defaults));
  },

  async request(method, uri, options = {}) {
    return await internals.wreck.request(method, uri, combine(options, this.defaults));
  },

  create(options = {}) {
    const defaults = combine(options, this.defaults);
    return Object.assign({}, this, { defaults });
  },

  defaults: defaultGlobals
};
