import express,{ Request,Response,Application } from "express";
import mongoose from "mongoose";
import 'dotenv/config'

import employeeRoute from "./route/employee";
import headers from "./middleware/headers";

const app: Application = express();


const port : string | undefined = process.env.PORT;
const mongo_url : string | undefined = process.env.MONGO_URL;


if (!mongo_url || !port) {
  console.error("MONGO_URL or port environment variable is not defined.");
  process.exit(1); // Exit the process if mongo_url is not defined
}

// connect to database
mongoose.connect(mongo_url)
const  connection=mongoose.connection;
connection.once("open",() => console.log("MongoDB connected"))
// handling errors
connection.on("error",(error) => {
  console.error(`Mongoose Error: ${error}`)
  throw new Error(`MongoDb error`)
});

app.use(express.json());
app.use(headers)
app.use("/api/employees",employeeRoute);


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
