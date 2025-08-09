import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';



const PieChart = ({data,height,width}) => {
    const svgRef = useRef();

    useEffect(() => {
      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove(); // Clear the previous chart before rendering
  
      svg.attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);
  
      const radius = Math.min(width, height) / 2;
  
      const pie = d3.pie()
        .value(d => d.value);
  
      const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);
  
      const color = d3.scaleOrdinal()
        .domain(data.map(d => d.name))
        .range(d3.schemeCategory10);
  
      const arcs = svg.select('g')
        .selectAll('arc')
        .data(pie(data))
        .enter()
        .append('g')
        .attr('class', 'arc');
  
      arcs.append('path')
        .attr('d', arc)
        .attr('fill', d => color(d.data.name));
  
      arcs.append('text')
        .attr('transform', d => `translate(${arc.centroid(d)})`)
        .attr('text-anchor', 'middle')
        .text(d => d.data.name)
        .style('fill', '#fff');
    }, [data, width, height]);
  return (
    <div className='h-[400px] mt-11'>
      <svg ref={svgRef}></svg>
    </div>
  )
}

export default PieChart


