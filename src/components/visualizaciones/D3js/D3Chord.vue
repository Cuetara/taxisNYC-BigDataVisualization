<template>
    <section :id="idChord"></section>
</template>

<script>
export default {
    name: "D3Chord",
    props: {
        idChord: {
            type: String,
            required: true
        }
    },
    data: () => ({
        element: undefined
    }),
    mounted () {
        this.$nextTick(_ => initD3Chord(this.idChord, this.element))
        window.addEventListener('resize', this.onResize, true);
    },
    methods: {
        onResize () {
            const element = document.querySelector(`#${this.idChord} svg`)
            if (element) element.parentNode.removeChild(element)
            initD3Chord(this.idChord)
        }
    }
}
function initD3Chord (id, element) {
    const MAX_WIDTH = 600
    const containerWidth = document.querySelector('.md-tab').clientWidth
    const standardWidth = containerWidth - containerWidth * 0.25

    var width = standardWidth < MAX_WIDTH ? containerWidth - containerWidth * 0.25 || 300 : MAX_WIDTH,
    height = standardWidth < MAX_WIDTH ? containerWidth - containerWidth * 0.25 || 300 : MAX_WIDTH,
    outerRadius = Math.min(width, height) / 2 - 10,
    innerRadius = outerRadius - 16;
    
    var formatPercent = d3.format(".1%");
    
    var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);
    
    var layout = d3.layout.chord()
    .padding(.04)
    .sortSubgroups(d3.descending)
    .sortChords(d3.ascending);
    
    var path = d3.svg.chord()
    .radius(innerRadius);
    
    window.d3Chord = element = d3.select(`#${id}`).append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("id", "circle")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    
    element.append("circle")
    .attr("r", outerRadius);
    
    d3.csv("./teams.csv", function(cities) {
        d3.json("./matrix.json", function(matrix) {  
            // Compute the chord layout.
            layout.matrix(matrix);
            
            // Add a group per neighborhood.
            var group = element.selectAll(".group")
            .data(layout.groups)
            .enter().append("g")
            .attr("class", "group")
            .on("mouseover", mouseover);
            
            // Add a mouseover title.
            // group.append("title").text(function(d, i) {
            // return cities[i].name + ": " + formatPercent(d.value) + " of origins";
            // });
            
            // Add the group arc.
            var groupPath = group.append("path")
            .attr("id", function(d, i) { return "group" + i; })
            .attr("d", arc)
            .style("fill", function(d, i) { return cities[i].color; });
            
            // Add a text label.
            var groupText = group.append("text")
            .attr("x", 6)
            .attr("dy", 15);
            
            groupText.append("textPath")
            .attr("xlink:href", function(d, i) { return "#group" + i; })
            .text(function(d, i) { return cities[i].name; });
            
            // Remove the labels that don't fit. :(
            groupText.filter(function(d, i) { return groupPath[0][i].getTotalLength() / 2 - 16 < this.getComputedTextLength(); })
            .remove();
            
            // Add the chords.
            var chord = element.selectAll(".chord")
            .data(layout.chords)
            .enter().append("path")
            .attr("class", "chord")
            .style("fill", function(d) { return cities[d.source.index].color; })
            .attr("d", path);
            
            // Add an elaborate mouseover title for each chord.
            chord.append("title").text(function(d) {
                return cities[d.source.index].name
                + " → " + cities[d.target.index].name
                + ": " + formatPercent(d.source.value)
                + "\n" + cities[d.target.index].name
                + " → " + cities[d.source.index].name
                + ": " + formatPercent(d.target.value);
            });
            
            function mouseover(d, i) {
                chord.classed("fade", function(p) {
                    return p.source.index != i
                    && p.target.index != i;
                });
            }
        });
    });
}
</script>

<style lang="scss">
#circle circle {
    fill: none;
    pointer-events: all;
}
 
.group path {
    fill-opacity: .5;
}
 
path.chord {
    stroke: #000;
    stroke-width: .25px;
}
 
#circle:hover path.fade {
    display: none;
}
 
svg {
    font: 12px sans-serif;
}
</style>
