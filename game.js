var Game = require('crtrdg-gameloop');
var Mouse = require('crtrdg-mouse');
var Wall = require('./wall.js');

var THICKNESS = 10;

var game = new Game({
  canvasId: 'game',
  width: 800,
  height: 800,
});

var walls = [
  new Wall({
    radius: 50, // todo : computed
    startAngle: 0,
    endAngle: 2 * Math.PI,
    color: '#008fff',
  }),
  new Wall({
    radius: 100,
    startAngle: 0,
    endAngle: 2 * Math.PI,
    color: '#008fff',
  }),
  new Wall({
    radius: 20,
    startAngle: 0,
    endAngle: 3/2 * Math.PI,
    color: '#008fff',
  }),
];
walls.forEach(function(item, i) {
  item.on('draw', function(draw){
    draw.beginPath();
    draw.imageSmoothingEnabled = true;
    draw.arc(game.width / 2, game.height / 2, THICKNESS * (i * 2 + 2), this.startAngle, this.endAngle, false);
    draw.lineWidth = THICKNESS;
    draw.strokeStyle = this.color;
    draw.stroke();
    draw.closePath();
  });
  item.addTo(game);
});

var mouse = new Mouse(game);

mouse.on('click', function(location){

});

game.on('update', function(interval){

});