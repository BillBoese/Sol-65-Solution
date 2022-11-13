const xinc = 200;
const yinc = 200;
const colors = ["red", "yellow", "green", "blue"];
//jk change that to a proper numeric array later

      function setup() {
        createCanvas(1200, 800);
				//noLoop();
      }

      function draw() {
				background(255); // should be same as rgb 42,122,62
        noFill();
				strokeWeight(1);
				var off = 0;
				var damp = 2;
				frameRate(1);
				
 // in the original I could just go left to right drawing wiggly lines across
 // now i need to start and end more randomly
 // for now assume make all lines start and end on a border
 // make them curve more
 // pick 4 colors put in an array and loop through using them red green blue yellow
 // maybe try with rotate?
 // for loop won't do, do a while loop instead
				var x = 0;
				translate(width/2, height/2);
				while ( x < 550) { //5000 too much 500 too little
					stroke(colors[x % 4]);
					rotate(frameCount/TWO_PI);
					beginShape();
					var xst = 0;
					xst = random(-400,0);
					curveVertex(xst,0); // start anywhere on top going down
					for (y = -800; y <= height; y=y+yinc) {
						off = damp * random(-1*xinc/2, xinc/2);
						xst = xst + off;
						curveVertex(xst, y);
					}
					curveVertex(xst, y);
					endShape();
					x++;
				}
		}		