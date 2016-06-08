# Wreckage
> Utilities and helpers for [Hapi's Wreck](https://github.com/hapijs/wreck) library

## Table of Contents

- [Why](#why)
- [API](#api)
- [Roadmap](#roadmap)



    
## Why

## API

## Roadmap





```bash
npm install wreckage --save
```

## API

```js
// ES5	
const Wreckage = require('wreckage');

// ES2015/6
import Wreckage from 'wreckage';
```

### Wreckage.get(uri, [options]) : Promise<Any> | Promise<[{}]>

| Parameters      | Type              | Description                                                                                       | Required | Examples                                                                   |
|:----------------|:------------------|:--------------------------------------------------------------------------------------------------|:---------|:---------------------------------------------------------------------------|
| uri             | String            | Fully qualified path or path with options.baseUrl                                                 | Y        | http://google.com or options.basePath = 'https://google.com' then '/users' |
| options         | Object            | Configuration for the get request                                                                 | -        | { }                                                                        |
| options.baseUrl | String            | The base url of the request                                                                       | -        | { baseUrl: 'https://google.com' }                                          |
| options.json    | Boolean or String | Set the json parser to true, false, or 'strict'.  Strict forces all requests to be parsed as json | -        | { json: true }                                                             |
| options.headers | Object            | Key-valued pair of headers                                                                        | -        | { headers: { 'x-header': 'some value' }                                    |
| options.auth    | Object            | Set the username and password for the request                                                     | -        | { auth: { username: 'bob', password: '1234' }                              |
| options.request | Object            | Request options                                                                                   | -        | { request: {} }                                                            |
| options.read    | Object            | Read Options                                                                                      | -        | { read: {} }                                                               |
|                 |                   |                                                                                                   |          |                                                                            |




