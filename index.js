var diameter = 960,
	format = d3.format(",d"),
	color = d3.scale.category20c();

var bubble = d3.layout.pack()
	.sort(null)
	.size([diameter, diameter])
	.padding(1.5);

var svg = d3.select("body").append("svg")
	.attr("width", diameter)
	.attr("height", diameter)
	.attr("class", "bubble");

d3.csv("January2015Ridership.csv", function(error, data)
{
	data = data.map(function(d)
		{ 
			d.value = +d[" Jan 2014"]; 
			return d;
		});
	
	var nodes = bubble.nodes({children:data}).filter(function(d) { return !d.children; });
	
	var bubbles = svg.append("g")
		.attr("transform", "translate(0,0)")
		.selectAll(".bubble")
		.data(nodes)
		.enter();
		
	bubbles.append("circle")
		.attr("r", function(d){ return d.r; })
		.attr("cx", function(d){ return d.x; })
		.attr("cy", function(d){ return d.y; })
		.style("fill", function(d) { return color(d.value); });

	bubbles.append("text")
		.attr("x", function(d){ return d.x; })
		.attr("y", function(d){ return d.y + 5; })
		.attr("text-anchor", "middle")
		.text(function(d){ return d["Fruit"]; })
		.style({
				"fill":"white",
				"font-family":"Helvetica Neue, Helvetica, Arial, san-serif",
				"font-size":"12px"
		});
});