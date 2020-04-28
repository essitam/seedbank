export default function sketch23(p) {
    const width = 500;
    const height = 500;
    //Bring this back when you bring back the bounce class
    //const elementSize = 25;
    //var t

    let direction = 1

    let r8 = 50
    let g8 = 122
    let b8 = 240
    let direc = 1

    let sourceText =
        "To imagine existence excluded from sociality is to have a sense of how limited whiteness is—an existence so narrow as to be a mirage. And yet a mirage that blows itself out of proportion at every turn. This is the power of neurotypicality: that it can structure whole existences without itself existing as such. Whiteness is that very paradox—a mirage policed to retain that which it ultimately never had, that which it never is.";
    //class definition for Circle - that acts as a constructor with var xy and diam...
    //It’s called a “class” definition because we’re defining a new “class” of object—a type of object that’s different from other types, in the same way that we might talk about the mammal “class” of animals.
    class Circle {
        constructor(x, y, diam, steps, r, g, b) {
            this.x = x;
            this.y = y;
            this.diam = diam;
            this.steps = steps;
            this.opacity = 102;
            this.r = r
            this.g = g
            this.b = b
        }
        display() {
            //let c = p.color(15, 26, 102, this.opacity);
            let c = p.color(this.r, this.g, this.b, this.opacity);
            //the fourth value is the alpha /// it can be extracted by passing c in to p.alph(c)
            p.fill(c)
            p.rectMode(p.CENTER)
            p.noStroke()
            //by writing this.daim * 0.4, rather then supplying a single num value, i'm allowing for the increasing diam size to proportionally change the radius size. 
            p.rect(this.x, this.y + this.steps, this.diam, this.diam, this.diam * 0.4, this.diam * 0.4);

            this.steps -= 0.01
        }
        update() {

            // if (p.mouseX - p.pmouseX > 10 && this.diam > 10) {
            //     this.diam -= 10;
            // } //shrinks all of them

            if (this.diam < 250) {
                this.diam += 1 //* p.noise(t) //this.steps;
                //p.filter(p.BLUR, 1);  
                //this.steps += 1
            }
            if (this.opacity >= 0) {
                this.opacity -= 1;
            }
            // t += 0.001
        }
        check4removal(i) {
            //console.log(circles.length)
            // if (this.diam === 1) {
            //     circles.splice(i, 1)
            // }
            if (this.opacity === 0) {

                circles.splice(i, 1)
            }
        }

        checkNumItems() {
            if (circles.length > 100) {
                circles.splice(0, 1);

            }
            // console.log(circles.length)
        }
    }


    class CircleCustom {
        constructor(x, y, diam, steps, r, g, b) {
            this.x = x - x / 4;
            this.y = y - y / 4;
            this.diam = diam;
            this.steps = steps;
            this.opacity = 102;
            this.r = r
            this.g = g
            this.b = b
            this.radius = this.diam * 0.4
        }
        display() {
            //let c = p.color(15, 26, 102, this.opacity);
            let c = p.color(this.r, this.g, this.b, this.opacity);
            p.stroke(c)
            p.strokeWeight(33)
            p.line(this.x, this.y + this.diam, this.x + this.diam - this.radius, this.y + this.diam)
            this.steps -= 0.01
        }
        update() {

            // if (p.mouseX - p.pmouseX > 10 && this.diam > 10) {
            //     this.diam -= 10;
            // } //shrinks all of them

            if (this.diam < 250) {
                this.diam += 1 //* p.noise(t) //this.steps;
                //p.filter(p.BLUR, 1);  
                //this.steps += 1
            }
            if (this.opacity >= 0) {
                this.opacity -= 1;
            }
            // t += 0.001
        }
        check4removal(i) {
            //console.log(circles.length)
            // if (this.diam === 1) {
            //     circles.splice(i, 1)
            // }
            if (this.opacity === 0) {

                circles.splice(i, 1)
            }
        }

        checkNumItems() {
            if (circles.length > 100) {
                circles.splice(0, 1);

            }
            // console.log(circles.length)
        }
    }


    class Background {
        constructor(x, y, diam, steps) {
            this.x = x;
            this.y = y;
            this.diam = diam;
            this.steps = steps;
            this.opacity = 102;
            // this.r = 255 * p.random(0.1, 1) //p.noise(this.steps + 10);
            // this.g = 255 * p.random(0.1, 1) //p.noise(this.steps + 15);
            // this.b = 255 * p.random(0.1, 1) //p.noise(this.steps + 20);
            this.r = 50 + this.steps
            this.g = 122 + this.steps
            this.b = 1 + this.steps
        }
        display() {
            // var x = width * p.noise(this.steps);
            // var y = height * p.noise(this.steps + 5);


            p.noStroke();
            // p.fill(this.r, this.g, this.b);
            // p.rect(0, 0, this.diam, this.diam);


        }
        update() {
            if (this.r < 255) {
                this.r += 1
                // this.steps += 1
            }
            console.log(this.r, 'hello?')
            //p.background(this.r, this.g, this.b);
            p.fill(this.r, this.g, this.b);
            p.rect(0, 0, this.diam, this.diam);
            // if (this.g < 255) {
            //     this.g += this.steps
            // }
            // if (this.b < 255) {
            //     this.b += this.steps
            // }


        }
    }
    class Word {
        constructor(x, y, fontSize, word) {
            this.x = x;
            this.y = y;
            this.fontSize = fontSize;
            this.word = word;
            this.speed = 1;
            //this.direc = 0; //p.cos(35);
            this.alpha = 1;
            //this.stroke = "white";
            this.opacity = 255;
            this.random = p.random(255)
            this.random2 = p.random(255)
            this.random3 = p.random(255)
            //deploying this means one unique color will be assigned to each time the constructor is called // rather then it being called continually within any of the functions below
            this.firstColor = "black";
            //if i equate this.fill to this.firstColor the first element drawn will be black - but every next instance is still being stacked on top if it with the color version so it isn't seen

        }
        display() {
            //remove this below to have the text just appear where mouse clicks
            //this.y += this.speed * this.direc;
            // this.y += p.cos(30);
            // this.x += p.cos(50);
            //this.y += this.speed * this.direc * p.cos(30);

            //var fillColor = p.color("white");
            //var fillColor = p.color(128 + 128 * p.cos(p.millis() / p.random(1000, 2000)), 128 + 128 * p.sin(p.millis() / 1000), 128 + 128 * p.cos(p.millis() / 1000));
            //var fillColor = p.color(128 + 128 * p.cos(p.millis() / p.random(1000, 1500)), 128 + 128 * p.sin(p.millis() / p.random(1000, 1500)), 128 + 128 * p.cos(p.millis() / p.random(1000, 1500)));
            var fillColor = p.color(
                this.random,
                this.random2,
                this.random3,
                this.opacity
            ); //this.color;
            //the above with the p.random has a bit of a flicker a few steps back in the color choices ///
            //below does the gradient shift thing
            //var fillColor = p.color(128 + 128 * p.cos(p.millis() / 2000), 128 + 128 * p.sin(p.millis() / 500), 128 + 128 * p.cos(p.millis() / 1000));

            //fillColor.setAlpha(this.alpha)
            p.fill(fillColor);
            //p.strokeWeight(3);
            //p.noStroke()
            //var lineColor = p.color(128 + 128 * p.cos(p.millis() / p.random(1000, 2000)), 128 + 128 * p.sin(p.millis() / 1000), 128 + 128 * p.cos(p.millis() / 1000));
            //var lineColor = this.color;
            //lineColor.setAlpha(128 + 128 * p.sin(p.millis() / 1000));
            //lineColor.setAlpha(this.alpha) //The range depends on your color mode, in the default RGB mode it's between 0 and 255.
            //p.stroke(lineColor);
            //p.noStroke()
            //p.stroke(this.stroke);
            p.textSize(this.fontSize);
            p.text(this.word, this.x, this.y);
        }
        update() {
            //   if (this.y > height) {
            //     this.direc = -5; //* p.cos(30)
            //     this.speed *= 1.2;
            //     this.fontSize -= 2;
            //     //this.alpha *= 10
            //     //this.stroke = 'black'
            //     //this.fill = 'black'
            //   }
            if (this.opacity >= 0) {
                this.opacity -= 1;
            }

            if (this.y < 5) {
                //this.direc += 3;
                //   //console.log(this.direc, 'before')
                //   this.direc = 5; //p.cos(45) //* p.sin(p.millis() / 100)
                //   //console.log(this.direc, 'after')
                //   this.speed *= 1.2;
                //   this.fontSize -= 2;
                //   //this.alpha *= 10
            }
            if (this.y < height) {
                this.fill = this.color;
                //this.stroke = 'white'
            }
        }
        check4removal(i) {
            if (this.fontSize < 0) {
                words.splice(i, 1);
            }
        }

    }

    class Vector {
        constructor(px, py, x, y, randnum) {
            this.beginX = px;
            this.beginY = py;
            this.endX = x;
            this.endY = y;
            this.distX = 0;
            this.distY = 0;
            this.exponent = 4; //determines the curve
            this.x = x;
            this.y = y;
            this.step = 0.06; // mess with this is you want more space between things
            this.pct = 0.0;
            this.random = randnum;
        }
        display() {
            //p.fill(0, 2);
            //p.rect(0, 0, width, height);
            //   p.fill(p.random(255), p.random(255), p.random(255));
            p.fill(255, 5);
            this.pct += this.step;
            this.distX = this.endX - this.beginX;
            this.distY = this.endY - this.beginY;
            //p.ellipse(this.x, this.y, 20, 20);
            //   p.beginShape();
            //   p.vertex(this.x, 20);
            //   p.vertex(this.y, 20);
            //   p.vertex(this.x, 80);
            //   p.endShape(p.CLOSE);

            //   p.beginShape();
            //   p.vertex(this.x, 20); ///p.vertex(this.x, p.random(5, width / 2));
            //   p.vertex(this.y, this.x);
            //   p.vertex(this.x, this.y);
            //   p.endShape(p.CLOSE);

            p.beginShape();

            p.quad(
                this.x + this.random,
                this.x + 31,
                this.x + 86,
                this.x + 20,
                this.random,
                this.y + 63,
                this.x + 30,
                this.y + this.random
            );

            //   p.quad(
            //     this.x - 10,
            //     this.x + 31,
            //     this.x + 20,
            //     this.y - 20,
            //     this.y + 20,
            //     this.y + 63,
            //     this.x + 30,
            //     this.y + 76
            //   );
            p.endShape();
        }
        update() {
            if (this.pct < 1.0) {
                this.x = this.beginX + this.pct * this.distX;
                this.y = this.beginY + p.pow(this.pct, this.exponent) * this.distY;
            }
        }
    }

    // class Bounce {
    //     constructor(x, y, diam, coloring) {
    //         this.x = x;
    //         this.y = y;
    //         this.speed = p.random(1, 5);
    //         this.diam = diam;
    //         this.direc = 1;
    //         this.setColor = coloring;

    //     }

    //     display() {
    //         this.y += this.speed * this.direc
    //         p.ellipse(this.x, this.y, this.diam, this.diam);
    //         p.stroke(this.setColor, 60, 200);
    //         //console.log(this.setColor)
    //         // need to figure out how to give a random color assignment to each bounce but when the instance is being continually drawn in the function draw, its calling the random function over and over.
    //     }
    //     update() {
    //         if (this.y > height) {
    //             this.direc = -1
    //             this.diam -= 1
    //             this.speed *= 1.2
    //         }
    //         if (this.y < 0) {
    //             this.direc = 1
    //             this.diam -= 1
    //             this.speed *= 1.2
    //         }
    //     }
    //     check4removal(i) {
    //         if (this.diam === 0) {
    //             bounces.splice(i, 1)
    //         }
    //     }
    // }

    let circles = [];
    let bounces = [];
    let sentenceParts = sourceText.split(" ");
    let words = [];
    let vectors = [];
    let backgrounds = [];
    //let ducks = []


    // this function can be used to remove items if they exceed a certain number//
    p.checkNumItems = function (arrayName) {
        if (arrayName.length > 50) {
            arrayName.splice(0, 1)
            //console.log(arrayName[0].diam)
            //circles[0].diam -= 1
        }
    }

    p.setup = function () {
        p.createCanvas(width, height);
        p.background(255)
        //TEMPORARILY TURNED OFF BACKGROUND
        //p.background(p.color(255, 0, 244));
        p.noFill()


        //t = 0;
        //p.frameRate(13) //this value needs to be an integer, not a string number
        // preload()
        // for (let i = 0; i < 10; i++) {
        //     // instantiating an object from the class.
        //     let newCirc = new Circle(
        //         p.random(width),
        //         p.random(height),
        //         300);
        //     circles.push(newCirc);
        // }
    };

    //this is a really hacky way of attaching random but from then on static values for the coloring. but so far every other method redraws the random value - which is not what i want


    //not a fan of these randomly generated colors yet. 
    //i'm trying to get it to print a deep pink but even the photoshop derived numbering just renders as red. pooooo this may be because the opacities are being drawn on top of each other? but still....
    let r = p.floor(p.random(0, 200))
    let g = p.floor(p.random(0, 255))
    let b = p.floor(p.random(0, 255))
    // let r2 = p.random(255)
    // let g2 = p.random(255)
    // let b2 = p.random(255)
    let r3 = p.floor(p.random(0, 255))
    let g3 = p.floor(p.random(0, 255))
    let b3 = p.floor(p.random(0, 255))



    console.log(r, g, b)


    // p.setBackgroundColor = function () {

    //     var r2 = 255 * p.noise(10);
    //     var g2 = 255 * p.noise(15);
    //     var b2 = 255 * p.noise(20);
    //     console.log(r2, g2, b2)
    //     p.background(r2, g2, b2);
    // }

    p.draw = function () {
        // -------->>>
        //I TURNED OFF THE BACKGroud - but put me back TOMORROW 
        //p.background(p.color(255, 50)); // fade the background by giving it a low opacity

        // var r2 = 255 * p.noise(10);
        // var g2 = 255 * p.noise(15);
        // var b2 = 255 * p.noise(20);
        // console.log(r2, g2, b2)
        // p.background(r2, g2, b2);
        //p.stroke("255");
        p.noStroke()
        p.ellipseMode(p.CENTER);



        //p.noFill();
        // p.text(sourceText, width / 2, height / 2)

        ///NOTE: A method is just a function that is the value for a key in an object. For example, try running this code in an empty p5.js sketch:

        for (let m = 0; m < backgrounds.length; m++) {
            backgrounds[m].display();
            backgrounds[m].update();
        }

        for (let m = 0; m < circles.length; m++) {
            // much cleaner!
            circles[m].display();
            circles[m].update();
            circles[m].check4removal(m);


            //checkNumItems();
        }


        p.checkNumItems(circles);

        for (let n = 0; n < bounces.length; n++) {
            bounces[n].display();
            bounces[n].update();
            bounces[n].check4removal(n);
        }

        for (let o = 0; o < words.length; o++) {
            words[o].display();
            words[o].update();
            words[o].check4removal(o);
        }

        for (let k = 0; k < vectors.length; k++) {
            vectors[k].display();
            vectors[k].update();
        }



        //if someone is resting their movement, draw circles
        // if (p.mouseX === p.pmouseX && p.mouseY === p.pmouseY) {
        //     let newCirc = new Circle(p.mouseX, p.mouseY, 30, 1);
        //     circles.push(newCirc);
        // }

        //is someone is moving, draw circles
        if (p.mouseX !== p.pmouseX && p.mouseY !== p.pmouseY) {
            let newLine = new CircleCustom(p.mouseX + p.random(1, 5), p.mouseY + p.random(1, 5), 25, 1, r, g, b);
            let newCirc = new Circle(p.mouseX + p.random(1, 5), p.mouseY + 10, 25, 1, r, g, b);
            let newCirc2 = new Circle(p.mouseX + p.random(1, 5), p.mouseY + 10, 20, 1, r, g, b);
            let newCirc3 = new Circle(p.mouseX + p.random(1, 5), p.mouseY + p.random(1, 5), 18, 1, r3, g3, b3);
            let newCirc4 = new Circle(p.mouseX + p.random(1, 5), p.mouseY + p.random(1, 5), 13, 1, r3, g3, b3);
            //let newCirc2 = new Circle(p.mouseX, p.mouseY, 20, 30);

            circles.push(newCirc);
            circles.push(newCirc2);
            circles.push(newCirc3);
            circles.push(newCirc4);
            //circles.push(newLine);

        }
        // let newBackground = new Background(0, 0, width, 1);
        // backgrounds.push(newBackground)

        // let millisecond = millis();
        // p.background()





        if (r8 < 255) {
            r8 += 1 * direc
        }

        if (r8 === 255) {
            direc = -1
        }

        if (r8 === 1) {
            direc = 1
        }

        if (g8 < 255) {
            g8 += 1
        }

        if (g8 === 255) {
            direc = -1
        }

        if (g8 === 1) {
            direc = 1
        }
        if (b8 < 255 && b8 > 0) {
            b8 -= 1
        }


        p.fill(r8, g8, b8)
        p.rect(0, 0, 100, 100)



    };

    let previousPos = [{
        x: 0,
        y: 0
    }];

    p.mousePressed = function () {



        // r = p.random(255)
        // g = p.random(255)
        // b = p.random(255)

        // let newCirc = new Circle(p.mouseX + p.random(1, 5), p.mouseY + p.random(1, 5), 100, 1, r, g, b);
        // let newCirc2 = new Circle(p.mouseX + p.random(1, 5), p.mouseY + p.random(1, 5), 10, 1, r, g, b);
        // let newCirc3 = new Circle(p.mouseX + p.random(1, 5), p.mouseY + p.random(1, 5), 5, 1, r, g, b);
        // //let newCirc2 = new Circle(p.mouseX, p.mouseY, 20, 30);
        // circles.push(newCirc);
        // circles.push(newCirc2);
        // circles.push(newCirc3);

        // let newPerlin = new Perlin(p.mouseX, p.mouseY, 5, 0);
        // perlins.push(newPerlin)
        //let coloring = p.floor(p.random(1, 255));
        // console.log(coloring)

        // let newCirc = new Circle(p.mouseX, p.mouseY, 150, 1);
        // circles.push(newCirc);

        //temporarily removing bounces
        // let newBounce = new Bounce(p.mouseX, p.mouseY, elementSize, coloring);
        // bounces.push(newBounce);
        // console.log(previousPos[0].x, "apples");

        //   let newVector = new Vector(
        //     previousPos[0].x,
        //     previousPos[0].y,
        //     p.mouseX,
        //     p.mouseY,
        //     p.random(0, width)
        //   );
        //   vectors.push(newVector);
        //   previousPos.splice(0, 1);
        //   previousPos.push({ x: p.mouseX, y: p.mouseY });

        // if (sentenceParts.length > 0) {
        //     let newWord = new Word(p.mouseX, p.mouseY, 52, sentenceParts[0]);
        //     sentenceParts.splice(0, 1);
        //     words.push(newWord);
        //     //console.log(words)
        // }
    };
}