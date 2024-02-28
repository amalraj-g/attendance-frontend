import React, { useState } from 'react';
import BarChart from './BarChart';

const Timer = () => {

const [data, setData] = useState([
    { weekdate: '2024-02-04', totalHours: 48.5 },
    { weekdate: '2024-02-11', totalHours: 46.25 },
    { weekdate: '2024-02-18', totalHours: 36.5 },
    { weekdate: '2024-02-25', totalHours: 37.25 },
   
  ]);
  
  return (
    
       
      <BarChart data={data} />
    
  );
};

export default Timer;