//
// class VectorAgent
//
// members: 
//    vector
//    position
//    heading
//    magnitude
//    velocity
//    angularVelocity
//    tail 
// methods:
//    move()
//    draw()

class VectorAgent {
  constructor( position, heading, magnitude, velocity, angularVelocity ) {
    this.vector = p5.Vector.fromAngle( heading );
    this.position = position;
    this.heading = heading;
    this.magnitude = magnitude;
    this.vector.setMag( magnitude );
   // this.vector.setHeading( heading );
    this.velocity = velocity;
    this.angularVelocity = angularVelocity;
    this.tail = createVector( this.position.x + this.vector.x, this.position.y + this.vector.y );
  }
    //
    // move()
    // 
  move() {
    this.position.add( this.velocity );
    this.heading += this.angularVelocity;
    this.vector.rotate( this.angularVelocity );
    this.tail.x = this.position.x+ this.vector.x;
    this.tail.y = this.position.y+ this.vector.y;
//    print( this.vector.heading() );
    if( this.position.x >= width || this.position.x <= 0 )
      this.velocity.x *= -1;
    if( this.position.y >= height || this.position.y <= 0 )
      this.velocity.y *= -1;
  }
    //
    // draw()
    // 
    draw() {
      strokeWeight( .5 );
      stroke( map( this.position.x, 0, width, 0, 255 ), 255, map( this.position.y, 0, height, 0, 255 ) );
    // print( this.magnitude );
     // circle( this.position.x, this.position.y, this.magnitude );
     line( this.position.x, this.position.y, this.position.x+this.vector.x, this.position.y+this.vector.y);
    }
}

