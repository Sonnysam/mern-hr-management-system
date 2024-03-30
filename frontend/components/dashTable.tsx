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
import data from '@/data/data'

const DashTable = () => {
    return (
        <div className='container'>
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