import React from 'react'

const Welcome = () => {
    return (
        <div
            className='flex items-center justify-center flex-col font-mono  text-white relative min-h-screen sm:h-96'
        >
            <h1 className='text-6xl font-semibold text-center'>Welcome to HR Admin <span className='text-blue-600'>Portal</span></h1>
            <p
                className='text-center text-xl my-4 px-5 sm:px-0'
            >
                HR Admin Portal is a platform that helps you manage your employees, payroll, and more. <br />It is easy to use and helps you manage your business efficiently.
            </p>
            <p
                className='text-center mt-3 text-lg px-5 sm:px-0'
            >
                <a href="#" className='bg-white text-black py-3 px-4 rounded-md hover:text-black'>Learn More</a> {" "} <a href="/login" className='bg-black text-white py-3 px-4 rounded-md hover:text-white'>Get Started</a>
            </p>
        </div>
    )
}

export default Welcome