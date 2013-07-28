module.exports = {

  negative: function(a, b) {
    b.x = -a.x; b.y = -a.y; b.z = -a.z;
    return b;
  },

  add: function(a, b, c) {
    if (b instanceof Vector) { c.x = a.x + b.x; c.y = a.y + b.y; c.z = a.z + b.z; }
    else { c.x = a.x + b; c.y = a.y + b; c.z = a.z + b; }
    return c;
  },

  subtract: function(a, b, c) {
    if (b instanceof Vector) { c.x = a.x - b.x; c.y = a.y - b.y; c.z = a.z - b.z; }
    else { c.x = a.x - b; c.y = a.y - b; c.z = a.z - b; }
    return c;
  },

  multiply: function(a, b, c) {
    if (b instanceof Vector) { c.x = a.x * b.x; c.y = a.y * b.y; c.z = a.z * b.z; }
    else { c.x = a.x * b; c.y = a.y * b; c.z = a.z * b; }
    return c;
  },

  divide: function(a, b, c) {
    if (b instanceof Vector) { c.x = a.x / b.x; c.y = a.y / b.y; c.z = a.z / b.z; }
    else { c.x = a.x / b; c.y = a.y / b; c.z = a.z / b; }
    return c;
  },

  cross: function(a, b, c) {
    c.x = a.y * b.z - a.z * b.y;
    c.y = a.z * b.x - a.x * b.z;
    c.z = a.x * b.y - a.y * b.x;
    return c;
  },

  unit: function(a, b) {
    var length = a.length();
    b.x = a.x / length;
    b.y = a.y / length;
    b.z = a.z / length;
    return b;
  },

  fromAngles: function(theta, phi) {
    return new Vector(Math.cos(theta) * Math.cos(phi), Math.sin(phi), Math.sin(theta) * Math.cos(phi));
  },

  randomDirection: function() {
    return fromAngles(Math.random() * Math.PI * 2, Math.asin(Math.random() * 2 - 1));
  },

  min: function(a, b) {
    return new Vector(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.min(a.z, b.z));
  },

  max: function(a, b) {
    return new Vector(Math.max(a.x, b.x), Math.max(a.y, b.y), Math.max(a.z, b.z));
  },

  lerp: function(a, b, fraction) {
    return b.subtract(a).multiply(fraction).add(a);
  },

  fromArray: function(a) {
    return new Vector(a[0], a[1], a[2]);
  }

}
