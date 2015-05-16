var Wall = require('./wall');
var inherits = require('inherits');

inherits(Player, Wall);

Player.prototype.updatePosition = function(location) {
  var centerPoint = {
    x: game.width / 2,
    y: game.height / 2
  };
  
  location.x -= centerPoint.x;
  location.y -= centerPoint.y;
  
  var angle = Math.atan2(location.y, location.x);
  angle -= this.size / 2; // centering the angle
  if(angle < 0)
    angle += 2 * Math.PI;
  
  this.startAngle = angle;
  
  if(this.game.walls.length <= 0) {
    console.log('You win !');
    return;
  }
  
  var wallAbove = this.game.walls[0];
  W = wallAbove;
  P = this;
  
  var start = this.startAngle - wallAbove.startAngle;
  if(start < 0)
    start += 2 * Math.PI;
  
  if(start >= wallAbove.size && 
     start + this.size <= 2 * Math.PI && 
     this.size <= 2 * Math.PI - wallAbove.size) { // the opening must be larger
    this.radius += THICKNESS * 2;
    this.game.wallsLeft.push(this.game.walls.shift());
  }
};

Player.prototype.draw = function(draw, i) {
  draw.beginPath();
  draw.imageSmoothingEnabled = true;
  draw.arc(game.width / 2, game.height / 2, this.radius, this.startAngle, this.startAngle + this.size, false);
  draw.lineWidth = THICKNESS;
  draw.strokeStyle = this.color;
  draw.stroke();
  draw.closePath();
};

function Player(options) {
  for(var i in options) {
    this[i] = options[i];
  }
  console.log('Player initialized', this);
}

module.exports = Player;