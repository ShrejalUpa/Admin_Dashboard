import React from 'react'
import Layout from '../components/Layout'
import DashboardPie from '../components/Dashboard/DashboardPie';
import DashboardGraph from '../components/Dashboard/DashboardGraph';
import DashboardSimpleG from '../components/Dashboard/DashboardSimpleG';
import CreditCard from '../components/Dashboard/CreditCard';
import Carousel from '../components/Dashboard/Carousel';

const Dashboard = () => { 
 
  return (
   <Layout>
    <div className='overflow-hidden px-3 w-full'>
    <CreditCard />

     <div className='lg:flex gap-5 py-2'>
        <div className='lg:w-[70%]'>
          <h1 className='lg:m-2 font-bold'>Weekly Activity</h1>
            <div className='h-[40vh] shadow-md bg-white'>
              <DashboardGraph />
            </div>
        </div>
        <div className='lg:w-[30%]'>
          <h1 className='m-2 font-bold'>Expense Statistics</h1>
          <div className='h-[40vh] shadow-md bg-white'>
            <DashboardPie />
          </div> 
        </div>
     </div>

     <div className='lg:flex gap-5 pb-[3rem]'>
        <div className='lg:w-[40%]'>
          <h1 className='m-2 font-bold'>Quick Transfer</h1>
           <Carousel />
        </div>
        <div className='lg:w-[60%]'>
          <h1 className='m-2 font-bold'>Balance History</h1>
          <div className='h-[40vh] shadow-md bg-white'>
            <DashboardSimpleG />
          </div> 
        </div>
     </div>
     </div>
   </Layout>
  )
}

export default Dashboard
