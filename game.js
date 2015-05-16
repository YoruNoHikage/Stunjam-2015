var Game = require('crtrdg-gameloop');
var Mouse = require('crtrdg-mouse');
var Wall = require('./wall.js');
var Player = require('./player.js');

THICKNESS = 10;
PI = Math.PI;

var generateWalls = function(number) {
  var walls = [];
  var pi = Math.PI;
  var start = pi / 16, end = pi / 4;
  
  for(var i = 0 ; i < number ; i++) {
    walls.push(new Wall({
      startAngle: Math.random() * 2 * Math.PI,
      size: 2 * pi - ((end - start) / number * i + start),
      color: "#008fff"
    }));
  }
  
  return walls;
};

var walls = generateWalls(15);
var wallsLeft = [];

var game = new Game({
  canvasId: 'game',
  width: 800,
  height: 800,
});
game.walls = walls;
game.wallsLeft = wallsLeft;

var player = new Player({
  radius: 10,
  startAngle: 0,
  size: Math.PI / 32,
  color: '#000',
});

walls.forEach(function(item, i) {
  item.on('draw', function(draw) {
    item.draw(draw, i);
  });
  item.addTo(game);
});
player.on('draw', player.draw);
player.addTo(game);

var mouse = new Mouse(game);

mouse.on('mousemove', function(location){
  player.updatePosition(location);
});

game.on('update', function(interval){
  if(!navigator.getGamepads()[0]) {
    return;
  }
  
  var controller = navigator.getGamepads()[0];
  var location = {
    x: controller.axes[0].toFixed(2) * game.width,
    y: controller.axes[1].toFixed(2) * game.height
  };
  player.updatePosition(location);
});