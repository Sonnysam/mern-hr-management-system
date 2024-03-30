import {Request,Response,NextFunction} from "express"
const headers =(req:Request,res:Response,next:NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', "*"); //will change this later to be accessed  by our apps domain 
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); //for sending data in requests

    res.setHeader('x-powered-by', 'your custom value') //prevent leakage of server info
    res.setHeader('X-Content-Type-Options', 'nosniff') //prevents harkers from sniffing
    res.setHeader('X-Frame-Options', 'DENY'); // prevents contents being put in frames on other sites
    res.setHeader('Content-Security-Policy', "default-src 'self'"); //prevents cross site scripting
    res.setHeader('Strict-Transport-Security', 'max-age=31536000'); //use https for requests
    
    // const headers = res.getHeaders();
    // console.log(headers)
    next()
}

export default headers