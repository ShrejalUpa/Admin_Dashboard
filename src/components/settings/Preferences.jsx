import React from 'react'
import { FaToggleOn } from "react-icons/fa";

const Preferences = () => {
  return (
    <>
     <div className="container mx-auto px-10 pb-[5rem]">
      <div className="flex flex-row md:flex-row md:space-x-8">
        <div className="flex-grow">
          <div className="mb-4">
            <div className="flex lg:flex-row flex-col w-full">
              <div className="w-full p-2">
                <label htmlFor="currency" className="block text-sm font-bold mb-2">Currency</label>
                <input type="currency" id="currency" className="shadow-sm border rounded-xl w-full py-2 px-3 text-slate-500 text-xs" value="USD"/>
              </div>
              <div className="w-full p-2">
                <label htmlFor="time-zone" className="block text-sm font-bold mb-2">Time Zone</label>
                <input type="time-zone" id="time-zone" className="shadow-sm border rounded-xl w-full py-2 px-3 text-slate-500 text-xs" value="(GMT-12:00) International Date Line West"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-4">
        <h2 class="text-sm font-bold mb-2">Notification</h2>
        <div class="flex-row flex-wrap -mx-2">
          <div class="w-full md:w-1/2 xl:w-1/3 p-2 text-xs">
            <label class=" flex-row mb-1" for="digital-currency">
            <div className='flex items-center gap-2'>
            <FaToggleOn className='text-[#81D4FA]' />
            I send or receive digital currency
            </div>
            </label>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 p-2 text-xs">
            <label class="flex-row mb-1" for="merchant-order">
           <div className='flex items-center gap-2'>
           <FaToggleOn />
              I receive merchant order
           </div>
            </label>
          </div>
          <div class="w-full md:w-1/2 xl:w-1/3 p-2 text-xs">
            <label class="flex-row mb-1" for="account-recommendations">
            <div className='flex items-center gap-2'>
            <FaToggleOn className='text-[#81D4FA]' />
            There are recommendations for my account
            </div>
            </label>
          </div>
        </div>
      </div>
      <button type="button" className="float-right bg-blue-900  w-full sm:w-auto hover:bg-blue-500 text-white font-bold py-2 px-20 rounded shadow-sm">Save</button>
    </div> 
    </>
  )
}

export default Preferences
