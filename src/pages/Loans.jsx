import React from 'react'
import Layout from '../components/Layout'
import Loan1 from '../imgs/Loan1.svg'
import Loan2 from '../imgs/Loan2.svg'
import Loan3 from '../imgs/Loan3.svg'
import Loan4 from '../imgs/Loan4.svg'

const Loans = () => {
  return (
    <Layout>
      <div className="">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-4 p-2">
          <div className="bg-white rounded-3xl">
            <img src={Loan1} alt="amount" />
          </div>
          <div className="bg-white rounded-3xl">
            <img src={Loan2} alt="amount" />
          </div>
          <div className="bg-white rounded-3xl">
            <img src={Loan3} alt="amount" />
          </div>
          <div className="bg-white rounded-3xl">
            <img src={Loan4} alt="amount" />
          </div>
        </div>

        <div>
          <h1 className="text-black/60 font-semibold text-xl mb-4">
            Active Loans Overview
          </h1>
          <div className="bg-white rounded-3xl overflow-x-auto scrollbar-hide">
            <table>
              <thead>
                <tr>
                  <th className="lg:px-10 px-2  py-2 border-b text-gray-400 hidden sm:table-cell">
                    SL NO
                  </th>
                  <th className="lg:px-10  py-2 border-b text-gray-400">
                    Loan Money
                  </th>

                  <th className="lg:px-10 border-b text-gray-400">
                    Left to repay
                  </th>
                  <th className="lg:px-10 px-2 border-b text-gray-400 hidden sm:table-cell">
                    Duration
                  </th>
                  <th className="lg:px-10 px-2 border-b text-gray-400 hidden sm:table-cell">
                    Interest rate
                  </th>
                  <th className="lg:px-10 px-2 border-b text-gray-400 hidden sm:table-cell">
                    Installment
                  </th>
                  <th className="lg:px-10 border-b text-gray-400">Repay</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    01
                  </td>
                  <td className="px-10 border-b">$100,000</td>
                  <td className="px-10 border-b">$40,500</td>
                  <td className="lg:px-10 px-2border-b hidden sm:table-cell">
                    8 Months
                  </td>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    12%
                  </td>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    $2,000/month
                  </td>
                  <td className="px-10 py-2 border-b border-b-zinc-200 rounded-full border-black">
                    <button className=" text-black py-1 px-4 rounded-full border border-black w-28">
                      Repay
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    02
                  </td>
                  <td className="px-10 border-b">$500,000</td>
                  <td className="px-10 border-b">$250,000</td>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    36 Months
                  </td>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    10%
                  </td>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    $8,000/month
                  </td>
                  <td className="px-10 border-b border-b-zinc-200 py-2 rounded-full border-black">
                    <button className=" text-black py-1 px-4 rounded-full border border-black w-28">
                      Repay
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    03
                  </td>
                  <td className="px-10 border-b">$900,000</td>
                  <td className="px-10 border-b">$40,500</td>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    12 Months
                  </td>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    12%
                  </td>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    $5,000/month
                  </td>
                  <td className="px-10 border-b border-b-zinc-200 py-2 rounded-full border-black">
                    <button className=" text-black py-1 px-4 rounded-full border border-black w-28">
                      Repay
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    04
                  </td>
                  <td className="px-10 border-b">$50,000</td>
                  <td className="px-10 border-b">$40,500</td>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    8 Months
                  </td>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    16%
                  </td>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    $10,000/month
                  </td>
                  <td className="px-10 border-b border-b-zinc-200 py-2 rounded-full border-black">
                    <button className=" text-black py-1 px-4 rounded-full border border-black w-28">
                      Repay
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    05
                  </td>
                  <td className="px-10 border-b">$50,000</td>
                  <td className="px-10 border-b">$40,500</td>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    8 Months
                  </td>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    12%
                  </td>
                  <td className="lg:px-10 px-2border-b hidden sm:table-cell">
                    $2,000/month
                  </td>
                  <td className="px-10 border-b border-b-zinc-200 py-2 rounded-full border-black">
                    <button className=" text-black py-1 px-4 rounded-full border border-black w-28">
                      Repay
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    06
                  </td>
                  <td className="px-10 border-b">$80,000</td>
                  <td className="px-10 border-b">$25,500</td>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    14 Months
                  </td>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    8%
                  </td>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    $2,000/month
                  </td>
                  <td className="px-10 border-b border-b-zinc-200 py-2 rounded-full border-black">
                    <button className=" text-black py-1 px-4 rounded-full border border-black w-28">
                      Repay
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    07
                  </td>
                  <td className="px-10 border-b">$12,000</td>
                  <td className="px-10 border-b">$5,500</td>
                  <td className="lg:px-10 px-2border-b hidden sm:table-cell">
                    9 Months
                  </td>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    13%
                  </td>
                  <td className="lg:px-10 px-2 border-b hidden sm:table-cell">
                    $500/month
                  </td>
                  <td className="px-10 border-b border-b-zinc-200 py-2 rounded-full border-black">
                    <button className=" text-black py-1 px-4 rounded-full border border-black w-28">
                      Repay
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="lg:px-10 px-2 border-b text-xs sm:text-lg hidden sm:table-cell">
                    08
                  </td>
                  <td className="px-10 border-b">$160,000</td>
                  <td className="px-10 border-b"> $100,800</td>
                  <td className="lg:px-10 px-2 border-b  hidden sm:table-cell">
                    3 Months
                  </td>
                  <td className="lg:px-10 px-2 border-b  hidden sm:table-cell">
                    12%
                  </td>
                  <td className="lg:px-10 px-2 border-b  hidden sm:table-cell">
                    $900/month
                  </td>
                  <td className="px-10 border-b border-b-zinc-200 py-2 rounded-full border-black">
                    <button className=" text-black py-1 px-4 rounded-full border border-black w-28">
                      Repay
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-10 py-2 text-red-500">Total</td>
                  <td className="px-10 text-red-500">$125,0000</td>
                  <td className="px-10 text-red-500">$750,000</td>
                  <td></td>
                  <td></td>
                  <td className="px-10 text-red-500 hidden sm:table-cell">
                    $50,000/month
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Loans
