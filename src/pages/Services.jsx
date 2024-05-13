import React from 'react'
import service1 from '../../src/imgs/service1.svg'
import service2 from '../../src/imgs/service2.svg'
import service3 from '../../src/imgs/service3.svg'
import { LuApple } from "react-icons/lu";

import Layout from '../components/Layout'

const Services = () => {
  return (
    <Layout>
       <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl">
          <img src={service1} alt="amount" />
        </div>
        <div className="bg-white rounded-3xl">
          <img src={service2} alt="amount" />
        </div>
        <div className="bg-white rounded-3xl">
          <img src={service3} alt="amount" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row py-4">
        <div className="w-full">
          <h1 className="text-black font-semibold text-xl mb-4">
            My Investment
          </h1>
          <div className="bg-white flex py-2 px-4 mb-5 rounded-3xl justify-between">
            <div className="flex items-center">
              <div className="bg-red-200 h-8 w-8 flex justify-center rounded-lg items-center">
                <LuApple className="text-red-500 text-base" />
              </div>
              <span className="px-4 text-sm sm:text-base">
                Business Loans{" "}
                <p className="text-gray-500">E-commerce marketplace</p>
              </span>
            </div>
            <div className="sm:flex items-center hidden">
              <span className="px-4 text-sm sm:text-base">
                Lorem Ipsum<p className="text-gray-500">Many publishing</p>
              </span>
            </div>
            <div className="sm:flex items-center hidden text-sm sm:text-base">
              <span className="px-4 ">
                Lorem Ipsum<p className="text-gray-500">Many publishing</p>
              </span>
            </div>
            <div className="sm:flex items-center hidden">
              <span className="px-4 ">
                Lorem Ipsum<p className="text-gray-500">Many publishing</p>
              </span>
            </div>
            <button className="border-2 rounded-3xl text-sm sm:text-base px-5 py-1">
              View Details
            </button>
          </div>
          <div className="bg-white flex py-2 px-4 mb-5 rounded-3xl justify-between">
            <div className="flex items-center">
              <div className="bg-red-200 h-8 w-8 flex justify-center rounded-lg items-center">
                <LuApple className="text-red-500 text-base" />
              </div>
              <span className="px-4 text-sm sm:text-base">
                Checking Accounts{" "}
                <p className="text-gray-500">E-commerce marketplace</p>
              </span>
            </div>
            <div className="sm:flex items-center hidden">
              <span className="px-4 ">
                Lorem Ipsum<p className="text-gray-500">Many publishing</p>
              </span>
            </div>
            <div className="sm:flex items-center hidden">
              <span className="px-4 ">
                Lorem Ipsum<p className="text-gray-500">Many publishing</p>
              </span>
            </div>
            <div className="sm:flex items-center hidden">
              <span className="px-4 ">
                Lorem Ipsum<p className="text-gray-500">Many publishing</p>
              </span>
            </div>
            <button className="border-2 rounded-3xl text-sm sm:text-base  px-5 py-1">
              View Details
            </button>
          </div>
          <div className="bg-white flex py-2 px-4 mb-5 rounded-3xl justify-between">
            <div className="flex items-center">
              <div className="bg-red-200 h-8 w-8 flex justify-center rounded-lg items-center">
                <LuApple className="text-red-500 text-base" />
              </div>
              <span className="px-4 text-sm sm:text-base">
                Saving accounts{" "}
                <p className="text-gray-500">E-commerce marketplace</p>
              </span>
            </div>
            <div className="sm:flex items-center hidden">
              <span className="px-4 ">
                Lorem Ipsum<p className="text-gray-500">Many publishing</p>
              </span>
            </div>
            <div className="sm:flex items-center hidden">
              <span className="px-4 ">
                Lorem Ipsum<p className="text-gray-500">Many publishing</p>
              </span>
            </div>
            <div className="sm:flex items-center hidden">
              <span className="px-4 ">
                Lorem Ipsum<p className="text-gray-500">Many publishing</p>
              </span>
            </div>
            <button className="border-2 rounded-3xl text-sm sm:text-base px-5 py-1">
              View Details
            </button>
          </div>
          <div className="bg-white flex py-2 px-4 mb-5 rounded-3xl justify-between">
            <div className="flex items-center">
              <div className="bg-red-200 h-8 w-8 flex justify-center rounded-lg items-center">
                <LuApple className="text-red-500 text-base" />
              </div>
              <span className="px-4 text-sm sm:text-base">
                Debit and credit cards{" "}
                <p className="text-gray-500">E-commerce marketplace</p>
              </span>
            </div>
            <div className="sm:flex items-center hidden">
              <span className="px-4 ">
                Lorem Ipsum<p className="text-gray-500">Many publishing</p>
              </span>
            </div>
            <div className="sm:flex items-center hidden">
              <span className="px-4 ">
                Lorem Ipsum<p className="text-gray-500">Many publishing</p>
              </span>
            </div>
            <div className="sm:flex items-center hidden">
              <span className="px-4 ">
                Lorem Ipsum<p className="text-gray-500">Many publishing</p>
              </span>
            </div>
            <button className="border-2 text-sm sm:text-base rounded-3xl  px-5 py-1">
              View Details
            </button>
          </div>
          <div className="bg-white flex py-2 px-4 mb-5 rounded-3xl justify-between">
            <div className="flex items-center">
              <div className="bg-red-200 h-8 w-8 flex justify-center rounded-lg items-center">
                <LuApple className="text-red-500 text-base" />
              </div>
              <span className="px-4 text-sm sm:text-base">
                Life insurance{" "}
                <p className="text-gray-500">E-commerce marketplace</p>
              </span>
            </div>
            <div className="sm:flex items-center hidden">
              <span className="px-4 ">
                Lorem Ipsum<p className="text-gray-500">Many publishing</p>
              </span>
            </div>
            <div className="sm:flex items-center hidden">
              <span className="px-4 ">
                Lorem Ipsum<p className="text-gray-500">Many publishing</p>
              </span>
            </div>
            <div className="sm:flex items-center hidden">
              <span className="px-4 ">
                Lorem Ipsum<p className="text-gray-500">Many publishing</p>
              </span>
            </div>
            <button className="border-2 rounded-3xl text-sm sm:text-base  px-5 py-1">
              View Details
            </button>
          </div>
          <div className="bg-white flex py-2 px-4 mb-5 rounded-3xl justify-between">
            <div className="flex items-center">
              <div className="bg-red-200 h-8 w-8 flex justify-center rounded-lg items-center">
                <LuApple className="text-red-500 text-base" />
              </div>
              <span className="px-4 text-sm sm:text-base">
                Business Loans{" "}
                <p className="text-gray-500">E-commerce marketplace</p>
              </span>
            </div>
            <div className="sm:flex items-center hidden">
              <span className="px-4 ">
                Lorem Ipsum<p className="text-gray-500">Many publishing</p>
              </span>
            </div>
            <div className="sm:flex items-center hidden">
              <span className="px-4 ">
                Lorem Ipsum<p className="text-gray-500">Many publishing</p>
              </span>
            </div>
            <div className="sm:flex items-center hidden">
              <span className="px-4 ">
                Lorem Ipsum<p className="text-gray-500">Many publishing</p>
              </span>
            </div>
            <button className="border-2 text-sm sm:text-base rounded-3xl  px-5 py-1">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Services
