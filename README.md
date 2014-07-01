
# ObjectID Sort IDs

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
