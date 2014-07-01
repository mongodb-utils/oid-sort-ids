
// this algorithm assumes that `.toHexString()`  is the expensive operation.
// i don't know if it actually is.

module.exports = function (docs, oids) {
  // we precalculate the array lengths
  // because we expect to use them all
  var docids = docs.map(toID)
  var indexes = docs.map(toIndex)
  var out = []
  var index

  for (var i = 0; i < oids.length; i++) {
    index = docids.indexOf(oids[i].toHexString())
    if (!~index) continue

    out.push(docs[indexes[index]])

    // never lookup this doc again
    docids.splice(index, 1)
    indexes.splice(index, 1)

    // return early if all docs are accounted for
    if (!docids.length) return out
  }

  return out
}

function toID(x) {
  return (x._id || x).toHexString()
}

function toIndex(a, i) {
  return i
}
