import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const AccountGraph = () => {
    const data = [
        {
          name: 'sat',
          uv: 500,
          pv: 280,
        },
        {
          name: 'sun',
          uv: 400,
          pv: 100,
          
        },
        {
          name: 'mon',
          uv: 400,
          pv: 250,
          
        },
        {
          name: 'Tue',
          uv: 450,
          pv: 390,
         
        },
        {
          name: 'Web',
          uv: 250,
          pv: 150,
         
        },
        {
          name: 'Thu',
          uv: 400,
          pv: 250,
          
        },
        {
          name: 'Fri',
          uv: 400,
          pv: 350,
         
        },
      ];

      const CustomBar = (props) => {
        const { x, y, width, height, fill } = props;
        const radius = 10;
      
        return (
          <g>
            <rect x={x} y={y} width={width} height={height} fill={fill} rx={radius} ry={radius} />
          </g>
        );
      };
  return (
    <ResponsiveContainer width="100%" height="100%">
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      
    >
      <CartesianGrid stroke="transparent"  />
      <XAxis dataKey="name" axisLine={false} />
      <YAxis axisLine={false}   />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#0000ff" shape={<CustomBar />} />
      <Bar dataKey="uv" fill="#ffd700" shape={<CustomBar />} />
    </BarChart>
  </ResponsiveContainer>
  )
}

export default AccountGraph
