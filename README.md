# Wreckage
> Utilities and helpers for [Hapi's Wreck](https://github.com/hapijs/wreck) library

[![Build Status](https://travis-ci.org/TylerGarlick/wreckage.svg?branch=master)](https://travis-ci.org/TylerGarlick/wreckage)

## Table of Contents

- [Why](#why)
- [Installation](#installation)
- [API](#api)
- [Roadmap](#roadmap)



    
## Why

Wreck is an awesome library, and I always found myself wrapping the callbacks or building helpers around it.  Now i've formalized the helpers and provided a common interface.

## Installation

```console
$ npm install wreckage --save
```

## API

### `get(uri, [options])`
### `post(uri, payload, [options])`
### `put(uri, payload, [options])`
### `patch(uri, payload, [options])`
### `delete(uri, payload, [options])`
### `create(configuration)`

#### `uri`

Type `string`

Url or path. To use a base

## Roadmap











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




