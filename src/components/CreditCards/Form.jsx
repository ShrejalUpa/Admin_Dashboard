import React from 'react'

const Form = () => {
  return (
    <div className='px-10 pt-10'>
      <p className='text-sm text-gray-400'>Credit Card generally means a pkastic card is issued by scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and servvices on credit or obtain cash advances</p>
      <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6 mt-[2rem]">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Card Type
                </label>
                <input class="appearance-none block w-full border rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder='Classic' />
                </div>
                <div class="w-full md:w-1/2 px-3">
                <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Name On Card
                </label>
                <input class="appearance-none block w-full border rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder='My Cards' />
                </div>
                <div class="w-full md:w-1/2 px-3">
                <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Card Number
                </label>
                <input class="appearance-none block w-full border rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder='**** **** **** ****' />
                </div>
                <div class="w-full md:w-1/2 px-3">
                <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Expiration Date
                </label>
                <input class="appearance-none block w-full border rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder='25 January 2025' />
                </div>
                <div className='mt-5'>
                    <button className='px-3 bg-blue-600 text-white text-xl rounded-2xl py-2'>Add Card</button>
                </div>
            </div>
        </form>
  </div>
 
 
  )
}

export default Form
