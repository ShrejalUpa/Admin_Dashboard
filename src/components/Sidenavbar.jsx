import React, { } from 'react'
import { NavLink } from 'react-router-dom';
import { NavData } from '../Data/NavData';
import { MdOutlineCollectionsBookmark } from "react-icons/md";


const Sidenavbar = () => {
  
  return (
    <div className='flex h-[100vh]'>
      <div className='shadow-md pt-[1.2rem]'>
          <div className='lg:flex lg:justify-between lg:items-center md:flex md:justify-between md:items-center px-3 mt-3 hidden'>
              <MdOutlineCollectionsBookmark className='text-blue-500 text-xl' />
                <p className='text-xl font-bold'>BankDash</p>
          </div>
          
        {
            NavData.map((item)=>{
                return(
                    <>
                      <div className='lg:flex lg:items-center md:flex md:items-center m-2 p-2 py-4 gap-2 text-gray-500 hidden {({ isActive }) => (isActive ? activeLink : "")}'> 
                        <NavLink className='flex items-center gap-2' to={item.path}>{item.icons}{item.name}</NavLink>
                      </div>
                    </>
                )
            })
        }
      </div>

     
     
    </div>
  )
}

export default Sidenavbar
