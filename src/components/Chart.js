import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../api";
import { Line, Bar } from "react-chartjs-2";

const Chart = (props) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      console.log("start");
      setDailyData(await fetchDailyData());
    };
    console.log(dailyData);
    fetchApi();
  });

  // const lineChart = dailyData.length ? (
  //   <Line
  //     data={{
  //       labels: "",
  //       datasets: [{}, {}],
  //     }}
  //   />
  // ) : null;

  return <h1>Chart</h1>;
};
export default Chart;
