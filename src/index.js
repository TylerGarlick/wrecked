import internals from './infrastructure';

let defaultGlobals = {};

const combine = (options, instanceOptions = {}) => internals.objects.merge(defaultGlobals, instanceOptions, options);

/**
 * Wreckage
 *
 * @public
 * @class
 */
export default class Wreckage {


  /**
   * @param {Object} options
   */
  constructor(options = {}) {
    this.configuration = internals.objects.merge(defaultGlobals, options);
  }

  /**
   * Helper for 'GET'
   *
   * @public
   *
   * @param {String} uri
   * @param {Object} [options]
   * @returns {Promise<Object>|*}
   */
  async get(uri, options) {
    const config = combine(options, this.configuration);
    return await internals.wreck.get(uri, config);
  }

  async post(uri, payload, options) {
    const config = combine(options, this.configuration);
    return await internals.wreck.post(uri, payload, config);
  }

  async put(uri, payload, options) {
    const config = combine(options, this.configuration);
    return await internals.wreck.put(uri, payload, config);
  }

  async patch(uri, payload, options) {
    const config = combine(options, this.configuration);
    return await internals.wreck.patch(uri, payload, config);
  }

  async delete(uri, payload, options) {
    const config = combine(options, this.configuration);
    return await internals.wreck.delete(uri, payload, config);
  }

  async request(method, uri, options) {
    const config = combine(options, this.configuration);
    return await internals.wreck.request(method, uri, config);
  }

  /**
   * Sets the global defaults for every instance
   *
   * @public
   * @static
   *
   * @param {Object} [options]
   * @param {Boolean} [shouldReset]
   * @returns {Object}
   */
  static defaults(options = {}, shouldReset = false) {
    if (shouldReset) {
      defaultGlobals = {};
      return defaultGlobals;
    }

    return defaultGlobals = internals.objects.merge(defaultGlobals, options);
  }
  
};
