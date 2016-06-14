# Wreckage

> Utilities and helpers for [Hapi's Wreck](https://github.com/hapijs/wreck) library


## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [API](#api)
- [Roadmap](#roadmap)

    
## Overview

[Wreck](https://github.com/hapijs/wreck) is an awesome library, and I always found myself wrapping the callbacks or building helpers around it.  This library is a simple wrapper with some utilitarian helpers geared towards JSON geared APIs.


## Installation
 
```console
$ npm install wreckage --save
```

## API

### [`.get(uri, [options])`](#get)
### [`.post(uri, payload, [options])`](#post)
### [`.put(uri, payload, [options])`](#put)
### [`.patch(uri, payload, [options])`](#patch)
### [`.delete(uri, payload, [options])`](#delete)
### [`.create(configuration)`](#create-instance)


#### GET

> `.get(uri, [options])`

Performs a GET request



##### Parameters


#### POST 

> `.post(uri, payload, [options])`

Performs a POST request

#### PUT

> `.put(uri, payload, [options])`

Performs a PUT request

#### PATCH

> `.patch(uri, payload, [options])`

Performs a PATCH request

#### DELETE

> `.delete(uri, payload, [options])`

Performs a DELETE request


#### CREATE Instance

> `.create(configuration)`



## Roadmap

- [ ] 100% code coverage
- [ ] Complete documentation



