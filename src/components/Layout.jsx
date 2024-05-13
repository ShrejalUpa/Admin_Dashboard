import React from 'react'
import Sidenavbar from './Sidenavbar'
import Header from './Header'

const Layout = ({children}) => {
  return (
  
     <div className='flex'>
        <div>
          <Sidenavbar />
        </div>
        <div className='w-full'>
            <Header/>
            <div className='bg-gray-50 p-8'>
                {children}
            </div>
        </div>
        
        
     </div>
     
 
  )
}

export default Layout
