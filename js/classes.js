class Entity{
  constructor(){
    this.sprite = "images/"
  }
  //render player
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

//create player
class Player extends Entity{
  constructor(){
    super();
    this.sprite += "char-boy.png";
    this.step = 101;
    this.jump = 83;
    this.startX = this.step * 2;
    this.startY = this.jump * 5;
    this.x = this.startX;
    this.y = this.startY;
    this.winner = false;
  }


  //add moves to Player
  handleInput(input){
    switch (input) {
      case 'left':
        if(this.x > 0){
            this.x -= this.step;
          }
            break;
          case 'up':
        if(this.y > 0){
            this.y -= this.jump;
          }
            break;
          case 'right':
        if(this.x < this.step * 4){
            this.x += this.step;
          }
            break;
          case 'down':
        if(this.y < this.jump * 5){
            this.y += this.jump;
          }
            break;
    }
  }

  update(){
    //check for hits
    for(let enemy of allEnemies){
      if (this.y === enemy.y && (enemy.x + enemy.step/2 > this.x && enemy.x < this.x + this.step/2)) {
        this.reset();
      }
    }
    //check if player won
    if(this.y === 0){
      this.winner = true;
      console.log("yippy");
    }
  }

  reset(){
    this.x = this.startX;
    this.y = this.startY;
  }
}

var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.step = 101;
    this.boundary = this.step * 5;
    this.reset = -this.step;
};
