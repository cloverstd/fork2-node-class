Animal = Class({
  constructor: function(name) {
    this.name = name;
  },
  move: function(meters) {
    alert(this.name + "moved " + meters + "m.");
  }
});

Snake = Class({
  move: function() {
    alert("Slithering...");
    this.super("move", 5);
  }
}, Animal);

Horse = Class({
  move: function() {
    alert("Galloping...");
    this.super("move", 45);
  }
}, Animal);

sam = new Snake("Sammy the Python");
tom = new Horse("Tommy the Palamino");
