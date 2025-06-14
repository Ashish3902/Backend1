import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { json } from "express";
const app = express();

app.use(
  cors({
    origin: process.env.CROS_ORIGIN,
    credentials: true,
  }),
);
app.use(express.json({ limit: "16kb" }));
app.use(
  express.urlencoded({
    extends: true,
    limit: "16kb",
  }),
);
app.use(express.static("public"));
app.use(cookieParser());
//here we can import routes.
import userRoutes from "./routes/user.routes.js";

//decleration area of rotuers
app.use("/api/v1/user", userRoutes); //means if you write this  url then it will hit to userroutes then call Router.so complete url is http//loaclhost:8000/user/api/v1/register

export { app };
