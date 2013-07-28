var proto = require('./proto')
  , statics = require('./static');

module.exports = Vector;

function Vector(x, y, z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
}

Vector.prototype = proto;

for(var k in statics){
  Vector[k] = statics[k];
}
