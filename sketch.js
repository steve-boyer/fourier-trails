var vAgents;
var sketchBook;
var lastTail;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);

  sketchBook = createGraphics( width, height );
  
  vAgents = new Array();
  vAgents[0] = new VectorAgent(
    createVector(width / 2, height / 2),
    0,
    100,
    createVector(random(-2, 2), random(-2, 2) ),
    0.027
  );
  for (var i = 1; i < 5; i++) {
    vAgents.push(
      new VectorAgent(
        vAgents[i-1].tail,
        0,
        100-(i*10),
        createVector(random(-0.8, 0.8), random(-0.8, 0.8)),
        0.027+i/100
      )
    );
  }
  //background( 0, 60, 30 );
  lastTail = createVector(0,0);
  background( 0 );
}

function draw() {
 // background(20);
//background( 0, 60, 30 );
  //fill( 0, 60, 30, 1 );
  fill( 0, 0, 0, 1 );
  rect( 0, 0, width, height );
  lastTail.x = vAgents[ vAgents.length-1 ].tail.x;
  lastTail.y = vAgents[ vAgents.length-1 ].tail.y;
  for (var i = 0; i < vAgents.length; i++) {
    var x = vAgents[ i ].position.x;
    var y = vAgents[ i ].position.y;

    vAgents[i].move();
    var a = vAgents[ i ].position.x;
    var b = vAgents[ i ].position.y;
    vAgents[i].draw();
    if( i != 0 ) {
      
      sketchBook.stroke( map( vAgents[i].position.x, 0, width, 0, 255 ), 255, map( vAgents[i].position.y, 0, height, 0, 255 ) );
 //       sketchBook.line( x, y, a, b );
   // line( vAgents[ i ].tail.x, vAgents[ i ].tail.y,vAgents[ i-1 ].tail.x, vAgents[ i-1 ].tail.y );
 // sketchBook.point( vAgents[i].position.x, vAgents[i].position.y );
    }
      
  }
  newTail = vAgents[ vAgents.length-1].tail;
  sketchBook.stroke( 255 );

 // sketchBook.point( newTail.x, newTail.y )
  //sketchBook.line( lastTail.x, lastTail.y, newTail.x, newTail.y );
  image( sketchBook, 0, 0 );
}

function mousePressed( ){
  fullscreen( true );
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight );
}