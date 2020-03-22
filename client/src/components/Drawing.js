import React from "react";
import Sketch from "react-p5";

// const clickingHappening = val => {
//   console.log(val);
//   //   let status = false;
//   //   val = true ? (status = true) : (status = false);
//   //   return status;
// };

export default function Drawing() {
  var setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };

  function variableEllipse(x, y, px, py, p5) {
    let speed = p5.abs(x - px) + p5.abs(y - py);
    p5.stroke(speed);
    p5.ellipse(x, y, speed, speed);
  }

  var draw = p5 => {
    p5.background(0);
    // p5.background(244, 248, 252);
    // // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes

    p5.stroke(255);
    //The mouseIsPressed system variable in p5.js is used to store the boolean value. If mouse is pressed then it stores True otherwise store False.
    ///this is why simply if (p5.mousePressed) is not the right direction
    //pmouseX will be reset to the current mouseX value at the start of each touch event.
    //this is being called repeeatteeedddlllyyy like every second. this might be why the lines aren't persisting but reseting.
    //console.log(p5.mouseIsPressed);
    //console.log(clickingHappening);
    if (p5.mouseIsPressed) {
      p5.fill(p5.pmouseX % 255, p5.pmouseY % 255, p5.mouseY % 255);
      //p5.stroke(p5.pmouseX % 255, p5.pmouseY % 255, p5.mouseY % 255);
      //p5.line(p5.mouseX, p5.mouseY, 70, 70);
      //The system variable pmouseX always contains the horizontal position of the mouse in the frame previous to the current frame.
      //however, for some reason it's not holding this value for very long or at all.....
      //one potential reason :  the mouse coords are updated on mousemove, but the pmouse coords are updated each frame, so often the order of events causes them to end up the same. I
      p5.line(p5.mouseX, p5.mouseY, p5.pwinMouseX, p5.pwinMouseY);
      variableEllipse(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY, p5);
      p5.text("Mouse is Pressed", 120, 100);
      //p5.rect(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
      p5.ellipse(150, 150, 50, 50);
    } else {
      p5.rect(75, 75, 50, 50);
      p5.text("Mouse is Released", 120, 100);
    }
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
      onClick={function() {
        //setColor(chooseElement(paletteSquares));
        console.log("clicking");
      }}
    />
  );
}
