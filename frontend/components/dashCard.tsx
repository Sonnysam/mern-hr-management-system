import data from '@/data/data'
import React from 'react'

const DashCard = () => {
    return (
        <div>
            {/* three cards displaying number of employees, number of departments, new applicants. Let it be responsive*/}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
                <div className='bg-green-400 p-4 rounded-lg'>
                    <h3 className='text-white text-xl font-bold'>Employees</h3>
                    {/* <p className='text-white text-4xl font-bold'>10</p> */}
                    <p className='text-white text-4xl font-bold'>{data.length}</p>
                </div>
                <div className='bg-indigo-400 p-4 rounded-lg'>
                    <h3 className='text-white text-xl font-bold'>Departments</h3>
                    <p className='text-white text-4xl font-bold'>7</p>
                </div>
                <div className='bg-orange-400 p-4 rounded-lg'>
                    <h3 className='text-white text-xl font-bold'>New Applicants</h3>
                    <p className='text-white text-4xl font-bold'>0</p>
                </div>
            </div>

        </div>
    )
}

export default DashCard