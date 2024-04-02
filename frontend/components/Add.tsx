"use client";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

type Employee = {
    name: string;
    email: string;
    position: string;
    department: string;
    startDate: string;
};

const AddEmployee = ({ setEmployees, setIsAdding, getEmployees }: any) => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [position, setPosition] = React.useState("");
    const [department, setDepartment] = React.useState("");
    const [startDate, setStartDate] = React.useState("");

    const handleAdd = async (e: any) => {
        e.preventDefault();

        if (!name || !email || !position || !department || !startDate) {
            return toast.error("Please fill all fields");
        }

        const newEmployee = {
            name,
            email,
            position,
            department,
            startDate,
        };

        setEmployees.push(newEmployee);

        try {
            const url = "http://127.0.0.1:3000/api/employees/create"
            const response = await axios.post(url, newEmployee);
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }

        setEmployees(setEmployees);
        setIsAdding(false);
        getEmployees()

        toast.success("Employee added successfully", {
            duration: 3000,
            position: "top-right",
            icon: "👏",
        });
    };

    return (
        <div className="small-container">
            <Toaster />
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Position</label>
                <input
                    type="text"
                    placeholder="Position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                />
                <label>Department</label>
                <input
                    type="text"
                    placeholder="Department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />
                <label>Start Date</label>
                <input
                    type="date"
                    placeholder="Start Date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <button type="submit">Add Employee</button>

            </form>
        </div>
    );
};

export default AddEmployee