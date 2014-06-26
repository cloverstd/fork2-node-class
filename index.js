function Class(params) {
  if (params.initialize === undefined) {
    var b = function() {
    };
    return b;
  } else {
    var f = function() {
      // f is a constructor
      params.initialize.apply(this, arguments);
    };
    // f.constructor === f // true
    return f;
  }
}

module.exports = Class;
