
$(document).ready(function() {
  
  setTimeout(function() {
    $('.image').fadeOut(750);
  }, 1100);
  
});

getData();

function getData() {
    d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json', function(err, data) {
      
      var dopingStr;
      
      data.forEach(function(d) {
        d.Str = d.Time.substr(0,2) + "." + d.Time.substr(3,2);
        d.xSeconds = (Number(d.Seconds) - 2210) / 60;
        d.xVal = Number(d.Str);
        d.yVal = Number(d.Place);
        
        if (d.Doping.length > 1) { dopingStr = "<br>Doping Information: " + d.Doping }
        else { dopingStr = "<br>No doping information available"}
        
        d.html = "<span class='name'>Name: " + d.Name + "</span><br>Rank: " + d.Place + "<br>Time: " + d.Time + "<br>Year: " + d.Year + "<br>Nationality: " + d.Nationality + dopingStr;
        
      });
      
      console.log(data);
      render(data);
      
    });
    
var margin = {top: 50, right: 125, bottom: 65, left: 50};
var width  = 800 - margin.left - margin.right;
var height = 700 - margin.top - margin.bottom;

var svg = d3.select('#plot').append('svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    
var tooltip = d3.select('body').append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);
  
var xScale = d3.scale.linear().range([width, 0]);
var yScale = d3.scale.linear().range([0, height]);

function render(data) {
  
  xScale.domain([d3.min(data, function(d) { return d.xSeconds; }), d3.max(data, function(d) { return d.xSeconds; }) + 0.1 ]);
  yScale.domain([d3.min(data, function(d) { return d.yVal; }), d3.max(data, function(d) { return d.yVal; }) + 1.0 ]);

  var xAxis = d3.svg.axis().scale(xScale).orient('bottom');
  var yAxis = d3.svg.axis().scale(yScale).orient('left');

  xAxis.ticks(5);
  yAxis.ticks(10);
  
  svg.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis)
   .append('text')
    .attr('class', 'label')
    .attr('x', width)
    .attr('y', -6)
    .style('text-anchor', 'end')
    .text('Minutes Behind Top Record');
 
  svg.append('g')
    .attr('class', 'y axis')
    .call(yAxis)
   .append('text')
    .attr('class', 'label')
    .attr('transform', 'rotate(-90)')
    .attr('y', 1)
    .attr('dy', '1em')
    .style('text-anchor', 'end')
    .text('Overall Cyclist Ranking')
  
  svg.append('text')
    .attr('class', 'title')
    .attr('x', 35)
    .attr('y', -10)
    .text('Drug Use in Professional Cycling');
  
  svg.append('text')
    .attr('class', 'subtitle')
    .attr('x', 35)
    .attr('y', 15)
    .text('Fastest Times up Alpe d\'Huez in the Central French Alps');
  
  svg.append('text')
    .attr('class', 'codeCamp')
    .attr('x', -40)
    .attr('y', 645)
    .text("A Free Code Camp Project")
    .on('click', goCamp);
  
  svg.append('text')
    .attr('class', 'dash')
    .attr('x', 135)
    .attr('y', 645)
    .text("—");
  
  svg.append('text')
    .attr('class', 'links')
    .attr('x', 155)
    .attr('y', 645)
    .text("Data Source")
    .on('click', goLink);
  
  svg.append('text')
    .attr('class', 'details')
    .attr('x', 240)
    .attr('y', 645)
    .text('— hover plot points to see details or click a name for more information ~');

  var circles = svg.selectAll('circle').data(data);
  
  circles.enter().append('circle')
    .attr('class', 'circles')
    .on("mouseover", function(d) {
          tooltip.transition()
               .duration(200)
               .style("opacity", .9);
          tooltip.html(d.html)
               .style('position', 'absolute')
               .style("left", (d3.event.pageX + 5) + "px")
               .style("top", (d3.event.pageY - 28) + "px");
      })
    .on("mouseout", function(d) {
          tooltip.transition()
               .duration(500)
               .style("opacity", 0);
      })
  
  svg.selectAll('text.values')
    .data(data)
    .enter()
    .append('text')
    .attr('class', 'textLabels')
    .text(function(d) { return d.Name })
    .attr("x", function(d) { return xScale(d.xSeconds) + 10; })
    .attr("y", function(d) { return yScale(d.yVal) + 5; })
    .on('click', function(d) { window.open(d.URL)});
    
  circles
    .attr('cx', function(d) { return xScale(d.xSeconds) })
    .attr('cy', function(d) { return yScale(d.yVal) })
    .attr('r', 0)
    .transition()
    .duration(800)
    .attr('r', 6)
    .style('fill', '#49D49D')
    .style('stroke', 'rgb(40,40,40)')
    .style('stroke-width', 3);
  
} 
  
};

function goCamp() {

  window.open('https://www.freecodecamp.com/challenges/visualize-data-with-a-scatterplot-graph');

}

function goLink() {
  
    window.open('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json');
  
}