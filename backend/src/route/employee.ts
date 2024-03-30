/**
 * we create the routes for the employees here
 */

import { Router } from "express";
import {
    Create,
    Read,
    Update,
    Delete,
} from "../controller/employee"

import {
    createValidator,
    updateValidator
} from '../middleware/validator/employee' 

const employeeRoute: Router = Router();

employeeRoute.post("/create",createValidator,Create);
employeeRoute.get("/read/all",Read);
employeeRoute.put("/update/:id",updateValidator,Update);
employeeRoute.delete("/delete/:id",Delete);

export default employeeRoute;