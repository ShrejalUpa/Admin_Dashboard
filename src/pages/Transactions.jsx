import React from 'react'
import Layout from '../components/Layout'
import CreditCard from '../components/Transactions/CreditCard'
import { Link } from 'react-router-dom'
import { TransactionsTab } from '../Data/NavData'
import { CiCircleChevDown } from "react-icons/ci";

const Transactions = () => {
  return (
    <Layout>
      <div>
        <div className=''>
        <CreditCard />
        </div>
      <div className='my-[3rem]'>
        <div className="px-4">
          <h1 className="text-black/70 mb-5 font-bold pt-[3rem]">Recent Transactions</h1>
          <div className="border-b border-gray-300">
            <nav className="-mb-px flex gap-x-10" aria-label="Tabs">
              <Link
                
                className="shrink-0 border-b-2 border-[#5151f8] px-1 pb-2 text-sm font-medium text-[#5151f8]"
                aria-current="page"
              >
                All Transactions
              </Link>

              <Link
                
                className="shrink-0 border-b-2 border-transparent px-1 pb-2 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Income
              </Link>

              <Link
                
                className="shrink-0 border-b-2 border-transparent px-1 pb-2 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Expense
              </Link>
            </nav>

            <div className='bg-white rounded-xl mt-[1rem]'>
              <table className='w-full overflow-hidden shadow-md'>
              <thead className='table-auto border-collapse w-full'>
                <tr className=''>
                  <th className="border p-4 text-gray-500 font-normal text-sm hidden sm:table-cell">Description</th>
                  <th className="border p-4 text-gray-500 font-normal text-sm hidden sm:table-cell">Transaction ID</th>
                  <th className="border p-4 text-gray-500 font-normal text-sm hidden sm:table-cell">Type</th>
                  <th className="border p-4 text-gray-500 font-normal text-sm hidden sm:table-cell">Card</th>
                  <th className="border p-4 text-gray-500 font-normal text-sm hidden sm:table-cell">Date</th>
                  <th className="border p-4 text-gray-500 font-normal text-sm hidden sm:table-cell">Amount</th>
                  <th className="border p-4 text-gray-500 font-normal text-sm hidden sm:table-cell">Receipt</th>
                </tr>
              </thead>
              <tbody className='p-2'>
                {
                  TransactionsTab.map((row,index)=>{
                    return(
                      <tr key={index}>
                      <td className="border p-4 text-sm flex items-center gap-2"><CiCircleChevDown className='text-xl' />{row.des}</td>
                      <td className="border p-4 text-sm hidden sm:table-cell">{row.id}</td>
                      <td className="border p-4 text-sm hidden sm:table-cell">{row.type}</td>
                      <td className="border p-4 text-sm hidden sm:table-cell">{row.card}</td>
                      <td className="border p-4 text-sm hidden sm:table-cell">{row.date}</td>
                      <td className="border p-4 text-sm">{row.amount}</td>
                      <td>
                        <button className='text-blue-700 hidden lg:block font-semibold py-2 px-4 text-sm border border-blue-500 rounded-3xl'>Download</button>
                      </td>
                    </tr>
                    )
                  })
                }
              </tbody>
              </table>
            </div>


          </div>
        </div>
      </div>
     
    </div>
    </Layout>
  )
}

export default Transactions
