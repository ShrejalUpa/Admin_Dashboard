import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex gap-[2rem] px-[3rem] py-[1rem]'>
      <div>
      <NavLink to="">Edit</NavLink>
      </div>
      <div>
      <NavLink to="preferences">Preferences</NavLink>
      </div>
      <div>
      <NavLink to='security'>Security</NavLink>
      </div>
      
    </div>
  )
}

export default Header
