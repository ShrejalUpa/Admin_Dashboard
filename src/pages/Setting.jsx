import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/settings/Header'
import { Outlet } from 'react-router-dom'

const Setting = () => {
  return (
    <Layout>
      <div className='bg-gray-50 h-screen'>
      <div className='bg-white rounded-2xl'>
      <Header />
      <hr className='text-gray-300 pb-[1rem]' />
      <div className='w-full'>
        <Outlet />
      </div>
      </div>
      </div>
    </Layout>
  )
}

export default Setting
