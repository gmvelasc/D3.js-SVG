// https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
// Shapes.js author by @Gmvelasc

function init() {

  const svg = d3.select("body").append("svg")
    .attr("width", 200)
    .attr("height", 200)
    .style("background-color", "#A4C5F1");

  const circle1 = svg.append("circle")
    .attr("cx", 20)
    .attr("cy", 20)
    .attr("r", 30)
    .attr("fill", "blue");
     
  const ellipse1 = svg.append("ellipse")
    .attr("cx", 140)
    .attr("cy", 100)
    .attr("rx", 50)
    .attr("ry", 50)
    .attr("fill", "yellow");

const ellipse2 = svg.append("ellipse")
    .attr("cx", 170)
    .attr("cy", 70)
    .attr("rx", 20)
    .attr("ry", 30)
    .attr("fill", "pink");


  const polyline1 = svg.append("polyline")
    .attr("stroke", "black")
    .attr("fill", "none") 
    .attr("points", "60,80  65,100  0,115  80,125  0,200  90,135  95,200  100,145" );

  const polygon1 = svg.append("polygon")
    .attr("fill", "purple") 
    .attr("points", "50,160  55,180  70,180  60,190  65,205  50,195  35,205  40,190  30,180  45,180" );

  const text1 = svg.append("text")
    .attr("x", 20)
    .attr("y", 100)
    .attr("font-family", "calibri")
    .attr("font-size", "24px")
    .attr("fill", "blue")
    .text("CMPM35 2020")

    


}