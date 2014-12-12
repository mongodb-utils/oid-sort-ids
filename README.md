
# ObjectID Sort IDs

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
[![Gittip][gittip-image]][gittip-url]

Sort an array of objects or `ObjectID`s based on another array of `ObjectID`s.
Because MongoDB can't do this themselves without some crazy ass hacks.

## API

```js
var sort = require('sort')

var arr = sort([
  ObjectId(2),
  ObjectId(10), {
    _id: ObjectId(3),
  }
], [
  ObjectId(1),
  ObjectId(2),
  ObjectId(3),
  ObjectId(4),
  ObjectId(5),
  ObjectId(6),
  ObjectId(7),
  ObjectId(8),
  ObjectId(9),
  ObjectId(10),
])

arr === [
  ObjectId(2), {
    _id: ObjectId(3),
  },
  ObjectId(10),
]
```

[gitter-image]: https://badges.gitter.im/mongodb-utils/oid-sort-ids.png
[gitter-url]: https://gitter.im/mongodb-utils/oid-sort-ids
[npm-image]: https://img.shields.io/npm/v/oid-sort-ids.svg?style=flat-square
[npm-url]: https://npmjs.org/package/oid-sort-ids
[github-tag]: http://img.shields.io/github/tag/mongodb-utils/oid-sort-ids.svg?style=flat-square
[github-url]: https://github.com/mongodb-utils/oid-sort-ids/tags
[travis-image]: https://img.shields.io/travis/mongodb-utils/oid-sort-ids.svg?style=flat-square
[travis-url]: https://travis-ci.org/mongodb-utils/oid-sort-ids
[coveralls-image]: https://img.shields.io/coveralls/mongodb-utils/oid-sort-ids.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/mongodb-utils/oid-sort-ids
[david-image]: http://img.shields.io/david/mongodb-utils/oid-sort-ids.svg?style=flat-square
[david-url]: https://david-dm.org/mongodb-utils/oid-sort-ids
[license-image]: http://img.shields.io/npm/l/oid-sort-ids.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/oid-sort-ids.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/oid-sort-ids
[gittip-image]: https://img.shields.io/gratipay/jonathanong.svg?style=flat-square
[gittip-url]: https://gratipay.com/jonathanong/
