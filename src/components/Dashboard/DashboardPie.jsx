import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const DashboardPie = () => {
    const labelStyle = {
        position: 'relative',
        textAlign: 'center',
        fontSize: '8px',
      };
    
      const nameStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        fontWeight: 'bold',
      };
    
      const percentStyle = {
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        fontSize: '8px',
      };
     
    const data = [
      { name: 'Entertainment', value: 400 },
      { name: 'Bill Expense', value: 300 },
      { name: 'Others', value: 300 },
      { name: 'Investment', value: 200 },
    ];
    
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    
    const RADIAN = Math.PI / 180;
    
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index,name }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" style={labelStyle}>
          <tspan style={nameStyle}>{name}</tspan>
          <tspan x={x} dy="1.2em" style={percentStyle}>{`${(percent * 100).toFixed(0)}%`}</tspan>
        </text>
      );
    };
  return (
    
       <ResponsiveContainer width="100%" height="100%">
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            paddingAngle={10}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    
  )
}

export default DashboardPie
