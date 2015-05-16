var Entity = require('crtrdg-entity');
var inherits = require('inherits');

inherits(Wall, Entity);

//Wall.prototype

function Wall(options) {
  for(var i in options) {
    this[i] = options[i];
  }
  console.log(this);
}

module.exports = Wall;