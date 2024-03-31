"use client";
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { JSX } from 'react/jsx-runtime';

const DashCard = () => {
    const [data,setDatas] = React.useState([])
    React.useEffect(()=>{
        fetch('http://127.0.0.1:4040/api/employees/read/all',{
            method: 'GET',
            headers:{
                "Content-Type": "application/json;charset=utf-8",
                "Connection": "keep-alive"
            }
        }).then((res) => res.json())
        .then(response => {
            if(response.success){
                toast.success(response.message, {
                    duration: 3000,
                    position: "top-right",
                    icon: '👏'
                })
                setDatas(response.employees)
                console.log(data)
            }else{
                toast.error(response.message, {
                    duration: 3000,
                    position: "top-right",
                    icon: '👏'
                })
            }
        })
    },[])
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