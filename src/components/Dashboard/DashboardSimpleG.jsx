import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const DashboardSimpleG = () => {
   
const data = [
  {
    name: 'Jul',
    uv: 100,
    pv: 200,
    amt: 210,
  },
  {
    name: 'Aug',
    uv: 200,
    pv: 108,
    amt: 2210,
  },
  {
    name: 'Sep',
    uv: 100,
    pv: 300,
    amt: 2290,
  },
  {
    name: 'Oct',
    uv: 700,
    pv: 508,
    amt: 2000,
  },
  {
    name: 'Nov',
    uv: 600,
    pv: 400,
    amt: 2181,
  },
  {
    name: 'Dec',
    uv: 250,
    pv: 400,
    amt: 2500,
  },
  {
    name: 'Jan',
    uv: 500,
    pv: 400,
    amt: 2100,
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" axisLine={false}/>
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#B3E5FC" fill="#E1F5FE" />
        </AreaChart>
      </ResponsiveContainer>
  )
}

export default DashboardSimpleG
