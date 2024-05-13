import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MonthlyGraph = () => {
    const data = [
        {
          name: 'Jul',
          uv: 100,
        },
        {
          name: 'Aug',
          uv: 200,
        },
        {
          name: 'Sep',
          uv: 100,
        },
        {
          name: 'Oct',
          uv: 700,
        },
        {
          name: 'Nov',
          uv: 600,
        },
        {
          name: 'Dec',
          uv: 250,
         
        },
        {
          name: 'Jan',
          uv: 500,
         
        },
      ];

  return (
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" axisLine={false}/>
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#00ffff " fill="#fff" />
        </AreaChart>
      </ResponsiveContainer>
  );
}

export default MonthlyGraph;
