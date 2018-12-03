<template>
    <section :id="idMap"></section>
</template>

<script>
export default {
    name: "D3Map",
    props: {
      idMap: {
        type: String,
        required: true
      }
    },
    mounted () {
      this.$nextTick(_ => {
        const params = checkparasmBreakPoints()
        initD3Map(params.scale, params.coordenates, this.idMap)
        window.addEventListener('resize', this.onResize, true)
      })
    },
    methods: {
      onResize () {
        const element = document.querySelector(`#${this.idMap} svg`)
        element.parentNode.removeChild(element)
        const params = checkparasmBreakPoints()
        initD3Map(params.scale, params.coordenates, this.idMap)
      }
    }
}

function checkparasmBreakPoints () {
  let containerWidth = document.querySelector('.md-tab').clientWidth
  if (containerWidth === 0) containerWidth = document.querySelector('.tab-content').clientWidth

  if (containerWidth > 690) {
    return {
      scale: 70000,
      coordenates: [-74.00, 40.71]
    }
  } else if (containerWidth > 500) {
    return {
      scale: 65000,
      coordenates: [-73.80, 40.71]
    }
  } else if (containerWidth > 400) {
    return {
      scale: 45000,
      coordenates: [-73.5, 40.71]
    }  
  } else {
     return {
      scale: 35000,
      coordenates: [-73.3, 40.71]
    }     
  }
}

function initD3Map (scale = 70000, coordenates = [-74.00, 40.71], id) {
    var w = '100%',
    h = 520;

var projection = d3.geo.azimuthal()
        .mode("equidistant")
        .origin(coordenates)
        .scale(scale)

var path = d3.geo.path()
  .projection(projection);

var svg = d3.select(`#${id}`).insert("svg:svg", "h2")
  .attr("width", w)
  .attr("height", h);

var states = svg.append("svg:g")
  .attr("id", "states");

var circles = svg.append("svg:g")
  .attr("id", "circles");

var cells = svg.append("svg:g")
  .attr("id", "cells");

d3.select("input[type=checkbox]").on("change", function() {
cells.classed("voronoi", this.checked);
});

d3.json("./nyc.geojson", function(collection) {
states.selectAll("path")
    .data(collection.features)
  .enter().append("svg:path")
    .attr("d", path);
});

d3.csv("./data_rutas_voronoi.csv", function(routes) {
var linksByOrigin = {},
    countByArea = {},
    locationByArea = {},
    positions = [];

var arc = d3.geo.greatArc()
    .source(function(d) { return locationByArea[d.source]; })
    .target(function(d) { return locationByArea[d.target]; });

routes.forEach(function(route) {
  var origin = route.origin,
      destination = route.destination,
      links = linksByOrigin[origin] || (linksByOrigin[origin] = []);
  links.push({source: origin, target: destination});
  countByArea[origin] = (countByArea[origin] || 0) + 1;
  countByArea[destination] = (countByArea[destination] || 0) + 1;
});

d3.csv("./districts.csv", function(areas) {

  // Only consider airports with at least one flight.
  areas = areas.filter(function(area) {
    if (countByArea[area.iata]) {
      var location = [+area.longitude, +area.latitude];
      locationByArea[area.iata] = location;
      positions.push(projection(location));
      return true;
    }
  });

  // Compute the Voronoi diagram of airports' projected positions.
  var polygons = d3.geom.voronoi(positions);

  var g = cells.selectAll("g")
      .data(areas)
    .enter().append("svg:g");

  g.append("svg:path")
      .attr("class", "cell")
      .attr("d", function(d, i) { return "M" + polygons[i].join("L") + "Z"; })
      .on("mouseover", function(d, i) { d3.select("h4 span").text(d.iata); });

  g.selectAll("path.arc")
      .data(function(d) { return linksByOrigin[d.iata] || []; })
    .enter().append("svg:path")
      .attr("class", "arc")
      .attr("d", function(d) { return path(arc(d)); });

  circles.selectAll("circle")
      .data(areas)
    .enter().append("svg:circle")
      .attr("cx", function(d, i) { return positions[i][0]; })
      .attr("cy", function(d, i) { return positions[i][1]; })
      .attr("r", function(d, i) { return Math.sqrt(countByArea[d.iata]); })
      .sort(function(a, b) { return countByArea[b.iata] - countByArea[a.iata]; });
});
});
}
</script>

<style>
#states path {
  fill: #ccc;
  stroke: #fff;
}

path.arc {
  pointer-events: none;
  fill: none;
  stroke: #000;
  stroke-opacity: 0.5;
  display: none;
}

path.cell {
  fill: none;
  pointer-events: all;
}

circle {
  fill: #58b35a;
  fill-opacity: 0.7;
  stroke: #fff;
}

/* #cells.voronoi path.cell {
  stroke: brown;
} */

#cells g:hover path.arc {
  display: inherit;
}
</style>
