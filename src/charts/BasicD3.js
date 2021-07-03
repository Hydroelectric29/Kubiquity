import React from 'react';
import * as d3 from 'd3';

export function initChart(height, width){
    d3.select("#chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("border", "1px solid black")
}

export function drawChart(height, width){
     const svg =  d3.select("#chart")
  //      .append("svg")
  //      .attr("width", width)
  //      .attr("height", height)
  //      .style("border", "1px solid black")
  //      .append("text")
  //      .attr("fill", "green")
  //      .attr("x", 50)
  //      .attr("y", 50)
  //       .text("Hello D3")
    var selection = svg.selectAll('react').data(data)
}

// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import { drawChart } from './charts/BasicD3';

const dataset = [
    [10, 20, 30, 40],
    [10, 40, 20, 30, 80, 10, 50],
    [60, ,30, 40, 20,]
]
let i = 0;

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        drawChart(400, 600);
    }, []);

     const changeChart = () => {
        drawChart(400, 600, dataset[i++]);
        if(i === dataset.length) i = 0;
    }


    return (
        <div className="App">
            <h2>Graphs with React</h2>
            <button onClick={changeChart}>Change Data</button>
            <div id="chart">
            </div>
        </div>
    );
}

export default App;