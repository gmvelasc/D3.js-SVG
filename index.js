console.log(d3)

let sel = d3.select('#chart')
let xScale = d3.scaleLinear()
  .domain([0,40])
  .range([0,200]);

sel.append('g')
  sel.selectAll('rect')
  .data([[1,0], [2,12.01],[3,10]])
  .enter()
    .append('rect')
    .text('row 1')

    .attr('x', d => 10 + 10*d[0])
    .attr('y', d => 100 - d[1])
    .attr('width', 5)
    .attr('height', d => d[1])
    .style('fill', 'black')

sel.append('g')
  .attr('transform', 'translate(10, 100)')
  .call(d3.axisBottom(xScale))