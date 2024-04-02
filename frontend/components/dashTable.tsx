"use client";
import React, { useEffect } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
// import { Button } from "@/components/ui/button"
import data from "@/data/data";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { toUSVString } from "util";
import { url } from "inspector";

const DashTable = () => {
    // state for name, email, position, department, startdate
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [position, setPosition] = React.useState("");
    const [department, setDepartment] = React.useState("");
    const [startDate, setStartDate] = React.useState("");
    const [data, setDatas] = React.useState([]);

    const handleAdd = () => {
        toast.success("Employee added successfully", {
            duration: 3000,
            position: "top-right",
            icon: "👏",
        });
    };
    const handleEdit = () => {
        toast.success("Employee edited successfully", {
            duration: 3000,
            position: "top-right",
            icon: "👏",
        });
    };
    const handleDelete = () => {
        toast.success("Employee deleted successfully", {
            duration: 3000,
            position: "top-right",
            icon: "👏",
        });
    };
    const handleLogout = () => {
        toast.success("Logged out successfully", {
            duration: 3000,
            position: "top-right",
            icon: "🔐",
        });
    };

    const url = "http://127.0.0.1:4040/api/employees/read/all"
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url, {
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                        "Connection": "keep-alive"
                    }
                });

                if (response.data.success) {
                    toast.success(response.data.message, {
                        duration: 3000,
                        position: "top-right",
                        icon: '👏'
                    })
                    setDatas(response.data.employees);
                } else {
                    toast.error(response.data.message, {
                        duration: 3000,
                        position: "top-right",
                        icon: '👏'
                    })
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);




    return (
        <div className="container">
            <Toaster />
            <div className="flex justify-end p-4">
                {/* add employee button at end */}
                <button
                    className="bg-black text-white py-3 px-4 rounded-md font-medium mr-3 text-base"
                    onClick={handleLogout}
                >
                    Logout
                </button>
                <button
                    className="bg-white text-black py-3 px-4 rounded-md font-medium text-base"
                    onClick={handleAdd}
                >
                    Add Employee
                </button>


            </div>
            <Table>
                <TableCaption>
                    <h3 className="text-base font-semibold text-white">
                        Employees Info
                        <span className="text-base text-blue-500"> - Last 30 days</span>
                    </h3>
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] text-white text-base">
                            Name
                        </TableHead>
                        <TableHead className="font-medium text-white text-base">
                            Email
                        </TableHead>
                        <TableHead className="font-medium text-white text-base">
                            Position
                        </TableHead>
                        <TableHead className="text-right text-white text-base">
                            Department
                        </TableHead>
                        <TableHead className="text-right text-white text-base">
                            Start Date
                        </TableHead>
                        <TableHead className="text-right text-white text-base">
                            Actions
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((employee: any) => (
                        <TableRow key={employee._id}>
                            <TableCell className="font-medium text-white">
                                {employee.name}
                            </TableCell>
                            <TableCell className="font-medium text-white">
                                {employee.email}
                            </TableCell>
                            <TableCell className="font-medium text-white">
                                {employee.position}
                            </TableCell>
                            <TableCell className="font-medium text-white text-right">
                                {employee.department}
                            </TableCell>
                            <TableCell className="font-medium text-white text-right">
                                {employee.startDate}
                            </TableCell>
                            <TableCell className="font-medium text-white text-right">
                                <button
                                    onClick={handleEdit}
                                    className="bg-blue-500 text-white px-2 py-1 rounded-md"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className="bg-red-500 text-white px-2 py-1 rounded-md ml-2"
                                >
                                    Delete
                                </button>
                            </TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
        </div >
    );
};

export default DashTable;
