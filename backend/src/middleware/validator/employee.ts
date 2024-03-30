import {body,validationResult} from "express-validator"
import { Request,Response,NextFunction } from "express"
import employeeModel, { Employee } from "../../model/employee";

/**
 * this are the validation rules 
 * i did not do for delete and read because I did not know any validation rules to use there
 */

export const createValidator = [
    body('name')
        .not().isEmpty().withMessage("Employee name is required"), 
    body('email')
        .not().isEmpty().withMessage("Employee email is required")
        .isEmail().withMessage("Invalid email address")
        .custom(async value => {
            const employee: Employee | null = await employeeModel.findOne({email:value}); // we check db for a similar email 
            if(employee){ // an employee has a similar email 
                throw new Error("email already in use") 
            }
        }).withMessage("email already in use"),
    body('position')
        .not().isEmpty().withMessage("Employee [position] is required"),
    body('department')
        .not().isEmpty().withMessage("Employee department is required"),
    body('startDate')
        .not().isEmpty().withMessage("Employee start date is required"),
    customResponseMessage
]

export const updateValidator =[
    body('email')
        .not().isEmpty().withMessage("Employee email is required")
        .isEmail().withMessage("Invalid email address")
        .custom(async (value:string,{req}) => {
            if(value !== req.body.email){ //check for change in mail
                const employee: Employee | null = await employeeModel.findOne({email:value});
                if(employee){ // check if email is already in use
                    throw new Error("email already in use")
                } 
            }
        }).withMessage("email already in use")
        ,
    customResponseMessage
]

function customResponseMessage(req:Request,res:Response,next:NextFunction) {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        let errorMessage: String = errors.array()[0].msg; // return the first error from the array
        console.log(errorMessage);
        return res.status(400).json({
            success:false,
            message: errorMessage
        })
    }
    next()  // execute next function 
}

