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
    // runner: 'node'
  },
  compilers: {
    '**/*.js': wallaby.compilers.babel()
  },
  testFramework: 'ava',

  // workers: {
    // initial: 2,
    // regular: 5,
    // recycle: true
  // }
});
