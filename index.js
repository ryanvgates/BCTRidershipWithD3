var diameter = 960,
	format = d3.format(",d"),
	color = d3.scale.category20c();

var bubble = d3.layout.pack()
	.sort(null)
	.size([diameter, diameter])
	.padding(1.5);

var body = d3.select("body"); 
var svg = body.append("svg")
	.attr("width", diameter)
	.attr("height", diameter)
	.attr("class", "bubble");

d3.csv("January2015Ridership.csv", function(error, root)
{
	if (error) throw error;

	var node = svg.selectAll(".node")
		.data(bubble.nodes(root))
		.enter().append("g")
		.attr("class", "node")
		.attr("transform", function(d) { 
			return "translate(" + d.x + ", " + d.y + ")";
		});

	node.append("title")
		.text(function(d) {
			return d.Name + ": " + format(d[" Jan 2014"]); 
		});

	node.append("circle")
		.attr("r", function(d) { 
			return d.r; 
		})
		.style("fill", function(d) { 
			return color(d.packageName); 
		});

	node.append("text")		
		.attr("dy", ".3em")
		.style("text-anchor", "middle");
});

d3.select(self.frameElement).style("height", diameter + "px");