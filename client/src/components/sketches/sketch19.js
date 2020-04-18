export default function sketch18(p) {

    class Perlin {
        constructor(x, y, diam, steps) {
            this.x = x;
            this.y = y;
            this.diam = diam;
            this.steps = steps;
            this.opacity = 102;
            this.r = p.random(255)
            this.g = p.random(255)
            this.b = p.random(255)
        }
        display() {
            console.log(p.mouseX, 'origin')
            //console.log(p.mouseX * p.noise(this.steps + p.random(1, 15)), 'noise');
            // var x = p.mouseX + p.mouseX * p.noise(this.steps + p.random(0, 10));
            // var y = p.mouseY + p.mouseY * p.noise(this.steps + p.random(0, 10));
            // var x = p.mouseX * p.noise(this.steps + p.random(1, 5)) * 2;
            // var y = p.mouseY * p.noise(this.steps + p.random(1, 5)) * 2;
            var x = p.mouseX * p.noise(this.steps + 1) * 2; /// multiplied it by 2 to get it back to closer to the 
            var y = p.mouseY * p.noise(this.steps + 3) * 2;
            // var r = p.random(255) //255 * p.noise(this.steps);
            // var g = p.random(255) //255 * p.noise(this.steps);
            // var b = p.random(255) //255 * p.noise(this.steps);
            console.log(x, 'noise')

            p.noStroke();
            p.fill(this.r, this.g, this.b);
            p.ellipse(x, y, this.diam, this.diam);
        }
        update() {
            this.steps += 0.01;

        }
    }


    p.setup = function () {
        p.createCanvas(500, 500);
        p.noFill()
        //p.background(240);
        for (var i = 0; i < 5; i++) {
            //if the values going into the constructor are always the same, it's drawing 5 instances of the ellipse on top of each other, while spinning around. //that's why i have a p.random value going in for the steps
            // for however many iterations i'm moving through, i need to have that many instances in the p.random - unlleesss i want some of the particles to share the same pathways as others. 
            let newPerlin = new Perlin(p.mouseX, p.mouseY, 15, p.random(0, 5));
            perlins.push(newPerlin)
        }

    }

    let perlins = []

    p.draw = function () {
        p.background(255, 15);
        for (let m = 0; m < perlins.length; m++) {
            perlins[m].display();
            perlins[m].update();
        }

    }

    p.checkInstanceNum = function () {
        return perlins.length

    }

    p.mousePressed = function () {
        let numIns = p.checkInstanceNum()
        let newPerlin = new Perlin(p.mouseX, p.mouseY, 15, p.random(0, numIns + 1));
        perlins.push(newPerlin)

    }

}