var inputData = [
  {
    "Name": "Coconut Creek N",
    "Jan 2015": 6141,
    "Jan 2014": 6610,
    "% Change": "-9.7%",
    "FY15 YTD": 23464,
    "FY14 YTD": 25971
  },
  {
    "Name": "Coconut Creek S",
    "Jan 2015": 7115,
    "Jan 2014": 7898,
    "% Change": "-12.5%",
    "FY15 YTD": 27359,
    "FY14 YTD": 31282
  },
  {
    "Name": "Coral Springs-Green",
    "Jan 2015": 3657,
    "Jan 2014": 3725,
    "% Change": "-9.3%",
    "FY15 YTD": 14616,
    "FY14 YTD": 16108
  },
  {
    "Name": "Coral Springs-Blue",
    "Jan 2015": 3325,
    "Jan 2014": 3193,
    "% Change": "0.9%",
    "FY15 YTD": 14134,
    "FY14 YTD": 14011
  },
  {
    "Name": "Dania Beach-Blue",
    "Jan 2015": 1897,
    "Jan 2014": 2308,
    "% Change": "-17.2%",
    "FY15 YTD": 8014,
    "FY14 YTD": 9683
  },
  {
    "Name": "Dania Beach-Green",
    "Jan 2015": 2473,
    "Jan 2014": 1443,
    "% Change": "41.6%",
    "FY15 YTD": 9639,
    "FY14 YTD": 6809
  },
  {
    "Name": "Davie-Green",
    "Jan 2015": 3097,
    "Jan 2014": 3376,
    "% Change": "-8.3%",
    "FY15 YTD": 13282,
    "FY14 YTD": 14477
  },
  {
    "Name": "Davie-Blue",
    "Jan 2015": 7496,
    "Jan 2014": 7536,
    "% Change": "-3.2%",
    "FY15 YTD": 28861,
    "FY14 YTD": 29819
  },
  {
    "Name": "Davie-SFEC",
    "Jan 2015": 6159,
    "Jan 2014": 7483,
    "% Change": "-16.7%",
    "FY15 YTD": 24777,
    "FY14 YTD": 29740
  },
  {
    "Name": "Deerfield Beach 1",
    "Jan 2015": 2693,
    "Jan 2014": 2100,
    "% Change": "27.2%",
    "FY15 YTD": 10664,
    "FY14 YTD": 8382
  },
  {
    "Name": "Deerfield Beach 2",
    "Jan 2015": 3140,
    "Jan 2014": 3399,
    "% Change": "-1.1%",
    "FY15 YTD": 13463,
    "FY14 YTD": 13613
  },
  {
    "Name": "FTL Sun Trolley-Downtown Loop",
    "Jan 2015": 8216,
    "Jan 2014": 7962,
    "% Change": "38.5%",
    "FY15 YTD": 32058,
    "FY14 YTD": 23151
  },
  {
    "Name": "FTL Sun Trolley-Las Olas Link",
    "Jan 2015": 4166,
    "Jan 2014": 5816,
    "% Change": "-37.4%",
    "FY15 YTD": 14275,
    "FY14 YTD": 22790
  },
  {
    "Name": "FTL Sun Trolley-Galt Link A",
    "Jan 2015": 1766,
    "Jan 2014": 1457,
    "% Change": "-3.9%",
    "FY15 YTD": 6128,
    "FY14 YTD": 6379
  },
  {
    "Name": "FTL Sun Trolley-Galt Link B",
    "Jan 2015": 2125,
    "Jan 2014": 1836,
    "% Change": "7.8%",
    "FY15 YTD": 7433,
    "FY14 YTD": 6898
  },
  {
    "Name": "FTL Sun Trolley-Beach Link",
    "Jan 2015": 14449,
    "Jan 2014": 15124,
    "% Change": "-22.8%",
    "FY15 YTD": 51302,
    "FY14 YTD": 66480
  },
  {
    "Name": "FTL Sun Trolley-Neighborhood Link",
    "Jan 2015": 3181,
    "Jan 2014": 3283,
    "% Change": "-20.5%",
    "FY15 YTD": 11536,
    "FY14 YTD": 14518
  },
  {
    "Name": "Hallandale Beach 1",
    "Jan 2015": 5649,
    "Jan 2014": 6651,
    "% Change": "10.0%",
    "FY15 YTD": 27249,
    "FY14 YTD": 24768
  },
  {
    "Name": "Hallandale Beach 2",
    "Jan 2015": 7002,
    "Jan 2014": 7427,
    "% Change": "2.9%",
    "FY15 YTD": 30066,
    "FY14 YTD": 29227
  },
  {
    "Name": "Hallandale Beach 3",
    "Jan 2015": 4721,
    "Jan 2014": 5948,
    "% Change": "-8.4%",
    "FY15 YTD": 21707,
    "FY14 YTD": 23689
  },
  {
    "Name": "Hillsboro Beach",
    "Jan 2015": 2368,
    "Jan 2014": 1881,
    "% Change": "16.1%",
    "FY15 YTD": 9260,
    "FY14 YTD": 7978
  },
  {
    "Name": "Lauderdale-by-the-Sea Pelican Hopper",
    "Jan 2015": 3877,
    "Jan 2014": 3134,
    "% Change": "20.1%",
    "FY15 YTD": 13759,
    "FY14 YTD": 11459
  },
  {
    "Name": "Lauderdale Lakes-Route 1",
    "Jan 2015": 5077,
    "Jan 2014": 4787,
    "% Change": "1.5%",
    "FY15 YTD": 20233,
    "FY14 YTD": 19943
  },
  {
    "Name": "Lauderdale Lakes-Route 2",
    "Jan 2015": 5713,
    "Jan 2014": 7092,
    "% Change": "-24.8%",
    "FY15 YTD": 21240,
    "FY14 YTD": 28234
  },
  {
    "Name": "Lauderhill-Route 1",
    "Jan 2015": 7853,
    "Jan 2014": 6726,
    "% Change": "11.9%",
    "FY15 YTD": 30326,
    "FY14 YTD": 27103
  },
  {
    "Name": "Lauderhill-Route 2",
    "Jan 2015": 9311,
    "Jan 2014": 9412,
    "% Change": "-0.4%",
    "FY15 YTD": 35970,
    "FY14 YTD": 36100
  },
  {
    "Name": "Lauderhill-Route 3",
    "Jan 2015": 8759,
    "Jan 2014": 7205,
    "% Change": "12.2%",
    "FY15 YTD": 33591,
    "FY14 YTD": 29928
  },
  {
    "Name": "Lauderhill-Route 4",
    "Jan 2015": 6560,
    "Jan 2014": 6303,
    "% Change": "-4.2%",
    "FY15 YTD": 25591,
    "FY14 YTD": 26712
  },
  {
    "Name": "Lauderhill-Route 5",
    "Jan 2015": 8473,
    "Jan 2014": 7073,
    "% Change": "12.3%",
    "FY15 YTD": 31880,
    "FY14 YTD": 28386
  },
  {
    "Name": "Lauderhill-Route 6",
    "Jan 2015": 4289,
    "Jan 2014": "NIS",
    "% Change": "N/A",
    "FY15 YTD": 17326,
    "FY14 YTD": "NIS"
  },
  {
    "Name": "Lauderhill-Route 7",
    "Jan 2015": 4071,
    "Jan 2014": "NIS",
    "% Change": "N/A",
    "FY15 YTD": 13234,
    "FY14 YTD": "NIS"
  },
  {
    "Name": "Lighthouse Point",
    "Jan 2015": 1018,
    "Jan 2014": 907,
    "% Change": "-0.3%",
    "FY15 YTD": 3958,
    "FY14 YTD": 3968
  },
  {
    "Name": "Margate A",
    "Jan 2015": 1395,
    "Jan 2014": 1524,
    "% Change": "-8.5%",
    "FY15 YTD": 5884,
    "FY14 YTD": 6432
  },
  {
    "Name": "Margate As**",
    "Jan 2015": 225,
    "Jan 2014": 131,
    "% Change": "274.6%",
    "FY15 YTD": 854,
    "FY14 YTD": 228
  },
  {
    "Name": "Margate C",
    "Jan 2015": 1518,
    "Jan 2014": 1508,
    "% Change": "8.6%",
    "FY15 YTD": 6651,
    "FY14 YTD": 6122
  },
  {
    "Name": "Margate D",
    "Jan 2015": 2011,
    "Jan 2014": 2428,
    "% Change": "9.8%",
    "FY15 YTD": 9467,
    "FY14 YTD": 8619
  },
  {
    "Name": "Miramar-Green",
    "Jan 2015": 4717,
    "Jan 2014": 4312,
    "% Change": "0.2%",
    "FY15 YTD": 17818,
    "FY14 YTD": 17779
  },
  {
    "Name": "Miramar-Red",
    "Jan 2015": 4448,
    "Jan 2014": 3635,
    "% Change": "5.1%",
    "FY15 YTD": 17087,
    "FY14 YTD": 16252
  },
  {
    "Name": "Miramar-Yellow",
    "Jan 2015": 3399,
    "Jan 2014": 3947,
    "% Change": "-8.9%",
    "FY15 YTD": 13898,
    "FY14 YTD": 15255
  },
  {
    "Name": "Miramar-Orange",
    "Jan 2015": 3562,
    "Jan 2014": 3063,
    "% Change": "15.5%",
    "FY15 YTD": 13412,
    "FY14 YTD": 11612
  },
  {
    "Name": "Pembroke Pines-Green",
    "Jan 2015": 5624,
    "Jan 2014": 5788,
    "% Change": "-2.1%",
    "FY15 YTD": 24132,
    "FY14 YTD": 24648
  },
  {
    "Name": "Pembroke Pines-Gold",
    "Jan 2015": 9636,
    "Jan 2014": 9183,
    "% Change": "-0.8%",
    "FY15 YTD": 37014,
    "FY14 YTD": 37310
  },
  {
    "Name": "Pembroke Pines-Blue East",
    "Jan 2015": 1387,
    "Jan 2014": 1034,
    "% Change": "34.4%",
    "FY15 YTD": 5440,
    "FY14 YTD": 4048
  },
  {
    "Name": "Pembroke Pines-Blue West",
    "Jan 2015": 1523,
    "Jan 2014": 1407,
    "% Change": "3.2%",
    "FY15 YTD": 6112,
    "FY14 YTD": 5923
  },
  {
    "Name": "Pompano Beach-Blue",
    "Jan 2015": 2622,
    "Jan 2014": 5250,
    "% Change": "-48.1%",
    "FY15 YTD": 10621,
    "FY14 YTD": 20471
  },
  {
    "Name": "Pompano Beach-Green",
    "Jan 2015": 1506,
    "Jan 2014": 1902,
    "% Change": "-14.1%",
    "FY15 YTD": 6867,
    "FY14 YTD": 7996
  },
  {
    "Name": "Pompano Beach-Red",
    "Jan 2015": 3375,
    "Jan 2014": 4418,
    "% Change": "-24.8%",
    "FY15 YTD": 12274,
    "FY14 YTD": 16329
  },
  {
    "Name": "Pompano Beach-Orange",
    "Jan 2015": 1631,
    "Jan 2014": 1671,
    "% Change": "-8.2%",
    "FY15 YTD": 6610,
    "FY14 YTD": 7202
  },
  {
    "Name": "Tamarac Red",
    "Jan 2015": 4889,
    "Jan 2014": 4504,
    "% Change": "10.8%",
    "FY15 YTD": 20127,
    "FY14 YTD": 18159
  },
  {
    "Name": "West Park",
    "Jan 2015": 730,
    "Jan 2014": "NIS",
    "% Change": "N/A",
    "FY15 YTD": 2539,
    "FY14 YTD": "NIS"
  }
];

var x = d3.scale.linear()
	.domain([0, d3.max(inputData, function(d) { 
		return d["Jan 2015"];
	})])
	.range([0, 420]);

d3.select(".chart")
	.selectAll("div")
	.data(inputData, function(d) { return d["Jan 2015"];})
	.enter().append("div")
	.style("width", function(d) { 
		return x(d["Jan 2015"]) + "px"; 
	})
	.text(function(d){ return d.Name; });