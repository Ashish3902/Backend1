import express from express;
import cookieParser from "cookie-parser";
import cors from "cors";
import { json } from "express";
const app = express();

app.use(cors({
    origin:process.env.CROS_ORIGIN,
    credentials:true  
}))
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({
    extends:true,
    limit:"16kb"
}))
app.use(express.static("public"));
app.use(express.cookieParser());


export {app} 