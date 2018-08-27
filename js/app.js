 // Parameter: dt, a time delta between ticks
 Enemy.prototype.update = function(dt) {
   if (this.x < this.boundary){
     this.x += this.speed * dt;
   }
   else {
     this.x = this.reset;
   }
};
//
// // Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Place the player object in a variable called player
const player = new Player();

// Enemies our player must avoid
// Update the enemy's position, required method for game
const bug1 = new Enemy((-101 * 3), 166, 160);
const bug2 = new Enemy(-101, 83, 185);
const bug3 = new Enemy(-101, 166, 160);

// Place all enemy objects in an array called allEnemies
const allEnemies = [];
allEnemies.push(bug1, bug2, bug3);

// Player.handleInput() method. You don't need to modify this.
// This listens for key presses and sends the keys to your
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// *This code is inspired and encouraged by the tutorial of Matthew Cranford! Lots of credit to him!
