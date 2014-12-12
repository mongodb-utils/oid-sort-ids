
var ObjectID = require('mongodb').ObjectID
var assert = require('assert')

var sort = require('..')

it('should sort 2 objectids', function () {
  var oids = [
    new ObjectID(),
    new ObjectID(),
  ]

  var out = sort(oids.reverse(), oids)
  assert(oids[0].equals(out[0]))
  assert(oids[1].equals(out[1]))
})

it('should sort 2 objects', function () {
  var oids = [
    {
      _id: new ObjectID()
    }, {
      _id: new ObjectID()
    },
  ]

  var out = sort(oids.reverse(), oids.map(toID))
  assert(oids[0]._id.equals(out[0]._id))
  assert(oids[1]._id.equals(out[1]._id))
})

it('should ignore missing ObjectIDs', function () {
  var out = sort([
    new ObjectID()
  ], [])

  assert.equal(0, out.length)
})

function toID(x) {
  return x._id
}
