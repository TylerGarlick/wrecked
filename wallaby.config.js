module.exports = wallaby => ({
  files: [
    'src/**/*',
    'test/**/*',
    '!test/**/*.test.js'
  ],
  tests: [
    'test/**/*.test.js'
  ],
  env: {
    type: 'node'
  },
  compilers: {
    '**/*.js': wallaby.compilers.babel()
  },
  setup: () => require('babel-polyfill'),

  testFramework: 'ava'
});
