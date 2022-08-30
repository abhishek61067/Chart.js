import React from 'react';
import ReactDOM from 'react-dom/client';
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

import './App.css';
import { useState } from 'react';
import { UserData } from "./Data";


const App = () => {
  // chartjs is going to require two object with properties: labels, datasets
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "user gained",
      data: UserData.map((data) => data.userGain),
      backgroundColor: ["#118888", "lightblue", "#ddccaa", "grey", "#999944"],
      borderColor: "black",
      borderWidth: 2,
    }]
  });
  //we are now returning a jsx.
  return (
    <div className='App'>
      <div style={{ height: 30, }}></div>
      <div>Bar Chart</div>
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ height: 30, }}></div>
      <div>Line Chart</div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ height: 30, }}></div>
      <div>Pie Chart</div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>
    </div>

  )
}

export default App;


