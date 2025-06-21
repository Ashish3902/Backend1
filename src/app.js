// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import { json } from "express";
// import userRoutes from "./routes/user.routes.js";

// const app = express();

// app.use(
//   cors({
//     origin: process.env.CROS_ORIGIN,
//     credentials: true,
//   }),
// );
// app.use(express.json({ limit: "16kb" }));
// app.use(
//   express.urlencoded({
//     extends: true,
//     limit: "16kb",
//   }),
// );
// app.use(express.static("public"));
// app.use(cookieParser());
// //here we can import routes.
// import userRoutes from "./routes/user.routes.js";

// //decleration area of rotuers
// app.use("/api/v1/user", userRoutes); //means if you write this  url then it will hit to userroutes then call Router.so complete url is http//loaclhost:8000/user/api/v1/register

// export { app };
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

// Routes
import userRoutes from "./routes/user.routes.js"; // ✅ make sure this path is correct

const app = express();

// Middlewares
app.use(
  cors({
    origin: process.env.CROS_ORIGIN || "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  }),
);

app.use(cookieParser());
app.use(express.static("public")); // Optional, for serving static files

// ✅ Mount all routes
app.use("/api/v1/user", userRoutes); // final URL = http://localhost:5000/api/v1/user/register

// ✅ 404 fallback route for debugging
app.all("*", (req, res) => {
  console.log("❌ Invalid route hit:", req.originalUrl);
  res.status(404).send(`Route not found: ${req.originalUrl}`);
});

export { app };
