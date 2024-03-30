import React from 'react'
import "../../styles/style.css"
import DashNav from '@/components/dashNav'

const Dashboard = () => {
    return (
        <div className='dashboard bg-slate-800'>
            <DashNav />
            {/* <div className='text-white text-2xl font-bold p-4'>Dashboard</div> */}
        </div>
    )
}

export default Dashboard