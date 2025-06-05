import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
const ConnectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_DB_URI}`,
    );
    console.log(`MongoDB connected!! ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(`error found ${error}/${DB_NAME}`);
    process.exit(1);
  }
};
export default ConnectDB;
//connectioninstance write here to find out about in which DB like development ,production,etc.
