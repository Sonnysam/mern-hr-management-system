"use client";
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
// import { Button } from "@/components/ui/button"
// import data from '@/data/data'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';



const DashTable = () => {
    const [data,setDatas] = React.useState([])
    const handleAdd = () => {
        toast.success('Employee added successfully', {
            duration: 3000,
            position: "top-right",
            icon: '👏'
        });
    }
    const handleEdit = () => {
        toast.success('Employee edited successfully', {
            duration: 3000,
            position: "top-right",
            icon: '👏'
        });
    }
    const handleDelete = () => {
        toast.success('Employee deleted successfully', {
            duration: 3000,
            position: "top-right",
            icon: '👏'
        });
    }

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
        <div className='container'>
            <Toaster />
            <div
                className='flex justify-end p-4'
            >
                {/* add employee button at end */}
                <button
                    className='bg-white text-black py-3 px-4 rounded-md font-medium text-base'
                    onClick={handleAdd}
                >Add Employee</button>
            </div>
            <Table>
                <TableCaption>
                    <h3 className="text-base font-semibold text-white">Employees Info
                        <span className="text-base text-blue-500"> - Last 30 days</span>
                    </h3>
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] text-white text-base">Name</TableHead>
                        <TableHead className="font-medium text-white text-base">Email</TableHead>
                        <TableHead className="font-medium text-white text-base">Position</TableHead>
                        <TableHead className="text-right text-white text-base">Department</TableHead>
                        <TableHead className="text-right text-white text-base">Start Date</TableHead>
                        <TableHead className="text-right text-white text-base">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium text-white">{item.name}</TableCell>
                            <TableCell className="font-medium text-white">{item.email}</TableCell>
                            <TableCell className="font-medium text-white">{item.position}</TableCell>
                            <TableCell className="font-medium text-white text-right">{item.department}</TableCell>
                            <TableCell className="font-medium text-white text-right">{item.startDate}</TableCell>
                            <TableCell className="font-medium text-white text-right">
                                <button onClick={handleEdit} className="bg-blue-500 text-white px-2 py-1 rounded-md">Edit</button>
                                <button onClick={handleDelete} className="bg-red-500 text-white px-2 py-1 rounded-md ml-2">Delete</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                {/* <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Prev</TableCell>
                        <TableCell className="text-right">Next</TableCell>
                    </TableRow>
                </TableFooter> */}
            </Table>
        </div>
    )
}

export default DashTable