import { v2 as cloudinary } from "cloudinary";
import fs from "node:fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SCERET, // Click 'View API Keys' above to copy your API secret
});

const uploadonclodinary = async (localpath) => {
  try {
    if (!localpath) return null; //here you can show some message like file could not find
    //upload file
    const response = await cloudinary.uploader.upload(localpath, {
      resource_type: "auto",
    });
    //file has been uploaded sucessfully .you can writre a message in console
    console.log("file has been uploaded on cloudinary", response.url);
    return response;
  } catch (error) {
    fs.unlinksync(localpath); // remove the locally saved temporaly file as the file upload operation got faild
    return null;
  }
};

export { uploadonclodinary };
