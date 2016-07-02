
d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", function(error, data) {

    var result = data.data;
    var finalStr = '';
    generateToolTip(result);
  
    function generateToolTip(array) {

        for (var i = 0; i < array.length; i++) {

            var str = String(array[i]);
            var year = str.substr(0,4);
            var month = str.substr(5,2);

            var GDP = array[i][1];
            var GDPstr = "$" + GDP + " Billion USD";
            var dateStr = '';

            parseDate(month, year);

            function parseDate(month, year) {

                var quarter = '';

                if (month === "01") { quarter = "1st" }
                else if (month === "04") { quarter = "2nd" }
                else if (month === "07") { quarter = "3rd" }
                else if (month === "10") { quarter = "4th" }

                dateStr = quarter + " Quarter, " + year;

                return dateStr;

            }

        var finalStr = dateStr + '<br>' + GDPstr;
        array[i].push(finalStr);

        }

        return array;

    }
  
    var myData = [];
  
    for (var i = 0; i < result.length; i++) {
      myData[i] = result[i][1];
    }
  
		var margin = {
			top: 30,
			right: 30,
			bottom: 40,
			left: 75
		}
		var height = 600 - margin.top - margin.bottom;
		var width = 1100 - margin.right - margin.left;
		var animateDuration = 15;
		var animateDelay = 8;
		
    // Tooltip for Bar:hover Animation  
    var tooltip = d3.select('body').append('div')
      .attr('class', 'toolTip')

		
    // Initiate Scales for Chart:
    var yScale = d3.scale.linear()
			.domain([0, d3.max(myData)])
			.range([0, height]);
		var xScale = d3.scale.ordinal()
			.domain(d3.range(0, myData.length))
			.rangeBands([0, width])
		
    // Gradient function for bars:
    var colors = d3.scale.linear()
			.domain([0, myData.length])
			.range(['#44AFAF','#2FBF71'])
		
    // Plot Chart:
    var myChart = d3.select('#chart')
      .append('svg')
        .attr('class', 'svgElem')
				.attr('width', width + margin.right + margin.left)
				.attr('height', height + margin.top + margin.bottom)
				.append('g')
				.attr('transform', 'translate('+margin.left+','+margin.top+')')
				.style('background', '#FFF07C')
        .selectAll('rect')
					.data(myData)
					.enter().append('rect')
            .attr('class', 'barRect')
            .style('stroke', '#3C9B9B')
            .style('stroke-width', '1px')
						.style('fill', function(d, i){
							return colors(i);
						})
						.attr('width', xScale.rangeBand() + .5)
						.attr('height', 0)
						.attr('x', function(d, i){
							return xScale(i);
						})
						.attr('y', height)
				.on('mouseover', function(d, i){
					tooltip.transition()
						.style('opacity', 1)
					tooltip.html(result[i][2])
						.style('left', (d3.event.pageX)+'px')
						.style('top', (d3.event.pageY+'px'))
					d3.select(this).style('opacity', 1)
				})
				.on('mouseout', function(d){
					tooltip.transition()
						.style('opacity', 0)
					d3.select(this).style('opacity', 1)
				})
		
    myChart.transition()
			.attr('height', function(d){
				return yScale(d);
			})
			.attr('y', function(d){
				return height - yScale(d)
			})
			.duration(animateDuration)
			.delay(function(d, i){
				return i * animateDelay
			})			
    
    // X and Y Axis Scaling for chart:
		var yAxisScale = d3.scale.linear()
			.domain([0, d3.max(myData)])
			.range([height, 0]);
  
		var xAxisScale = d3.scale.ordinal()
			.domain(d3.range(1947, 2016))
			.rangeBands([0, width])

		// Y Axis
		var yAxis = d3.svg.axis()
			.scale(yAxisScale)
			.orient('left')
			.ticks(10)
			.tickPadding(6)
    
		//Y Axis Guide
		var yGuide = d3.select('svg')
		.append('g')
				yAxis(yGuide)
				yGuide.attr('transform','translate(' + margin.left + ',' + margin.top + ')')
		.attr('class', 'AxisStyle')
				yGuide.selectAll('path')
					.style('fill', 'none')
					.style('stroke', '#F2626F')
				yGuide.selectAll('line')
					.style('stroke', '#F2626F')
      
		//X Axis
		var xAxis = d3.svg.axis()
			.scale(xAxisScale)
			.orient('bottom')
      .tickPadding(7)
			.tickValues(xAxisScale.domain().filter(function(d, i){
				return !(i % (8));
			}));
  
		// X Axis Guide
		var xGuide = d3.select('svg')
			.append('g')
				xAxis(xGuide)
				xGuide.attr('transform','translate(' + margin.left + ',' + (height + margin.top) + ')')
          .attr('class', 'AxisStyle')
				xGuide.selectAll('path')
					.style('fill', 'none')
					.style('stroke', '#F2626F')
				xGuide.selectAll('line')
					.style('stroke', '#F2626F')
        
    d3.select("svg").append("text")
        .attr("x", 90)				
        .attr("y", 50)
        .attr('class', 'title')
        .text("Quarterly US GDP in $USD Billions");
  
});