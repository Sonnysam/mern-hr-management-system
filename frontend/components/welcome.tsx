import React from 'react'

const Welcome = () => {
    return (
        <div
            className='flex items-center justify-center flex-col font-mono  text-black relative h-screen sm:h-96'
        >
            <h1 className='text-5xl font-semibold text-center'>Welcome to HR Admin Portal</h1>
            <p
                className='text-center mt-7 text-lg px-5 sm:px-0'
            >
                <a href="/about" className='bg-blue-500 text-white py-3 px-4 rounded-md hover:text-white'>Learn More</a> {" "} <a href="/login" className='bg-black text-white py-3 px-4 rounded-md hover:text-white'>Get Started</a>
            </p>
        </div>
    )
}

export default Welcome