function Class(params) {
  var f;

  if (params === undefined) {
    f = function() {};
  } else {
    f = params.initialize ? params.initialize : function() {};
  }

  for (var key in params) {
    if (key !== "initialize") {
      f.prototype[key] = params[key];
    }
  }

  return f;
}


module.exports = Class;
