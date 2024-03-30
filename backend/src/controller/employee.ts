import employeeModel, { Employee } from "../model/employee";
import { Request, Response } from "express";

export const Create = async (req: Request, res: Response) => {
  // request from the frontend
  const { name, email, position, department, startDate }: Employee = req.body;
  // validation is done in `middleware/validator/employee.ts`
  try {
    // let create a new employee record
    const employee: Employee = await employeeModel.create({
      name: name,
      email: email,
      position: position,
      department: department,
      startDate: startDate,
    });
    // we return a success message to the frontend
    console.log(`Success Creating new Employee \n${employee}`);
    return res.status(201).json({
      success: true,
      message: "Success creating new employee",
      employee,
    });
  } catch (error) {
    console.log(`Server Error: ${error}`); // for development purposes
    return res.status(500).json({
      success: false,
      message: "Internal server error, please try again later", //this is a server error
    });
  }
};

export const Read = async (req: Request, res: Response) => {
  try {
    const employees: Employee[] | null = await employeeModel.find();
    if (employees.length === 0) {
      console.log("Employee record empty");
      return res.status(200).json({
        success: false,
        message: "Employees record is empty",
      });
    }
    console.log(`Success loading employee records \n${employees}`);
    return res.status(200).json({
      success: true,
      message: "success loading employees data",
      employees,
    });
  } catch (error) {
    console.log(`Server Error: ${error}`); // for development purposes
    return res.status(500).json({
      success: false,
      message: "Internal server error, please try again later", //this is a server error
    });
  }
};

export const Update = async (req: Request, res: Response) => {
  // request from the frontend
  const { name, email, position, department, startDate }: Employee = req.body;
  const id = req.params.id;
  try {
    const employee: Employee | null = await employeeModel.findByIdAndUpdate(
      id,
      {
        name: name,
        email: email,
        position: position,
        department: department,
        startDate: startDate,
      }
    );
    console.log(employee);
  } catch (error) {
    console.log(`Server Error: ${error}`); // for development purposes
    return res.status(500).json({
      success: false,
      message: "Internal server error, please try again later", //this is a server error
    });
  }
};
export const Delete = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deletedEmployee: Employee | null =
      await employeeModel.findByIdAndDelete(id);
    console.log(`Success deleting employee record \n${deletedEmployee}`);
    return res.status(200).json({
      success: true,
      message: "Success deleting employee record",
      deletedEmployee,
    });
  } catch (error) {
    console.log(`Server Error: ${error}`); // for development purposes
    return res.status(500).json({
      success: false,
      message: "Internal server error, please try again later", //this is a server error
    });
  }
};
