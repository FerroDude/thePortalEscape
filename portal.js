class Portal {
  constructor(game, x, y, hitWall) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 80;
    this.color = 'green';
    this.hitWall = hitWall;
  }

  paint() {
    const context = this.game.context;
    context.save();
    context.fillStyle = this.color;
    if (this.hitWall) {
      context.fillRect(this.x, this.y, this.width, this.height);
    }
    if (this.hitWall === false) {
      context.fillRect(this.x, this.y, this.width + 70, this.height - 70);
    }
    context.restore();
  }
}