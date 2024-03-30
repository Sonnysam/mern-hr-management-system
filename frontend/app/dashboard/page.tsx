import React from 'react'
import "../../styles/style.css"
import DashNav from '@/components/dashNav'
import DashCard from '@/components/dashCard'
import DashTable from '@/components/dashTable'

const Dashboard = () => {
    return (
        <div className='dashboard bg-slate-800'>
            <DashNav />
            <DashCard />
            <DashTable />
        </div>
    )
}

export default Dashboard