import React from 'react'
import Layout from '../components/Layout'
import MonthlyGraph from '../components/Investments/MonthlyGraph'
import YearGraph from '../components/Investments/YearGraph'
import InvestAmonut from '../imgs/InvestAmount.svg'
import NumInvest  from '../imgs/NumInvest.svg'
import InvestedReturn from '../imgs/InvestedReturn.svg'
import { LuApple } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";


const Investments = () => {
  return (
    <Layout>
       <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl">
          <img src={InvestAmonut} alt="amount" />
        </div>
        <div className="bg-white rounded-3xl">
          <img src={NumInvest} alt="amount" />
        </div>
        <div className="bg-white rounded-3xl">
          <img src={InvestedReturn} alt="amount" />
        </div>
      </div>

      <div className='lg:flex lg:justify-between gap-5'>

         <div className='w-full h-[30vh] mb-[2rem]'>
          <h1 className='text-xl font-bold py-2'>Yearly Total Investments</h1>
          <div className='shadow-sm bg-white h-[30vh] w-full'>
          <YearGraph />
          </div>
         </div>

         <div className='w-full h-[30vh] mb-[2rem]'>
          <h1 className='text-xl font-bold py-2'>Monthly Revenue</h1>
          <div className='shadow-sm bg-white h-[30vh] w-full'>
          <MonthlyGraph />
          </div>
         </div>
          
      </div>


      <div className="flex flex-col md:flex-row justify-between py-4">
        <div className="lg:w-[55%] w-full">
          <h1 className="text-black font-semibold text-xl mb-4">
            My Investment
          </h1>
          <div className="bg-white flex p-4 mb-5 rounded-3xl">
            <div className="flex items-center">
              <div className="bg-red-200 h-8 w-8 flex justify-center rounded-lg items-center">
                <LuApple className="text-red-500 text-base" />
              </div>
              <span className="px-4 hidden sm:block">
                Apple Store{" "}
                <p className="text-gray-500">E-commerce marketplace</p>
              </span>
              <span className="px-4">
                $54,000 <p className="text-gray-500">Investment Value</p>
              </span>
              <span className="px-4 text-green-500">
                +16% <p className="text-gray-500">Return Value</p>
              </span>
            </div>
          </div>
          <div className="bg-white flex p-4 mb-5 rounded-3xl">
            <div className="flex items-center">
              <div className="bg-blue-200 h-8 w-8 rounded-lg flex justify-center items-center">
                <FaGoogle className="text-blue-500 text-base" />
              </div>
              <span className="px-4 hidden sm:block">
                Samsung Mobile{" "}
                <p className="text-gray-500">E-commerce marketplace</p>
              </span>
              <span className="px-4">
                $24,300 <p className="text-gray-500">Investment Value</p>
              </span>
              <span className="px-4 text-red-500">
                -4% <p className="text-gray-500">Return Value</p>
              </span>
            </div>
          </div>
          <div className="bg-white flex p-4 mb-5 rounded-3xl">
            <div className="flex items-center">
              <div className="bg-blue-200 h-8 w-8 rounded-lg flex justify-center items-center">
                <FaGoogle className="text-blue-500 text-base" />
              </div>
              <span className="px-4 hidden sm:block">
                Tesla Motors{" "}
                <p className="text-gray-500">E-commerce marketplace</p>
              </span>
              <span className="px-4">
                $24,300 <p className="text-gray-500">Investment Value</p>
              </span>
              <span className="px-4 text-red-500">
                -4% <p className="text-gray-500">Return Value</p>
              </span>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%]">
          <h1 className="text-black font-semibold text-xl mb-4">
            My Investment
          </h1>
          <div className="bg-white rounded-3xl">
            <table className="table">
              <thead>
                <tr>
                  <th className="p-2 border-b text-gray-500">SL No</th>

                  <th className="p-2 border-b text-gray-500">Name</th>
                  <th className="p-2 border-b text-gray-500">Price</th>
                  <th className="p-2 border-b text-gray-500">Return</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="p-3">01.</td>
                  <td className="p-3">Trivago</td>

                  <td className="px-10">$520</td>
                  <td className="px-10 text-green-400">+5%</td>
                </tr>
                <tr>
                  <td className="p-3">02.</td>

                  <td className="p-3">Canon</td>

                  <td className="px-10">$480</td>
                  <td className="px-10 text-green-400">+10%</td>
                </tr>
                <tr>
                  <td className="p-3">03.</td>
                  <td className="p-3">Trivago</td>

                  <td className="px-10">$520</td>
                  <td className="px-10 text-red-400">-3%</td>
                </tr>
                <tr>
                  <td className="p-3">04.</td>
                  <td className="p-3">Nokia</td>

                  <td className="px-10">$940</td>
                  <td className="px-10 text-green-400">+2%</td>
                </tr>
                <tr>
                  <td className="p-3">05.</td>
                  <td className="p-3">Tiktok</td>

                  <td className="px-10">$670</td>
                  <td className="px-10 text-red-400">-12%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Investments
