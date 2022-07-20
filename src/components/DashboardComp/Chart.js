import React from 'react'
import 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";

import "./chart.css";



function Chart() {

  const options = {


    plugins:{
      tooltip: {

        callbacks: {
          label: (data) => {
            let label = 'Eaten: ' + data.dataset.data[0] + 'g, Left: ' + data.dataset.data[1] + 'g'
            console.log(data.dataset)

      
            return label;
          }
        }
      }
  }
  };
  
  const data = {
    datasets: [
      {
        data: [55, 45],
        backgroundColor: ["rgb(80, 170, 80)", "#ccc"],

      },
      {
        data: [120, 245],
        backgroundColor: ["goldenrod", "#ccc"],

      },
      {
        data: [120, 180],
        backgroundColor: ["green", "#ccc"],
      }
    ]
  };


  return (
    <div className="App">
      <div className="chartContainer">
        <Doughnut data={data} options={options} height={400} width={400} />
        <div className="chartInner">
          <div className="chartStatus">KCAL LEFT</div>
          <div className="chartValue">475</div>
        </div>
      </div>

    </div>
  )
}

export default Chart