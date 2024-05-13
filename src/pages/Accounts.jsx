import React from 'react'
import Balance from "../imgs/balance.svg";
import Income from "../imgs/expense.svg";
import Expense from "../imgs/income.svg";
import Savings from "../imgs/savings.svg";
import { SiMastercard } from "react-icons/si";
import { MdOutlineCircleNotifications } from "react-icons/md";
import Layout from '../components/Layout'
import { LuApple } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { FaPlaystation } from "react-icons/fa";
import AccountGraph from '../components/Accounts/AccountGraph'

const Accounts = () => {
  return (
    <Layout>
      <div className="">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap- p-2">
        <div className="h-32 rounded-2xl bg-white flex items-center justify-center">
          <div>
            <img src={Balance} alt="react" />
          </div>
        </div>
        <div className="h-32 rounded-2xl bg-white flex items-center justify-center">
          <div>
            <img src={Income} alt="react" />
          </div>
        </div>
        <div className="h-32 rounded-2xl bg-white flex items-center justify-center">
          <div>
            <img src={Expense} alt="react" />
          </div>
        </div>
        <div className="h-32 rounded-2xl bg-white flex items-center justify-center">
          <div>
            <img src={Savings} alt="react" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-col lg:flex-row p-2 gap-x-4">
        <div className="w-full lg:w-[70%]">
          <h1 className="text-lg font-semibold">Last Transactions</h1>
          <div className="bg-white rounded-3xl px-8 py-4">
            <table className="table">
              <thead className="hidden">
                <tr>
                  <th>Song</th>

                  <th>Artist</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <MdOutlineCircleNotifications className="text-green-400" />
                  </td>
                  <td className="p-5">
                    {" "}
                    Spotify Subscription{" "}
                    <p className="text-gray-400">25 Jan 2024</p>{" "}
                  </td>
                  <td className="p-5 text-gray-400 hidden sm:table-cell">
                    Shopping
                  </td>
                  <td className="p-5  text-gray-400 hidden sm:table-cell">
                    1234*****
                  </td>
                  <td className="p-5  text-gray-400 hidden sm:table-cell">
                    Pending
                  </td>
                  <td className="p-5 text-red-500">-$150</td>
                </tr>
                <tr>
                  <td>
                    <MdOutlineCircleNotifications className="text-green-400" />
                  </td>
                  <td className="p-5">
                    {" "}
                    Mobile Service <p className="text-gray-400">
                      25 Jan 2024
                    </p>{" "}
                  </td>
                  <td className="p-5 text-gray-400 hidden sm:table-cell">
                    Shopping
                  </td>
                  <td className="p-5 text-gray-400 hidden sm:table-cell">
                    1234*****
                  </td>
                  <td className="p-5 text-gray-400 hidden sm:table-cell">
                    Pending
                  </td>
                  <td className="p-5 text-red-500">-$150</td>
                </tr>
                <tr>
                  <td>
                    <MdOutlineCircleNotifications className="text-green-400" />
                  </td>
                  <td className="p-5">
                    {" "}
                    Emilly Wilson <p className="text-gray-400">
                      25 Jan 2024
                    </p>{" "}
                  </td>
                  <td className="p-5 text-gray-400 hidden sm:table-cell">
                    Shopping
                  </td>
                  <td className="p-5 text-gray-400 hidden sm:table-cell">
                    1234*****
                  </td>
                  <td className="p-5 text-gray-400 hidden sm:table-cell">
                    Pending
                  </td>
                  <td className="p-5 text-green-500">-$780</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="h-32 w-[30%] mb-[10rem]">
          <div className="min-w-80">
            <h1 className="pb-5 text-lg font-semibold text-gray-700">
              My Cards
            </h1>
            <div className="h-54 rounded-3xl bg-gradient-to-bl from-blue-500 to-blue-400">
              <div className="flex justify-between p-6">
                <span className="text-white text-xs">
                  Balance <p className="text-lg font-normal">$5,756</p>
                </span>
                <image src={"/chip.svg"} width={40} height={40} alt="chip" />
              </div>
              <div className="flex gap-x-14 px-6 mb-7">
                <span className="text-gray-300 text-xs">
                  CARD HOLDER <p className="text-white text-sm">Eddy Cusuma</p>
                </span>
                <span className=" text-gray-300 text-xs">
                  VALID THRU<p className="text-white text-sm">12/22</p>
                </span>
              </div>
              <div className=" bg-gradient-to-br from-white/5 via-white/10 to-blue-400 rounded-b-3xl p-0">
                <div className="px-8 py-4 flex justify-between items-center">
                  <p className="text-white text-xl ">3778**** ****1234</p>
                  <SiMastercard className="text-4xl text-white/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='lg:flex gap-5'>
        <div className='lg:w-[60%]'>
          <h1 className='lg:m-2  font-bold'>Weekly Activity</h1>
            <div className='h-[50vh] shadow-md rounded-3xl bg-white'>
              <AccountGraph />
            </div>
        </div>
        <div className="w-full lg:w-[40%]">
        <h1 className="text-xl font-semibold py-4">Invoice Sent</h1>
        <div className="bg-white rounded-3xl px-8 py-4">
          <table className="table">
            <thead className="hidden">
              <tr>
                <th>Song</th>

                <th>Artist</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <LuApple className="text-red-400 text-base" />
                </td>
                <td className="p-5 text-gray-400">
                  {" "}
                  Apple Store <p className="text-gray-500">5hr ago</p>{" "}
                </td>

                <td className="px-10 text-gray-500">$450</td>
              </tr>
              <tr>
                <td>
                  <CiUser className="text-yellow-400 text-xl" />
                </td>
                <td className="p-5 text-gray-400">
                  {" "}
                  Micheal <p className="text-gray-500">2 days ago</p>{" "}
                </td>

                <td className="px-10 text-gray-500">$160</td>
              </tr>
              <tr>
                <td>
                  <FaPlaystation className="text-blue-400 text-xl" />
                </td>
                <td className="p-5 text-gray-400">
                  {" "}
                  Playstation <p className="text-gray-500">5 days ago</p>{" "}
                </td>

                <td className="px-10 text-gray-500">$1085</td>
              </tr>
              <tr>
                <td>
                  <CiUser className="text-yellow-400 text-xl" />
                </td>
                <td className="p-5 text-gray-400">
                  {" "}
                  William <p className="text-gray-500">10 days ago</p>{" "}
                </td>

                <td className="px-10 text-gray-500">$90</td>
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

export default Accounts
