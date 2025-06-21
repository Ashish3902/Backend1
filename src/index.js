import dotenv from "dotenv";
import { DB_NAME } from "./constant.js";
import ConnectDB from "./db/DB.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});
const PORT = process.env.PORT || 5000;
ConnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`app is runining at ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`app is not runing at this port ${PORT}`);
  });

//it a approch to dealing with DB in main.js file
// import mongoose from "mongoose";
// import { DB_NAME } from "./constant";
// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`);
//   } catch (error) {
//     console.log("error", error);
//     app.on("Error", (error) => {
//       console.log("error", error);
//       throw error;
//     });
//     throw error;
//   }
// })(
// app.listen(process.env.PORT, () => {
//   console.log(`app is listening at ${PORT}`);
// });
