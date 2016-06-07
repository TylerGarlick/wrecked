# Wreckage
> Utilities and helpers for [Hapi's Wreck](https://github.com/hapijs/wreck) library

## Installation

### Installing with NPM

```bash
npm install wreckage --save
```

## Usage

```js
// ES5	
// const Wreckage = require('wreckage');

// ES2015/6
import Wreckage from 'wreckage';

const configuration = {
  baseUrl: 'http://somewhere.com',
  headers: { 'x-header': 'value'},
};

const wreckage = new Wreckage(configuration);
```

### #.get(uri, [options]) : Promise<Any> | Promise<[Any]>


