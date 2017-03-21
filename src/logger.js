import EventEmitter from 'events';

const KIND_INFO = 'info';

const emitter = new EventEmitter();

const log = (kind = 'info', value) => {
  emitter.emit(`Logger:${kind}`, value);
};


export default {
  
  debug(value){
    return log('debug', value);
  },
  
  info(value) {
    return log('info', value);
  },
  
  warn(value){
    return log('warn', value);
  },
  
  error(value){
    return log('error', value);
  },
  
  on(kind = KIND_INFO, handler) {
    emitter.on(kind, handler);
  },
  
  removeListeners(kind = KIND_INFO) {
    emitter.removeAllListeners(kind);
  },
  
  once(kind = KIND_INFO, handler) {
    emitter.once(kind, handler);
  },
  
  async numberOfListeners(kind = KIND_INFO) {
    return Promise.resolve(emitter.listenerCount(kind));
  }
  
};
