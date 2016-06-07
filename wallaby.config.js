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
    type: 'node',
    runner: 'node'
  },
  compilers: {
    '**/*.js': wallaby.compilers.babel({
      presets: ['pundits'],
      plugins: [
        require('babel-plugin-espower/create')(
          require('babel-core'), {
            patterns: require('ava/lib/enhance-assert').PATTERNS
          }
        )
      ]
    })
  },
  testFramework: 'ava',
  setup: () => require('./test/helper')
});
