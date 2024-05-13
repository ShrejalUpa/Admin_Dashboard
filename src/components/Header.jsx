import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { LuBellDot } from "react-icons/lu";
import imgicons from '../imgs/icons.png' 
import { NavLink } from 'react-router-dom';
import { NavData } from '../Data/NavData';
import { AiOutlineMenuFold } from "react-icons/ai";


const Header = () => {
    const [openside, setOpenSide] = useState(false)
  return (
    <div>
            <div className='lg:flex lg:justify-between md:flex md:justify-between px-[1rem] w-full lg:h-[10vh] md:[10vh] h-[10vh] shadow-sm lg:mt-0 md:mt-0 mt-5'>
                    <div className='lg:flex lg:justify-between lg:items-center md:flex md:justify-between md:items-center flex justify-between w-full items-center gap-10'> 
                        <div className='lg:hidden md:hidden text-[1.6rem]'>
                            <AiOutlineMenuFold onClick={()=>setOpenSide(!openside)}  />
                        </div>
                        <div className='font-bold text-xl'>
                            <p>Overview</p>
                        </div>
                        <div className='lg:hidden md:hidden'>
                            <img src={imgicons} alt='logo' className='w-[30px] rounded-[50%]' />
                        </div>
                    </div>
                    
                    <div className='lg:flex lg:justify-center lg:items-center md:flex md:justify-between flex justify-center items-center md:items-center border rounded-xl px-2 gap-2 bg-gray-50 lg:hidden md:hidden lg:mt-0 md:mt-0 mt-5'>
                            <IoIosSearch className='text-gray-400' />
                            <input type='text' placeholder='search for something' className='bg-gray-50 text-sm w-[100%] p-[4px] px-[1.5rem]' />
                        </div>
                    

                    <div className='lg:flex  lg:items-center md:flex md:items-center gap-10 lg:w-full md:w-full hidden lg:block md:block'>
                        <div className='lg:flex lg:justify-center lg:items-center md:flex md:justify-between md:items-center border rounded-xl px-2 gap-2 bg-gray-50'>
                            <IoIosSearch className='text-gray-400' />
                            <input type='text' placeholder='search for something' className='bg-gray-50 text-sm p-[4px] px-[1.5rem] ' />
                        </div>
                        <div className=''>
                            <CiSettings />
                        </div>
                        <div className=''>
                            <LuBellDot className='text-red-500' />
                        </div>
                        <div className=''>
                            <img src={imgicons} alt='logo' className='w-[40px] rounded-[50%]' />
                        </div>
                
                    </div>
                    
                    
            </div>
            
            
            <div>
           
            </div>
       
    {
        openside &&(
            <div className='fixed left-0 top-0 w-full h-screen bg-white text-black px-2 py-[50px] flex-col z-10'>
            {
            NavData.map((item)=>{
                return(
                    <>
                    <div className='flex items-center m-2 p-2 gap-2 text-gray-500'>
                        <p>{item.icons}</p>
                        <NavLink to={item.path}>{item.name}</NavLink>
                    </div>
                    </>
                )
            })
        }
            </div>

        )
    }
   
    </div>
  )
}

export default Header
