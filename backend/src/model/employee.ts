import { Schema,Document,model } from "mongoose";

export interface Employee extends Document{
    name:string;
    email:string;
    position:string;
    department:string;
    startDate:string;
}

// the structure of employee record in the database
const employeeSchema: Schema = new Schema({
    name: { 
        type : String , 
        required: true 
    }, // Name of the employee.
    email:{  
        type:String,  
        trim:true,  
    }, // Email of employee
    position:{
        type:String,
        required:true
    }, // Employee position
    department:{
        type:String,
        required:true
    }, //Employee's department
    startDate:{
        type:String,
        required:true
    } //employee's start date
},{timestamps:true})

const employeeModel = model<Employee>('employees',employeeSchema);
export default employeeModel;