import React from "react";
import { Line , Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export function BarChart({ chartData }) {
    return <Bar data={chartData} 
    width="100%"
    height={90}
    style={{
      padding: "5px",
      backgroundColor: "#FAEBCD",
      border: "2px solid black",
      borderRadius: "10px"
    }}/>;
  }

function LineChart({ chartData }) {
  return <Line 
  data={chartData} 
  width="100%"
  height={90}
  style={{
    padding: "5px",
    backgroundColor: "#FAEBCD",
    border: "2px solid black",
    borderRadius: "10px"
  }}
  />;
}

export default LineChart;

