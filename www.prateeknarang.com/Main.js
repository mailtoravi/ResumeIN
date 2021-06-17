var w = window.innerWidth;
var h = window.innerHeight;

var game = new Phaser.Game(w, h, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.add('PreloadState', PreloadState);
game.state.add('BootState', BootState);
game.state.start('BootState');