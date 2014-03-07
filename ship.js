(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  var MovingObject = Asteroids.MovingObject
  var Asteroid = Asteroids.Asteroid
  var Bullet = Asteroids.Bullet

  var Ship = Asteroids.Ship = function (){

MovingObject.call(this,[300,300],
  [0,0], this.RADIUS, this.COLOR);
  }

  Ship.inherits(MovingObject);

  Ship.prototype.COLOR = "red";
  Ship.prototype.RADIUS = 20;

  Ship.prototype.power = function(impulse){
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }

  Ship.prototype.fireBullet = function(){
    if(this.vel !== [0,0]){
      return (new Bullet(this.pos.slice(), this.vel));
    }
  }

})(this);
