XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var array_product = require('/Users/kvz/code/phpjs/src/php/array/array_product.js')

describe('php.array.array_product.js', function () {
  it('should pass example 1', function (done) {
    array_product([ 2, 4, 6, 8 ])
    var expected = 384
    var result = array_product([ 2, 4, 6, 8 ])
    expect(result).to.deep.equal(expected)
    done()
  })
})