import React, { useState } from "react";
import BarChart from "./BarChart";
const Tracker = () => {
  // const [data, setData] = useState([
  //   { date: "2024-02-01", totalHours: 8.5 },
  //   { date: "2024-02-02", totalHours: 6.25 },
  //   { date: "2024-02-03", totalHours: 6.5 },
  //   { date: "2024-02-04", totalHours: 7.25 },
  //   { date: "2024-02-05", totalHours: 7.5 },
  //   { date: "2024-02-06", totalHours: 8.75 },
  //   { date: "2024-02-07", totalHours: 4 },
  //   { date: "2024-02-08", totalHours: 6.5 },
  //   { date: "2024-02-09", totalHours: 4.5 },
  //   { date: "2024-02-10", totalHours: 8 },
  //   { date: "2024-02-11", totalHours: 7.25 },
  //   { date: "2024-02-12", totalHours: 7.5 },
  //   { date: "2024-02-13", totalHours: 7 },
  //   { date: "2024-02-14", totalHours: 8.75 },
  //   { date: "2024-02-15", totalHours: 6.25 },
  //   { date: "2024-02-16", totalHours: 6 },
  //   { date: "2024-02-17", totalHours: 4 },
  //   { date: "2024-02-18", totalHours: 6.25 },
  //   { date: "2024-02-19", totalHours: 5.25 },
  //   { date: "2024-02-20", totalHours: 5.5 },
  //   { date: "2024-02-21", totalHours: 7.25 },
  //   { date: "2024-02-22", totalHours: 7.5 },
  //   { date: "2024-02-23", totalHours: 7 },
  //   { date: "2024-02-24", totalHours: 8.75 },
  //   { date: "2024-02-25", totalHours: 6.25 },
  //   { date: "2024-02-26", totalHours: 6 },
  //   { date: "2024-02-27", totalHours: 4 },
  //   { date: "2024-02-28", totalHours: 6.25 },
  //   { date: "2024-02-29", totalHours: 5.25 },
  // ]);

  const [weekData, setWeekData] = useState([
    { weekdate: "2024-02-04", totalHours: 48.5 },
    { weekdate: "2024-02-11", totalHours: 46.25 },
    { weekdate: "2024-02-18", totalHours: 36.5 },
    { weekdate: "2024-02-25", totalHours: 37.25 },
  ]);

  return <BarChart weeksData={weekData} />;
};

export default Tracker;
