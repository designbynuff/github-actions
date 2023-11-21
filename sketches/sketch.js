const canvasSketch = require('canvas-sketch');
const p5 = require("p5");
new p5();

const settings = {
  p5: true,
  dimensions: [400, 400],
};

// const settings = {
//   dimensions: [2048, 2048]
// };

const sketch = () => {
  return () => {
    background(0);
    stroke(255);
    noFill();
    rect(100, 100, 200, 200);
  };
};

canvasSketch(sketch, settings);
