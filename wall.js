var Entity = require('crtrdg-entity');
var inherits = require('inherits');

inherits(Wall, Entity);

Wall.prototype.draw = function(draw, i) {
  draw.beginPath();
  draw.imageSmoothingEnabled = true;
  draw.arc(game.width / 2, game.height / 2, THICKNESS * (i * 2 + 2), this.startAngle, this.startAngle + this.size, false);
  draw.lineWidth = THICKNESS;
  draw.strokeStyle = this.color;
  draw.stroke();
  draw.closePath();
};

function Wall(options) {
  for(var i in options) {
    this[i] = options[i];
  }
  console.log('Wall initialized', this);
}

module.exports = Wall;