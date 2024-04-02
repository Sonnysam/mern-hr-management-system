import React from 'react'
import Image from 'next/image'
import man from "../public/man.png";
const DashNav = () => {
    return (
        <div>
            <nav
                className='flex justify-between items-center w-full px-4 sm:px-8'
            >
                <div>
                    <h3 className='text-white text-3xl font-bold p-4'>Dashboard</h3>
                </div>
                <ul
                    className='flex items-center space-x-4'
                >
                    <li className='text-white text-sm font-bold p-1'>admin@gmail.com</li>
                    <li>
                        <Image src={man} alt="logo" width={40} height={40} />
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default DashNav