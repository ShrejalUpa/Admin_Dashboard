import React from 'react'
import profile from '../../imgs/profile.jpg'

const Edit = () => {
  return (
    <>
    <div className='lg:flex lg:justify-between'>
     
             <div class="lg:w-[30%] mt-[3rem]">
                 <img src={profile} alt="Profile" class=" mx-auto mt-2 object-top w-[50%] h-[20vh] rounded-full m-0"/>

            </div>   
  
                <div class="md:w-2/3 sm:w-auto px-4 py-8 lg:w-[70%]">
                    <div class="mb-4">
              <div class="flex flex-col sm:flex-row gap-4">
                <div class="md:w-1/2">
                  <label htmlFor="name" className="block mb-2">Your Name</label>
                  <input type="text" id="name" className="shadow-sm border rounded-xl w-full sm:w-full py-2 px-3 text-slate-500" value="Charlene Reed"/>
                </div>
              <div class="md:w-1/2">
              <label htmlFor="username" className="block mb-2">User Name</label>
              <input type="text" id="username" className="shadow-sm border rounded-xl w-full sm:w-full py-2 px-3 text-slate-500" value="Charlene Reed"/>
            </div>
          </div>
    
    
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="md:w-1/2">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" className="shadow-sm border rounded-xl w-full sm:w-full py-2 px-3 text-slate-500" value="charlenereed@gmail.com"/>
            </div>
            <div className="md:w-1/2">
              <label htmlFor="password" className="block mb-2">Password</label>
              <input type="password" id="password" className="shadow-sm border rounded-xl w-full sm:w-full py-2 px-3 text-slate-500" value="********"/>
            </div>
          </div>
        </div>
      
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row gap-4">
           <div className=" md:w-1/2">
              <label htmlFor="dob" className="block mb-2">Date of Birth</label>
              <input type="date" id="dob" className="shadow-sm border rounded-xl w-full sm:w-full py-2 px-3 text-slate-500" value="1990-01-25"/>
            </div>
            <div className="md:w-1/2">
              <label htmlFor="address" className="block mb-2">Present Address</label>
              <input id="address" className="shadow-sm border rounded-xl w-full sm:w-full py-2 px-3 text-slate-500" rows="1" value='San Jose, California, USA'/>
            </div>
          </div>
        </div>
      
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="md:w-1/2">
              <label htmlFor="paddress" className="block mb-2">Permanent Address</label>
              <input id="paddress" className="shadow-sm border rounded-xl w-full sm:w-full py-2 px-3 text-slate-500" rows="1" value='San Jose, California, USA'/>
            </div>
              <div className="md:w-1/2">
                <label htmlFor="city" className="block mb-2">City</label>
                <input type="text" id="city" className="shadow-sm border rounded-xl w-full sm:w-full py-2 px-3 text-slate-500" value="San Jose"/>
              </div>
            </div>
        </div>
      
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="md:w-1/2">
              <label htmlFor="postalcode" className="block mb-2">Postal Code</label>
              <input type="text" id="postalcode" className="shadow-sm border rounded-xl w-full sm:w-full py-2 px-3 text-slate-500" value="45962"/>
            </div>
            <div className="md:w-1/2">
              <label htmlFor="country" className="block mb-2 ">Country</label>
              <select id="country" className="shadow-sm border rounded-xl w-full sm:w-full py-2 px-3 text-slate-500">
                <option value="USA">USA</option>
                <option value="India">India</option>
                <option value="UK">UK</option>
              </select>
           </div>
          </div>
        </div>
          
        <button type="button" className="float-right bg-blue-900 hover:bg-blue-500 w-full sm:w-auto text-white font-bold py-2 px-20 rounded shadow-sm">Save</button>
      
                </div>
            
            </div>
    </div>
  </>

  )
}

export default Edit
