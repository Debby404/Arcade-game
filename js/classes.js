class Entity {
    constructor(){
      this.sprite = '/images';
      this.x = 2;
      this.y =5;
    }
    render(){
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

class Player extends Entity {
    constructor(){
      super();
      this.sprite += 'enemy-bug.png';
    }
}

// var player = new Player;


// document.addEventListener('keyup', function(e) {
//     var allowedKeys = {
//         37: 'left',
//         38: 'up',
//         39: 'right',
//         40: 'down'
//     };
//
//     player.handleInput(allowedKeys[e.keyCode]);
// });
