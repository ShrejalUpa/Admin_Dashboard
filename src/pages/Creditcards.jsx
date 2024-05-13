import React from 'react'
import Layout from '../components/Layout'
import CreditCard from '../components/CreditCards/CreditCard'
import { MdOutlineAddCard } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";
import { RiGoogleLine } from "react-icons/ri";
import { AiOutlineApple } from "react-icons/ai";
import Form from '../components/CreditCards/Form';


const Creditcards = () => {
  return (
    <Layout>
        <div>
              <div>
                <CreditCard />
              </div>
              <div className="flex flex-col md:flex-row justify-between py-4 gap-5">
              <div className="lg:w-[40%]">
              <h1 className="text-black font-semibold text-xl mb-4">
              Crad Expense Statistics
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
            <div className="lg:w-[65%] w-full">
              <h1 className="text-black font-semibold text-xl mb-4">
              Card List
              </h1>
              <div className="bg-white flex p-4 mb-5 rounded-3xl">
                <div className="flex items-center">
                  <div className="bg-blue-200 h-8 w-8 flex justify-center rounded-lg items-center">
                    <MdOutlineAddCard className="text-blue-500 text-base" />
                  </div>
                  <span className="px-4">
                    Card Type{" "}
                    <p className="text-gray-500">Secondary</p>
                  </span>
                  <span className="px-4">
                    Bank{" "}
                    <p className="text-gray-500">DBL Bank</p>
                  </span>
                  <span className="px-4 hidden sm:block">
                    Card Number{" "}
                    <p className="text-gray-500">**** **** 5600</p>
                  </span>
                  <span className="px-4 hidden sm:block">
                    Namain Card{" "}
                    <p className="text-gray-500">William</p>
                  </span>
                  <span className="px-4">
                    <p className="text-blue-600 font-bold text-[16px]">View Details</p>
                  </span>

                  
                </div>
              </div>
              <div className="bg-white flex p-4 mb-5 rounded-3xl">
                <div className="flex items-center">
                  <div className="bg-red-200 h-8 w-8 flex justify-center rounded-lg items-center">
                    <MdOutlineAddCard className="text-red-500 text-base" />
                  </div>
                  <span className="px-4">
                    Card Type{" "}
                    <p className="text-gray-500">Secondary</p>
                  </span>
                  <span className="px-4">
                    Bank{" "}
                    <p className="text-gray-500">DBL Bank</p>
                  </span>
                  <span className="px-4 hidden sm:block">
                    Card Number{" "}
                    <p className="text-gray-500">**** **** 5600</p>
                  </span>
                  <span className="px-4 hidden sm:block">
                    Namain Card{" "}
                    <p className="text-gray-500">William</p>
                  </span>
                  <span className="px-4">
                    <p className="text-blue-600 font-bold text-[16px]">View Details</p>
                  </span>

                  
                </div>
              </div>
              <div className="bg-white flex p-4 mb-5 rounded-3xl">
                <div className="flex items-center">
                  <div className="bg-yellow-200 h-8 w-8 flex justify-center rounded-lg items-center">
                    <MdOutlineAddCard className="text-yellow-500 text-base" />
                  </div>
                  <span className="px-4">
                    Card Type{" "}
                    <p className="text-gray-500">Secondary</p>
                  </span>
                  <span className="px-4">
                    Bank{" "}
                    <p className="text-gray-500">DBL Bank</p>
                  </span>
                  <span className="px-4 hidden sm:block">
                    Card Number{" "}
                    <p className="text-gray-500">**** **** 5600</p>
                  </span>
                  <span className="px-4 hidden sm:block">
                    Namain Card{" "}
                    <p className="text-gray-500">William</p>
                  </span>
                  <span className="px-4">
                    <p className="text-blue-600 font-bold text-[16px]">View Details</p>
                  </span>

                  
                </div>
              </div>
            </div>
            
              </div>
              
              <div className='lg:flex gap-5'>
                <div className='lg:w-[60%]'>
                  <h1 className='lg:m-2  font-bold'>Add New Card</h1>
                    <div className='lg:h-[50vh] md:h-[50vh] h-[70vh] shadow-md rounded-3xl bg-white'>
                      <Form />
                    </div>
                </div>
                <div className="w-full lg:w-[40%]">
                  <h1 className="text-xl font-semibold py-4">Card Setting</h1>
                  <div className="bg-white rounded-3xl px-8 py-4">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>
                            <MdOutlineAddCard className="text-red-400 text-base" />
                          </td>
                          <td className="p-2 text-gray-400">
                            {" "}
                            Block Card<p className="text-gray-500">Instantly block your card</p>{" "}
                          </td>

                          <td className="px-10 text-gray-500">$450</td>
                        </tr>
                        <tr>
                          <td>
                            <FaUnlockAlt className="text-yellow-400 text-xl" />
                          </td>
                          <td className="p-2 text-gray-400">
                            {" "}
                            Micheal <p className="text-gray-500">2 days ago</p>{" "}
                          </td>

                          <td className="px-10 text-gray-500">$160</td>
                        </tr>
                        <tr>
                          <td>
                            <RiGoogleLine className="text-blue-400 text-xl" />
                          </td>
                          <td className="p-2 text-gray-400">
                            {" "}
                            Playstation <p className="text-gray-500">5 days ago</p>{" "}
                          </td>

                          <td className="px-10 text-gray-500">$1085</td>
                        </tr>
                        <tr>
                          <td>
                            <AiOutlineApple className="text-yellow-400 text-xl" />
                          </td>
                          <td className="p-2 text-gray-400">
                            {" "}
                            William <p className="text-gray-500">10 days ago</p>{" "}
                          </td>

                          <td className="px-10 text-gray-500">$90</td>
                        </tr>
                        <tr>
                          <td>
                            <AiOutlineApple className="text-yellow-400 text-xl" />
                          </td>
                          <td className="p-2 text-gray-400">
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

export default Creditcards
